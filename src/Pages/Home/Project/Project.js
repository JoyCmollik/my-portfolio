import React from 'react';
import { BsCodeSquare } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
	const { id, githubLink, projectTitle, projectDesc, projectTechs } = project;

	return (
		<div className='space-y-2 p-4 bg-main rounded-md flex flex-col justify-between h-full'>
			<div className='flex justify-between items-center mb-10'>
				<p className='text-4xl text-brand'>
					<BsCodeSquare />
				</p>
				<a
					className='text-xl transition duration-100 hover:text-brand'
					href={githubLink}
					target='_blank'
					rel='noreferrer'
				>
					<FiGithub />
				</a>
			</div>
			<h4 className='font-bold text-lg'>{projectTitle}</h4>
			<p className='text-secondary text-sm'>{projectDesc}</p>
			<div className='flex items-center text-xs font-mono text-secondary flex-wrap'>
				{projectTechs.map((tech, techIdx) => (
					<p key={techIdx} className='bg-dark p-1 mb-1 mr-1 rounded'>
						{tech}
					</p>
				))}
			</div>
			<div className='flex justify-end'>
				<Link to={`project/${id}`}>
					<button className='px-2 py-1 text-brand border border-brand rounded-md'>
						More Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Project;
