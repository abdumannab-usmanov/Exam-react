import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthRegister } from './context/ContextRegister';
import { AuthProvider } from './context/AuthContext';
import { LangProvider } from './context/LangContext';
import { Theme } from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Theme>
			<AuthRegister>
				<AuthProvider>
					<LangProvider>
						<App />
					</LangProvider>
				</AuthProvider>
			</AuthRegister>
		</Theme>
	</BrowserRouter>
);
