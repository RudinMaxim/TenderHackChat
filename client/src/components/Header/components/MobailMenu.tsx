import React from 'react';
import style from '../Header.module.scss';
import { FaGripLines, FaRegUser } from 'react-icons/fa6';
import { Logo, NavBar, Search } from '@/components';
import { LogButton } from '@/components';
import Link from 'next/link';

interface IMobailMenu {
	onMenuToggle: () => void;
}

export default function MobailMenu({
	onMenuToggle,
}: IMobailMenu): React.JSX.Element {
	return (
		<div className={style.mobileMenu}>
			<div className={style.TopBarMenu}>
				<Logo />
				<FaGripLines onClick={onMenuToggle} />
			</div>

			<div className={style.BodyMenu}>
				<Search />
				<NavBar onMenuToggle={onMenuToggle} />
				<LogButton />
			</div>
		</div>
	);
}
