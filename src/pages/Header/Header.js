import { Link, NavLink } from 'react-router-dom';
import LogoImg from '../../assets/img/Badiiyat.svg';
import { Settings } from '../Settings';
import './header.scss';

import { lang } from '../../lang/lang';
import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';
import axios from 'axios';
import { UseAuth } from '../../hook/UseAuth';

export const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const { lang: till, setLang } = useContext(LangContext);
	const { token, setToken } = UseAuth();
	const [account, setAccount] = useState([]);

	useEffect(() => {
		axios
			.get('https:book-service-layer.herokuapp.com/user/me', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setAccount(res.data))
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<Link className='header__logo' to={'/'}>
						<img className='header__logoImg' src={LogoImg} alt='' />
					</Link>

					<nav className='header__menu'>
						<ul className='header__list'>
							<li className='header__item'>
								<NavLink className={`header__link ${theme}`} to={'/'}>
									{lang[till].nav_home}
								</NavLink>
							</li>
							<li className='header__item'>
								<NavLink className={`header__link ${theme}`} to={'/kitob'}>
									{lang[till].nav_nasr}
								</NavLink>
							</li>
						</ul>
					</nav>

					<div className='header__frame'>
						<img className='my_photo'
							src={`https://book-service-layer.herokuapp.com/${account.image}`}
							width={50}
							height={50}
							alt='myself'
						/>
						<Settings />
					</div>
				</div>
			</div>
		</header>
	);
};
