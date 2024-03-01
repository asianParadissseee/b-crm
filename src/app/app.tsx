import {BrowserRouter} from "react-router-dom";
import AppRouter from "@/router/app-router.tsx";
import {StoreProvider} from "@/store/provider/store-provider.tsx"
const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <AppRouter/>
            </StoreProvider>
        </BrowserRouter>
    );
};

export default App;