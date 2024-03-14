import { ENDPOINTS, SERVER_URL } from "@/lib/constants/constants";
import { Paradero } from "@/lib/constants/declarations";
import { parseStopList } from "@/lib/constants/utils";
import { UseGet } from "@/lib/hooks/fetchHook";
import Button from "@/system-design/atoms/Button";
import { useEffect, useState } from "react";
import "./_dialog.scss"
interface Props {
    callback: (id: Paradero) => void;
    dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
    addedStopList: Paradero[];
}

export default function Dialog({ callback, dialogRef, addedStopList }: Props) {
    const [stopList, setStopList] = useState<Paradero[]>([]);


    useEffect(() => {
        UseGet(SERVER_URL + ENDPOINTS.STOP.LIST).then(data => {
            const parsedData = parseStopList(data.Data);
            setStopList(parsedData);
        })
    }, []);
    useEffect(() => {
        setStopList(prev => prev)
    }, [addedStopList]);
    return (
        <dialog ref={dialogRef} className="dialog">
            <h2>Agregar Paradero</h2>
            <form className="company-form">
                {stopList.map(stop => (
                    <details key={stop.Nombre}>
                        <summary>
                            {stop.Nombre}
                            <article className="stop-insert-card">
                                <section className="stop-insert-content">

                                    <img src={stop.Foto} alt="" className="stop-image-insert" />
                                    <section className="stop-actions-insert">
                                        <Button action={() => callback(stop)} content={addedStopList.includes(stop) ? "Eliminar" : "Agregar"} />
                                    </section>
                                </section>

                            </article>
                        </summary>
                        <p>{stop.Descripción}</p>
                    </details>


                ))}
            </form>
        </dialog >
    )
}