import { MOVIE_DATABASE } from "./movieDb";
import type { MovieMatch, AudioFeatures } from "../types";

export function findMovieMatch(
  features: AudioFeatures[]
): MovieMatch {
  
  // 1. Calculate User's Average Vibe
  // We use simple averaging.
  const count = features.length;
  if (count === 0) {
    // Fallback if audio features fail, return a random movie
    const randomIndex = Math.floor(Math.random() * MOVIE_DATABASE.length);
    return MOVIE_DATABASE[randomIndex]; 
  }

  const avgValence = features.reduce((sum, f) => sum + (f.valence || 0), 0) / count;
  const avgEnergy = features.reduce((sum, f) => sum + (f.energy || 0), 0) / count;

  console.log(`User Vibe -> Valence: ${avgValence.toFixed(2)} | Energy: ${avgEnergy.toFixed(2)}`);

  // 2. Find the "Nearest Neighbor"
  // We calculate the Euclidean distance between the User's point and every Movie's point.
  // Distance = sqrt( (x2-x1)^2 + (y2-y1)^2 )
  
  let bestMatch = MOVIE_DATABASE[0];
  let minDistance = Infinity;

  // We shuffle the DB slightly so ties are broken randomly
  const shuffledDb = [...MOVIE_DATABASE].sort(() => 0.5 - Math.random());

  for (const movie of shuffledDb) {
    const dist = Math.sqrt(
      Math.pow(movie.valence - avgValence, 2) + 
      Math.pow(movie.energy - avgEnergy, 2)
    );

    if (dist < minDistance) {
      minDistance = dist;
      bestMatch = movie;
    }
  }

  return {
    title: bestMatch.title,
    genre: bestMatch.genre,
    quote: bestMatch.quote
  };
}