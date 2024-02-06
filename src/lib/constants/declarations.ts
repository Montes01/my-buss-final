export interface ServiceCard {
  image: string
  title: string
  description: string
  href: string
}
export enum inputTypes {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
  radio = "radio"
}