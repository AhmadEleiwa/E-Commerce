"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { ChangeEvent, FC, useState } from "react";
interface UserDataType {
  name: string;
  emailOrPhone: string;
  password: string;
}
interface props{
    isLogin?:boolean
}
const AuthForm: FC<props> = (isLogin) => {
  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    emailOrPhone: "",
    password: "",
  });
  const authDataHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    setUserData({...userData, [name]: event.currentTarget.value });
  };

  const loginHandler = () =>{

  }
  const signuphandler = () =>{

  }
  return (
    <>
      {!isLogin&&<Input
        onChange={authDataHandler}
        value={userData.name}
        name="name"
        type="text"
        placeholder="Name"
      />}
      <Input
        onChange={authDataHandler}
        value={userData.emailOrPhone}
        name="emailOrPhone"
        type="text"
        placeholder="Email Or Phone Number"
      />
      <Input
        onChange={authDataHandler}
        value={userData.password}
        name="password"
        type="password"
        placeholder="Password"
      />

      {isLogin? 
      <div className="flex justify-between items-center">
        <Button onClick={loginHandler} className="w-2/5">Create Account</Button>
        <a href="" className="text-button2">Forget Your Password?</a>
      </div>
      :<div className="flex flex-col w-full gap-4">
        <Button onClick={signuphandler} className="w-full">Create Account</Button>
        <Button className="bg-white !text-black w-full hover:bg-white border">
          {" "}
          Sign up with Google
        </Button>
      </div>}
    </>
  );
};

export default AuthForm;
