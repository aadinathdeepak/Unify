import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import logo from ".././assets/logo.png";
import { LoginButton } from "../components/LoginButton";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center bg-background text-text">
      <div className="flex flex-col justify-center ">
        <div className="flex items-center justify-center">
          <img className="h-[90px] my-5" src={logo}/>
        </div>
        <div className="bg-[#6D357A] rounded-3xl w-96 h-max p-3 px-4">
          <div className="text-center">
            <Heading label={"Login"} />
          </div>
          <InputBox label={"Email"} placeholder={"college mail"} />
          <InputBox label={"Password"} placeholder={"Password"} />
          <LoginButton label={"Login"} onClick={()=> navigate('/home')}/>
        </div>
      </div>
    </div>
  );
}
