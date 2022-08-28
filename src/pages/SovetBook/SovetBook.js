import { useEffect, useState } from 'react';
import axios from 'axios';
// import "./temurBook.scss"
import { BookCard } from '../BookCard';

export const SovetBook = () => {
	const [author, setAuthor] = useState([]);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/book/genreId/3')
			.then((res) => setAuthor(res.data))
			.catch((error) => console.log(error));
	}, []);

	console.log(author);

	return (
		<>
			<div className='container'>
				<ul className='temurBook__list'>
					{author.length && author.map((e) => <BookCard key={e.id} item={e} />)}
				</ul>
			</div>
		</>
	);
};
