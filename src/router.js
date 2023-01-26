import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from './pages/index';
import { licensesLoader } from "./loaders";
import { createAction } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={licensesLoader} />
            <Route path="create" action={createAction}/>
            
            
        </Route>
    )
)

export default router