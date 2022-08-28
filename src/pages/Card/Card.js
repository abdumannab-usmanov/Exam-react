import { Link } from 'react-router-dom';
import './card.scss';

export function Card({ item }) {
	return (
		<li className='card__item'>
			<Link className='card__link' to={'/singlePage/' + item.id}>
				<img
					className='card__img'
					src={'https://book-service-layer.herokuapp.com/' + item.image}
					alt={item.name}
				/>
				<div className='card__wrapper'>
					<p className='card__title'>{item.first_name}</p>
					<p className='card__text'>{item.last_name}</p>
				</div>
				<div className='born'>
					{item.date_of_birth}-{item.date_of_death}
				</div>
			</Link>
		</li>
	);
}
