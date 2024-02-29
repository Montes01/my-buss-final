import NavButton from "@/system-design/atoms/NavButton";
interface Props {
    isLogin: boolean
}
export default function ChangeJoin({ isLogin }: Props) {
    return (
        <section className="change-join-type">
            <h2>BIENVENIDO <br /> {isLogin && "Nuevamente"}</h2>
            <p>{isLogin
                ? "Si aun no tienes una cuenta, por favor registrate aqui!"
                : "Si ya tienes una cuenta, ingresa aqui "}</p>
            <NavButton className="button change-join-button"
                to={isLogin ? "/home/join/register" : "/home/join/login"}
                content={isLogin ? "Registrate" : "Ingresa"} />
        </section>
    )
}