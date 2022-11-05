import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import './Contact.scss'

const Contact = () => {
	return (
		<div className="contact-page">
			<div className="contact-container">
				<div className="contact-inner">
					<h2 className="site-title">Contact</h2>
					<Formik
						initialValues={{
							name: '',
							email: '',
							message: '',
						}}
						validationSchema={Yup.object({
							name: Yup.string().min(2, 'Too short!').required('Full Name is required'),
							email: Yup.string().min(2, 'Too short!').email('It is not valid.').required('Email is required'),
							message: Yup.string().min(2, 'Too short!').required('Message is required'),
						})}
						onSubmit={(values) => {
							console.log(values)
						}}>
						{({ errors, touched }) => (
							<Form>
								<div className="contact-inputs">
									<div>
										<Field id="name" name="name" placeholder="Full Name" />
										{errors.name && touched.name && <div className="input-error">{errors.name}</div>}
									</div>
									<div>
										<Field name="email" placeholder="Email" type="email" />
										{errors.email && touched.email && <div className="input-error">{errors.email}</div>}
									</div>
								</div>
								<Field as="textarea" name="message" placeholder="Message..." type="email" />
								{errors.email && touched.email && <div className="input-error">{errors.message}</div>}
								<button type="submit">Send Message</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default Contact
