import { ToggleBar } from "../components/ToggleBar";
import {DirectMsg} from "../components/DirectMsg"
export function Home() {
  
  return (
    <div className="h-full bg-background flex">
        <DirectMsg/>
        <div className="flex justify-center">
        <ToggleBar/>
        </div>
     
    </div>
  );
}