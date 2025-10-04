import SignUp from "@/client/signUp/signUp";

export default function Home() {
  return (
    <div className="relative h-screen flex justify-center items-center m-[0.5%] rounded-2xl bg-amber-50">
      <div className="flex flex-col justify-center">
        <p>Hey Welcome to the site!!!</p>
        <button>Login</button>
        <SignUp />
      </div>
    </div>
  );
}
