import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from './pages/index';
import { licensesLoader } from "./loaders";
import { createAction } from "./actions";

import Show from "./pages/show";
import { licenseLoader } from "./loaders";
import { updateAction, deleteAction } from "./actions"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={licensesLoader} />
            <Route path="create" action={createAction}/>
            <Route path=":id" element = {<Show />} loader = {licenseLoader} />
            <Route path="update/:id" action = {updateAction} />
            <Route path="delete/:id" action = {deleteAction} />
        </Route>
    )
)

export default router