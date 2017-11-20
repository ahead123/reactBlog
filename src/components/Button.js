import React from 'react'

const Button = ({ text, className, handler }) => {
	return (
		<button className={className} onClick={handler}>{text}</button>
	)
}

export default Button