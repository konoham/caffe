import { create } from "zustand";

export const useUser = create((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));
export const useCartSuccses = create((set) => ({
  success: false,
  setSuccess: (success) => set(() => ({ success })),
}));

export const useIdProduct = create((set) => ({
  idProduct: null,
  setIdProduct: (idProduct) => set(() => ({ idProduct })),
}));

export const useErrorMessage = create((set) => ({
  messageError: false,
  setMessageError: (messageError) => set(() => ({ messageError })),
}));
