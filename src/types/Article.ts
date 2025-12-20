// types/Article.ts
export interface Article {
  slug: string;
  title: string;
  category: string;
  shortdescription?: string;
  description: string;
  image: string;
  author: string;
  authorImage?: string;
  role?: string;
  date: string;
}

export interface MainArticle extends Article {}

