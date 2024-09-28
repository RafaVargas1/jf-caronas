import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import Login  from '../pages/Login';
import Register from '../pages/Register'
import Initial from '../pages/Initial';
import Recover from '../pages/Recover';
import DriverScreen from '../pages/Driver';



export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}> </Route>
                <Route path='/login' element={<Login />}> </Route>
                <Route path='/register' element={<Register />}> </Route>
                <Route path='/recover' element={<Recover />}> </Route>
                <Route path='/initial' element={<Initial />}> </Route>
                <Route path='/driver' element={<DriverScreen />}> </Route>
            </Routes>
        </BrowserRouter>
    );
}