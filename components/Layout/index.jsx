import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
function Layout({ children }) {
	return (
		<>
			{/* Nav */}
			<Nav />
			{/* Main */}
			<main>{children}</main>
			{/* Footer */}
			<Footer />
		</>
	);
}

export default Layout;
