import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../Card/Card';
import "./temur.scss"

export const Temur = () => {
	const [author, setAuthor] = useState([]);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/1')
			.then((res) => setAuthor(res.data))
			.catch((error) => console.log(error));
	}, []);

	console.log(author);

	return (
		<>
			<div className='container'>
				<ul className='temur__list'>
					{author.length && author.map((e) => <Card key={e.id} item={e} />)}
				</ul>
			</div>
		</>
	);
};
