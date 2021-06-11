const Overlay = ({children, display, toggleOverlay, variant="default"}) => {
	
	const show = display ? " transition w-full h-full p-fixed z-overlay" : "hidden"
	const centerVariant = variant == "center" ? "overlay-box" : ""


	return(
	    <div className={show}>
	      <div className={`${centerVariant} h-full p-fixed mx-auto z-overlay2`}>
	        {children}
	      </div>
	      <div onClick={toggleOverlay} className="blur-overlay">
	      </div>
	    </div>
		)
}

export default Overlay