import axios from 'axios';
import { useRef } from 'react';
import { UseAuth } from '../../hook/UseAuth';
import SignIn from '../../assets/img/log-in.png';

import { Link, useNavigate } from 'react-router-dom';

//style
import './login.scss';

export const Login = () => {
	const { token, setToken } = UseAuth();
	console.log(token);

	const navigate = useNavigate();

	const elEmail = useRef();
	const elPassword = useRef();
	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/login', {
				email: elEmail.current.value,
				password: elPassword.current.value,
			})
			.then(function (response) {
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.catch(function (err) {
				console.log(err);
			});
	};

	return (
		<div className='log__inner'>
			<div className='log__frame'>
				<img className='log__img' src={SignIn} alt='temurlan' />
			</div>

			<div className='log__wrapper'>
				<form className='log__form' onSubmit={handleFormSubmit}>
					<h2 className='log__title'>Sign in</h2>
					<p className='log__text'>
						Do not you have an account?
						<Link className='log__link' to={'/register'}>
							Sign up
						</Link>
					</p>
					<input
						ref={elEmail}
						className='log__input'
						type='email'
						placeholder='Email...'
						name='Email'
					/>
					<input
						ref={elPassword}
						className='log__input'
						type='password'
						placeholder='Password...'
						name='Pass'
					/>
					<button className='log__btn' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};
