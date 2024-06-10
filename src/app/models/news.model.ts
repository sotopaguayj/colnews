export interface New {
  source: Source
  author: string | null
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

export interface Source {
  id: any
  name: string
}
