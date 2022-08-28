import { Link, NavLink } from 'react-router-dom';
import './category.scss';

import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';

export const Category = () => {
	const { lang: till, setLang } = useContext(LangContext);

	return (
		<div className='container'>
			<div className='category__inner'>
				<h2 className='category__title'>{lang[till].asosiy_kategoriyalar}</h2>
				<ul className='category__list'>
					<li className='category__item'>
						<NavLink className={({isActive}) => isActive ? "activebook" :"category__link"} to={'/kitob/'}>
						{lang[till].temuriylar_davri}
						</NavLink>
					</li>
					<li className='category__item'>
						<NavLink className={({isActive}) => isActive ? "activebook" :"category__link"} to={'jadid-book'}>
						{lang[till].jadid_adabiyoti}
						</NavLink>
					</li>
					<li className='category__item'>
						<NavLink className={({isActive}) => isActive ? "activebook" :"category__link"} to={'sovet-book'}>
						{lang[till].sovet_davri}
						</NavLink>
					</li>
					<li className='category__item'>
						<NavLink className={({isActive}) => isActive ? "activebook" :"category__link"} to={'mustaqillik-book'}>
						{lang[till].mustaqillik_davri}
						</NavLink>
					</li>
				</ul>
			</div>

		</div>
	);
};
