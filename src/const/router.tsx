import Auth from "@/pages/auth/auth.tsx";
import Home from "@/pages/home/home.tsx";


export const router = [
    {
        path: "/",
        element: <Home/>
    }, {
        path: "/",
        element: <Auth/>
    }
]