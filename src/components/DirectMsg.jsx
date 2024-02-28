import logo from ".././assets/logo.png";
import mathlogo from ".././assets/PlusMath.png";
import { UserChat } from "./UserChat";

export function DirectMsg(){
    return <div className="text-4xl font-bold pt-6 mb-4 bg-secondary">
        <img className="h-[90px] my-5 ml-7 mb-8" src={logo}/>
            <div className="flex flex-wrap mx-6 mt-8 mb-4">
                <h1 className="text-text text-2xl font-medium ml-4 mt-2">
                    Direct Messages
                </h1>
                <img className="h-[22px] ml-4 mt-4" src={mathlogo}/>
            </div>
            <div className="bg-primary mx-6 h-[450px]">
                <UserChat/>
                <UserChat/>
                <UserChat/>
            </div>
    </div>
}