
import create from 'zustand';
import { user } from '../constants/declarations';

interface CounterState {
  user: user;
  setUser: (user:user) => void;
}

const useStore = create<CounterState>((set) => ({
    user: {
        nombre: "",
        edad: 0,
        correo: "",
        documento: "",
        rol: ""
    },
    setUser: (user:user) => set({ user }),
}));

export default useStore;
