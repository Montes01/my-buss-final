interface Props {
  content: string
  disabled?: boolean
  className?: string
}

export default function Button({ content, disabled, className }: Props) {

  return (
    <button className={"button " + className} disabled={disabled}>
      {content}
    </button>
  )
}