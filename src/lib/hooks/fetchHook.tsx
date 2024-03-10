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
    if(!res.ok) {
        console.error(await res.json())
        throw new Error('Error en la petición');
    }
    const res_1 = await res.json();
    return res_1;

}

export async function UseGet(url: string) {
    try {
        const res = await fetch(url);
        const res_1 = await res.json();
        return res_1;
    } catch (err) {
        return err;
    }
}

