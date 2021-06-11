



const Table = ({items, toggleSelect}) => {


	const rows = items.map((row) => (
			<tr key={row.id}>
				<td className="sm:text-info px-3 sm:px-1 text-center"><input id={row.id} className="mx-auto" onClick={() => toggleSelect(row.id)} type="checkbox" checked={row.checked} /></td>
				<td className="sm:text-info py-1 w-col text-nav-primary color-text-gray-dark">{row.creditor}</td>
				<td className="sm:text-info py-1 w-col text-nav-primary color-text-gray-dark">{row.firstName}</td>
				<td className="sm:text-info py-1 w-col text-nav-primary color-text-gray-dark">{row.lastName}</td>
				<td className="sm:text-info py-1 px-5 text-right text-nav-primary color-text-gray-dark">{row.minPayPerc}</td>
				<td className="sm:text-info py-1 px-5 text-right text-nav-primary color-text-gray-dark">{row.balance}</td>
			</tr>
		)
	)

	const Header = () => {
		return(
			<tr>
				<th className=""></th>
				<th className="sm:text-info text-left">Creditor</th>
				<th className="sm:text-info text-left">First Name</th>
				<th className="sm:text-info text-left">Last Name</th>
				<th className="sm:text-info">Min Pay %</th>
				<th className="sm:text-info">Balance</th>
			</tr>
			)
	} 

	return (
		<table className="overflow-auto my-3 mx-auto">
			<Header/>
			{rows}
		</table>
		)
}

export default Table