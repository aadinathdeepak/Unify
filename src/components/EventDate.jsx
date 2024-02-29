import { EventDateInput } from "./EventDateInput";

export function EventDate(){
    return <div>
        <p className="text-text mt-2 flex justify-center">Event Date</p>
        <EventDateInput placeholder={'DD/MM/YYYY'}/>
    </div>
}