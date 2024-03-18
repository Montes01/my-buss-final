import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/config";

export default function FireBaseHooks() {
    const UseUpload = (
        file: File,
        folder: string,
        CallBack: (data: any, err?: any) => void,
    ) => {
        const storageRef = ref(storage, `${folder}/${crypto.randomUUID()}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                CallBack(url);
            });
        });
    };

    return {
        UseUpload
    }
}