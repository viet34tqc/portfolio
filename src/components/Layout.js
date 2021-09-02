import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.jpg" />
			</Head>
			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
