import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import MotionElement from "../components/MotionElement";
import { LuLoaderCircle } from "react-icons/lu";

function NewsLetter() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Subscription failed");
      }

      toast.success("Subscribed! Check your inbox.");
      reset();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MotionElement
      axis="y"
      distance={40}
      delay={0.4}
      duration={0.7}
      className="sm:col-span-2 lg:col-span-4 lg:absolute lg:right-30 lg:top-30 lg:w-60"
    >
      <div className="flex flex-col gap-5">
        <h3 className="font-inter text-[11px] font-semibold tracking-[10%] uppercase text-brandGold">
          STAY TUNED
        </h3>

        <p className="text-white/60 text-sm leading-6">
          Receive updates on projects, construction tips and company news.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-1"
        >
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your email"
              disabled={isSending}
              className="
                min-w-0
                flex-1
                h-11
                px-4
                rounded-l-xl
                border
                border-white/15
                bg-transparent
                outline-none
                text-sm
                text-white
                placeholder:text-white/50
                focus:border-brandGold
                disabled:opacity-60
              "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
            />

            <button
              type="submit"
              disabled={isSending}
              className="
                h-11
                px-6
                rounded-r-xl
                bg-brandGold
                text-black
                font-semibold
                text-sm
                hover:bg-brandGoldLight
                transition-colors
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isSending ? (
                <LuLoaderCircle className="animate-spin text-sm mx-auto" />
              ) : (
                "Join"
              )}
            </button>
          </div>

          {/* Inline validation error */}
          {errors.email && (
            <p className="text-[11px] text-red-400 mt-1">
              {errors.email.message}
            </p>
          )}
        </form>
      </div>
    </MotionElement>
  );
}

export default NewsLetter;
