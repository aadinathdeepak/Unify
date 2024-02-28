export function LoginButton({ label,onClick }) {
    return (
      <div className="pb-2 pt-4 rounded-3xl">
        <button
          type="button"
          onClick={onClick}
          className="text-white bg-inputbox hover:bg-black font-medium rounded-2xl text-md px-5 py-2 me-2 mb-2 w-24 focus:outline-none focus:ring-1 focus:ring-slate-900 mx-32">
          {label}
        </button>
      </div>
    );
  }