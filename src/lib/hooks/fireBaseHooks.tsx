import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/config";

export default function FireBaseHooks() {
    const UseUpload = async (
        file: File,
        folder: string,
        CallBack: (data: any, err?: any) => void,
    ) => {
        try {
            const storageRef = ref(storage, `${folder}/${crypto.randomUUID()}`);
            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            CallBack(url);
        } catch (error) {
            CallBack(null, error);
        }
    };

    return {
        UseUpload
    }
}