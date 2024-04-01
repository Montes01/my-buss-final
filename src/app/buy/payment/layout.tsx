"use client"
import "./payment.scss"
import { STRIPE_API_KEY } from "@/lib/constants/constants"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Usuario } from "@/lib/constants/declarations"
import { isUserAuthenticated } from "@/lib/constants/utils"
import UserActions from "@/lib/context/hooks/userActions"
import { redirect } from "next/navigation"
import { useEffect } from "react"
interface props {
    children: React.ReactNode
}
const stripePromise = loadStripe(STRIPE_API_KEY)

export default function PaymentLayout({ children }: props) {
    const { UseLogin } = UserActions()
    useEffect(() => {
        isUserAuthenticated((user: Usuario | null) => {
            if (!user) {
                redirect("/home/join/login")
            } else {
                UseLogin(user)
            }

        })
    }, [])
    return (
        <Elements stripe={stripePromise}>
            <main className='ticket-payment-main'>
                {children}

            </main>
        </Elements>

    )

} 