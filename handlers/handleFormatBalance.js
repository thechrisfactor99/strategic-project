const handleFormatBalance = (n) => {
// format number 1000000 to 1,234,567
	return Number(n.replace(/[^0-9]+/g, ""))
}

export default handleFormatBalance