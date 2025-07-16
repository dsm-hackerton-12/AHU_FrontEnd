import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  name: string | null
  email: string | null
  accessToken: string | null
  isLoggedIn: boolean
  login: (name: string, email: string, accessToken: string) => void
  logout: () => void
}

export const useUserStore = create(
  persist<Auth>((set) => ({
    name: null,
    email: null,
    accessToken: null,
    isLoggedIn: false,
    login: (name, email, accessToken) => set({
      name: name,
      email: email,
      accessToken: accessToken,
      isLoggedIn: true
    }),
    logout: () => set({ name: null, email: null, accessToken: null, isLoggedIn: false})
  }),
  {
    name: "useStore"
  })
)