import {Provider} from "react-redux";
import {FC, ReactNode} from "react";
import {createAppStore} from "../app-store.ts"
import {StateSchema} from "../types/state-schema.ts";

interface ProviderStoreProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<ProviderStoreProps> = (props) => {
    const {children, initialState} = props
    const store = createAppStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

