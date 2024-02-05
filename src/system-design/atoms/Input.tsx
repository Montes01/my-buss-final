import { inputTypes } from "@/lib/constants/constants"
interface Props {
  className?: string
  label: string
  after?: boolean
  type?: keyof typeof inputTypes
}
export default function Input({ label, after, type }: Props) {
  return (
    <label className="input-wrapper">
      {!after && label}
      <input className="input" type={type ?? "text"} />
      {after && label}
    </label>
  )
}