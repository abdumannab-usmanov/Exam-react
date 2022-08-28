import { Link } from 'react-router-dom';
import './bookCard.scss';
// import Sample from "../../assets/img/sample.jpg"

export function BookCard({ item }) {
	return (
		<li className='bookcard__item'>
			<Link className='bookcard__link' to={'/bookSingle/' + item.id}>
				<img
					className='bookcard__img'
					src={'https://book-service-layer.herokuapp.com/' + item.image}
					alt={item.name}
					// onError={({ currentTarget }) => {
					// 	currentTarget.onerror = null; 
					// 	currentTarget.src={Sample};
					//   }}
				/>
				<div className='bookcard__wrapper'>
					<p className='bookcard__title'>{item. title}</p>
					<p className='bookcard__text'>page:<span className='bookcard__info'>{item.page}</span></p>
                    <p className='bookcard__text'>price:<span className='bookcard__info'>${item.price}</span></p>
				</div>
			</Link>
		</li>
	);
}