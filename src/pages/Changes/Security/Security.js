import { useEffect, useState } from 'react';
import axios from 'axios';
import { UseAuth } from '../../../hook/UseAuth';
import './security.scss';
import { lang } from '../../../lang/lang';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';


export const Security = () => {
	const { lang: till, setLang } = useContext(LangContext);
	const { token, setToken } = UseAuth();
	const [account, setAccount] = useState({});
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

		const { email, currentPassword, newPassword, confirmPassword } =
			evt.target.elements;

		formData.append('email', email.value);
		formData.append('currentPassword', currentPassword.value);
		formData.append('newPassword', newPassword.value);

		if (newPassword.value === confirmPassword.value) {
			axios
				.put(
					'https://book-service-layer.herokuapp.com/user/security',
					formData,
					{
						headers: {
							Authorization: token.token,
						},
					}
				)
				.then((res) => console.log(res.data))
				.catch((error) => console.log(error));
		} else {
			console.log('tengmas');
		}
	};

	console.log(account);
	return (
		<div className='security'>
			<h2 className='security__title'>{lang[till].account_change}</h2>
			<form onSubmit={HandleProfileForm}>
				<div className='security__box'>
					<div>
						<p className='security__text'>{lang[till].account_account_email}</p>
						<input
							className='security__input'
							type='text'
							name='email'
							defaultValue={account.email}
						/>
						<span className='security__span'>
							{lang[till].account_firsname}
						</span>
					</div>

					<div className='security__wrapper'>
						<p className='security__text'>{lang[till].account_current}</p>
						<input
							className='security__input'
							type='password'
							name='currentPassword'
							defaultValue={account.currentPassword}
						/>
						<span className='security__span'>{lang[till].account_please}</span>
					</div>

					<div className='security__inner'>
						<div className='security__kod'>
							<p className='security__text'>{lang[till].account_password}</p>
							<input
								className='security__password'
								type='password'
								name='newPassword'
							/>
							<span className='security__span'>{lang[till].account_enter}</span>
						</div>

						<div className='security__kod'>
							<p className='security__text'>{lang[till].account_confirm}</p>
							<input
								className='security__password'
								type='password'
								name='confirmPassword'
							/>
							<span className='security__span'>{lang[till].account_enter}</span>
						</div>
					</div>
				</div>

				<button className='security__btn' type='submit'>
					{lang[till].account_save}
				</button>
			</form>
		</div>
	);
};
