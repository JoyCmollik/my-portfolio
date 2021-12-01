import React from 'react';
import Project from '../Project/Project';

const projects = [
	{
		id: 1,
		githubLink:
			'https://github.com/JoyCmollik/eyeside-niche-website-client-side-react',
		projectTitle: 'Eyeside (a niche product showcasing project)',
		projectDesc:
			'A project that showcases eyewear collection and enables users to purchase and manage their orders.',
		projectTechs: ['TailwindCSS', 'React', 'NodeJS', 'MongoDB'],
	},
	{
		id: 2,
		githubLink: 'https://github.com/JoyCmollik/grow-skill-client-side',
		projectTitle: 'growSkill (life skill enhancing educational platform)',
		projectDesc:
			'A project that showcases eyewear collection and enables users to purchase and manage their orders.',
		projectTechs: ['TailwindCSS', 'HTML5', 'React', 'React Router'],
	},
	{
		id: 3,
		githubLink: 'https://github.com/JoyCmollik/doctors-origin-client-side',
		projectTitle: 'Doctors Portal (An online platform to book doctors)',
		projectDesc:
			'This is a website focused on making all the doctors available online so the users can book their desired doctors sitting in their home.',
		projectTechs: ['TailwindCSS', 'React', 'NodeJS', 'MongoDB'],
	},
	{
		id: 4,
		githubLink: 'https://github.com/JoyCmollik/explore-dream-client-side',
		projectTitle: 'exploreDream (Tour planner website)',
		projectDesc:
			'This is a simple project where a tour planner platform is being created along with the maintenance of taking booking from the users.',
		projectTechs: ['TailwindCSS', 'React', 'NodeJS', 'MongoDB'],
	},
];

const Projects = () => {
	return (
		<div className='space-y-5'>
			<h4 className='text-4xl font-bold text-center'>Projects</h4>
			<p className='text-secondary text-center w-4/12 mx-auto'>
				These are the recent projects that I have done. I learnt a lot
				while making them functional. Do check them.
			</p>
			<div className='grid grid-cols-4 gap-4 place-items-center'>
				{projects.map((project, projectIdx) => (
					<Project key={projectIdx} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
