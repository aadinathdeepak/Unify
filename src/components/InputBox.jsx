export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="flex justify-center ">
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-10/12 h-11 px-4 py-1 rounded-2xl border-slate-200 bg-inputbox my-[15px]"
      />
      </div>
      
    </div>
  );
}
