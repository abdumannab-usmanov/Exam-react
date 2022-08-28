import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { UseAuth } from '../../hook/UseAuth';
import { AuthContext } from '../../context/AuthContext';
import Book from '../../assets/img/Book.png';
import { lang } from '../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';


import './addBook.scss';

export const AddBook = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { lang: till, setLang } = useContext(LangContext);
	const { token, setToken } = UseAuth(AuthContext);
	const [dataId, setDataId] = useState([]);
	const [datae, setData] = useState(1);

	const title = useRef();
	const page = useRef();
	const year = useRef();
	const price = useRef();
	const genre_id = useRef();
	const author_id = useRef();
	const description = useRef();
	const image = useRef();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();

		formData.append('image', image.current.files[0]);
		formData.append('title', title.current.value);
		formData.append('page', page.current.value);
		formData.append('year', year.current.value);
		formData.append('price', price.current.value);
		formData.append('genre_id', genre_id.current.value);
		formData.append('author_id', author_id.current.value);
		formData.append('description', description.current.value);

		axios
			.post('https://book-service-layer.herokuapp.com/book', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
	};

	function SelectId(evt) {
		setData(evt.target.value);
	}

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/author/genreId/${datae}`, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setDataId(res.data))
			.catch((error) => console.log(error));
	}, [datae]);

	console.log(dataId);
	return (
		<div className={`addBook__inner ${theme}`}>
			<form onSubmit={handleFormSubmit} className='addBook__form'>
				<div className='addBook__frame'>
					<img className='addBook__img' src={Book} alt='' />
					<p className='addBook__title'>Ulugbek hazinasi</p>
					<label className='addBook__label'>
					{lang[till].upload__img} 
						<input ref={image} className='addBook__imgFile' type='file' />
					</label>
				</div>

				<div className='addBook__wrapper'>
					<h2 className={`addBook__title ${theme}`}>{lang[till].book_book}</h2>

					<input
						ref={title}
						className='addBook__input'
						type='text'
						name='title'
						placeholder={lang[till].book_title}
					/>
					<input
						ref={page}
						className='addBook__input'
						type='text'
						name='Pages'
						placeholder={lang[till].book_pages}
					/>
					<input
						ref={year}
						className='addBook__input'
						type='number'
						name='year'
						placeholder={lang[till].book_year}
					/>
					<input
						ref={price}
						className='addBook__input'
						type='number'
						name='price'
						placeholder={lang[till].book_price}
					/>

					<select
						onClick={SelectId}
						ref={genre_id}
						className='addBook__select'
						name='genre_id'
						placeholder='Genre'>
						<option disabled selected>
						{lang[till].all}
						</option>
						<option value='1'>{lang[till].temuriylar_davri}</option>
						<option value='2'>{lang[till].jadid_adabiyoti}</option>
						<option value='3'>{lang[till].sovet_davri}</option>
						<option value='4'>{lang[till].mustaqillik_davri}</option>
					</select>

					<select
						ref={author_id}
						className='addBook__select'
						name='author_id'
						placeholder={lang[till].book_author}>
						{dataId.map(e => <option value={e.id}>{e.first_name}</option>)}
						
					</select>

					<textarea
						ref={description}
						className='addBook__bio'
						name='description'
						cols='40'
						rows='5'
						placeholder={lang[till].book_description}></textarea>

					<div className='addBook__button'>
						<button className='addBook__btn' type='submit'>
						{lang[till].book_create}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
