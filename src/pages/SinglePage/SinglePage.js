import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UseAuth } from '../../hook/UseAuth';
import './singlePage.scss';

import { lang } from '../../lang/lang';
import { LangContext } from '../../context/LangContext';
import { Card } from '../Card/Card';

export const SinglePage = () => {

	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/1')
			.then((res) => setAuthors(res.data))
			.catch((error) => console.log(error));
	}, []);


	const { lang: till, setLang } = useContext(LangContext);
	const [author, setAuthor] = useState([]);
	const params = useParams();
	const { token } = UseAuth();

	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/authorId/${params.id}`,
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
		<div className='singlePage'>
			<div className='single__inner'>
				<div className='single__left'>
					<img
						className='single__img'
						src={`https://book-service-layer.herokuapp.com/ ${author.image}`}
						alt={author.first_name}
						width={582}
						height={779}
					/>

					<div className='single__wrapper'>
						<span>
							<small className='single__sanasi'>{lang[till].date_birth}</small>
							<small className='single__sanasi'>{lang[till].date_death}</small>
						</span>
						<p className='single__birth'>{`${author.date_of_birth} - ${author.date_of_death}`}</p>
					</div>
				</div>

				<div className='single-right'>
					<div className='single-right__inner'>
						<h3 className='single__title'>{author.first_name}</h3>
						<p className='single__text'>{author.bio}</p>
						<div className='single-info__wrapper'>
							<p className='single__ijod'>IJODi</p>
							<p className='single__info'>
								Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
								ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
								muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
								qaytmaydi“ qissasi boʻldi.
							</p>
						</div>
						<div className='more__inner'>
						<p className='more__title'>{lang[till].like}</p>
						<p className='more__text'>
							<Link className='more__link' to={'/kitob'}>
								{lang[till].see__all}
							</Link>
						</p>
					</div>
					</div>
					<div>
						<ul className='moree__list'>
							{authors.length && authors.map((e) => <Card key={e.id} item={e} />)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
