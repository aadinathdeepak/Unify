import logo from ".././assets/logo.png";
import cancel from ".././assets/cancel.png";
import { ForumInputBox } from "../components/ForumInputBox";
import { ForumInputBoxBig } from "../components/ForumInputBoxBig";
import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65dedcff9fc1f5555b01");

const database = new Databases(client);

export function NewForumPost(){
    return <div className="bg-background h-screen w-screen pt-4">
        <div className="flex flex-wrap">
            <div className="w-5/6">
            <img className="h-[90px] ml-12 pt-4 justify-start" src={logo}/>
            </div>
            <img className="h-[50px] ml-4 mt-6 pt-4" src={cancel}/>
        </div>
        <div className="flex flex-wrap flex-col m-4 items-center">
            <h1 className="flex flex-col text-text items-center text-[30px] font-bold">
                Ask a Doubt
            </h1>
            <p className="text-text mt-10">
                Type in your doubt
            </p>
            <ForumInputBox/>
            <p className="text-text mt-2">
                Elaborate your doubt (optional)
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