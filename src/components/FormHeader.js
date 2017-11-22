import React from 'react'

const FormHeader = ({ pageHeader }) => {

	return(
		<nav className="navbar navbar-dark sidebar-heading info-color mb-10 justify-content-center" style={{ padding: 30 }}>
    	<h5 className="white-text">{pageHeader}</h5>
  	</nav>
	)
}

export default FormHeader