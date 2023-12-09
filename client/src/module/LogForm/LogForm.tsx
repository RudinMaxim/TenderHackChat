'use client';
import { useState } from 'react';
import style from './LogForm.module.scss';
import AuthForm from './components/AuthForm';

export default function LogForm(): React.JSX.Element {
	return (
		<main className='continer'>
			<section className={style.LogForm}>
				<div className={style.LogFormInner}>
					<h1>Вход</h1>

					<div className={style.FormContiner}>
						<AuthForm />
					</div>
				</div>
			</section>
		</main>
	);
}
