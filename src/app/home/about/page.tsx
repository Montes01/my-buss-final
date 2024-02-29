import { users } from "@/lib/constants/constants";
import Header from "../shared/Header";
import UserCard from "@/system-design/molecules/UserCard";
import "./_about.scss";
export default function About() {
  return (
    <>
      <main className="main-about">
        <section className="main-info-section">
          <h2 className="about-title">Sobre nosotros</h2>
          <p className="about-text">
            My buss es una empresa que te brindara la mejor información de los
            buses en armenia
          </p>
        </section>
        <h3 className="our-team-text">Our Team</h3>
        <section className="integrants">
          {users.map(({ name, description, image, role }) => (
            <UserCard
              key={name}
              description={description}
              name={name}
              image={image}
              role={role}
            />
          ))}
        </section>
      </main>
    </>
  );
}