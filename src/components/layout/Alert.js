import React, { useContext } from 'react';
import AlertContext from '../../contex/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;

	return (
		alert !== null && (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle' /> {alert.message}
			</div>
		)
	);
};

export default Alert;
