import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { API_URL } from '../src/lib/constants';
import axios from 'axios';
export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/api/auth/login',
	},
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Вход',
			credentials: {
				email: {
					label: 'email',
					type: 'email',
					placeholder: 'email',
				},
				password: {
					label: 'password',
					type: 'password',
					placeholder: 'password',
				},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials.password) return null;

				const payload = {
					email: credentials?.email,
					password: credentials?.password,
				};

				const res = await axios.post(`${API_URL}/login`, payload);
				const user = await res.data;

				if (res.status === 200 && user) {
					const { password, ...userInfo } = user;
					return userInfo as User;
				}

				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token as any;
			return session;
		},
	},
};
