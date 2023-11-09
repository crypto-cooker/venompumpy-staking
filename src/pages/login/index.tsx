import Image from "next/image";
import CusInput from "../../components/ui/CusInput";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
   
  const [flag, setFlag] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [displayName, setdisplayName] = useState<string>("Login");
  const [password, setPassword] = useState<string>("");

  //     let navigate = useNavigate();
  //   const routeChange = () =>{
  //     let path = `newPath`;
  //     navigate(path);
  //   }
  return (
    <div className="bg-[#0B0B0F] bg-[url('/images/cloudback.svg')] bg-no-repeat bg-left-bottom h-[100vh]">
      <div className="ml-[10%] lg:ml-[50%] pt-[20vh] lg:pt-[20vh]">
        <div className="flex text-[36px] font-Montserrat font-[600] mb-[30px]">
          <Image
            src="./images/hostinglogo.svg"
            alt="logo"
            width={55}
            height={55}
            className=""
          />
          <h2 className="text-white">Crypto</h2>
          
        </div>
        <CusInput
          label="Email"
          type="email"
          content={email}
          setContent={setEmail}
        />
        <CusInput
          label="Password"
          type="password"
          content={password}
          setContent={setPassword}
        />
        <div className="min-[480px]:flex min-[480px]:justify-between w-[90%] lg:w-[75%] lg:max-w-[578px]">
          <div className="flex items-center max-[480px]:my-[10px]">
            {/* <input
              type="checkbox"
              className="h-[15px] w-[15px] mr-[15px] bg-[#16161E]"
              checked={flag}
              onClick={() => setFlag(!flag)}
            ></input> */}
            <span className="weight-[600] text-[14px]">
              Save Email and Password
            </span>
          </div>
          <Link
            className="weight-[600] text-[14px] cursor-pointer "
            href="/signup"
          >
            Don’t have an account?
          </Link>
        </div>

        <div className="max-[480px]:flex max-[480px]:justify-center w-[90%] lg:w-[75%] lg:max-w-[578px]">
          <Link 
            href="dashboard"
          >
            <Image
              src="./images/signin.svg"
              alt="logo"
              width={96}
              height={40}
              className="mt-[30px] cursor-pointer hover:hue-rotate-90 active:hue-rotate-180 "
              onClick={() => {}}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
