interface Props {
  content: string
  disabled?: boolean
  className?: string
  submit?: boolean
}

export default function Button({ content, disabled, className, submit }: Props) {

  return (
    <button type={submit ? "submit" : "button"} className={"button " + className} disabled={disabled}>
      {content}
    </button>
  )
}