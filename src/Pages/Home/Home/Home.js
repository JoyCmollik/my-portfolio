import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
	return (
		<div className='container mx-auto space-y-10'>
			<Banner />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
