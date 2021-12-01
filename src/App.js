import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ProjectView from './Pages/ProjectView/ProjectView';

function App() {
	return (
		<div className='bg-dark text-primary'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project/:id' element={<ProjectView />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
