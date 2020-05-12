import React from 'react';
import {
	Button,
	InputField,
	Stack,
	Text,
	SocialButton,
	Heading,
} from '@kiwicom/orbit-components/lib';
import ChevronLeft from '@kiwicom/orbit-components/lib/icons/ChevronLeft';

import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { setIsBackToLanding } from '../actions';


const RegisterDonor = () => {
	const dispatch = useDispatch();

	const handleBackToLandingOnClick = () => {
		dispatch(setIsBackToLanding());
	};

	const handleFormSubmission = (values) => {
		// TODO: API to call Firebase
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email().required('Required'),
		password: Yup.string()
			.required('Required')
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				'Please create a password with at least 12 characters, comprimising a mix of uppercase and lowercase letters, numbers and symbols'
			),
		passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			passwordConfirmation: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleFormSubmission(values);
		},
	});

	return (
		<div>
			<Button type="secondary" circled iconLeft={<ChevronLeft />} onClick={handleBackToLandingOnClick} spaceAfter="normal"/>
			<Text align="center" as="div">
				<Heading spaceAfter="largest" weight="bold">
					I am a Donor
				</Heading>
			</Text>
			<SocialButton type="google" fullWidth={true} spaceAfter="normal">
				Sign in with Google
			</SocialButton>
			<Text align="center" spaceAfter="normal">
				OR
			</Text>
			<form onSubmit={formik.handleSubmit}>
				<Stack spacing="comfy">
					<InputField
						type="email"
						value="name@example.co"
						label="Email"
						name="email"
						placeholder="e.g. name@email.com"
						error={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
						{...formik.getFieldProps('email')}
					/>

					<InputField
						type="password"
						label="Create a password"
						name="password"
						spaceAfter={'normal'}
						help="Please create a password with at least 12 characters, comprimising a mix of uppercase and lowercase letters, numbers and symbols"
						error={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
						{...formik.getFieldProps('password')}
					/>

					<InputField
						type="password"
						label="Confirm password"
						name="passwordConfirm"
						error={
							formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
								? formik.errors.passwordConfirmation
								: ''
						}
						{...formik.getFieldProps('passwordConfirmation')}
					/>

					<Button submit fullWidth={true}>
						Register
					</Button>
				</Stack>
			</form>
		</div>
	);
};

export default RegisterDonor;
