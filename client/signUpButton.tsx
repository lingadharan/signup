import Link from "next/link"

export default function SignUpButton() {
  return (
    <Link href={"/signup"}>
      <button className="p-2 text-black-700 rounded-2xl bg-gradient-to-l from-indigo-800 via-purple-800 to-pink-800">
        Sign Up
      </button>
    </Link>
  )
}