import { Button } from "./Button";

export function Event({ title, description, URL }) {
    return (
        <div className="rounded-lg p-6 bg-white shadow-lg mb-4 max-h-72 overflow-y-auto overflow-x-hidden">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-lg mb-4">{description}</p>
            <Button
                label="Register"
                onClick={() => {
                    window.location.href = URL;
                }}
            />
        </div>
    );
}
