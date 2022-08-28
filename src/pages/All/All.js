import { Header } from '../Header';
import { Hero } from '../Hero/Hero';
import { Main } from '../Main';
import { SinglePage } from '../SinglePage';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../../context/Theme';
import { useContext } from 'react';
import './all.scss';

export const All = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className={`all ${theme}`}>
			<Hero />
			<Main />
		</div>
	);
};
