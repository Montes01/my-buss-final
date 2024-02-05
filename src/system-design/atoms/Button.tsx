interface Props {
  content: string
  disabled?: boolean
}

export default function Button({ content, disabled }: Props) {

  return (
    <button className="button" disabled={disabled}>
      {content}
    </button>
  )
}