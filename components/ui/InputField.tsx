"use client";

export const InputField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
        placeholder={label}
      />
    </div>
  );
};
