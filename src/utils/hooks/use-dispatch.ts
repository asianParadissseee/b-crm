import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/app-store.ts";

export const useTypeDispatch = () => useDispatch<AppDispatch>()