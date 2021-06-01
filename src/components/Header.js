import Link from "next/link";

const Header = () => {
	return (
		<header className="d-flex space-between align-center">
			<Link href="/">
				<a className="header-logo">VietNguyen</a>
			</Link>

			<nav className="header-nav d-flex space-between">
				<Link href="/">Blog</Link>
				<Link href="mail:viet34tqc@gmail.com">Contact</Link>
			</nav>
		</header>
	);
};

export default Header;

