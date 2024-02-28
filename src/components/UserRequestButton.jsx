export function UserRequestButtton({ label,onClick }) {
    return (
      <div className="pb-2 pt-4 rounded-3xl">
        <button
          type="button"
          onClick={onClick}
          className="text-white bg-secondary hover:bg-black font-medium rounded-2xl text-md px-5 py-2 w-5/6 ml-5 focus:outline-none focus:ring-1 focus:ring-slate-900">
          {label}
        </button>
      </div>
    );
  }