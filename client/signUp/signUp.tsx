'use client'
import { useState } from "react"

export default function SignUp() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
    <div className=" flex justify-center">
      <button className=" bg-blue-400" onClick={() => setIsSignUpOpen(prev => !prev)}>Sign up</button>
      {
        isSignUpOpen && (
          <div onClick={() => setIsSignUpOpen(prev => !prev)} className=" fixed bg-white rounded-2xl inset-0 flex w-full h-screen justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="w-1/4 p-1.5 rounded-2xl flex flex-col bg-green-200">
              <label>Name: </label>
              <input type="text" className="border border-amber-100 rounded-xl bg-green-100" />
              <label>Gender: </label>
              <input type="text" className="border border-amber-100 rounded-xl bg-green-100" />
              <label>email: </label>
              <input type="text" className="border border-amber-100 rounded-xl bg-green-100" />
              <label>Password: </label>
              <input type="text" className="border border-amber-100 rounded-xl bg-green-100" />
              <label>Confirm Password: </label>
              <input type="text" className="border border-amber-100 rounded-xl bg-green-100" />
            </div>
          </div>
        )
      }
    </div>
  )
}