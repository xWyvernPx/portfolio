import { atom } from "recoil"

type AppTheme = "light" | "dark";

interface AppState {
    theme: AppTheme
}

const initAppState : AppState  = {
    theme : "dark",
}

export const appAtom = atom<AppState>({
    key : "appAtom",
    default: initAppState
});