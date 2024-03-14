'use client'
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import { useRef, useState } from "react";
import "./add.scss";
import Dialog from "./components/dialog";
import { Paradero } from "@/lib/constants/declarations"
export default function Add() {
    const [stops, setStops] = useState<Paradero[]>([]);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const addStopCallback = (stop: Paradero) => {
        if (stops.find(s => s.ID_Paradero === stop.ID_Paradero)) {
            setStops(stops.filter(s => s.ID_Paradero !== stop.ID_Paradero));
            dialogRef.current?.close();
        } else {
            setStops([...stops, stop]);
        };
        dialogRef.current?.close();
    }

    const handleAddStopClick = () => {
        dialogRef.current?.showModal();
    }
    return (
        <>
            <main className="add-route-main">
                <h2 className="title">Agrega una ruta</h2>
                <form className="add-route-form">
                    <section className="form-sections">
                        <section className="form-section">
                            <Input label="Nombre" name="Nombre" type="text" className="route-input" />
                            <Input label="Descripcion" name="Descripción" type="number" className="route-input" />
                            <Input label="Tarifa" name="Tarifa" type="number" className="route-input" />
                            <label className="route-select">
                                Tipo
                                <select name="Tipo" className="route-input">
                                    <option value="urbano">Urbano</option>
                                    <option value="alternativo">Alternativo</option>
                                </select>
                            </label>
                        </section>
                        <section className="stops-part">
                            <ul className="stops">
                                {
                                    stops.map(stop => (
                                        <li key={stop.ID_Paradero} className="stop">
                                            <span>{stop.Nombre}</span>
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
            <Dialog addedStopList={stops} callback={addStopCallback} dialogRef={dialogRef} />
        </>
    )
}