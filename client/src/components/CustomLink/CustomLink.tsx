import React from 'react';
import Link from 'next/link';
import style from './CustomLink.module.scss';

interface ICustomLink {
	to: string;
	children: React.ReactNode;
	[key: string]: any;
}

export default function CustomLink({
	to,
	children,
	...rest
}: ICustomLink): React.JSX.Element {
	return (
		<Link href={to} className={style.CustomLink} {...rest}>
			{children}
		</Link>
	);
}
