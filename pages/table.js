

import Button from '../components/Button'
import DebtForm from '../components/DebtForm'
import Overlay from '../components/Overlay'
import Card from '../components/Card'
import MainNav from '../components/MainNav'

import useList from '../hooks/useList'
import useRecord from '../hooks/useRecord'
import useToggle from '../hooks/useToggle'

import Table from '../components/Table'
import handleFetchDebts from '../handlers/handleFetchDebt'

import handleFetchDebtsLambda from '../handlers/handleFetchDebtsLambda'


const TablePage = () => {

	const toggleForm = useToggle(false)
	const toggleRemoveAlert = useToggle(false)
	const {items, toggleSelect, filterList, sumBalance, removeItems} = useList()

	return (
		<div className="container mx-auto overflow-auto">
			<MainNav />
			<div>
			<h1 className="text-center">Debt Ledger</h1>
			<Table toggleSelect={toggleSelect} items={items} />
			<div className="my-3 flex justify-between mx-3 text-nav-primary	color-text-gray-dark">
				<div>Total Row Count: {items.length}</div>
				<div>Checked Row Count: {filterList(items).length}</div>
				<div className="">Balance: {sumBalance(filterList(items))}</div>
			</div>
			<div className="my-3 flex">
				<Button id="addDebt" onClick={toggleForm.handleToggle} variant="primary" label="Add Debt"/>
				<Button data-testid="removeDebt" id="removeDebt" variant="secondary" onClick={toggleRemoveAlert.handleToggle} label="Remove Debt" />
		    </div>
		    </div>
		    <Overlay variant="center" toggleOverlay={toggleForm.handleToggle} display={toggleForm.toggle}>
				<Card>
					<DebtForm  />      
				</Card>
			</Overlay>
			<Overlay variant="center" toggleOverlay={toggleRemoveAlert.handleToggle} display={toggleRemoveAlert.toggle}>
				<Card>
					<h3>Confirm Delete</h3>
					<div>Are you sure you want to delete these records? Changes are final.</div>      
					<Button onClick={()=>{
						toggleRemoveAlert.handleToggle()
						removeItems(filterList(items))}} variant="primary" label="Yes"/>
					<Button variant="secondary" onClick={toggleRemoveAlert.handleToggle} label="No" />
				</Card>
			</Overlay>
		</div>
	)
}





export default TablePage