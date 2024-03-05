import Button from "@/system-design/atoms/Button";
import Input from "@/system-design/atoms/Input";

interface Props {
    OnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
}

export default function Dialog({ OnSubmit, dialogRef }: Props) {

    return (
        <dialog ref={dialogRef} className="dialog">
            <h2>Crear Parada</h2>
            <form onSubmit={OnSubmit} action="" className="company-form">
                <Input name="stop" label="Nombre" type="text" />
                <Button content="Agregar" submit />
            </form>
        </dialog>
    )
}