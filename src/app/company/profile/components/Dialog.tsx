//must be a dialog that confirms the action
interface Props {
    OnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    dialogRef: React.MutableRefObject<HTMLDialogElement | null>;

}
export default function Dialog({ OnSubmit, dialogRef }: Props) {
    return (
        <dialog ref={dialogRef}>
            <form onSubmit={OnSubmit}>
                <p>Are you sure you want to commit the changes?</p>
                <button type="submit">Confirm</button>
            </form>
        </dialog>
    );
}