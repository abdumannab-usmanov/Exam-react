import Heart from '../../../assets/img/heart.svg';
import Vec from '../../../assets/img/vec.svg';
import './muallif.scss';

export const Muallif = () => {
	return (
		<div className='muallif'>
			<div className='muallif__left'>
				<div className='muallif__wrapper'>
					<p className='muallif__text'>
						Agar inson ilm nuri bilan o‘z yo‘lini yoritmasa, zulmat va nodonlik
						ko‘chasida qoladi. Kishi qalbining nuri ilm va ma’rifat bilan
						baquvvat bo‘ladi. Insoniyatning qadri ilm bilan hosil bo‘ladi.
						Ilmdan hali hech kim zarar ko‘rgan emas. Ilmni egallab olish esa bir
						san’atdir.
					</p>
				</div>
				<div className='muallif__frame'>
					<img className='muallif__heart' src={Heart} alt='' />
					<img className='muallif__vec' src={Vec} alt='' />
				</div>
			</div>

			<div className='muallif__right'>
				<p className='muallif__info'>
					Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida
					yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
				</p>
			</div>
		</div>
	);
};
