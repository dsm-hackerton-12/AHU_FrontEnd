import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Auth {
  name: string | null
  email: string | null
  accessToken: string | null
  userId: string | null
  isLoggedIn: boolean
  login: (name: string, email: string, accessToken: string, userId: string) => void
  logout: () => void
}

export const useUserStore = create(
  persist<Auth>((set) => ({
    name: null,
    email: null,
    accessToken: null,
    userId: null,
    isLoggedIn: false,
    login: (name, email, accessToken, userId) => set({
      name: name,
      email: email,
      accessToken: accessToken,
      userId: userId,
      isLoggedIn: true
    }),
    logout: () => set({ name: null, email: null, accessToken: null, userId: null, isLoggedIn: false})
  }),
  {
    name: "useStore"
  })
)