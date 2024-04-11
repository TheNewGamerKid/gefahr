// place files you want to import through the `$lib` alias in this folder.

import localforage from 'localforage';

export const valueStore = localforage.createInstance({
	name: 'valueStore'
});

export const parseForTagQuery = (tag: string) => {
	const noHashtags = tag.replace('#', '');

	return noHashtags.toLocaleLowerCase();
};
