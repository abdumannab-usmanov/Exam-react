import { NavLink } from 'react-router-dom';
import {Routes,Route} from "react-router-dom"
import { Language } from '../Changes/Language/Language';
import { Profile } from '../Changes/Profile/Profile';
import { Security } from '../Changes/Security/Security';
import { lang } from '../../lang/lang';
import { LangContext } from '../../context/LangContext';
import "./myAccount.scss"
import { useContext } from 'react';



export const MyAccount = () => {
	const {lang:till} = useContext(LangContext)
	return (
		<div style={{ backgroundColor: 'white' }}>
			<ul className='myaccount__list'>
				<li className='myaccount__item'>
					<NavLink className={"myaccount__link"} to={"/myaccount"}>{lang[till].my_account}</NavLink>
				</li>
				<li className='myaccount__item'>
					<NavLink className={"myaccount__link"} to={"secutity"}>{lang[till].accounty_Security}</NavLink>
				</li>
				<li className='myaccount__item'>
					<NavLink className={"myaccount__link"} to={"payment"}>{lang[till].settings_settings}</NavLink>
				</li>
			</ul>

      <div>
        <Routes>
          <Route index element={<Profile/>}/>
          <Route path='secutity' element={<Security/>}/>
          <Route path='payment' element={<Language/>}/>
        </Routes>
      </div>



		</div>
	);
};


