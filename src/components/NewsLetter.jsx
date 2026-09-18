import MotionElement from "../components/MotionElement";

function NewsLetter() {
  return (
    <>
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

          <form className="flex w-full">
            <input
              type="email"
              placeholder="Your email"
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
                  "
            />

            <button
              type="submit"
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
                  "
            >
              Join
            </button>
          </form>
        </div>
      </MotionElement>
    </>
  );
}

export default NewsLetter;
