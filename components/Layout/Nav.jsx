import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.jpg';

function Nav() {
	return (
		<nav>
			<div className="logo-container">
				<Link href="/">
					<Image
						alt="atelier"
						src={logo}
						layout="fixed"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/cooperation">Cooperation</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
