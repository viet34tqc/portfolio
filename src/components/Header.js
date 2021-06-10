import Link from "next/link";
import {useState, useEffect} from 'react';

const Header = () => {
	const [theme, setTheme] = useState( 'light' );

	useEffect( () => {
		document.documentElement.setAttribute(
			"data-theme",
			localStorage.getItem( 'theme' )
		);
	}, [] )

	const toggleDarkMode = function () {
		saveTheme( theme === 'dark' ? 'light' : 'dark' );
	}

	const saveTheme = function ( theme ) {
		setTheme( theme );
		localStorage.setItem( 'theme', theme );
		document.documentElement.setAttribute(
			"data-theme",
			theme
		);
	}

	return (
		<header className="d-flex space-between align-center">
			<Link href="/">
				<a className="header-logo">VietNguyen</a>
			</Link>

			<nav className="header-nav d-flex space-between">
				<Link href="/">Blog</Link>
				<Link href="mail:viet34tqc@gmail.com">Contact</Link>
				<button className="header-darkmode" onClick={toggleDarkMode}>
					<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
				</button>
			</nav>
		</header>
	);
};

export default Header;

