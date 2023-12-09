import style from './Button.module.scss';

interface IButton {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	value?: string | string[];
	disabled?: boolean;
	[key: string]: any;
}

export default function Button({
	children,
	type = 'button',
	value,
	disabled = false,
	...rest
}: IButton) {
	return (
		<button
			type={type}
			value={value}
			disabled={disabled}
			className={style.Button}
			{...rest}>
			{children}
		</button>
	);
}
