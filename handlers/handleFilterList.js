const handleFilterList = (list) => {
	let filteredItems = list.filter(it => it.checked == true)
	return filteredItems
}

export default handleFilterList