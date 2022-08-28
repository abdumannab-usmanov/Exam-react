import Img from '../../assets/img/Temurilar-davri.png';
import './hero.scss';
import { useRef, useState } from 'react';
import axios from 'axios';

import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';

export const Hero = () => {
	const { lang: till, setLang } = useContext(LangContext);
	const [search, setSearch] = useState([]);

	const inputVal = useRef();

	const handleFormAuthor = (evt) => {
		evt.preventDefault();

		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/search?author=${inputVal.current.value}`
			)
			.then((res) => setSearch(res.data))
			.catch((error) => console.log(error));
	};

	console.log(search);

	return (
		<div className='container'>
			<div className='hero__temurlan'>
				<img className='hero__img' src={Img} alt='amir-temur' />
			</div>

			<div className='hero__inner'>
				<div className='hero__wrapper'>
					<h2 className='hero__text'>{lang[till].qidirish__qidirish}</h2>
					<div className='hero__search'>
						<form onSubmit={handleFormAuthor}>
							<input
								ref={inputVal}
								className='hero__input'
								type='text'
								placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
							/>
							<button type='submit' className='hero__btn'>
							{lang[till].qidirish_izlash}
							</button>
						</form>
					</div>
				</div>
			</div>
			{search.length &&
							search.map((e) => (
								<div className='bookhero-search__wrapper'>
									<img
										className='bookhero-search__image'
										src={`https://book-service-layer.herokuapp.com/${e.image}`}
										alt=''
									/>

									<div className='bookhero-search__frame'>
										<p className='bookhero-search__title'>
											{e.first_name}-{e.last_name}
										</p>
										<p className='bookhero-search__info'>
											Lived in:{' '}
											<span className='bookhero-search__span'>
												{e.date_of_birth}-{e.date_of_death}
											</span>
										</p>
										<p className='bookhero-search__info'>
											country:{' '}
											<span className='bookhero-search__span'>{e.country}</span>
										</p>
										<p className='bookhero-search__text'>{e.bio}</p>
									</div>
								</div>
							))}
		</div>
	);
};
