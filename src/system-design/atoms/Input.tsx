import { inputTypes } from "@/lib/constants/constants"
interface Props {
  className?: string
  label?: string
  after?: boolean
  type?: keyof typeof inputTypes
  name?: string
}
export default function Input({ label, after, type, name, className }: Props) {
  return (
    <label className="input-wrapper">
      {!after && label}
      <input name={name} className={"input " + className} type={type ?? "text"} />
      {after && label}
    </label>
  )
}