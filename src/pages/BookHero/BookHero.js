import Img from '../../assets/img/Temurilar-davri.png';
import './bookHero.scss';
import { useRef, useState } from 'react';
import axios from 'axios';

import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';

export const BookHero = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const { lang: till, setLang } = useContext(LangContext);
	const [bookId, setBookId] = useState([]);

	const inputVal = useRef();

	const handleFormAuthor = (evt) => {
		evt.preventDefault();

		axios
			.get(
				`https://book-service-layer.herokuapp.com/book/search?book=${inputVal.current.value}`
			)
			.then((res) => setBookId(res.data))
			.catch((error) => console.log(error));
	};
	console.log(bookId);
	return (
		<div className='container'>
			<div className={`bookhero__temurlan`}>
				<img className='bookhero__img' src={Img} alt='' />
			</div>

			<div className={`bookhero__inner ${theme}`}>
				<div className={`bookhero__wrapper ${theme}`}>
					<h2 className={`bookhero__text ${theme}`}>{lang[till].qidirish__qidirish}</h2>
					<div className='bookhero__search'>
						<form onSubmit={handleFormAuthor}>
							<input
								ref={inputVal}
								className='bookhero__input'
								type='text'
								placeholder={lang[till].qidirish_input}
							/>
							<button type='submit' className='bookhero__btn'>
							{lang[till].qidirish_izlash}
							</button>
						</form>
					</div>
				</div>
			</div>
			{bookId.length &&
				bookId.map((e) => (
					<div className='bookhero-search__wrapper'>
						<img
							className='bookhero-search__image'
							src={`https://book-service-layer.herokuapp.com/${e.image}`}
							alt=''
						/>

						<div className='bookhero-search__frame'>
							<p className='bookhero-search__title'>{e.title}</p>
							<p className='bookhero-search__info'>
							{lang[till].page}: <span className='bookhero-search__span'>{e.page}ст</span>
							</p>
							<p className='bookhero-search__info'>
							{lang[till].price}: <span className='bookhero-search__span'>${e.price}</span>
							</p>
							<p className='bookhero-search__text'>{e.description}</p>
						</div>
					</div>
				))}
		</div>
	);
};
