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
  placeholder?: string
  pattern?: string
}
export default function Input({ pattern, placeholder, label, after, type, name, className, required, defaultValue, readonly }: Props) {
  return (
    <label className="input-wrapper">
      {!after && <>{label}{required ? " *" : ""}</>}
      <input pattern={pattern} readOnly={readonly} placeholder={placeholder} defaultValue={defaultValue} name={name} required={required ?? false} className={"input " + className} type={type ?? "text"} />
      {after && <>{label}{required ? " *" : ""}</>}
    </label>
  )
}