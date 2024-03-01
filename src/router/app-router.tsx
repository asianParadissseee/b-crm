import {Route, Routes} from "react-router-dom";
import {router} from "@/const/router.tsx";

const AppRouter = () => {
    return (
        <Routes>
            {router.map(({path, element}) => (
                <Route path={path} element={element} key={path}/>
            ))}
        </Routes>
    );
};

export default AppRouter;