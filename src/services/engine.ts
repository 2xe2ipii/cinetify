// CHANGE THIS IMPORT to use your new generated file
import { MOVIE_DATABASE } from "../data/movies"; 
import type { MovieMatch, AudioFeatures } from "../types";

export function findMovieMatch(features: AudioFeatures[]): MovieMatch {
  const count = features.length;

  // Fallback if no data
  if (count === 0) {
    const randomIndex = Math.floor(Math.random() * MOVIE_DATABASE.length);
    return MOVIE_DATABASE[randomIndex]; 
  }

  // 1. Calculate User's Average Vibe
  const avgValence = features.reduce((sum, f) => sum + (f.valence || 0), 0) / count;
  const avgEnergy = features.reduce((sum, f) => sum + (f.energy || 0), 0) / count;
  const avgAcoustic = features.reduce((sum, f) => sum + (f.acousticness || 0), 0) / count;

  // 2. Find Nearest Neighbor (3D Distance)
  let bestMatch = MOVIE_DATABASE[0];
  let minDistance = Infinity;

  // Shuffle slightly so ties aren't always alphabetical
  const shuffledDb = [...MOVIE_DATABASE].sort(() => 0.5 - Math.random());

  for (const movie of shuffledDb) {
    const movieAcoustic = (movie as any).acousticness ?? 0.5;

    // Euclidean Distance Formula in 3D
    const dist = Math.sqrt(
      Math.pow(movie.valence - avgValence, 2) + 
      Math.pow(movie.energy - avgEnergy, 2) +
      Math.pow(movieAcoustic - avgAcoustic, 2)
    );

    if (dist < minDistance) {
      minDistance = dist;
      bestMatch = movie;
    }
  }

  // --- ACCURACY CHECK ---
  // Look in your Browser Console (F12) to see this table!
  console.log("%c MATCH FOUND ", "background: #22c55e; color: #000; font-weight: bold;");
  console.table({
    "User Vibe": { Valence: avgValence.toFixed(2), Energy: avgEnergy.toFixed(2), Acoustic: avgAcoustic.toFixed(2) },
    "Movie Match": { 
      Title: bestMatch.title,
      Valence: bestMatch.valence, 
      Energy: bestMatch.energy, 
      Acoustic: (bestMatch as any).acousticness 
    },
    "Distance": minDistance.toFixed(4)
  });
  // ----------------------

  return {
    title: bestMatch.title,
    genre: bestMatch.genre,
    // Quote is removed
  };
}