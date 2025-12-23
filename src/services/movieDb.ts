import type { MovieMatch } from "../types";

// Extends the base type to include the "Vibe Coordinates"
interface MovieEntry extends MovieMatch {
  valence: number; // 0.0 (Depressing) -> 1.0 (Euphoric)
  energy: number;  // 0.0 (Sleepy) -> 1.0 (Chaotic)
}

export const MOVIE_DATABASE: MovieEntry[] = [
  // ==========================================
  // QUADRANT 1: HAPPY & INTENSE (High Valence, High Energy)
  // Genres: Action Comedy, Musical, Adventure, Pop Cinema
  // ==========================================
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animated Action",
    quote: "It's a leap of faith. That's all it is, Miles. A leap of faith.",
    valence: 0.9, energy: 0.95
  },
  {
    title: "Baby Driver",
    genre: "Action Crime",
    quote: "You don't belong in this world, Baby.",
    valence: 0.75, energy: 0.9
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Adventure Comedy",
    quote: "Rudeness is merely the expression of fear.",
    valence: 0.8, energy: 0.7
  },
  {
    title: "Scott Pilgrim vs. the World",
    genre: "Action Comedy",
    quote: "I'm in lesbians with you.",
    valence: 0.85, energy: 0.9
  },
  {
    title: "La La Land",
    genre: "Musical Romance",
    quote: "Here's to the ones who dream, foolish as they may seem.",
    valence: 0.65, energy: 0.8 // Bittersweet but high energy production
  },
  {
    title: "Everything Everywhere All At Once",
    genre: "Sci-Fi Adventure",
    quote: "In another life, I would have really liked just doing laundry and taxes with you.",
    valence: 0.7, energy: 1.0 // Maximum Chaos
  },
  {
    title: "Palm Springs",
    genre: "Rom-Com",
    quote: "Today is yesterday, and tomorrow is also today.",
    valence: 0.8, energy: 0.75
  },
  {
    title: "Singin' in the Rain",
    genre: "Classic Musical",
    quote: "I'm singing in the rain, just singing in the rain.",
    valence: 0.95, energy: 0.65
  },
  {
    title: "School of Rock",
    genre: "Comedy",
    quote: "You're not hardcore unless you live hardcore.",
    valence: 0.9, energy: 0.85
  },
  {
    title: "Ferris Bueller's Day Off",
    genre: "Comedy",
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    valence: 0.9, energy: 0.6
  },
  {
    title: "Top Gun: Maverick",
    genre: "Action",
    quote: "It's not the plane, it's the pilot.",
    valence: 0.8, energy: 0.9
  },
  {
    title: "Guardians of the Galaxy",
    genre: "Sci-Fi Adventure",
    quote: "We are Groot.",
    valence: 0.85, energy: 0.85
  },

  // ==========================================
  // QUADRANT 2: HAPPY & CHILL (High Valence, Low Energy)
  // Genres: Slice of Life, Ghibli, Gentle Romance, Cozy
  // ==========================================
  {
    title: "Paddington 2",
    genre: "Family",
    quote: "If we're kind and polite, the world will be right.",
    valence: 0.95, energy: 0.4
  },
  {
    title: "My Neighbor Totoro",
    genre: "Fantasy",
    quote: "Try laughing. Then whatever scares you will go away.",
    valence: 0.9, energy: 0.3
  },
  {
    title: "Chef",
    genre: "Drama Comedy",
    quote: "I may not do everything great in my life, but I'm good at this.",
    valence: 0.85, energy: 0.5
  },
  {
    title: "Before Sunrise",
    genre: "Romance",
    quote: "I like to feel his eyes on me when I look away.",
    valence: 0.75, energy: 0.25
  },
  {
    title: "Amélie",
    genre: "Rom-Com",
    quote: "Times are hard for dreamers.",
    valence: 0.8, energy: 0.4
  },
  {
    title: "Good Will Hunting",
    genre: "Drama",
    quote: "It's not your fault.",
    valence: 0.6, energy: 0.35 // Uplifting ending, slow pace
  },
  {
    title: "Marcel the Shell with Shoes On",
    genre: "Mockumentary",
    quote: "Guess what I wear as a hat? A lentil.",
    valence: 0.85, energy: 0.2
  },
  {
    title: "Kiki's Delivery Service",
    genre: "Fantasy",
    quote: "We each need to find our own inspiration.",
    valence: 0.8, energy: 0.3
  },
  {
    title: "Midnight in Paris",
    genre: "Fantasy Romance",
    quote: "That's what the present is. It's a little unsatisfying because life is a little unsatisfying.",
    valence: 0.7, energy: 0.3
  },
  {
    title: "The Secret Life of Walter Mitty",
    genre: "Adventure",
    quote: "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel.",
    valence: 0.75, energy: 0.45
  },
  {
    title: "Paterson",
    genre: "Drama",
    quote: "A love poem... for a matchbox.",
    valence: 0.7, energy: 0.1
  },
  {
    title: "Little Miss Sunshine",
    genre: "Comedy Drama",
    quote: "Do what you love and fuck the rest.",
    valence: 0.65, energy: 0.45
  },

  // ==========================================
  // QUADRANT 3: SAD & INTENSE (Low Valence, High Energy)
  // Genres: Horror, Thriller, War, Gritty Action
  // ==========================================
  {
    title: "Whiplash",
    genre: "Drama Thriller",
    quote: "There are no two words in the English language more harmful than 'good job'.",
    valence: 0.2, energy: 0.95
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    quote: "Oh, what a day! What a lovely day!",
    valence: 0.3, energy: 1.0
  },
  {
    title: "The Batman",
    genre: "Noir Action",
    quote: "They think I am hiding in the shadows, but I am the shadows.",
    valence: 0.15, energy: 0.75
  },
  {
    title: "Parasite",
    genre: "Thriller",
    quote: "It's so metaphorical.",
    valence: 0.2, energy: 0.8
  },
  {
    title: "Nightcrawler",
    genre: "Thriller",
    quote: "If you want to win the lottery, you have to make the money to buy a ticket.",
    valence: 0.1, energy: 0.85
  },
  {
    title: "Uncut Gems",
    genre: "Crime Thriller",
    quote: "This is how I win.",
    valence: 0.25, energy: 0.98 // Pure anxiety
  },
  {
    title: "Fight Club",
    genre: "Satire",
    quote: "It's only after we've lost everything that we're free to do anything.",
    valence: 0.3, energy: 0.85
  },
  {
    title: "Joker",
    genre: "Psychological Thriller",
    quote: "I used to think that my life was a tragedy, but now I realize, it's a comedy.",
    valence: 0.05, energy: 0.7
  },
  {
    title: "Black Swan",
    genre: "Psychological Horror",
    quote: "I felt it. Perfect. It was perfect.",
    valence: 0.1, energy: 0.8
  },
  {
    title: "Oldboy",
    genre: "Mystery Thriller",
    quote: "Laugh and the world laughs with you. Weep and you weep alone.",
    valence: 0.1, energy: 0.9
  },
  {
    title: "Akira",
    genre: "Sci-Fi",
    quote: "I am Tetsuo.",
    valence: 0.2, energy: 0.9
  },
  {
    title: "Train to Busan",
    genre: "Horror",
    quote: "Dad, you only care about yourself.",
    valence: 0.15, energy: 0.95
  },

  // ==========================================
  // QUADRANT 4: SAD & CHILL (Low Valence, Low Energy)
  // Genres: Melodrama, Slow Burn Sci-Fi, Gothic, Indie
  // ==========================================
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Sci-Fi Romance",
    quote: "Blessed are the forgetful, for they get the better even of their blunders.",
    valence: 0.2, energy: 0.3
  },
  {
    title: "Her",
    genre: "Sci-Fi Drama",
    quote: "The past is just a story we tell ourselves.",
    valence: 0.3, energy: 0.2
  },
  {
    title: "Lost in Translation",
    genre: "Drama",
    quote: "The more you know who you are, the less you let things upset you.",
    valence: 0.35, energy: 0.15
  },
  {
    title: "Moonlight",
    genre: "Drama",
    quote: "In moonlight, black boys look blue.",
    valence: 0.3, energy: 0.25
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    quote: "Despite knowing the journey... and where it leads... I embrace it.",
    valence: 0.25, energy: 0.3
  },
  {
    title: "Blade Runner 2049",
    genre: "Sci-Fi Noir",
    quote: "All the best memories are hers.",
    valence: 0.2, energy: 0.4
  },
  {
    title: "Portrait of a Lady on Fire",
    genre: "Romance Drama",
    quote: "Do all lovers feel like they're inventing something?",
    valence: 0.3, energy: 0.2
  },
  {
    title: "Manchester by the Sea",
    genre: "Drama",
    quote: "I can't beat it. I can't.",
    valence: 0.1, energy: 0.2
  },
  {
    title: "The Lobster",
    genre: "Dark Comedy",
    quote: "A lobsters live for over one hundred years, are blue-blooded like aristocrats, and stay fertile all their lives.",
    valence: 0.3, energy: 0.35
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    quote: "Love is the one thing we're capable of perceiving that transcends dimensions of time and space.",
    valence: 0.4, energy: 0.4
  },
  {
    title: "Melancholia",
    genre: "Sci-Fi Drama",
    quote: "The Earth is evil. We don't need to grieve for it.",
    valence: 0.05, energy: 0.1 // The absolute bottom left corner
  },
  {
    title: "A Ghost Story",
    genre: "Fantasy Drama",
    quote: "We build our legacy piece by piece, and maybe the whole world will remember you.",
    valence: 0.2, energy: 0.1
  }
];