import {useState} from 'react'

const useToggle = (bool=false) => {
	const [toggle, setToggle] = useState(bool)

	const handleToggle = () => {
		const newToggle = !toggle
		setToggle(newToggle)
	}

	return {toggle, handleToggle}
}

export default useToggle