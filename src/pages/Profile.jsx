import logo from ".././assets/logo.png";
import back from ".././assets/Back.png";
import profilepic from ".././assets/ProfilePic.png";
import { ProfileInputBox } from "../components/ProfileInputBox";
import { ProfileInputBoxBig } from "../components/ProfileInputBoxBig";

export function Profile(){
    return <div className="bg-background h-screen w-screen pt-4">
        <div className="flex flex-wrap">
            <div className="w-5/6">
            <img className="h-[90px] ml-12 pt-4 justify-start" src={logo}/>
            </div>
            <img className="h-[60px] ml-4 mt-4 pt-4" src={back}/>
        </div>
        <div className="flex">
            <div className="flex w-2/3 m-14 justify-center items-center flex-col">
                <div className="flex">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            Name
                        </p>
                    </div>
                    <div className="flex items-center ml-12">
                        <ProfileInputBox/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            College
                        </p>
                    </div>
                    <div className="flex items-center ml-8">
                        <ProfileInputBox/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            Branch
                        </p>
                    </div>
                    <div className="flex items-center ml-8">
                        <ProfileInputBox/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            Contact
                        </p>
                    </div>
                    <div className="flex items-center ml-8">
                        <ProfileInputBox/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            Club Roles
                        </p>
                    </div>
                    <div className="flex items-center">
                        <ProfileInputBoxBig/>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex items-center">
                        <p className="text-text text-xl">
                            Projects
                        </p>
                    </div>
                    <div className="flex items-center ml-4">
                        <ProfileInputBoxBig/>
                    </div>
                </div>
            </div>
            <div className="justify-start">
                <img className="h-[150px] mt-20 " src={profilepic}/>
            </div>
        </div>
    </div>
}