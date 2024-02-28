import user from ".././assets/user.png";

export function UserText({label,msg}){
    return <div>
        <div className="flex flex-wrap">
            <img className='size-14 ml-5 mt-3' src={user}/>
            <div className="flex flex-col ml-6 text-xl mb-10">
                <h1 className="pb-3">{label}</h1>
                <p>{msg}</p>
            </div>
        </div>
    </div>
}