export function EventDateInput({ label, placeholder, onChange,value}) {
  return (
    <div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-40 h-12 rounded-2xl border-slate-200 bg-inputbox2 placeholder:pl-8 placeholder:text-white"
        value={value}
      />
      </div>
      
    </div>
  );
}
