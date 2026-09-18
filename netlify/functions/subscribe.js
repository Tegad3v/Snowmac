// netlify/functions/subscribe.js

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // 1. Get the email from the request body
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

    // 3. Make the request to EmailOctopus
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email_address: email,
          status: "SUBSCRIBED", // Use "PENDING" if you have double opt-in enabled
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      // EmailOctopus returns errors in a different shape
      console.error("EmailOctopus API Error:", data);
      // The error message is often in data.error.message
      const errorMessage = data.error?.message || "Failed to subscribe";
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
