import { Button } from "./Button";

export function Event({ title, description, URL, date, imageURL }) {
  return (
    <div className="rounded-lg p-6 bg-white shadow-lg mb-4 max-h-72 overflow-y-auto overflow-x-hidden flex">
      <div className="flex-1 mr-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg mb-4">{description}</p>
        </div>
        <div className="flex justify-between">
          <Button
            label="Register"
            onClick={() => {
              window.location.href = URL;
            }}
          />
          <Button
            label={date}
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="flex items-end">
        <img src={imageURL} alt="" className="w-48 h-48 object-cover" />
      </div>
    </div>
  );
}
