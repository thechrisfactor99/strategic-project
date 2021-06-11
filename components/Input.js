
const Input = ({value, onChange, name, label, disabled}) => {
	return (
		<div className="flex flex-col my-1">
			<input disabled={disabled} className="p-1 border-none outline-none border-radius-primary color-border-black" id={name} name={name} onChange={onChange} type="text" value={value} />
			<label for={name} className="m-1 text-info">{label}</label>
		</div>
		)
}

export default Input