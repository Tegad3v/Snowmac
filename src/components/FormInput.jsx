function FormInput({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold">
        {label}
        <span className="text-brandGold">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-10
          rounded-lg
          border
          border-border
          bg-white
          px-3
          text-[12px]
          outline-none
          transition-colors
          focus:border-brandGold
        "
      />
    </div>
  );
}

export default FormInput;
