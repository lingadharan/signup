import Link from "next/link";


export default function Home() {
  return (
    <div className="h-[calc(100vh_-_0.5vh)] flex justify-center items-center m-[0.25vh] rounded-2xl bg-radial-[at_25%_25%] bg-blue-300 from-sky to-sky-900 to-75%">
      <div className="flex flex-col justify-center">
        <p>Welcome to the signup testing page!!!</p>
        <p className="flex justify-center">Let's start</p>
        <div className="flex justify-between px-15 mt-5">
          <Link href={"/signup"}>
            <button className="p-2 text-black-700 rounded-2xl bg-gradient-to-l from-indigo-800 via-purple-800 to-pink-800 hover:cursor-pointer hover:underline">
              Sign Up
            </button>
          </Link>
          <span className="p-2 rounded-2xl text-4xl"> / </span>
          <button className=" p-2 rounded-2xl bg-gradient-to-r from-pink-800 via-purple-800 to-indigo-800 hover:cursor-pointer hover:underline">Log In</button>
        </div>
      </div>
    </div>
  );
}
