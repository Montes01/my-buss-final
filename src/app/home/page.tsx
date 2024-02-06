
import { PRINCIPAL_MESSAGE } from "@/lib/constants/constants";
import "./_home.scss";
export default function Home() {


  return (
    <section className="home-content">
      <p className="principal-message">{PRINCIPAL_MESSAGE}</p>

    </section>
  )
}