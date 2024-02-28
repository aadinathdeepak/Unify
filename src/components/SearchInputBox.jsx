export function SearchInputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-11/12 h-14 px-4 py-1 rounded-2xl border-slate-200 bg-inputbox2 text-white placeholder:text-text my-[15px] border-none"
      />
      </div>
      
    </div>
  );
}
