import { NavLink } from 'react-router-dom';
import './author.scss';

import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';

export const Authors = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { lang: till, setLang } = useContext(LangContext);
	return (
		<div className='container'>
			<div className={`author__inner ${theme}`}>
				<h2 className={`author__title ${theme}`}>{lang[till].asosiy_kategoriyalar}</h2>
				<ul className={`author__list ${theme}`}>
					<li className={`author__item ${theme}`}>
						<NavLink className={({isActive}) => isActive ? "activeAuthor" :"author__link"} to={'/'}>
						{lang[till].temuriylar_davri}
						</NavLink>
					</li>
					<li className={`author__item ${theme}`}>
						<NavLink className={({isActive}) => isActive ? "activeAuthor" :"author__link"} to={'/jadid-adabiyoti'}>
						{lang[till].jadid_adabiyoti}
						</NavLink>
					</li>
					<li className={`author__item ${theme}`}>
						<NavLink className={({isActive}) => isActive ? "activeAuthor" :"author__link"} to={'/sovet-davri'}>
						{lang[till].sovet_davri}
						</NavLink>
					</li>
					<li className={`author__item ${theme}`}>
						<NavLink className={({isActive}) => isActive ? "activeAuthor" :"author__link"} to={'/mustaqillik-davri'}>
						{lang[till].mustaqillik_davri}
						</NavLink>
					</li>
				</ul>
			</div>

		</div>
	);
};
