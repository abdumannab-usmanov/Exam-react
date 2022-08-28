import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UseAuth } from '../../hook/UseAuth';
import { Muallif } from '../Hulosa/Muallif';
import { Iqtiboslar } from '../Hulosa/Iqtiboslar/Iqtiboslar';
import { Tahriz } from '../Hulosa/Tahriz/Tahriz';
import { BookCard } from '../BookCard';
import './singleBook.scss';

import { lang } from '../../lang/lang';
import { LangContext } from '../../context/LangContext';
import { ThemeContext } from '../../context/Theme';

export const SingleBook = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { lang: till, setLang } = useContext(LangContext);
	const [authors, setAuthors] = useState([]);



	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/book/genreId/4')
			.then((res) => setAuthors(res.data))
			.catch((error) => console.log(error));
	}, []);

	const [author, setAuthor] = useState([]);
	const params = useParams();
	const { token } = UseAuth();

	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/book/bookId/${params.id}`,
				{
					headers: {
						Authorization: token.token,
					},
				}
			)
			.then((res) => setAuthor(res.data))
			.catch((error) => console.log(error));
	}, [params.id]);

	console.log(author);

	return (
		<div className={`singlebookPage ${theme}`}>
			<div className='singlebook__inner'>
				<div className='singlebook__left'>
					<img
						className='singlebook__img'
						src={`https://book-service-layer.herokuapp.com/ ${author.image}`}
						alt={author.first_name}
						width={582}
						height={779}
					/>
				</div>

				<div className='singlebook-right'>
					<div className='singlebook-right__inner'>
						<h3 className={`singlebook__title`}>{author.title}</h3>
						<p className={`singlebook__text ${theme}`}>
							{lang[till].number__pages}:{' '}
							<span className={`singlebook__span ${theme}`}>{author.page}</span>
						</p>
						<p className={`singlebook__text ${theme}`}>
							{lang[till].printed}:{' '}
							<span className={`singlebook__span ${theme}`}>{author.year}</span>
						</p>
						<p className={`singlebook__text ${theme}`}>
							{lang[till].publish}:{' '}
							<span className={`singlebook__span ${theme}`}>Xilol nashr</span>
						</p>
						<div className='singlebook-info__wrapper'>
							<p className={`singlebook__info ${theme}`}>{lang[till].full_info}</p>
							<span className='singlebook__line'></span>
							<p className={`singlebook__text ${theme}`}>{author.description}</p>
						</div>

						<h4 className={`singlebook__format ${theme}`}>
							{lang[till].available_formats}
						</h4>

						<div className='singlebook__frame'>
							<ul className='singlebook__list'>
								<li className='singlebook__item singlebook__item--first'>
									<p className={`singlebook__types ${theme}`}>{lang[till].paper_book}</p>
									<span className={`singlebook__moreInfo ${theme}`}>${author.price}</span>
								</li>
								<li className='singlebook__item singlebook__item--second'>
									<p className={`singlebook__types ${theme}`}>{lang[till].audio_book}</p>
									<span className={`singlebook__moreInfo ${theme}`}>
										6:23 {lang[till].hour}
									</span>
								</li>
								<li className='singlebook__item singlebook__item--third'>
									<p className={`singlebook__types ${theme}`}>{lang[till].elektron}</p>
									<span className={`singlebook__moreInfo ${theme}`}>pdf, epub</span>
								</li>
							</ul>

							<button className='singlebook__btn'>{lang[till].save}</button>
						</div>
					</div>
				</div>
			</div>

			<div className='conclusion'>
				<ul className='conclusion__list'>
					<li className='conclusion__item'>
						<NavLink className={({isActive}) => isActive ? "activeAuthors" :"conclusion__link"} to={'muallif'}>
							{lang[till].muallif}
						</NavLink>
					</li>
					<li className='conclusion__item'>
						<NavLink className= {({isActive}) => isActive ? "activeAuthors" :"conclusion__link"} to={'iqtiboslar'}>
							{lang[till].kitobdan}
						</NavLink>
					</li>
					<li className='conclusion__item'>
						<NavLink className={({isActive}) => isActive ? "activeAuthors" :"conclusion__link"} to={'taqrizi'}>
							{lang[till].review}
						</NavLink>
					</li>
				</ul>

				<div className='conclusion__muallif'>
					<Routes>
						<Route path='muallif' element={<Muallif/>}/>
						<Route path='iqtiboslar' element={<Iqtiboslar/>}/>
						<Route path='taqrizi' element={<Tahriz/>}/>
					</Routes>
				</div>

				<div>
					<div className='more__inner'>
						<p className='more__title'>{lang[till].like}</p>
						<p className='more__text'>
							<Link className={`more__link ${theme}`} to={'/kitob'}>
								{lang[till].see__all}
							</Link>
						</p>
					</div>
					
				</div>
				<div>
						<div className='container'>
							<ul className='more__list'>
								{authors.length &&
									authors.map((e) => <BookCard key={e.id} item={e} />)}
							</ul>
						</div>
					</div>
			</div>
		</div>
	);
};
