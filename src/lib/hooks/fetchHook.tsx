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
        const catchedError = await res.json();
        console.log(catchedError);
          throw new Error(catchedError.data);
    }
    const res_1 = await res.json();
    console.log(res_1)
    return { ...res_1, Data: res_1.data };

}

export async function UseGet(url: string): Promise<Response> {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            const catchedError = await res.json();
            throw new Error(catchedError.data);
        }
        const res_1 = await res.json();
        console.log(res_1);
        return { ...res_1, Data: res_1.data };
    } catch (err) {
        console.log(err)
        throw new Error("Error al obtener los datos");
    }
}

export async function UsePut(url: string, data: object, headers: object = {}): Promise<Response> {
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        const catchedError = await res.json();
        throw new Error(catchedError.data);
    }
    const res_1 = await res.json();
    return { ...res_1, Data: res_1.data };
}

export async function UseDelete(url: string, headers: object = {}): Promise<Response> {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: { ...headers }
    });
    if (!res.ok) {
        const catchedError = await res.json();
        throw new Error(catchedError.data);
    }
    const res_1 = await res.json();
    return { ...res_1, Data: res_1.data };
}

