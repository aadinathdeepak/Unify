export function Button({ label,onClick }) {
    return (
      <div className="pb-2 pt-4 rounded-3xl">
        <button
          type="button"
          onClick={onClick}
          className="text-white bg-background hover:bg-black font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 w-full focus:outline-none focus:ring-1 focus:ring-slate-900"
        >
          {label}
        </button>
      </div>
    );
  }