import { useState } from 'react';

export function useToken() {
    const [token, setToken] = useState<string | null>(null);
    const tokenFromLocal = localStorage.getItem('token');
    if (tokenFromLocal) {
        setToken(tokenFromLocal);
    }
    return token;
}