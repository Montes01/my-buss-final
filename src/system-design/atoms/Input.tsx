import { inputTypes } from "@/lib/constants/declarations"
interface Props {
  className?: string
  label?: string
  after?: boolean
  type?: keyof typeof inputTypes
  name?: string
  required?: boolean
}
export default function Input({ label, after, type, name, className, required }: Props) {
  return (
    <label className="input-wrapper">
      {!after && label}
      <input name={name} required={required ?? false} className={"input " + className} type={type ?? "text"} />
      {after && label}
    </label>
  )
}