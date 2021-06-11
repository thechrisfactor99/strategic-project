const Button = ({onClick, label, id, variant="primary"}) =>{
	
	const primary = "transition hover:color-white hover:color-text-primary hover:color-border-primary m-1 text-nav-primary border-radius-curved px-2 py-1 color-text-white color-primary"
	const secondary = "transition hover:color-text-white hover:color-primary color-border-primary m-1 text-nav-primary border-radius-curved px-2 py-1 color-text-primary color-white"

	return(
		<button data-testid={id} className={variant == "primary" ? primary : secondary} onClick={onClick}>{label}</button>
		)
}

export default Button