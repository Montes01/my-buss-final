import { inputTypes } from "@/lib/constants/declarations"
interface Props {
  className?: string
  label?: string
  after?: boolean
  type?: keyof typeof inputTypes
  name?: string
  required?: boolean
  defaultValue?: string
  readonly?: boolean
}
export default function Input({ label, after, type, name, className, required, defaultValue, readonly }: Props) {
  return (
    <label className="input-wrapper">
      {!after && <>{label}{required ? " *" : ""}</>}
      <input readOnly={readonly} defaultValue={defaultValue} name={name} required={required ?? false} className={"input " + className} type={type ?? "text"} />
      {after && <>{label}{required ? " *" : ""}</>}
    </label>
  )
}