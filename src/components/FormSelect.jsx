function FormSelect({ label, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold">
        {label}
        <span className="text-brandGold">*</span>
      </label>

      <select
        value={value}
        onChange={onChange}
        className="
          w-full
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
      >
        <option value="" disabled>
          Select project type
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
