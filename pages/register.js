import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/router";

function register() {
  const router = useRouter();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      // console.log(user,token)
      const uid = result.user.uid;
      router.push("/home");
      console.log(uid);
    });
  };
  return (
    <div className="flex flex-col justify-center items-center px-4 py-20 text-white rounded-3xl bg-zinc-700">
      <div className="text-4xl font-bold tracking-tighter leading-10 text-center text-zinc-100">
        Get Started
      </div>
      <div className="flex flex-col justify-center p-8 mt-8 max-w-full text-sm font-semibold leading-5 bg-gray-800 rounded-2xl w-[480px] max-md:px-5">
        <div className="flex justify-center items-center px-2 py-4 w-full text-center rounded border border-solid bg-zinc-700 border-slate-600 text-zinc-100 max-md:px-5">
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec98ea0815adb37f2f83b161dc58641410c425ff878c6c78fb51342207ef5768?"
              className="shrink-0 w-6 aspect-square"
            />
            <div onClick={() => googleSignIn()}>Join with Google</div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center mt-4 text-xs leading-5 text-center whitespace-nowrap">
          <div className="flex-1 shrink-0 self-stretch my-auto h-px bg-slate-600" />
          <div className="self-stretch">or</div>
          <div className="flex-1 shrink-0 self-stretch my-auto h-px bg-slate-600" />
        </div>
        <div className="mt-4 text-zinc-100">Email Address</div>
        <div className="justify-center items-start p-2 mt-1 bg-gray-800 rounded border border-solid border-slate-600 text-ellipsis max-md:pr-5">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 text-zinc-100 bg-transparent border-none outline-none text-sm leading-5 max-md:text-xs"
          />
        </div>
        <div className="justify-center px-6 py-4 mt-2 text-center bg-teal-600 rounded max-md:px-5">
          Join with Email
        </div>
      </div>
      <div className="self-stretch mt-8 text-xs leading-5 text-center max-md:max-w-full">
        By continuing you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
}

export default register;
