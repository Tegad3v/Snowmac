import { useState } from "react";
import Button from "../components/Button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function ContactForm() {
  const [projectType, setProjectType] = useState("");

  return (
    <form className="flex flex-col gap-4">
      {/* Form Heading */}
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
        <FormInput label="Full Name" type="text" placeholder="Your Full Name" />

        <FormInput label="Phone" type="tel" placeholder="+234 XXX XXX XXXX" />
      </div>

      {/* Email + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <FormInput
          label="Email"
          type="email"
          placeholder="letusbuild@gmail.com"
        />

        <FormSelect
          label="Project Type"
          options={["Residential", "Commercial", "Institutional", "Others…"]}
          value={projectType}
          onChange={(e) => setProjectType(e.target.value.toLowerCase())}
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
            projectType === "others…"
              ? "Please specify the project type, location, and briefly tell us what you'd like to achieve..."
              : "Tell us briefly about your project, location and what you'd like to achieve..."
          }
          className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-border
                  bg-white
                  px-3
                  py-3
                  text-[12px]
                  outline-none
                  transition-colors
                  focus:border-brandGold
                "
        />
      </div>

      {/* Submit */}
      <Button link="#contact" className={"md:w-full"}>
        Send Inquiry
      </Button>

      <p className="text-[9px] text-center text-black/40">
        We’ll use your information only to respond to your inquiry.
      </p>
    </form>
  );
}

export default ContactForm;
