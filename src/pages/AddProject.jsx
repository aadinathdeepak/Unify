import logo from ".././assets/logo.png";
import cancel from ".././assets/cancel.png";
import { ForumInputBox } from "../components/ForumInputBox";
import { ForumInputBoxBig } from "../components/ForumInputBoxBig";

export function AddProject(){
    return <div className="bg-background h-full w-screen pt-4">
        <div className="flex flex-wrap">
            <div className="w-5/6">
            <img className="h-[90px] ml-12 pt-4 justify-start" src={logo}/>
            </div>
            <img className="h-[50px] ml-4 mt-6 pt-4" src={cancel}/>
        </div>
        <div className="flex flex-wrap flex-col m-4 items-center">
            <h1 className="flex flex-col text-text items-center text-[30px] font-bold">
                Add a Project
            </h1>
            <p className="text-text mt-6">
                Project name
            </p>
            <ForumInputBox/>
            <p className="text-text mt-2">
                Description
            </p>
            <ForumInputBoxBig/>
            <p className="text-text mt-2">
                Requirements
            </p>
            <ForumInputBoxBig/>
            <div>
                <button className="bg-black text-text mt-4 p-4 px-6 font-extrabold rounded-[23px]">
                    Submit
                </button>
            </div>
        </div>
    </div>
}