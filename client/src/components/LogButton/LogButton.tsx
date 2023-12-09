'use client';
import { getFirstLetter } from '@/lib/utils';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { CustomLink } from '..';
import style from './LogButton.module.scss';

export default function LogButton(): React.JSX.Element {
	const { data: session } = useSession();

	if (!session) {
		return (
			<CustomLink to='/' onClick={() => signIn()}>
				Вход
			</CustomLink>
		);
	}

	return (
		<div className={style.LogButton}>
			{session && (
				<CustomLink to='/Dashboard'>
					{session.user?.image ? (
						<>
							<Image src={session.user?.image} alt={`${session.user.name}`} />
						</>
					) : (
						<>
							<span>{getFirstLetter(`Max Helby`)}</span>
						</>
					)}
				</CustomLink>
			)}
		</div>
	);
}
