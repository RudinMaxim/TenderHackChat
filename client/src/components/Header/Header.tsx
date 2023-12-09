import style from './Header.module.scss';
import { LogButton, Logo } from '@/components';
export default function Header(): React.JSX.Element {
	return (
		<>
			<div className='continer'>
				<header className={style.Header}>
					<Logo />
					<LogButton />
				</header>
			</div>
		</>
	);
}
