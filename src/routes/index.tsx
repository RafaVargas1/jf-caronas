import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';



export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}> </Route>
                <Route path='/login' element={<Login />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}