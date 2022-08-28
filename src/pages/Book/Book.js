

import { BookHero } from '../BookHero';
import { BookMain } from '../BookMain/BookMain';
import './book.scss';

export const Book = () => {
	return (
		<div className='book'>
			<BookHero />
			<BookMain/>
		</div>
	);
};
