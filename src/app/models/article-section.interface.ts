export interface IArticle {
	header: string;
	sections: Array<IArticleSection>;
}

export interface IArticleSection {
	header: string;
	text: string;
}
