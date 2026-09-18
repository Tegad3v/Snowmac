// netlify/functions/subscribe.js

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 1. Get the email from the request body sent by your React form
    const { email } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    // 2. Get credentials from environment variables
    const API_KEY = process.env.EMAILOCTOPUS_API_KEY;
    const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error("Missing EmailOctopus environment variables.");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error." }),
      };
    }

    // 3. Make the request to EmailOctopus V2 API
    const response = await fetch(
      `https://api.emailoctopus.com/lists/${LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`, // V2 uses Bearer token in header
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed", // V2 uses lowercase for status
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      // Log the actual error for debugging
      console.error("EmailOctopus API Error:", data);

      // Extract a readable error message from the V2 RFC 7807 response
      const errorMessage = data.detail || "Failed to subscribe";

      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorMessage }),
      };
    }

    // Success!
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Subscribed successfully!" }),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
