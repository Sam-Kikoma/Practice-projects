import { navLinks } from "../../constants/index.ts";

const Nav = () => {
	return (
		<nav>
			<div>
				<p>DEPLACE MAISON</p>
			</div>
			<ul>
				{navLinks.map((link) => (
					<li key={link.id}>{link.title}</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
