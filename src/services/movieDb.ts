import type { MovieMatch } from "../types";

// Updated Interface: No Quote, Added Acousticness
interface MovieEntry extends MovieMatch {
  valence: number;      // 0.0 (Sad) -> 1.0 (Happy)
  energy: number;       // 0.0 (Chill) -> 1.0 (Intense)
  acousticness: number; // 0.0 (Synthetic/Action) -> 1.0 (Organic/Drama)
}

export const MOVIE_DATABASE: MovieEntry[] = [
  // ==========================================
  // QUADRANT 1: HAPPY & INTENSE (Action/Adventure/Pop)
  // Typically Low Acousticness (Electronic/Loud)
  // ==========================================
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animated Action",
    valence: 0.9, energy: 0.95, acousticness: 0.1
  },
  {
    title: "Baby Driver",
    genre: "Action Crime",
    valence: 0.75, energy: 0.9, acousticness: 0.2
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Adventure Comedy",
    valence: 0.8, energy: 0.7, acousticness: 0.4
  },
  {
    title: "Scott Pilgrim vs. the World",
    genre: "Action Comedy",
    valence: 0.85, energy: 0.9, acousticness: 0.1
  },
  {
    title: "La La Land",
    genre: "Musical Romance",
    valence: 0.65, energy: 0.8, acousticness: 0.6 // Higher acoustic (Jazz/Piano)
  },
  {
    title: "Everything Everywhere All At Once",
    genre: "Sci-Fi Adventure",
    valence: 0.7, energy: 1.0, acousticness: 0.2
  },
  {
    title: "Palm Springs",
    genre: "Rom-Com",
    valence: 0.8, energy: 0.75, acousticness: 0.3
  },
  {
    title: "Singin' in the Rain",
    genre: "Classic Musical",
    valence: 0.95, energy: 0.65, acousticness: 0.7
  },
  {
    title: "School of Rock",
    genre: "Comedy",
    valence: 0.9, energy: 0.85, acousticness: 0.4
  },
  {
    title: "Ferris Bueller's Day Off",
    genre: "Comedy",
    valence: 0.9, energy: 0.6, acousticness: 0.4
  },
  {
    title: "Top Gun: Maverick",
    genre: "Action",
    valence: 0.8, energy: 0.9, acousticness: 0.05
  },
  {
    title: "Guardians of the Galaxy",
    genre: "Sci-Fi Adventure",
    valence: 0.85, energy: 0.85, acousticness: 0.1
  },

  // ==========================================
  // QUADRANT 2: HAPPY & CHILL (Slice of Life/Cozy)
  // Typically High Acousticness (Organic/Instrumental)
  // ==========================================
  {
    title: "Paddington 2",
    genre: "Family",
    valence: 0.95, energy: 0.4, acousticness: 0.5
  },
  {
    title: "My Neighbor Totoro",
    genre: "Fantasy",
    valence: 0.9, energy: 0.3, acousticness: 0.7
  },
  {
    title: "Chef",
    genre: "Drama Comedy",
    valence: 0.85, energy: 0.5, acousticness: 0.4
  },
  {
    title: "Before Sunrise",
    genre: "Romance",
    valence: 0.75, energy: 0.25, acousticness: 0.9 // Pure dialogue
  },
  {
    title: "Amélie",
    genre: "Rom-Com",
    valence: 0.8, energy: 0.4, acousticness: 0.8
  },
  {
    title: "Good Will Hunting",
    genre: "Drama",
    valence: 0.6, energy: 0.35, acousticness: 0.6
  },
  {
    title: "Marcel the Shell with Shoes On",
    genre: "Mockumentary",
    valence: 0.85, energy: 0.2, acousticness: 0.9
  },
  {
    title: "Kiki's Delivery Service",
    genre: "Fantasy",
    valence: 0.8, energy: 0.3, acousticness: 0.6
  },
  {
    title: "Midnight in Paris",
    genre: "Fantasy Romance",
    valence: 0.7, energy: 0.3, acousticness: 0.5
  },
  {
    title: "The Secret Life of Walter Mitty",
    genre: "Adventure",
    valence: 0.75, energy: 0.45, acousticness: 0.4
  },
  {
    title: "Paterson",
    genre: "Drama",
    valence: 0.7, energy: 0.1, acousticness: 0.8
  },
  {
    title: "Little Miss Sunshine",
    genre: "Comedy Drama",
    valence: 0.65, energy: 0.45, acousticness: 0.6
  },

  // ==========================================
  // QUADRANT 3: SAD & INTENSE (Thriller/Horror)
  // Typically Low Acousticness (Distorted/Industrial)
  // ==========================================
  {
    title: "Whiplash",
    genre: "Drama Thriller",
    valence: 0.2, energy: 0.95, acousticness: 0.8 // Outlier: Acoustic Instruments but Aggressive
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    valence: 0.3, energy: 1.0, acousticness: 0.05
  },
  {
    title: "The Batman",
    genre: "Noir Action",
    valence: 0.15, energy: 0.75, acousticness: 0.2
  },
  {
    title: "Parasite",
    genre: "Thriller",
    valence: 0.2, energy: 0.8, acousticness: 0.3
  },
  {
    title: "Nightcrawler",
    genre: "Thriller",
    valence: 0.1, energy: 0.85, acousticness: 0.1
  },
  {
    title: "Uncut Gems",
    genre: "Crime Thriller",
    valence: 0.25, energy: 0.98, acousticness: 0.2
  },
  {
    title: "Fight Club",
    genre: "Satire",
    valence: 0.3, energy: 0.85, acousticness: 0.2
  },
  {
    title: "Joker",
    genre: "Psychological Thriller",
    valence: 0.05, energy: 0.7, acousticness: 0.4
  },
  {
    title: "Black Swan",
    genre: "Psychological Horror",
    valence: 0.1, energy: 0.8, acousticness: 0.4
  },
  {
    title: "Oldboy",
    genre: "Mystery Thriller",
    valence: 0.1, energy: 0.9, acousticness: 0.1
  },
  {
    title: "Akira",
    genre: "Sci-Fi",
    valence: 0.2, energy: 0.9, acousticness: 0.1
  },
  {
    title: "Train to Busan",
    genre: "Horror",
    valence: 0.15, energy: 0.95, acousticness: 0.1
  },

  // ==========================================
  // QUADRANT 4: SAD & CHILL (Drama/Indie)
  // Typically High Acousticness (Quiet/Atmospheric)
  // ==========================================
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Sci-Fi Romance",
    valence: 0.2, energy: 0.3, acousticness: 0.5
  },
  {
    title: "Her",
    genre: "Sci-Fi Drama",
    valence: 0.3, energy: 0.2, acousticness: 0.8
  },
  {
    title: "Lost in Translation",
    genre: "Drama",
    valence: 0.35, energy: 0.15, acousticness: 0.7
  },
  {
    title: "Moonlight",
    genre: "Drama",
    valence: 0.3, energy: 0.25, acousticness: 0.6
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    valence: 0.25, energy: 0.3, acousticness: 0.4
  },
  {
    title: "Blade Runner 2049",
    genre: "Sci-Fi Noir",
    valence: 0.2, energy: 0.4, acousticness: 0.1 // Exception: Sad/Slow but Synthetic
  },
  {
    title: "Portrait of a Lady on Fire",
    genre: "Romance Drama",
    valence: 0.3, energy: 0.2, acousticness: 0.95
  },
  {
    title: "Manchester by the Sea",
    genre: "Drama",
    valence: 0.1, energy: 0.2, acousticness: 0.7
  },
  {
    title: "The Lobster",
    genre: "Dark Comedy",
    valence: 0.3, energy: 0.35, acousticness: 0.5
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    valence: 0.4, energy: 0.4, acousticness: 0.3
  },
  {
    title: "Melancholia",
    genre: "Sci-Fi Drama",
    valence: 0.05, energy: 0.1, acousticness: 0.4
  },
  {
    title: "A Ghost Story",
    genre: "Fantasy Drama",
    valence: 0.2, energy: 0.1, acousticness: 0.6
  }
];