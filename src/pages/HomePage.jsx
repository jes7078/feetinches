import React, { useState, useEffect } from 'react'
import convertDescriptorToString from 'jest-util/build/convertDescriptorToString'

const HomePage = () => {
	const [ feet, setFeet ] = useState('')
	const [ inches, setInches ] = useState('inches')

	const convertFeet = (eventData) => {
		if (eventData) {
			setFeet(eventData.target.value)
		}
	}

	const convertInches = (eventData) => {
		if (eventData) {
			setInches(eventData.target.value)
		}
	}

	const convert = () => {
		if (feet) {
			setInches(parseInt(feet) * 12)
		} else if (inches) {
			setFeet(parseInt(inches) / 12)
		}
	}

	return (
		<section>
			<h1>Convert feet to inches</h1>
			<section className="theInSection">
				<input className="inputBar" type="text" value={feet} placeholder="feet" onChange={convertFeet} />
				<button className="convertButton" onClick={convert}>
					Convert
				</button>
				<input className="outputBar" type="text" placeholder={inches} onChange={convertInches} />
			</section>
		</section>
	)
}

export default HomePage
