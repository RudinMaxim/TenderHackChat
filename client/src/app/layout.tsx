import Provider from '@/Context/Provider';
import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.scss';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'TenderHackChat',
	description: 'TenderHackChat',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider>
			<html lang='ru'>
				<body className={inter.className}>
					<Header />
					{children}
				</body>
			</html>
		</Provider>
	);
}
