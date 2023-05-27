export type Categories = 'Svelte' | 'Compiler';

export type Post = {
	title: string;
	description: string;
	slug: string;
	date: Date;
	categories: Categories[];
	published: boolean;
};
