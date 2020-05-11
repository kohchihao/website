import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Button from "@kiwicom/orbit-components/lib/Button";
import { useDispatch, useSelector } from 'react-redux';

import {
	setNpoOrganizationDetails,
	setIsNpoRegister,
	setIsNpoDetails,
	setIsDonorRegister,
	setIsBackToLanding,
	setIsBackToNpoRegister,
} from '../actions';

const RegisterLanding = (props, state) => {
	const dispatch = useDispatch();

	const handleNpoOnClick = () => {
		dispatch(setIsNpoRegister())
	}

	const handleDonorOnClick = () => {
		dispatch(setIsDonorRegister())
	}

	return (
		<div>
      RegisterLanding
			<Button onClick={handleNpoOnClick}>NPO</Button>
			<Button onClick={handleDonorOnClick}>Donor</Button>
		</div>
	);
};

export default withRouter(RegisterLanding);
