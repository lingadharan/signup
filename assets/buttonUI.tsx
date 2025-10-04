import { ButtonUIInterface } from "@/interfaces/buttonUIInterface";


export default function ButtonUI(props: ButtonUIInterface) {
  return (
    <button onClick={() => props.onClick()} className={props.className}>{props.innerText}</button>
  )
}