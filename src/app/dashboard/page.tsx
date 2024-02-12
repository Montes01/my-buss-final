'use client'
import useStore from "@/lib/context/context"
export default function dashboard() {
    const user = useStore(state => state.user)

    return (
        <>
            Bienvenido  {user.nombre}
        </>
    )
}