'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
interface IProvider {
	children: ReactNode;
}
export default function ProviderWrapper({ children }: IProvider) {
	return <SessionProvider>{children}</SessionProvider>;
}
