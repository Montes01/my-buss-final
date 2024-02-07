'use client'
interface Props {
  content: string
  disabled?: boolean
  className?: string
  submit?: boolean
  action?: () => void
}

export default function Button({ content, disabled, className, submit, action }: Props) {

  return (
    <button onClick={action} type={submit ? "submit" : "button"} className={"button " + className} disabled={disabled}>
      {content}
    </button>
  )
}