

const MainNav = ({toggleNav, toggleSearch}) => {
	return(
		<div className="border-b-secondary z-mainnav p-2 color-white flex justify-between">
			<div className="color-text-primary text-header">Strategic Project</div>
			<div className="text-header hidden sm:display">CA</div>
			<div className="text-header sm:hidden">Chris Anwander</div>
		</div>

		)
}

export default MainNav