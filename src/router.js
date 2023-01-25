import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from './pages/index';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            
        </Route>
    )
)

export default router