import Layout from "@/layouts/layout";
import Auth from "@/pages/auth/auth.tsx";
import Home from "@/pages/home/home.tsx";
import AccountingReport from "@/pages/accounting-report/accounting-report.tsx";

export const router = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/",
        element: <Auth/>,
    },
    {
        path: "/user",
        element: <Layout/>,
    },
    {
        path: "/home/accounting-report", //страница отчета бухгалтера
        element: (
            <Layout>
                <AccountingReport/>
            </Layout>
        )
    }
];
