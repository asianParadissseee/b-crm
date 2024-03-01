import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./types/state-schema.ts";

export function createAppStore(initialState?: StateSchema) {
    const store = configureStore<StateSchema>({
        reducer: {},
        preloadedState: initialState,
        devTools: true,
        middleware: getDefaultMiddleware => (
            getDefaultMiddleware({})
        )
    })
    return store
}