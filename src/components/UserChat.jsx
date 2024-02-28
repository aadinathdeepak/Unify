import user from ".././assets/user.png";

export function UserChat(){
    return <div className= "p-3 flex flex-wrap ml-2 mt-2">
        <img className="" src={user}/>
        <p className="text-text text-2xl font-light ml-4">
            Friend 1
        </p>
    </div>
}
