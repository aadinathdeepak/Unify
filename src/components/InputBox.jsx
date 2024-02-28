export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-md font-medium py-2 px-8">{label}</div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-10/12 h-11 px-2 py-1 rounded-2xl border-slate-200 bg-inputbox"
      />
      </div>
      
    </div>
  );
}
