export function ProfileInputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-80 h-10 ml-10 px-4 py-1 rounded-2xl border-slate-200 bg-inputbox2 my-[15px]"
      />
      </div>
      
    </div>
  );
}
