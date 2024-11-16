import { FC, Suspense } from "react";
import AuthForm from "../../components/AuthForm";

const auth: FC = () => {
    
  return (
    <main className="mt-10 flex lg:justify-between justify-center lg:w-5/6 lg:my-10 m-auto w-[90%] lg:gap-10">
      <div className="bg-CBE4E8 w-2/5 lg:w-3/5 lg:block hidden">
        <img src="static/images/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="flex flex-col gap-14 w-full lg:w-2/5 items-center [&>*]:w-full">
        <div className="flex flex-col gap-4">
          {" "}
          <h1 className="text-4xl">Create An Account</h1>
          <p className="text-xl">Enter your details below</p>
        </div>
        <Suspense fallback={<p>Loading Form</p>}>
          <AuthForm isLogin={true} />
        </Suspense>
      </div>
    </main>
  );
};

export default auth;
