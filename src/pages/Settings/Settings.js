import { Link } from 'react-router-dom';
import { lang } from '../../lang/lang';
import { useContext, useRef, useState } from 'react';
import { LangContext } from '../../context/LangContext';
import { Drop } from '../../assets/icon/icon';
import './settings.scss';

export const Settings = () => {
	const { lang: till, setLang } = useContext(LangContext);

	const [drop, setDrop] = useState(false)

	const handleFunc = () =>  setDrop(!drop)

	return (
		<div className='setting__inner'>
			<button className='setting__btn' onClick={handleFunc}>{<Drop/>}</button>
			
				<ul className={`seting__select span ${drop ? "open" : "close"}`} >
					<li className='seting__li'>
						<Link className='seting__link' to={'/addbook'}>
							{lang[till].book_book}
						</Link>
					</li>
					<li className='seting__li'>
						<Link className='seting__link' to={'/addAuthor'}>
							{lang[till].book_author}
						</Link>
					</li>
					<li className='seting__li'>
						<Link className='seting__link' to={'/myaccount'}>
							{lang[till].my_account}
						</Link>
					</li>
				</ul>
			
		</div>
	);
};
