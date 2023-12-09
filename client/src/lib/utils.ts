export const getCurrentYear = () => {
	const date = new Date();
	return date.getFullYear();
};

export const getFirstLetter = (str: string): string => {
	return str
		.split(' ')
		.map((el) => el[0])
		.join('')
		.toUpperCase();
};
