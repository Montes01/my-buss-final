
export async function UsePost(url: string, data: object) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const res_1 = await res.json();
        return res_1;
    } catch (err) {
        return err;
    }
   
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

