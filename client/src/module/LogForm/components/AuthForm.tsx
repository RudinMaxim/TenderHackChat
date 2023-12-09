import { Button, Input } from '@/UI';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const schemaAuthForm = z.object({
	passwordAuth: z.string().min(6),
	emailAuth: z.string().email(),
});
type AuthForm = z.infer<typeof schemaAuthForm>;

export default function AuthForm(): React.JSX.Element {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthForm>({
		resolver: zodResolver(schemaAuthForm),
		mode: 'onBlur',
	});
	const onSubmit = async (data: AuthForm) => {
		const { emailAuth, passwordAuth } = data;

		try {
			await signIn('credentials', {
				email: emailAuth,
				password: passwordAuth,
				redirect: true,
				callbackUrl: '/',
			});
		} catch (error) {
			toast.error(`Чтото пошло не так! Ошибка: ${error}`);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				id='emailAuth'
				label='Почта'
				register={register('emailAuth')}
				error={errors.emailAuth?.message}
				type='email'
			/>
			<Input
				id='passwordAuth'
				label='Пороль'
				register={register('passwordAuth')}
				error={errors.passwordAuth?.message}
				type='password'
			/>

			<div>
				<Button type='submit'>Вход</Button>
			</div>
		</form>
	);
}
