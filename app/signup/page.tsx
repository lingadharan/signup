

export default function SignUp() {
  return (
    <div className="h-[calc(100vh_-_0.5vh)] rounded-xl m-[0.25vh] flex items-center justify-center bg-linear-to-b from-sky-600 via-sky-700 to-sky-300">
      <div className="w-[30%] p-4 shadow-2xl rounded-2xl border-sky-500 flex flex-col gap-2 bg-sky-500 border-2">
        <label>Email</label>
        <input type="email"  className="border border-blue-950 w-2/3 p-0.5 focus:border-blue-950 focus:outline-2 focus:outline-blue-950"></input>
        <span className=" underline">Want to sign in with phone number?</span>
        <div className="flex flex-col justify-center mt-3.5">
          <button>Sign Up</button>
          <span className=" text-center">or</span>
          <button>Continue with google</button>
        </div>
      </div>
    </div>
  )
}