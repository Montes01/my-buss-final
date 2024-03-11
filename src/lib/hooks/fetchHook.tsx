import { Response } from "../constants/declarations";

export async function UsePost(url: string, data: object, headers: object = {}): Promise<Response> {

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        console.log("got here")
        const catchedError = await res.json();
        console.log(catchedError)
        throw new Error(catchedError.data);
    }
    const res_1 = await res.json();
    console.log(res_1)
    return { ...res_1, Data: res_1.data };

}

export async function UseGet(url: string): Promise<Response> {
    try {
        const res = await fetch(url);
        const res_1 = await res.json();
        return { ...res_1, Data: res_1.data };
    } catch (err) {
        throw new Error("Error al obtener los datos");
    }
}

