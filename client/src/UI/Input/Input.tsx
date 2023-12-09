import type { UseFormRegister } from 'react-hook-form';
import style from './Input.module.scss';
interface IputProps {
	id: string;
	label?: string;
	register?: UseFormRegister<any>;
	placeholder?: string;
	error?: any;
	type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'checkbox';
}

export function Input({
	id,
	label,
	register,
	error,
	placeholder,
	type = 'text',
}: IputProps) {
	return (
		<div className={style.Input}>
			{label && <label htmlFor={id}>{label}:</label>}
			<input {...register} id={id} placeholder={placeholder} type={type} />
			{error && <p className={style.error}>{error}</p>}
		</div>
	);
}
