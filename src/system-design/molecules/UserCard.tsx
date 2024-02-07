import { type UserCard as Props } from "@/lib/constants/declarations";
import Image from "next/image";
export default function UserCard({ description, image, name, role }: Props) {
  return (
    <article className="user">
      <section className="user-info">
        <h2>{name}</h2>
        <strong>{role}</strong>
      </section>
      <p>{description}</p>
      <Image
        className="user-image"
        src={`/Images/${image}.png`}
        alt={`image about ${name}`}
        width={500}
        height={500}
      />
    </article>
  );
}