import React from 'react';
import Header from '../../Shared/Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
	return (
		<div className='container mx-auto space-y-28'>
			<Banner />
			<AboutMe />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
