import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Button from "../components/Button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      projectType: "",
      projectDetails: "",
    },
  });

  const projectType = watch("projectType");

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template ID
        {
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          projectType: data.projectType,
          projectDetails: data.projectDetails,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );

      toast.success("Inquiry sent! We'll be in touch soon.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Heading */}
      <div className="flex flex-col gap-1 md:gap-6">
        <h3 className="font-cinzel font-bold text-[22px] sm:text-[24px] leading-7">
          TELL US ABOUT YOUR PROJECT
        </h3>
        <p className="text-[12px] sm:text-[13px] text-black/55 leading-5">
          Share A Few Details With Us And Our Team Will Get In Touch To Discuss
          Your Project.
        </p>
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormInput
          label="Full Name"
          type="text"
          placeholder="Your Full Name"
          error={errors.fullName}
          {...register("fullName", { required: "Full name is required" })}
        />

        <FormInput
          label="Phone"
          type="tel"
          placeholder="+234 XXX XXX XXXX"
          error={errors.phone}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9+\-\s()]{7,}$/,
              message: "Enter a valid phone number",
            },
          })}
        />
      </div>

      {/* Email + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormInput
          label="Email"
          type="email"
          placeholder="letusbuild@gmail.com"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />

        <FormSelect
          label="Project Type"
          options={["Residential", "Commercial", "Institutional", "Others…"]}
          error={errors.projectType}
          {...register("projectType", {
            required: "Please select a project type",
          })}
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-semibold">
          Project Details<span className="text-brandGold">*</span>
        </label>
        <textarea
          rows="5"
          placeholder={
            projectType?.toLowerCase() === "others…"
              ? "Please specify the project type, location, and briefly tell us what you'd like to achieve..."
              : "Tell us briefly about your project, location and what you'd like to achieve..."
          }
          className="
            w-full resize-none rounded-lg border border-border bg-white
            px-3 py-3 text-[12px] outline-none transition-colors
            focus:border-brandGold
          "
          {...register("projectDetails", {
            required: "Please tell us a bit about your project",
          })}
        />
        {errors.projectDetails && (
          <p className="text-[10px] text-red-500">
            {errors.projectDetails.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        isSending={isSending}
        htmlType="submit"
        disabled={isSending}
        className={"md:w-full"}
      >
        {isSending ? "Sending" : "Send Inquiry"}
      </Button>

      <p className="text-[9px] text-center text-black/40">
        We'll use your information only to respond to your inquiry.
      </p>
    </form>
  );
}

export default ContactForm;
