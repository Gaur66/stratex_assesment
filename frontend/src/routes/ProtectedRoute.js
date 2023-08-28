import React from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
	const temp = localStorage.getItem("token_rare");

	if (!temp || temp === null || undefined) {
		return <Navigate to="/login" />;
	}

	return (
		<>
			{children}
			
		</>
	);
};

export default ProtectedRoute;