import Input from './Input'
import Button from './Button'
import useRecord from '../hooks/useRecord'

const DebtForm = () => {
	//{record, handleInput, handleSubmit, status}
	//status={status} handleSubmit={submit} record={record} handleInput={input}
	const {record, input, submit, status} = useRecord({creditor: "", firstName: "", lastName: "",
		minPayPerc: 0, balance: 0})
	let submitMessage
	let submitColor



	return (
		<div className="flex flex-col">
			<h2>New Debt</h2>
			{status.status == "Error" ? <div className="color-text-error text-nav-primary">{`${status.status}: ${status.message}`}</div> : status.status == 'Success' ? <div className="color-text-success text-nav-primary">{`${status.status}! ${status.message}`}</div> : null}

			<Input disabled={status.status == 'Success'} label="Creditor" name="creditor" onChange={input} label="Creditor" value={record.creditor} />
			<Input disabled={status.status == 'Success'} label="Creditor" name="firstName" onChange={input} label="First Name" value={record.firstName} />
			<Input disabled={status.status == 'Success'} label="Creditor" name="lastName" onChange={input} label="Last Name" value={record.lastName} />
			<Input disabled={status.status == 'Success'} label="Creditor" name="minPayPerc" onChange={input} label="Min Pay %" value={record.minPayPerc} />
			<Input disabled={status.status == 'Success'} label="Creditor" name="balance" onChange={input} label="Balance ($)" value={record.balance} />
			{status.status != 'Success' ? <Button onClick={submit} label="Submit" /> : null }
		</div>
		)
}

export default DebtForm