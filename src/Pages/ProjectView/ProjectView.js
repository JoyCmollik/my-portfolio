import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import { SiSitepoint } from 'react-icons/si';
import { useParams } from 'react-router';

const ProjectView = () => {
	const { id } = useParams();
	const [project, setProject] = useState();

	useEffect(() => {
		fetch('/projectDb.json')
			.then((response) => response.json())
			.then((data) => {
				const project = data.find(
					(project) => project.id === Number(id)
				);
				setProject(project);
			});
	}, []);

	return (
		<div className='min-h-screen'>
			<div className='bg-main h-52'>
				<Header />
			</div>
			<div className='space-y-10 container mx-auto -mt-20 bg-dark rounded-md p-4'>
				<div className='grid grid-cols-2 place-items-center'>
					<img
						className='rounded-md'
						src={project?.home_sc}
						alt='project'
					/>
					<div className='p-4 space-y-5'>
						<h4 className='text-4xl font-bold'>
							{project?.projectTitle}
						</h4>
						<div className='grid grid-cols-2 gap-4'>
							{project &&
								project.project_features.map(
									(feature, featureIdx) => (
										<div
											key={featureIdx}
											className='flex justify-start space-x-4 text-secondary'
										>
											<div className='text-2xl text-brand bg-main flex items-center p-2 rounded-md'>
												<SiSitepoint />
											</div>
											<p>{feature}</p>
										</div>
									)
								)}
						</div>
						{/* links */}
						<div className='flex items-center flex-wrap space-x-2'>
							<a
								className='btn-sm'
								href={project?.live_side_link}
								target='_blank'
								rel='noreferrer'
							>
								Live Site
							</a>
							<a
								className='btn-sm'
								href={project?.client_side_link}
								target='_blank'
								rel='noreferrer'
							>
								Client Side
							</a>
							<a
								className='btn-sm'
								href={project?.server_side_link}
								target='_blank'
								rel='noreferrer'
							>
								Server Side
							</a>
						</div>
					</div>
				</div>
				<div className='space-y-10'>
					<h4 className='text-xl'>More Screenshots</h4>
					<div className='grid grid-cols-2 gap-4'>
						{project &&
							project?.more_sc.map(
								(projectView, projectViewIdx) => (
									<img
										key={projectViewIdx}
										className='object-cover rounded-md'
										src={projectView}
										alt='project'
									/>
								)
							)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
