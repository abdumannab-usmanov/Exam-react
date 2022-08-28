import './language.scss';
import { lang } from '../../../lang/lang';
import { LangContext } from '../../../context/LangContext';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/Theme';

export const Language = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { lang: till, setLang } = useContext(LangContext);
	return (
		<div className='security'>
			<h2 className='security__title'>{lang[till].settings_settings}</h2>
			<div className='security__box'>
				<div>
					<p className='security__text'>{lang[till].ettings_language}</p>
					<select
						defaultValue={till}
						onChange={(evt) => setLang(evt.target.value)}
						className='language__select'>
						<option value='en'>English</option>
						<option value='ru'>Russian</option>
						<option value='uz'>Uzbek</option>
					</select>
					<span className='security__span switch__span'>{lang[till].profi_pleas}</span>

				
					<label className='switch'>
						<input onChange={() => {
							if (theme === 'light') {
								setTheme('dark');
							} else {
								setTheme('light');
							}
						}} className='switch__input' type='checkbox' defaultChecked />
						<span className='slider round' />
					</label>
				</div>
			</div>

			<button className='security__btn' type='submit'>
				{lang[till].account_save}
			</button>
		</div>
	);
};
