import React from 'react';
import Header from '../../Shared/Header/Header';
import resumePdf from '../../../files/Joy_Chandra_Mollik_Resume.pdf';

const Banner = () => {
	return (
		<div className='container mx-auto h-screen flex flex-col'>
			<Header />
			<div className='flex-grow flex justify-left items-center'>
				<div className='space-y-5'>
					<p className='text-brand font-mono text-lg'>
						Hi, my name is
					</p>
					<h1 className='text-7xl font-bold'>Joy Chandra Mollik</h1>
					<h2 className='text-5xl font-bold text-secondary'>
						Who does a lot of things in the <br />
						web-development.
					</h2>
					<p className='text-secondary lg:w-5/12'>
						I'm a <span className='text-brand'>web developer</span>.
						I love to develop UI that contributes to the real world
						and comforts the users. I am a student in my educational
						life and a lifelong learner in my place of interests.
					</p>
					<div className='flex items-center space-x-4'>
						<a
							className='inline-block btn'
							href={resumePdf}
							download
						>
							Download My Resume!
						</a>
						<a href='#contact' className='inline-block btn'>
							Contact Me
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
