import { Login } from './pages/Login/Login';
import { Register } from './pages/Register';
import { Routes, Route } from 'react-router-dom';
export const Public = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
};
