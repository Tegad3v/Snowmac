function FormSelect({ label, options }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold">
        {label}
        <span className="text-brandGold">*</span>
      </label>

      <select
        defaultValue={options[0]}
        className="
          w-full
          h-10
          rounded-lg
          border
          border-border
          bg-white
          px-3
          text-[12px]
          text-black/60
          outline-none
          transition-colors
          focus:border-brandGold
        "
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
