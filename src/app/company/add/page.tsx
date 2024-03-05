'use client'
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import { useRef, useState } from "react";
import "./add.scss";
import Dialog from "./components/dialog";
export default function Add() {
    const [stops, setStops] = useState<string[]>([]);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const handleAddStopSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("stop") ?? "";
        setStops([...stops, name.toString()]);
        dialogRef.current?.close();
    }

    const handleAddStopClick = () => {
        dialogRef.current?.showModal();
    }
    return (
        <>
            <main className="add-route-main">
                <h2>Agrega una ruta</h2>
                <form className="add-route-form">
                    <section className="form-sections">
                        <section className="form-section">

                            <Input className="route-input" label="Numero de ruta" type="number" />
                            <Input className="route-input" label="Inicio de la ruta" type="text" />
                            <Input className="route-input" label="Fin de la ruta" type="text" />

                        </section>
                        <section className="stops-part">
                            <ul className="stops">
                                {
                                    stops.map(stop => (
                                        <li className="stop">
                                            <span>{stop}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Button action={handleAddStopClick} content="agregar parada" className="add-stop" />
                        </section>
                    </section>
                </form>
                <Button content="Confirmar" />
            </main>
            <Dialog OnSubmit={handleAddStopSubmit} dialogRef={dialogRef} />
        </>
    )
}