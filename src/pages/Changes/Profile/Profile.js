import { useEffect, useState } from 'react';
import axios from 'axios';
import { UseAuth } from '../../../hook/UseAuth';
import { lang } from '../../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import './profile.scss';
import Camera from "../../../assets/img/Camera.svg"

export const Profile = () => {
	const { lang: till, setLang } = useContext(LangContext);
	const { token, setToken } = UseAuth();
	const [account, setAccount] = useState([]);
	console.log(account);
	useEffect(() => {
		axios
			.get('https:book-service-layer.herokuapp.com/user/me', {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => setAccount(res.data))
			.catch((err) => console.log(err));
	}, [token]);

	const HandleProfileForm = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		const { first_name, last_name, phone, image } = evt.target.elements;

		formData.append('first_name', first_name.value);
		formData.append('last_name', last_name.value);
		formData.append('phone', phone.value);
		formData.append('image', image.files[0]);
		axios
			.put('https:book-service-layer.herokuapp.com/user/account', formData, {
				headers: {
					Authorization: token.token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((error) => console.log(error));
	};

	return (
		<div className='profile'>
			<form className='profile__form' onSubmit={HandleProfileForm}>
				<div className='profile__frameImg'>
					<img
						className='profile__img'
						src={`https://book-service-layer.herokuapp.com/${account.image}`}
						alt={account.first_name}
						width={100}
						height={100}
					/>
					<label className='profile__label'>
						<img className='camera' src={Camera} alt="camera" /> 
					<input className='profile__fileImg' type='file' name='image' />
					</label>
				</div>

				<div>
					<div className='profile__right'>
						<h2 className='profile__title'>{lang[till].my_profile}</h2>
						<div className='profile__wrapper'>
							<p className='profile__text'>{lang[till].profi_name}</p>
							<input
								className='profile__input'
								type='text'
								name='first_name'
								defaultValue={account.first_name}
							/>
							<span className='profile__span'>{lang[till].profi_pleas}</span>
						</div>

						<div>
							<p className='profile__text'>{lang[till].profi_last}</p>
							<input
								className='profile__input'
								type='text'
								name='last_name'
								defaultValue={account.last_name}
							/>
							<span className='profile__span'>{lang[till].profi_enter}</span>
						</div>

						<div className='profile__framephone'>
							<p className='profile__text'>{lang[till].profi_phone}</p>
							<input
								className='profile__input'
								type='text'
								placeholder='+61412345678'
								name='phone'
								defaultValue={account.phone}
							/>
							<span className='profile__span'>{lang[till].profi_number}</span>
						</div>
					</div>

					<button className='profile__btn' type='submit'>
						{lang[till].account_save}
					</button>
				</div>
			</form>
		</div>
	);
};
