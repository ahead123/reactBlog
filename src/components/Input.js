import React from 'react'

const Input = ({ placeholder, changeHandler }) => {
	return (
		<input placeholder={placeholder} onChange={changeHandler} />
	)
}

export default Input