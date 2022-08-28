import { useRef } from 'react';
import axios from 'axios';
import { UseRegister } from '../../hook/UseRegister';
import SignUp from '../../assets/img/SignUp.png';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../hook/UseAuth';

export const Register = () => {
	const { token, setToken } = UseAuth();

	const navigate = useNavigate();

	const first_name = useRef();
	const last_name = useRef();
	const phone = useRef();
	const email = useRef();
	const password = useRef();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const formData = new FormData();

		formData.append('first_name', first_name.current.value);
		formData.append('last_name', last_name.current.value);
		formData.append('phone', phone.current.value);
		formData.append('email', email.current.value);
		formData.append('password', password.current.value);

		axios
			.post('https://book-service-layer.herokuapp.com/user/register', formData)
			.then((response) => {
				if (response.data) {
					setToken(response.data);
					navigate('/');
				}
			})
			.cath((error) => console.log(error));
	};

	return (
		<div className='sign__inner'>
			<div className='sign__frame'>
				<img
					className='sign__img'
					src={SignUp}
					alt='Sign-Up'
					width={500}
					height={500}
				/>
			</div>

			<div className='sign__wrapper'>
				<form onSubmit={handleFormSubmit} className='sign__form'>
					<h2 className='sign__title'>Sign up</h2>
					<p className='sign__text'>
						Already have an account?{' '}
						<Link className='log__link' to={'/'}>
							Sign in
						</Link>
					</p>

					<input
						ref={first_name}
						className='sign__input'
						type='text'
						name='first_name'
						placeholder='First name'
					/>
					<input
						ref={last_name}
						className='sign__input'
						type='text'
						name='last_name'
						placeholder='Last name'
					/>
					<input
						ref={phone}
						className='sign__input sign__input--phone'
						type='tel'
						name='phone'
						placeholder='Phone'
					/>
					<input
						ref={email}
						className='sign__input'
						type='email'
						name='email'
						placeholder='Email'
					/>
					<input
						ref={password}
						className='sign__input'
						type='password'
						name='password'
						placeholder='Password'
					/>

					<div className='sign__button'>
						<button className='sign__btn' type='submit'>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
