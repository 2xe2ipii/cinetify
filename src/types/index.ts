export interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

export interface MovieMatch {
  title: string;
  genre: string;
  quote: string;
  posterPath?: string;
}