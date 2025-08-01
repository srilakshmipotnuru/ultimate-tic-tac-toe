import { Routes, Route, Navigate, useParams } from "react-router-dom"
import HomePageBody from "../components/HomePageBody"
import Super from "../components/Super"
import Ultimate from "../components/Ultimate";
import Classic from "../components/Classic";


const ClassicModeWrapper = () => {
    const { mode } = useParams();
    if (!mode || mode.indexOf('3') === -1 && mode.indexOf('5') === -1 && mode.indexOf('7') === -1) {
        return <Navigate to="/" replace />;
    }
    const modeNumber = parseInt(mode?.[0]);
    return <Classic mode={modeNumber} />;
}
const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePageBody />} />
                <Route path="/classic/:mode" element={<ClassicModeWrapper />} />
                <Route path="/super" element={<Super />} />
                <Route path="/ultimate" element={<Ultimate />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}

export default AppRoutes;