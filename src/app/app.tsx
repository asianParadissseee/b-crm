import {BrowserRouter} from "react-router-dom";
import AppRouter from "@/router/app-router.tsx";
import {StoreProvider} from "@/store/provider/store-provider.tsx"
import {CookiesProvider} from "react-cookie";
import ErrorBoundary from "@/error/error-boundary.tsx";


const App = () => {

    return (
        <CookiesProvider>
            <BrowserRouter>
                <StoreProvider>
                    <ErrorBoundary>
                        <AppRouter/>
                    </ErrorBoundary>
                </StoreProvider>
            </BrowserRouter>
        </CookiesProvider>

    );
};

export default App;