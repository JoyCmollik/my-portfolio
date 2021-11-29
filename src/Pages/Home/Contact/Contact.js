import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const formRef = useRef();
	const onSubmit = (e) => {
		emailjs
			.sendForm(
				'service_uia2inq',
				'template_ww8mqno',
				formRef.current,
				'user_0KKp1r11d9WoonRTheXB3'
			)
			.then(
				(result) => {
					console.log(result.text);
					formRef.current = '';
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.preventDefault();
	};
	return (
		<div className='flex justify-center items-center'>
			<div className='w-full space-y-4' style={{ maxWidth: '700px' }}>
				<h4 className='text-4xl font-bold text-center'>Get In Touch</h4>
				<div className='w-full'>
					<form ref={formRef} onSubmit={onSubmit}>
						<div className='w-full grid grid-cols-12 place-items-center gap-4'>
							<input
								className='col-span-6 w-full p-2 bg-main text-secondary outline-none'
								type='text'
								placeholder='Name'
								name='user_name'
							/>

							<input
								className='col-span-6 w-full p-2 bg-main text-secondary outline-none'
								type='email'
								placeholder='Email'
								name='user_email'
							/>
							<input
								className='col-span-12 w-full p-2 bg-main text-secondary outline-none'
								type='text'
								placeholder='Subject'
								name='subject'
							/>
							<textarea
								className='col-span-12 w-full p-2 bg-main text-secondary outline-none'
								name='message'
								placeholder='Message'
								style={{ resize: 'none' }}
							/>
							<div className='col-span-12 flex justify-end items-end'>
								<button
									className='px-5 py-2 border border-brand text-brand bg-transparent rounded-md'
									type='submit'
								>
									Send Message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
