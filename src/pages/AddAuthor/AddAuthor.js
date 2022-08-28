import { useRef } from 'react';
import axios from 'axios';
import { UseAuth } from '../../hook/UseAuth';
import { AuthContext } from '../../context/AuthContext';
import Author from '../../assets/img/Author.png';
import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';

import './addAuthor.scss';

export const AddAuthor = () => {

	const { theme, setTheme } = useContext(ThemeContext);
	const { lang: till, setLang } = useContext(LangContext);
	const { token, setToken } = UseAuth(AuthContext);

	const first_name = useRef();
	const last_name = useRef();
	const date_of_birth = useRef();
	const date_of_death = useRef();
	const genre_id = useRef();
	const bio = useRef();
	const country = useRef();
	const image = useRef();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();

		formData.append('image', image.current.files[0]);
		formData.append('first_name', first_name.current.value);
		formData.append('last_name', last_name.current.value);
		formData.append('date_of_birth', date_of_birth.current.value);
		formData.append('date_of_death', date_of_death.current.value);
		formData.append('genre_id', genre_id.current.value);
		formData.append('country', country.current.value);
		formData.append('bio', bio.current.value);

		axios
			.post('https://book-service-layer.herokuapp.com/author', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
	};

	return (
		<div className={`addauthor__inner ${theme}`} style={{ backgroundColor: 'white' }}>
			<form onSubmit={handleFormSubmit} className={`addauthor__form `}>
				<div className={`addauthor__frame `}>
					<img className='addauthor__img' src={Author} alt='' />
					<p className={`addauthor__title `}>Ulugbek hazinasi</p>
					<label className='addauthor__label'>
						{lang[till].upload__img}
						<input
							ref={image}
							className='addAuthor__img'
							type='file'
							// name='image'
						/>
					</label>
				</div>

				<div className={`addauthor__wrapper ${theme}`}>
					<h2 className={`addauthor__title ${theme}`}>{lang[till].nav_muallif}</h2>

					<input
						ref={first_name}
						className='addauthor__input'
						type='text'
						name='first_name'
						placeholder={lang[till].author_name}
					/>
					<input
						ref={last_name}
						className='addauthor__input'
						type='text'
						name='last_name'
						placeholder={lang[till].author_last}
					/>
					<input
						ref={date_of_birth}
						className='addauthor__input '
						type='number'
						name='date_of_birth'
						placeholder={lang[till].author_birth}
					/>
					<input
						ref={date_of_death}
						className='addauthor__input'
						type='number'
						name='date_of_death'
						placeholder={lang[till].author_death}
					/>

					<select
						ref={genre_id}
						className='addauthor__select'
						name='genre_id'
						placeholder='Genre'>
						<option defaultValue='1'>1</option>
						<option defaultValue='2'>2</option>
						<option defaultValue='3'>3</option>
						<option defaultValue='4'>4</option>
					</select>

					<input
						ref={country}
						className='addauthor__input'
						type='text'
						name='country'
						placeholder={lang[till].author_country}
					/>

					<textarea
						ref={bio}
						className='addauthor__bio'
						name='bio'
						cols='40'
						rows='5'
						placeholder={lang[till].author_bio}></textarea>

					<div className={`addauthor__button ${theme}`}>
						<button className={`addauthor__btn ${theme}`} type='submit'>
						{lang[till].author_create}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
