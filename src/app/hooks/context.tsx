import { createContext } from "react";
import { UseGlobalHook } from "./globalHook";

export const SomeContext = createContext<UseGlobalHook>({});
