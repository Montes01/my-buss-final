import Button from "@/system-design/atoms/Button";
import "./_home.scss";
export default function Home() {


  return (
    <>
      <header className="home-header">
        <Button content="Inicio" />
        <Button content="Ingresa" />
        <Button content="Registro" />
        <Button content="Nosotros" />
      </header>
    </>
  )
}