import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./types/state-schema.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

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
setupListeners(createAppStore().dispatch)
export type AppDispatch = ReturnType<typeof createAppStore>["dispatch"]