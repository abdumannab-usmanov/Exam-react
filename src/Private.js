// import { Header } from "./pages/Header"
// import { Hero } from "./pages/Hero/Hero"
// import { Main } from "./pages/Main"
import { All } from './pages/All';
import { Routes, Route } from 'react-router-dom';
import './private.scss';
import { AddBook } from './pages/AddBook/AddBook';
import { AddAuthor } from './pages/AddAuthor';
import { MyAccount } from './pages/MuAccount/MyAccount';
import { Temur } from './pages/Temur';
import { Jadid } from './pages/Jadid';
import { Sovet } from './pages/Sovet/Sovet';
import { Mustakillik } from './pages/Mustakillik/Mustakillik';
import { Header } from './pages/Header';
import { SinglePage } from './pages/SinglePage';
import { Book } from './pages/Book';
import {TemurBook} from "./pages/TemurBook"
import { JadidBook } from './pages/JadidBook';
import { SovetBook } from './pages/SovetBook';
import { MustakilBook } from './pages/MudtakilBook/MustakilBook';
import { SingleBook } from './pages/SingleBook';
import "./private.scss"
import { ThemeContext } from './context/Theme';
import { useContext } from 'react';



export const Private = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div style={{ backgroundColor: 'black' }} className={`private ${theme}`}>
			<Header />

			<Routes>
				<Route path='/' element={<All />}>
					<Route index element={<Temur />} />
					<Route path='/jadid-adabiyoti' element={<Jadid />} />
					<Route path='/sovet-davri' element={<Sovet />} />
					<Route path='/mustaqillik-davri' element={<Mustakillik />} />
				</Route>
				<Route path='/kitob/*' element={<Book/>}>
					<Route index element={<TemurBook/>}/> 
					<Route path='jadid-book' element={<JadidBook/>}/> 
					<Route path='sovet-book' element={<SovetBook/>}/> 
					<Route path='mustaqillik-book' element={<MustakilBook/>}/> 
				</Route>
				<Route path='/singlePage/:id' element={<SinglePage />} />
				<Route path='/bookSingle/:id/*' element={<SingleBook />} />
				<Route path='/Addbook' element={<AddBook />} />
				<Route path='/addAuthor' element={<AddAuthor />} />
				<Route path='/myaccount/*' element={<MyAccount />} />
			</Routes>
		</div>
	);
};
