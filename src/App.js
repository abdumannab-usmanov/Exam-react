import './App.scss';
import { Private } from './Private';
import { UseAuth } from './hook/UseAuth';
import { Public } from './Public';

function App() {
	const { token } = UseAuth();

	if (token) {
		return <Private />;
	} else {
		return <Public />; 
	}
}

export default App;
