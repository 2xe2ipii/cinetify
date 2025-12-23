export interface Track {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

export interface AudioFeatures {
  valence: number;
  energy: number;
  danceability: number;
  acousticness: number;
}

export interface MovieMatch {
  title: string;
  genre: string;
  // quote: string;  <-- DELETE THIS LINE
  posterPath?: string;
}