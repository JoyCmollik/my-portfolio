import React from 'react';

const Header = () => {
	return (
		<div className='container mx-auto py-10 flex justify-between items-center'>
			<h4 className='text-xl text-indigo-100 border-b border-l-8 px-2 py-1 border-brand relative'>
				JoyCmollik
				<span className='absolute -top-2 -right-5 text-xs text-brand font-mono'>
					.dev
				</span>
			</h4>
			<div className='space-x-4 font-mono'>
				<a className='capitalize' href='#about'>
					<span className='mr-2 text-brand'>01.</span>about
				</a>
				<a className='capitalize' href='#experience'>
					<span className='mr-2 text-brand'>02.</span>experience
				</a>
				<a className='capitalize' href='#work'>
					<span className='mr-2 text-brand'>03.</span>work
				</a>
				<a className='capitalize' href='contact'>
					<span className='mr-2 text-brand'>04.</span>contact
				</a>
			</div>
		</div>
	);
};

export default Header;
