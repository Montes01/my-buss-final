'use client'
import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";
import { useRef, useState } from "react";
import "./add.scss";
import Dialog from "./components/dialog";
import { Paradero } from "@/lib/constants/declarations"
import { UseGet, UsePost } from "@/lib/hooks/fetchHook";
import swal from "sweetalert";
import Spinner from "@/system-design/atoms/Spinner";
import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { useRouter } from "next/navigation";
import { parseSingularRoute } from "@/lib/constants/utils";
export default function Add() {
    const router = useRouter()
    const [stops, setStops] = useState<Paradero[]>([]);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget)
        const data = {
            Nombre: formData.get("Nombre")!,
            Descripción: formData.get("Descripción") ?? "",
            Tarifa: formData.get("Tarifa") ?? 2700,
            Tipo: formData.get("Tipo")!,
            Paraderos: stops.map(s => s.ID_Paradero)
        }
        console.log(data)
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("company-token")}`
        }
        UsePost(SERVER_URL + ENDPOINTS.ROUTE.ADD, data, headers).then(_ => {
            swal("Ruta agregada", "La ruta ha sido agregada con éxito", "success").then(() => {
                router.push("/company")
            })
        }).catch(err => {
            swal("Error", (err as Error).message, "error")
        })

        setIsLoading(false);
    }
    return (
        <>
            <form className="add-route-main" onSubmit={handleSubmit}>
                <h2 className="title">Agrega una ruta</h2>
                <section className="add-route-form">
                    <section className="form-sections">
                        <section className="form-section">
                            <Input required label="Nombre" name="Nombre" type="text" className="route-input" />
                            <Input label="Descripcion" name="Descripción" className="route-input" />
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
                </section>
                <section className="confirm-section">

                    <Button content="Confirmar" submit />
                    {isLoading && <Spinner />}
                </section>
            </form>
            <Dialog addedStopList={stops} callback={addStopCallback} dialogRef={dialogRef} />
        </>
    )
}