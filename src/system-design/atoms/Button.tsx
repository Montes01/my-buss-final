'use client'
import { TablerIconsProps } from "@tabler/icons-react" // Import the missing TablerIconsProps interface

interface Props {
  content: string | ((props: TablerIconsProps) => JSX.Element) // Add parentheses around the function type
  disabled?: boolean
  className?: string
  submit?: boolean
  action?: () => void
}

export default function Button({ content: Content, disabled, className, submit, action }: Props) {

  return (
    <button onClick={action} type={submit ? "submit" : "button"} className={"button " + className} disabled={disabled}>
      {typeof Content === "string" ? Content : <Content color="white"/>}
    </button>
  )
}