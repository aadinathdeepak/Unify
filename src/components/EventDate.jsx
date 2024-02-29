export function EventDate({ label, placeholder, onChange,value}) {
  return (
    <div>
      <p className="text-text mt-2 flex justify-center">Event Date</p>
      <div>
        <div className="flex justify-center ">
          <input
            type="text"
            onChange={onChange}
            placeholder={"DD/MM/YYYY"}
            className="w-40 h-12 rounded-2xl border-slate-200 bg-inputbox2 placeholder:pl-8 placeholder:text-white"
            value={value}
          />
        </div>
      </div>
    </div>
  );
}
