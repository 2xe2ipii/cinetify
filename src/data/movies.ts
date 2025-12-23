import type { MovieMatch } from "../types";

// NOTE: You must update MovieMatch in types/index.ts to remove 'quote' or make it optional!
interface MovieEntry extends MovieMatch {
  valence: number;
  energy: number;
  acousticness: number;
}

export const MOVIE_DATABASE: MovieEntry[] = [
  // --- HAPPY & INTENSE ---
  {
    title: "10 Lives",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.76,
    acousticness: 0.6
  },
  {
    title: "200% Wolf",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 1,
    acousticness: 0.36
  },
  {
    title: "2001: A Space Odyssey",
    genre: "Science Fiction / Mystery",
    valence: 0.55,
    energy: 0.88,
    acousticness: 0.14
  },
  {
    title: "2012",
    genre: "Action / Adventure",
    valence: 0.65,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "21 Jump Street",
    genre: "Action / Comedy",
    valence: 0.69,
    energy: 0.85,
    acousticness: 0.28
  },
  {
    title: "22 Jump Street",
    genre: "Crime / Comedy",
    valence: 0.62,
    energy: 0.84,
    acousticness: 0.28
  },
  {
    title: "3 Idiots",
    genre: "Drama / Comedy",
    valence: 0.72,
    energy: 0.5,
    acousticness: 0.69
  },
  {
    title: "300",
    genre: "Action / Adventure",
    valence: 0.53,
    energy: 0.94,
    acousticness: 0.36
  },
  {
    title: "31 Minutes: One Hot Christmas",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.68,
    acousticness: 0.63
  },
  {
    title: "6 Underground",
    genre: "Action / Comedy",
    valence: 0.66,
    energy: 1,
    acousticness: 0.3
  },
  {
    title: "65",
    genre: "Action / Adventure",
    valence: 0.72,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "9",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 1,
    acousticness: 0
  },
  {
    title: "A Bug's Life",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.82,
    acousticness: 0.57
  },
  {
    title: "A Charlie Brown Christmas",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.62,
    acousticness: 0.73
  },
  {
    title: "A Christmas Carol",
    genre: "Animation / Family",
    valence: 0.89,
    energy: 0.58,
    acousticness: 0.74
  },
  {
    title: "A Clockwork Orange",
    genre: "Science Fiction / Crime",
    valence: 0.5,
    energy: 0.73,
    acousticness: 0.29
  },
  {
    title: "A Knight's Tale",
    genre: "Adventure / Drama",
    valence: 0.68,
    energy: 0.78,
    acousticness: 0.57
  },
  {
    title: "A Legend",
    genre: "Action / Adventure",
    valence: 0.69,
    energy: 0.93,
    acousticness: 0.23
  },
  {
    title: "A Merry Friggin' Christmas",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.54,
    acousticness: 0.57
  },
  {
    title: "A Minecraft Movie",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 1,
    acousticness: 0.28
  },
  {
    title: "A Paw Patrol Christmas",
    genre: "Animation / Family",
    valence: 0.92,
    energy: 0.75,
    acousticness: 0.49
  },
  {
    title: "A Time for Bravery",
    genre: "Comedy / Action",
    valence: 0.68,
    energy: 0.83,
    acousticness: 0.38
  },
  {
    title: "A Very Jonas Christmas Movie",
    genre: "Comedy / Music",
    valence: 0.76,
    energy: 0.6,
    acousticness: 0.62
  },
  {
    title: "A Writer's Odyssey",
    genre: "Fantasy / Action",
    valence: 0.66,
    energy: 0.93,
    acousticness: 0.4
  },
  {
    title: "A Writer's Odyssey 2",
    genre: "Action / Fantasy",
    valence: 0.6,
    energy: 0.85,
    acousticness: 0.32
  },
  {
    title: "Afterburn",
    genre: "Science Fiction / Action",
    valence: 0.73,
    energy: 0.88,
    acousticness: 0.23
  },
  {
    title: "Aladdin",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.75,
    acousticness: 0.57
  },
  {
    title: "Alexander",
    genre: "War / History",
    valence: 0.59,
    energy: 0.75,
    acousticness: 0.82
  },
  {
    title: "Alice in Wonderland",
    genre: "Family / Fantasy",
    valence: 0.87,
    energy: 0.75,
    acousticness: 0.38
  },
  {
    title: "Alice Through the Looking Glass",
    genre: "Adventure / Family",
    valence: 0.87,
    energy: 0.77,
    acousticness: 0.44
  },
  {
    title: "Alienoid",
    genre: "Science Fiction / Action",
    valence: 0.76,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Aliens",
    genre: "Action / Thriller",
    valence: 0.5,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "Alita: Battle Angel",
    genre: "Action / Science Fiction",
    valence: 0.65,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Alle Alle",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.56,
    acousticness: 0.56
  },
  {
    title: "Altered",
    genre: "Science Fiction / Action",
    valence: 0.54,
    energy: 0.88,
    acousticness: 0.17
  },
  {
    title: "Alvin and the Chipmunks: Chipwrecked",
    genre: "Comedy / Fantasy",
    valence: 1,
    energy: 0.75,
    acousticness: 0.7
  },
  {
    title: "American Shaolin",
    genre: "Action",
    valence: 0.59,
    energy: 0.7,
    acousticness: 0.39
  },
  {
    title: "Anaconda",
    genre: "Adventure / Comedy",
    valence: 0.6,
    energy: 0.91,
    acousticness: 0.32
  },
  {
    title: "Anastasia",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.79,
    acousticness: 0.43
  },
  {
    title: "Angel's Egg",
    genre: "Animation / Fantasy",
    valence: 0.62,
    energy: 0.82,
    acousticness: 0.36
  },
  {
    title: "Another Face",
    genre: "Comedy / Drama",
    valence: 0.57,
    energy: 0.62,
    acousticness: 0.62
  },
  {
    title: "Another Time",
    genre: "Drama / Science Fiction",
    valence: 0.85,
    energy: 0.62,
    acousticness: 0.63
  },
  {
    title: "Ant-Man",
    genre: "Science Fiction / Action",
    valence: 0.67,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Ant-Man and the Wasp: Quantumania",
    genre: "Action / Adventure",
    valence: 0.64,
    energy: 0.99,
    acousticness: 0.09
  },
  {
    title: "Aquaman",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 0.98,
    acousticness: 0.23
  },
  {
    title: "Aquaman and the Lost Kingdom",
    genre: "Action / Adventure",
    valence: 0.7,
    energy: 0.92,
    acousticness: 0.19
  },
  {
    title: "Armour of God 3: Chinese Zodiac",
    genre: "Action / Adventure",
    valence: 0.69,
    energy: 0.86,
    acousticness: 0.28
  },
  {
    title: "Arthur and the Invisibles",
    genre: "Adventure / Fantasy",
    valence: 1,
    energy: 0.81,
    acousticness: 0.45
  },
  {
    title: "Arthur Christmas",
    genre: "Drama / Animation",
    valence: 0.95,
    energy: 0.58,
    acousticness: 0.84
  },
  {
    title: "Arunachalam",
    genre: "Action / Drama",
    valence: 0.64,
    energy: 0.71,
    acousticness: 0.52
  },
  {
    title: "Asterix & Obelix: The Middle Kingdom",
    genre: "Family / Comedy",
    valence: 0.89,
    energy: 0.72,
    acousticness: 0.52
  },
  {
    title: "Avatar",
    genre: "Action / Adventure",
    valence: 0.82,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Avatar 5",
    genre: "Adventure / Science Fiction",
    valence: 0.69,
    energy: 0.93,
    acousticness: 0.18
  },
  {
    title: "Avatar: Fire and Ash",
    genre: "Science Fiction / Adventure",
    valence: 0.67,
    energy: 0.9,
    acousticness: 0.18
  },
  {
    title: "Avatar: The Way of Water",
    genre: "Action / Adventure",
    valence: 0.72,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Avengers: Age of Ultron",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 0.98,
    acousticness: 0.04
  },
  {
    title: "Avengers: Endgame",
    genre: "Adventure / Science Fiction",
    valence: 0.64,
    energy: 0.95,
    acousticness: 0.11
  },
  {
    title: "Avengers: Infinity War",
    genre: "Adventure / Action",
    valence: 0.63,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Avengers: Secret Wars",
    genre: "Science Fiction / Action",
    valence: 0.51,
    energy: 0.86,
    acousticness: 0.13
  },
  {
    title: "Aztec Batman: Clash of Empires",
    genre: "Animation / Action",
    valence: 0.87,
    energy: 1,
    acousticness: 0.24
  },
  {
    title: "Baaghi 4",
    genre: "Action / Romance",
    valence: 0.58,
    energy: 0.82,
    acousticness: 0.39
  },
  {
    title: "Babylon",
    genre: "Drama / Comedy",
    valence: 0.64,
    energy: 0.55,
    acousticness: 0.69
  },
  {
    title: "Back to the Future",
    genre: "Adventure / Comedy",
    valence: 0.78,
    energy: 0.84,
    acousticness: 0.3
  },
  {
    title: "Bad Boys II",
    genre: "Action / Crime",
    valence: 0.61,
    energy: 0.89,
    acousticness: 0.3
  },
  {
    title: "Bad Boys: Ride or Die",
    genre: "Action / Comedy",
    valence: 0.63,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Bad Influence",
    genre: "Thriller / Drama",
    valence: 0.51,
    energy: 0.5,
    acousticness: 0.75
  },
  {
    title: "Bad Man",
    genre: "Action / Comedy",
    valence: 0.62,
    energy: 0.88,
    acousticness: 0.27
  },
  {
    title: "Band of Robbers",
    genre: "Adventure / Comedy",
    valence: 0.57,
    energy: 0.96,
    acousticness: 0.23
  },
  {
    title: "Bandidas",
    genre: "Action / Comedy",
    valence: 0.62,
    energy: 0.91,
    acousticness: 0.43
  },
  {
    title: "Barbie",
    genre: "Comedy / Adventure",
    valence: 0.84,
    energy: 0.71,
    acousticness: 0.44
  },
  {
    title: "Barbie as The Princess & the Pauper",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.63,
    acousticness: 0.59
  },
  {
    title: "Barbie in the Nutcracker",
    genre: "Animation / Family",
    valence: 0.85,
    energy: 0.58,
    acousticness: 0.55
  },
  {
    title: "Bastille Day",
    genre: "Action",
    valence: 0.57,
    energy: 0.66,
    acousticness: 0.39
  },
  {
    title: "Batman Returns",
    genre: "Action / Fantasy",
    valence: 0.62,
    energy: 0.77,
    acousticness: 0.32
  },
  {
    title: "Batman v Superman: Dawn of Justice",
    genre: "Action / Adventure",
    valence: 0.75,
    energy: 0.99,
    acousticness: 0.18
  },
  {
    title: "Battle Drone",
    genre: "Science Fiction / Action",
    valence: 0.57,
    energy: 0.82,
    acousticness: 0.14
  },
  {
    title: "Beach House",
    genre: "Comedy",
    valence: 0.65,
    energy: 0.53,
    acousticness: 0.54
  },
  {
    title: "Bean",
    genre: "Family / Adventure",
    valence: 0.97,
    energy: 0.7,
    acousticness: 0.54
  },
  {
    title: "Beauty and the Beast",
    genre: "Family / Fantasy",
    valence: 0.96,
    energy: 0.54,
    acousticness: 0.6
  },
  {
    title: "Bedtime Stories",
    genre: "Fantasy / Comedy",
    valence: 1,
    energy: 0.57,
    acousticness: 0.65
  },
  {
    title: "Beetlejuice",
    genre: "Fantasy / Comedy",
    valence: 0.76,
    energy: 0.68,
    acousticness: 0.43
  },
  {
    title: "Beetlejuice Beetlejuice",
    genre: "Comedy / Fantasy",
    valence: 0.57,
    energy: 0.83,
    acousticness: 0.3
  },
  {
    title: "Big Brother",
    genre: "Action / Drama",
    valence: 0.74,
    energy: 0.73,
    acousticness: 0.58
  },
  {
    title: "Big Hero 6",
    genre: "Adventure / Family",
    valence: 1,
    energy: 0.93,
    acousticness: 0.41
  },
  {
    title: "Bingo Bongo",
    genre: "Comedy",
    valence: 0.73,
    energy: 0.58,
    acousticness: 0.57
  },
  {
    title: "Black Adam",
    genre: "Action / Adventure",
    valence: 0.68,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Black Butler: Book of Murder",
    genre: "Mystery / Animation",
    valence: 0.71,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Black Panther",
    genre: "Action / Adventure",
    valence: 0.69,
    energy: 0.96,
    acousticness: 0.09
  },
  {
    title: "Black Panther: Wakanda Forever",
    genre: "Action / Adventure",
    valence: 0.71,
    energy: 0.96,
    acousticness: 0.09
  },
  {
    title: "Black Widow",
    genre: "Action / Adventure",
    valence: 0.72,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "Blade Runner 2049",
    genre: "Science Fiction / Drama",
    valence: 0.5,
    energy: 0.59,
    acousticness: 0.5
  },
  {
    title: "Blank Check",
    genre: "Comedy / Family",
    valence: 0.83,
    energy: 0.57,
    acousticness: 0.55
  },
  {
    title: "Bloody Escape: Bats Out of Hell",
    genre: "Animation / Action",
    valence: 0.67,
    energy: 0.98,
    acousticness: 0.16
  },
  {
    title: "Blue Beetle",
    genre: "Action / Science Fiction",
    valence: 0.69,
    energy: 0.95,
    acousticness: 0.09
  },
  {
    title: "Blue Lagoon: The Awakening",
    genre: "Drama / Adventure",
    valence: 0.77,
    energy: 0.52,
    acousticness: 0.81
  },
  {
    title: "Boss Nigger",
    genre: "Western / Action",
    valence: 0.75,
    energy: 0.84,
    acousticness: 0.51
  },
  {
    title: "Bounty Tracker",
    genre: "Action",
    valence: 0.56,
    energy: 0.68,
    acousticness: 0.38
  },
  {
    title: "Brave",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 1,
    acousticness: 0.3
  },
  {
    title: "Brave Citizen",
    genre: "Action / Drama",
    valence: 0.69,
    energy: 0.77,
    acousticness: 0.52
  },
  {
    title: "Breakfast at Tiffany's",
    genre: "Comedy / Romance",
    valence: 0.76,
    energy: 0.5,
    acousticness: 0.84
  },
  {
    title: "Breaking Wind",
    genre: "Comedy / Fantasy",
    valence: 0.76,
    energy: 0.66,
    acousticness: 0.45
  },
  {
    title: "Bruce Almighty",
    genre: "Fantasy / Comedy",
    valence: 0.83,
    energy: 0.59,
    acousticness: 0.49
  },
  {
    title: "Bullet Train",
    genre: "Action / Comedy",
    valence: 0.56,
    energy: 0.96,
    acousticness: 0.28
  },
  {
    title: "Bureau 749",
    genre: "Action / Adventure",
    valence: 0.61,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Camp Crasher",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.55,
    acousticness: 0.67
  },
  {
    title: "Candy Cane Lane",
    genre: "Comedy / Fantasy",
    valence: 0.98,
    energy: 0.67,
    acousticness: 0.54
  },
  {
    title: "Captain Avispa",
    genre: "Animation / Family",
    valence: 0.82,
    energy: 0.57,
    acousticness: 0.54
  },
  {
    title: "Captain Marvel",
    genre: "Action / Adventure",
    valence: 0.68,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Captain Sabertooth and the Countess of Grel",
    genre: "Animation / Family",
    valence: 0.94,
    energy: 0.72,
    acousticness: 0.48
  },
  {
    title: "Cars",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.82,
    acousticness: 0.51
  },
  {
    title: "Cars 2",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.73,
    acousticness: 0.55
  },
  {
    title: "Cars 3",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.71,
    acousticness: 0.5
  },
  {
    title: "Casper",
    genre: "Fantasy / Comedy",
    valence: 0.96,
    energy: 0.56,
    acousticness: 0.49
  },
  {
    title: "Cast Away",
    genre: "Adventure / Drama",
    valence: 0.54,
    energy: 0.53,
    acousticness: 0.56
  },
  {
    title: "Castle in the Sky",
    genre: "Adventure / Fantasy",
    valence: 1,
    energy: 0.97,
    acousticness: 0.26
  },
  {
    title: "Caught Stealing",
    genre: "Crime / Thriller",
    valence: 0.53,
    energy: 0.87,
    acousticness: 0.4
  },
  {
    title: "Cells at Work!",
    genre: "Adventure / Action",
    valence: 0.95,
    energy: 0.98,
    acousticness: 0.23
  },
  {
    title: "Central Intelligence",
    genre: "Action / Comedy",
    valence: 0.67,
    energy: 0.76,
    acousticness: 0.41
  },
  {
    title: "Chainsaw Man - The Movie: Reze Arc",
    genre: "Animation / Action",
    valence: 0.86,
    energy: 0.79,
    acousticness: 0.49
  },
  {
    title: "Champagne Problems",
    genre: "Romance / Comedy",
    valence: 0.82,
    energy: 0.5,
    acousticness: 0.64
  },
  {
    title: "Charlie and the Chocolate Factory",
    genre: "Adventure / Comedy",
    valence: 1,
    energy: 0.75,
    acousticness: 0.39
  },
  {
    title: "Charlie's Angels: Full Throttle",
    genre: "Action / Adventure",
    valence: 0.77,
    energy: 0.88,
    acousticness: 0.28
  },
  {
    title: "Chasing Liberty",
    genre: "Comedy / Romance",
    valence: 0.85,
    energy: 0.51,
    acousticness: 0.65
  },
  {
    title: "Chef",
    genre: "Drama Comedy",
    valence: 0.85,
    energy: 0.5,
    acousticness: 0.4
  },
  {
    title: "Chestnut: Hero of Central Park",
    genre: "Family / Comedy",
    valence: 0.89,
    energy: 0.52,
    acousticness: 0.58
  },
  {
    title: "Chhaava",
    genre: "History / Action",
    valence: 0.54,
    energy: 0.65,
    acousticness: 0.71
  },
  {
    title: "Chicken Feathers",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.55,
    acousticness: 0.54
  },
  {
    title: "Chicken Run: Dawn of the Nugget",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.71,
    acousticness: 0.52
  },
  {
    title: "Christmas with the Kranks",
    genre: "Comedy / Family",
    valence: 0.89,
    energy: 0.52,
    acousticness: 0.58
  },
  {
    title: "Clerks II",
    genre: "Comedy",
    valence: 0.73,
    energy: 0.5,
    acousticness: 0.54
  },
  {
    title: "Clone Cops",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.92,
    acousticness: 0.16
  },
  {
    title: "Cloudy with a Chance of Meatballs 2",
    genre: "Animation / Family",
    valence: 0.99,
    energy: 0.62,
    acousticness: 0.64
  },
  {
    title: "Coco",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.68,
    acousticness: 0.64
  },
  {
    title: "Code 3",
    genre: "Action / Comedy",
    valence: 0.73,
    energy: 0.8,
    acousticness: 0.41
  },
  {
    title: "Cold Turkey",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.58,
    acousticness: 0.5
  },
  {
    title: "Cold Zone",
    genre: "Science Fiction / Adventure",
    valence: 0.63,
    energy: 0.85,
    acousticness: 0.23
  },
  {
    title: "Colonel Kwiatkowski",
    genre: "Comedy / History",
    valence: 0.64,
    energy: 0.57,
    acousticness: 0.72
  },
  {
    title: "Commando",
    genre: "Action / Adventure",
    valence: 0.51,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Common Wealth",
    genre: "Comedy / Thriller",
    valence: 0.51,
    energy: 0.91,
    acousticness: 0.33
  },
  {
    title: "Conan the Barbarian",
    genre: "Adventure / Fantasy",
    valence: 0.7,
    energy: 0.92,
    acousticness: 0.18
  },
  {
    title: "Congo Bill",
    genre: "Action / Adventure",
    valence: 0.53,
    energy: 0.91,
    acousticness: 0.24
  },
  {
    title: "Contract Killers",
    genre: "Action",
    valence: 0.55,
    energy: 0.76,
    acousticness: 0.37
  },
  {
    title: "Coraline",
    genre: "Animation / Family",
    valence: 0.9,
    energy: 0.7,
    acousticness: 0.5
  },
  {
    title: "Corpse Bride",
    genre: "Romance / Fantasy",
    valence: 0.94,
    energy: 0.62,
    acousticness: 0.59
  },
  {
    title: "Cousins",
    genre: "Comedy / Romance",
    valence: 0.8,
    energy: 0.54,
    acousticness: 0.64
  },
  {
    title: "Crazy Mama",
    genre: "Crime / Action",
    valence: 0.63,
    energy: 0.93,
    acousticness: 0.28
  },
  {
    title: "Crazy Rich Asians",
    genre: "Comedy / Romance",
    valence: 0.77,
    energy: 0.53,
    acousticness: 0.68
  },
  {
    title: "Crazy, Stupid, Love.",
    genre: "Comedy / Drama",
    valence: 0.76,
    energy: 0.5,
    acousticness: 0.84
  },
  {
    title: "Crows Zero II",
    genre: "Action / Adventure",
    valence: 0.76,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Cruella",
    genre: "Comedy / Crime",
    valence: 0.65,
    energy: 0.88,
    acousticness: 0.35
  },
  {
    title: "Cyber Wars",
    genre: "Action / Science Fiction",
    valence: 0.59,
    energy: 0.84,
    acousticness: 0.15
  },
  {
    title: "Daddy's Home 2",
    genre: "Comedy",
    valence: 0.64,
    energy: 0.59,
    acousticness: 0.52
  },
  {
    title: "Damsel",
    genre: "Fantasy / Action",
    valence: 0.7,
    energy: 0.91,
    acousticness: 0.2
  },
  {
    title: "Dances with Wolves",
    genre: "Adventure / Drama",
    valence: 0.53,
    energy: 0.63,
    acousticness: 0.76
  },
  {
    title: "Dancing Ninja",
    genre: "Action / Comedy",
    valence: 0.59,
    energy: 0.9,
    acousticness: 0.35
  },
  {
    title: "Das Wirtshaus der sündigen Töchter",
    genre: "Comedy",
    valence: 0.68,
    energy: 0.54,
    acousticness: 0.49
  },
  {
    title: "Dave Chappelle: The Unstoppable...",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.51,
    acousticness: 0.55
  },
  {
    title: "David",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.58,
    acousticness: 0.84
  },
  {
    title: "Deadpool",
    genre: "Action / Adventure",
    valence: 0.83,
    energy: 0.94,
    acousticness: 0.25
  },
  {
    title: "Deadpool & Wolverine",
    genre: "Action / Comedy",
    valence: 0.78,
    energy: 0.88,
    acousticness: 0.2
  },
  {
    title: "Deadpool 2",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.94,
    acousticness: 0.33
  },
  {
    title: "Dear Father",
    genre: "Comedy / Drama",
    valence: 0.59,
    energy: 0.56,
    acousticness: 0.68
  },
  {
    title: "Death Note Relight 1: Visions of a God",
    genre: "TV Movie / Crime",
    valence: 0.55,
    energy: 0.84,
    acousticness: 0.55
  },
  {
    title: "DEEMO Memorial Keys",
    genre: "Animation / Drama",
    valence: 0.71,
    energy: 0.65,
    acousticness: 0.72
  },
  {
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    genre: "Animation / Action",
    valence: 0.78,
    energy: 0.89,
    acousticness: 0.31
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    genre: "Animation / Action",
    valence: 0.75,
    energy: 0.84,
    acousticness: 0.33
  },
  {
    title: "Dennis the Menace",
    genre: "Family / Comedy",
    valence: 0.85,
    energy: 0.55,
    acousticness: 0.55
  },
  {
    title: "Descendants 2",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.69,
    acousticness: 0.61
  },
  {
    title: "Despicable Me",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.72,
    acousticness: 0.39
  },
  {
    title: "Despicable Me 2",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.6,
    acousticness: 0.59
  },
  {
    title: "Despicable Me 4",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.78,
    acousticness: 0.48
  },
  {
    title: "Detective Conan: Black Iron Submarine",
    genre: "Animation / Action",
    valence: 0.52,
    energy: 1,
    acousticness: 0.25
  },
  {
    title: "Detective Dee: The Four Heavenly Kings",
    genre: "Action / Fantasy",
    valence: 0.58,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Deuce Bigalow: European Gigolo",
    genre: "Comedy",
    valence: 0.74,
    energy: 0.52,
    acousticness: 0.51
  },
  {
    title: "Devara: Part 1",
    genre: "Action / Drama",
    valence: 0.53,
    energy: 0.6,
    acousticness: 0.57
  },
  {
    title: "Devil's Town",
    genre: "Drama / Action",
    valence: 0.56,
    energy: 0.87,
    acousticness: 0.47
  },
  {
    title: "Diary of a Wimpy Kid: The Last Straw",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.57,
    acousticness: 0.66
  },
  {
    title: "Die Hart",
    genre: "Comedy / Action",
    valence: 0.55,
    energy: 0.91,
    acousticness: 0.27
  },
  {
    title: "Dirty Grandpa",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.61,
    acousticness: 0.58
  },
  {
    title: "Disclosure Day",
    genre: "Science Fiction",
    valence: 0.54,
    energy: 0.63,
    acousticness: 0.33
  },
  {
    title: "Divergent",
    genre: "Action / Adventure",
    valence: 0.68,
    energy: 0.97,
    acousticness: 0.09
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    genre: "Fantasy / Action",
    valence: 0.69,
    energy: 0.98,
    acousticness: 0.21
  },
  {
    title: "Doctor X: The Movie Final",
    genre: "Comedy / Drama",
    valence: 0.56,
    energy: 0.61,
    acousticness: 0.69
  },
  {
    title: "Dolittle",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.81,
    acousticness: 0.41
  },
  {
    title: "Donnie Darko",
    genre: "Fantasy / Drama",
    valence: 0.5,
    energy: 0.61,
    acousticness: 0.54
  },
  {
    title: "Dora and the Search for Sol Dorado",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.64,
    acousticness: 0.46
  },
  {
    title: "Doraemon: Nobita's Treasure Island",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.99,
    acousticness: 0.34
  },
  {
    title: "Dr. Strange",
    genre: "TV Movie / Action",
    valence: 0.79,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Dragon Ball Z: Broly - The Legendary Super Saiyan",
    genre: "Animation / Science Fiction",
    valence: 0.67,
    energy: 0.99,
    acousticness: 0.25
  },
  {
    title: "Dredd",
    genre: "Action / Science Fiction",
    valence: 0.52,
    energy: 0.87,
    acousticness: 0.16
  },
  {
    title: "Dumb and Dumber",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.54,
    acousticness: 0.53
  },
  {
    title: "Dumbo",
    genre: "Animation / Family",
    valence: 0.9,
    energy: 0.61,
    acousticness: 0.58
  },
  {
    title: "Dune",
    genre: "Science Fiction / Adventure",
    valence: 0.65,
    energy: 0.8,
    acousticness: 0.23
  },
  {
    title: "Dune: Part Three",
    genre: "Adventure / Science Fiction",
    valence: 0.56,
    energy: 0.75,
    acousticness: 0.26
  },
  {
    title: "Dune: Part Two",
    genre: "Science Fiction / Adventure",
    valence: 0.66,
    energy: 0.83,
    acousticness: 0.28
  },
  {
    title: "Dungeons & Dragons: Honor Among Thieves",
    genre: "Adventure / Fantasy",
    valence: 0.86,
    energy: 0.79,
    acousticness: 0.37
  },
  {
    title: "E.T. the Extra-Terrestrial",
    genre: "Science Fiction / Adventure",
    valence: 0.96,
    energy: 0.89,
    acousticness: 0.27
  },
  {
    title: "Easy A",
    genre: "Comedy",
    valence: 0.65,
    energy: 0.53,
    acousticness: 0.57
  },
  {
    title: "Eddington",
    genre: "Western / Comedy",
    valence: 0.56,
    energy: 0.7,
    acousticness: 0.55
  },
  {
    title: "Edge of Tomorrow",
    genre: "Action / Science Fiction",
    valence: 0.59,
    energy: 0.83,
    acousticness: 0.13
  },
  {
    title: "Edward Scissorhands",
    genre: "Fantasy / Drama",
    valence: 0.74,
    energy: 0.52,
    acousticness: 0.74
  },
  {
    title: "Eenie Meanie",
    genre: "Thriller / Action",
    valence: 0.64,
    energy: 0.89,
    acousticness: 0.22
  },
  {
    title: "El Dorado",
    genre: "Western",
    valence: 0.55,
    energy: 0.57,
    acousticness: 0.66
  },
  {
    title: "El sexo me da risa 2",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.59,
    acousticness: 0.55
  },
  {
    title: "Elemental",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.63,
    acousticness: 0.72
  },
  {
    title: "Elf",
    genre: "Comedy / Family",
    valence: 1,
    energy: 0.63,
    acousticness: 0.52
  },
  {
    title: "Elio",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.98,
    acousticness: 0.36
  },
  {
    title: "Ella McCay",
    genre: "Comedy / Drama",
    valence: 0.62,
    energy: 0.51,
    acousticness: 0.66
  },
  {
    title: "Empire State",
    genre: "Action / Drama",
    valence: 0.5,
    energy: 0.7,
    acousticness: 0.54
  },
  {
    title: "Encanto",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.77,
    acousticness: 0.53
  },
  {
    title: "Escape from New York",
    genre: "Science Fiction / Action",
    valence: 0.6,
    energy: 0.82,
    acousticness: 0.13
  },
  {
    title: "Eternals",
    genre: "Science Fiction / Action",
    valence: 0.66,
    energy: 0.97,
    acousticness: 0.08
  },
  {
    title: "Eva Eva",
    genre: "Music / Comedy",
    valence: 0.76,
    energy: 0.62,
    acousticness: 0.63
  },
  {
    title: "Everything Everywhere All At Once",
    genre: "Sci-Fi Adventure",
    valence: 0.7,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Ex Machina",
    genre: "Drama / Science Fiction",
    valence: 0.53,
    energy: 0.59,
    acousticness: 0.5
  },
  {
    title: "Exorcism Chronicles: The Beginning",
    genre: "Animation / Fantasy",
    valence: 0.56,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Expend4bles",
    genre: "Action / Adventure",
    valence: 0.51,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "F1",
    genre: "Action / Drama",
    valence: 0.54,
    energy: 0.6,
    acousticness: 0.56
  },
  {
    title: "F9",
    genre: "Action / Adventure",
    valence: 0.58,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Fancy Dancing",
    genre: "Music / Comedy",
    valence: 0.7,
    energy: 0.57,
    acousticness: 0.67
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    genre: "Fantasy / Adventure",
    valence: 0.74,
    energy: 0.68,
    acousticness: 0.33
  },
  {
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    genre: "Fantasy / Adventure",
    valence: 0.75,
    energy: 0.79,
    acousticness: 0.4
  },
  {
    title: "Fantastic Mr. Fox",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.8,
    acousticness: 0.52
  },
  {
    title: "Fast & Furious Presents: Hobbs & Shaw",
    genre: "Action / Adventure",
    valence: 0.76,
    energy: 0.93,
    acousticness: 0.31
  },
  {
    title: "Finding Nemo",
    genre: "Animation / Family",
    valence: 0.83,
    energy: 0.51,
    acousticness: 0.6
  },
  {
    title: "First Squad: The Moment of Truth",
    genre: "Fantasy / Animation",
    valence: 0.8,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Five Elements Secret Art",
    genre: "Fantasy",
    valence: 0.52,
    energy: 0.56,
    acousticness: 0.45
  },
  {
    title: "Fixed",
    genre: "Animation / Comedy",
    valence: 0.84,
    energy: 0.68,
    acousticness: 0.55
  },
  {
    title: "Flow",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.78,
    acousticness: 0.43
  },
  {
    title: "Flushed Away",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.73,
    acousticness: 0.51
  },
  {
    title: "For Your Eyes Only",
    genre: "Adventure / Action",
    valence: 0.57,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Forces of Nature",
    genre: "Romance / Comedy",
    valence: 0.84,
    energy: 0.55,
    acousticness: 0.63
  },
  {
    title: "Freakier Friday",
    genre: "Comedy / Fantasy",
    valence: 1,
    energy: 0.65,
    acousticness: 0.49
  },
  {
    title: "Freaky Friday",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.54,
    acousticness: 0.71
  },
  {
    title: "Fred Claus",
    genre: "Action / Comedy",
    valence: 0.7,
    energy: 0.65,
    acousticness: 0.59
  },
  {
    title: "Free Guy",
    genre: "Comedy / Adventure",
    valence: 0.86,
    energy: 0.9,
    acousticness: 0.3
  },
  {
    title: "French Exit",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.5,
    acousticness: 0.68
  },
  {
    title: "Friends with Benefits",
    genre: "Romance / Comedy",
    valence: 0.79,
    energy: 0.54,
    acousticness: 0.71
  },
  {
    title: "Frozen",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.83,
    acousticness: 0.44
  },
  {
    title: "Frozen Fever",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.8,
    acousticness: 0.55
  },
  {
    title: "Frozen II",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.9,
    acousticness: 0.49
  },
  {
    title: "Furiosa: A Mad Max Saga",
    genre: "Action / Science Fiction",
    valence: 0.71,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "Fuuto PI: The Portrait of Kamen Rider Skull",
    genre: "Animation / Action",
    valence: 0.93,
    energy: 0.96,
    acousticness: 0.28
  },
  {
    title: "FX's A Christmas Carol",
    genre: "Drama / Fantasy",
    valence: 0.53,
    energy: 0.51,
    acousticness: 0.64
  },
  {
    title: "Gabby's Dollhouse: The Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.79,
    acousticness: 0.57
  },
  {
    title: "Garfield",
    genre: "Comedy / Family",
    valence: 0.92,
    energy: 0.51,
    acousticness: 0.63
  },
  {
    title: "Genshin Impact: Star Odyssey",
    genre: "Animation / Music",
    valence: 0.67,
    energy: 0.65,
    acousticness: 0.64
  },
  {
    title: "Ghostbusters",
    genre: "Comedy / Fantasy",
    valence: 0.83,
    energy: 0.7,
    acousticness: 0.47
  },
  {
    title: "Ghostbusters II",
    genre: "Comedy / Fantasy",
    valence: 0.73,
    energy: 0.62,
    acousticness: 0.44
  },
  {
    title: "Ghostbusters: Afterlife",
    genre: "Fantasy / Comedy",
    valence: 0.93,
    energy: 0.92,
    acousticness: 0.25
  },
  {
    title: "Ghostbusters: Frozen Empire",
    genre: "Fantasy / Adventure",
    valence: 0.93,
    energy: 0.84,
    acousticness: 0.36
  },
  {
    title: "Ghosted",
    genre: "Action / Comedy",
    valence: 0.8,
    energy: 0.68,
    acousticness: 0.48
  },
  {
    title: "Ghosts of Girlfriends Past",
    genre: "Romance / Comedy",
    valence: 0.86,
    energy: 0.54,
    acousticness: 0.67
  },
  {
    title: "Give Me Babies",
    genre: "Action / Comedy",
    valence: 0.63,
    energy: 0.74,
    acousticness: 0.34
  },
  {
    title: "Gladiator",
    genre: "Action / Drama",
    valence: 0.62,
    energy: 0.74,
    acousticness: 0.42
  },
  {
    title: "Gladiator II",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 0.79,
    acousticness: 0.39
  },
  {
    title: "Glass Onion: A Knives Out Mystery",
    genre: "Comedy / Crime",
    valence: 0.52,
    energy: 0.81,
    acousticness: 0.4
  },
  {
    title: "Godzilla x Kong: The New Empire",
    genre: "Action / Adventure",
    valence: 0.65,
    energy: 0.98,
    acousticness: 0.07
  },
  {
    title: "Gold Fish",
    genre: "Animation",
    valence: 0.66,
    energy: 0.57,
    acousticness: 0.53
  },
  {
    title: "Good Fortune",
    genre: "Comedy / Fantasy",
    valence: 0.74,
    energy: 0.7,
    acousticness: 0.5
  },
  {
    title: "Gramps Is a Great Guy!",
    genre: "Comedy",
    valence: 0.72,
    energy: 0.52,
    acousticness: 0.54
  },
  {
    title: "Gran Turismo",
    genre: "Adventure / Action",
    valence: 0.6,
    energy: 0.75,
    acousticness: 0.42
  },
  {
    title: "Grand Prix of Europe",
    genre: "Animation / Adventure",
    valence: 0.99,
    energy: 0.81,
    acousticness: 0.48
  },
  {
    title: "Grease",
    genre: "Romance / Comedy",
    valence: 0.87,
    energy: 0.53,
    acousticness: 0.67
  },
  {
    title: "Greenland",
    genre: "Action / Adventure",
    valence: 0.5,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Gremlins",
    genre: "Fantasy / Horror",
    valence: 0.6,
    energy: 0.84,
    acousticness: 0.35
  },
  {
    title: "Groundhog Day",
    genre: "Romance / Fantasy",
    valence: 0.91,
    energy: 0.51,
    acousticness: 0.76
  },
  {
    title: "Grown Ups",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.62,
    acousticness: 0.51
  },
  {
    title: "Grown Ups 2",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.61,
    acousticness: 0.58
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    genre: "Science Fiction / Adventure",
    valence: 0.64,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    genre: "Science Fiction / Adventure",
    valence: 0.73,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Guns Up",
    genre: "Action / Comedy",
    valence: 0.59,
    energy: 0.91,
    acousticness: 0.28
  },
  {
    title: "Happy Gilmore 2",
    genre: "Comedy",
    valence: 0.68,
    energy: 0.51,
    acousticness: 0.49
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    genre: "Adventure / Fantasy",
    valence: 0.71,
    energy: 0.72,
    acousticness: 0.31
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 1",
    genre: "Adventure / Fantasy",
    valence: 0.66,
    energy: 0.76,
    acousticness: 0.31
  },
  {
    title: "Harry Potter and the Deathly Hallows: Part 2",
    genre: "Adventure / Fantasy",
    valence: 0.67,
    energy: 0.72,
    acousticness: 0.39
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    genre: "Adventure / Fantasy",
    valence: 0.74,
    energy: 0.74,
    acousticness: 0.33
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    genre: "Adventure / Fantasy",
    valence: 0.65,
    energy: 0.78,
    acousticness: 0.31
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    genre: "Adventure / Fantasy",
    valence: 0.73,
    energy: 0.71,
    acousticness: 0.31
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Adventure / Fantasy",
    valence: 0.65,
    energy: 0.77,
    acousticness: 0.32
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    genre: "Adventure / Fantasy",
    valence: 0.7,
    energy: 0.71,
    acousticness: 0.38
  },
  {
    title: "Heads of State",
    genre: "Action / Thriller",
    valence: 0.66,
    energy: 0.91,
    acousticness: 0.28
  },
  {
    title: "Heart Eyes",
    genre: "Horror / Comedy",
    valence: 0.63,
    energy: 0.71,
    acousticness: 0.52
  },
  {
    title: "Hercules",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.84,
    acousticness: 0.67
  },
  {
    title: "High School of the Dead: Drifters of the Dead",
    genre: "Comedy / Animation",
    valence: 0.68,
    energy: 1,
    acousticness: 0.36
  },
  {
    title: "Highlander: Endgame",
    genre: "Action / Adventure",
    valence: 0.75,
    energy: 0.96,
    acousticness: 0.17
  },
  {
    title: "Home Alone 2: Lost in New York",
    genre: "Comedy / Family",
    valence: 0.94,
    energy: 0.72,
    acousticness: 0.46
  },
  {
    title: "Home Alone: The Holiday Heist",
    genre: "Comedy / Family",
    valence: 0.84,
    energy: 0.51,
    acousticness: 0.64
  },
  {
    title: "Homo Argentum",
    genre: "Comedy",
    valence: 0.63,
    energy: 0.57,
    acousticness: 0.51
  },
  {
    title: "Honey Don't!",
    genre: "Comedy / Crime",
    valence: 0.56,
    energy: 0.67,
    acousticness: 0.45
  },
  {
    title: "Hook",
    genre: "Adventure / Fantasy",
    valence: 1,
    energy: 0.75,
    acousticness: 0.47
  },
  {
    title: "Horrible Bosses 2",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.5,
    acousticness: 0.5
  },
  {
    title: "Horton Hears a Who!",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.83,
    acousticness: 0.49
  },
  {
    title: "Hostile Takeover",
    genre: "Action / Comedy",
    valence: 0.59,
    energy: 0.99,
    acousticness: 0.27
  },
  {
    title: "Hotel Transylvania",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.69,
    acousticness: 0.58
  },
  {
    title: "Hotel Transylvania 2",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.68,
    acousticness: 0.57
  },
  {
    title: "Hotel Transylvania 3: Summer Vacation",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.68,
    acousticness: 0.57
  },
  {
    title: "Hotel Transylvania: Transformania",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.84,
    acousticness: 0.45
  },
  {
    title: "How the Grinch Stole Christmas",
    genre: "Family / Comedy",
    valence: 0.99,
    energy: 0.65,
    acousticness: 0.53
  },
  {
    title: "How the Grinch Stole Christmas!",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.64,
    acousticness: 0.62
  },
  {
    title: "How to Train Your Dragon",
    genre: "Fantasy / Family",
    valence: 0.96,
    energy: 0.89,
    acousticness: 0.23
  },
  {
    title: "How to Train Your Dragon 2",
    genre: "Fantasy / Action",
    valence: 1,
    energy: 1,
    acousticness: 0.28
  },
  {
    title: "How to Train Your Dragon: The Hidden World",
    genre: "Animation / Family",
    valence: 0.89,
    energy: 0.73,
    acousticness: 0.53
  },
  {
    title: "Howl's Moving Castle",
    genre: "Fantasy / Animation",
    valence: 0.91,
    energy: 0.81,
    acousticness: 0.34
  },
  {
    title: "I Am Frankelda",
    genre: "Animation / Family",
    valence: 0.78,
    energy: 0.89,
    acousticness: 0.41
  },
  {
    title: "I Want to Eat Your Pancreas",
    genre: "Animation / Drama",
    valence: 0.78,
    energy: 0.51,
    acousticness: 0.91
  },
  {
    title: "I, Robot",
    genre: "Action / Science Fiction",
    valence: 0.61,
    energy: 0.92,
    acousticness: 0.13
  },
  {
    title: "I'm Gonna Disappear",
    genre: "Comedy / Drama",
    valence: 0.67,
    energy: 0.54,
    acousticness: 0.67
  },
  {
    title: "Ice Age",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.8,
    acousticness: 0.51
  },
  {
    title: "Ice Age: Collision Course",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.93,
    acousticness: 0.34
  },
  {
    title: "Ice Age: Continental Drift",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.75,
    acousticness: 0.57
  },
  {
    title: "Ice Age: Dawn of the Dinosaurs",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.8,
    acousticness: 0.57
  },
  {
    title: "Ice Age: The Meltdown",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.73,
    acousticness: 0.52
  },
  {
    title: "Idiocracy",
    genre: "Comedy / Science Fiction",
    valence: 0.81,
    energy: 0.86,
    acousticness: 0.24
  },
  {
    title: "IF",
    genre: "Comedy / Fantasy",
    valence: 1,
    energy: 0.61,
    acousticness: 0.54
  },
  {
    title: "In the Lost Lands",
    genre: "Action / Fantasy",
    valence: 0.66,
    energy: 0.78,
    acousticness: 0.46
  },
  {
    title: "In Time",
    genre: "Action / Thriller",
    valence: 0.5,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "In Your Dreams",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.9,
    acousticness: 0.5
  },
  {
    title: "Inception",
    genre: "Action / Science Fiction",
    valence: 0.7,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Incredibles 2",
    genre: "Action / Adventure",
    valence: 1,
    energy: 0.91,
    acousticness: 0.36
  },
  {
    title: "Indiana Jones and the Dial of Destiny",
    genre: "Adventure / Action",
    valence: 0.64,
    energy: 0.89,
    acousticness: 0.25
  },
  {
    title: "Indiana Jones and the Last Crusade",
    genre: "Adventure / Action",
    valence: 0.69,
    energy: 0.82,
    acousticness: 0.3
  },
  {
    title: "Indiana Jones and the Temple of Doom",
    genre: "Adventure / Action",
    valence: 0.58,
    energy: 0.85,
    acousticness: 0.25
  },
  {
    title: "Infinite",
    genre: "Science Fiction / Action",
    valence: 0.71,
    energy: 0.95,
    acousticness: 0.08
  },
  {
    title: "Inside Out",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.66,
    acousticness: 0.69
  },
  {
    title: "Inside Out 2",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.74,
    acousticness: 0.54
  },
  {
    title: "Interstellar",
    genre: "Adventure / Drama",
    valence: 0.56,
    energy: 0.7,
    acousticness: 0.45
  },
  {
    title: "Iron Man 2",
    genre: "Adventure / Action",
    valence: 0.67,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Iron Man 3",
    genre: "Action / Adventure",
    valence: 0.61,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "It Boy",
    genre: "Comedy",
    valence: 0.72,
    energy: 0.59,
    acousticness: 0.55
  },
  {
    title: "Jack the Giant Slayer",
    genre: "Fantasy / Action",
    valence: 0.67,
    energy: 0.9,
    acousticness: 0.43
  },
  {
    title: "Jay Kelly",
    genre: "Drama / Comedy",
    valence: 0.64,
    energy: 0.55,
    acousticness: 0.73
  },
  {
    title: "Jay Vejay",
    genre: "Action / Adventure",
    valence: 0.53,
    energy: 0.72,
    acousticness: 0.6
  },
  {
    title: "Jennifer's Body",
    genre: "Horror / Comedy",
    valence: 0.53,
    energy: 0.79,
    acousticness: 0.38
  },
  {
    title: "Jerry & Marge Go Large",
    genre: "Comedy / Drama",
    valence: 0.72,
    energy: 0.55,
    acousticness: 0.7
  },
  {
    title: "Jingle All the Way",
    genre: "Family / Comedy",
    valence: 0.93,
    energy: 0.65,
    acousticness: 0.54
  },
  {
    title: "Jingle Bell Heist",
    genre: "Romance / Crime",
    valence: 0.7,
    energy: 0.64,
    acousticness: 0.58
  },
  {
    title: "Johnny English Reborn",
    genre: "Crime / Action",
    valence: 0.64,
    energy: 0.87,
    acousticness: 0.36
  },
  {
    title: "JUJUTSU KAISEN: Execution -Shibuya Incident x The Culling Game Begins-",
    genre: "Animation / Action",
    valence: 0.63,
    energy: 0.74,
    acousticness: 0.38
  },
  {
    title: "JUJUTSU KAISEN: Hidden Inventory / Premature Death - The Movie",
    genre: "Animation / Action",
    valence: 0.83,
    energy: 0.93,
    acousticness: 0.32
  },
  {
    title: "Jumanji: The Next Level",
    genre: "Adventure / Comedy",
    valence: 0.86,
    energy: 0.84,
    acousticness: 0.38
  },
  {
    title: "Jurassic Park",
    genre: "Adventure / Science Fiction",
    valence: 0.69,
    energy: 0.78,
    acousticness: 0.19
  },
  {
    title: "Jurassic World",
    genre: "Action / Adventure",
    valence: 0.59,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Jurassic World Dominion",
    genre: "Adventure / Action",
    valence: 0.61,
    energy: 0.96,
    acousticness: 0.04
  },
  {
    title: "Jurassic World Rebirth",
    genre: "Science Fiction / Adventure",
    valence: 0.66,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Jurassic World: Fallen Kingdom",
    genre: "Action / Adventure",
    valence: 0.58,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Just Go with It",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.53,
    acousticness: 0.7
  },
  {
    title: "Justice League",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Justin Case",
    genre: "TV Movie / Crime",
    valence: 0.61,
    energy: 0.75,
    acousticness: 0.43
  },
  {
    title: "Kaiju No. 8: Mission Recon",
    genre: "Animation / Action",
    valence: 0.75,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Kalki 2898-AD",
    genre: "Drama / Action",
    valence: 0.61,
    energy: 0.87,
    acousticness: 0.27
  },
  {
    title: "Kantara - A Legend: Chapter 1",
    genre: "Action / Drama",
    valence: 0.62,
    energy: 0.79,
    acousticness: 0.49
  },
  {
    title: "Kapag Tumayo Ang Testigo",
    genre: "Comedy",
    valence: 0.62,
    energy: 0.58,
    acousticness: 0.49
  },
  {
    title: "Karate Kid: Legends",
    genre: "Action / Adventure",
    valence: 0.59,
    energy: 0.86,
    acousticness: 0.42
  },
  {
    title: "Kayara",
    genre: "Animation / Adventure",
    valence: 0.93,
    energy: 0.68,
    acousticness: 0.52
  },
  {
    title: "Keep an Eye Out",
    genre: "Comedy",
    valence: 0.68,
    energy: 0.54,
    acousticness: 0.57
  },
  {
    title: "Kill Me Please",
    genre: "Adventure / Romance",
    valence: 0.79,
    energy: 0.74,
    acousticness: 0.57
  },
  {
    title: "Kill Shot",
    genre: "Action",
    valence: 0.58,
    energy: 0.73,
    acousticness: 0.33
  },
  {
    title: "Kinda Pregnant",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.5,
    acousticness: 0.68
  },
  {
    title: "King Arthur: Legend of the Sword",
    genre: "Action / Drama",
    valence: 0.63,
    energy: 0.72,
    acousticness: 0.46
  },
  {
    title: "King Kong",
    genre: "Adventure / Drama",
    valence: 0.66,
    energy: 0.82,
    acousticness: 0.44
  },
  {
    title: "Kingdom of the Planet of the Apes",
    genre: "Science Fiction / Adventure",
    valence: 0.71,
    energy: 0.96,
    acousticness: 0.07
  },
  {
    title: "Kingsman: The Golden Circle",
    genre: "Action / Adventure",
    valence: 0.75,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Kingsman: The Secret Service",
    genre: "Crime / Comedy",
    valence: 0.7,
    energy: 1,
    acousticness: 0.28
  },
  {
    title: "Klaus",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.8,
    acousticness: 0.51
  },
  {
    title: "Knight and Day",
    genre: "Action / Comedy",
    valence: 0.67,
    energy: 0.8,
    acousticness: 0.4
  },
  {
    title: "Knights of the Zodiac",
    genre: "Fantasy / Action",
    valence: 0.81,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Ko Ga Loak Village",
    genre: "Comedy / Horror",
    valence: 0.52,
    energy: 0.77,
    acousticness: 0.36
  },
  {
    title: "KPop Demon Hunters",
    genre: "Fantasy / Music",
    valence: 1,
    energy: 0.78,
    acousticness: 0.6
  },
  {
    title: "Kraken",
    genre: "Science Fiction / Adventure",
    valence: 0.55,
    energy: 0.71,
    acousticness: 0.45
  },
  {
    title: "Krampus",
    genre: "Horror / Comedy",
    valence: 0.52,
    energy: 0.89,
    acousticness: 0.37
  },
  {
    title: "Kraven the Hunter",
    genre: "Action / Adventure",
    valence: 0.52,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Krrish 3",
    genre: "Action / Science Fiction",
    valence: 0.52,
    energy: 0.85,
    acousticness: 0.15
  },
  {
    title: "Kung Fu Hustle",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.94,
    acousticness: 0.26
  },
  {
    title: "Kung Fu Panda",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.95,
    acousticness: 0.42
  },
  {
    title: "Kung Fu Panda 2",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.67,
    acousticness: 0.66
  },
  {
    title: "Kung Fu Panda 4",
    genre: "Animation / Family",
    valence: 1,
    energy: 1,
    acousticness: 0.33
  },
  {
    title: "La Chèvre",
    genre: "Comedy / Crime",
    valence: 0.68,
    energy: 0.85,
    acousticness: 0.37
  },
  {
    title: "La La Land",
    genre: "Musical Romance",
    valence: 0.65,
    energy: 0.8,
    acousticness: 0.6
  },
  {
    title: "La scuola",
    genre: "Comedy / Drama",
    valence: 0.7,
    energy: 0.55,
    acousticness: 0.71
  },
  {
    title: "La traviata",
    genre: "Drama / Music",
    valence: 0.66,
    energy: 0.5,
    acousticness: 0.78
  },
  {
    title: "Ladies' Doctor",
    genre: "Comedy",
    valence: 0.62,
    energy: 0.5,
    acousticness: 0.58
  },
  {
    title: "Laila",
    genre: "Comedy / Romance",
    valence: 0.77,
    energy: 0.5,
    acousticness: 0.66
  },
  {
    title: "Language Lessons",
    genre: "Drama / Comedy",
    valence: 0.67,
    energy: 0.56,
    acousticness: 0.75
  },
  {
    title: "Last Christmas",
    genre: "Comedy / Romance",
    valence: 0.87,
    energy: 0.51,
    acousticness: 0.71
  },
  {
    title: "Le Moustachu",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.59,
    acousticness: 0.51
  },
  {
    title: "Life Is Beautiful",
    genre: "Comedy / Drama",
    valence: 0.66,
    energy: 0.5,
    acousticness: 0.74
  },
  {
    title: "Light of the World",
    genre: "Animation / Fantasy",
    valence: 0.89,
    energy: 0.63,
    acousticness: 0.82
  },
  {
    title: "Lilo & Stitch",
    genre: "Family / Science Fiction",
    valence: 0.87,
    energy: 0.64,
    acousticness: 0.44
  },
  {
    title: "Little Man",
    genre: "Comedy / Crime",
    valence: 0.61,
    energy: 0.64,
    acousticness: 0.49
  },
  {
    title: "Logan",
    genre: "Action / Drama",
    valence: 0.5,
    energy: 0.75,
    acousticness: 0.39
  },
  {
    title: "Logan's Run",
    genre: "Action / Science Fiction",
    valence: 0.58,
    energy: 0.82,
    acousticness: 0.18
  },
  {
    title: "Lokah Chapter 1: Chandra",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 0.91,
    acousticness: 0.22
  },
  {
    title: "London Calling",
    genre: "Action / Crime",
    valence: 0.52,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Lost in the Spotlight",
    genre: "Drama / Comedy",
    valence: 0.6,
    energy: 0.53,
    acousticness: 0.66
  },
  {
    title: "Love and Wine",
    genre: "Romance / Comedy",
    valence: 0.84,
    energy: 0.53,
    acousticness: 0.63
  },
  {
    title: "Luca",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.85,
    acousticness: 0.46
  },
  {
    title: "Luck",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.93,
    acousticness: 0.46
  },
  {
    title: "Lucy",
    genre: "Action / Science Fiction",
    valence: 0.53,
    energy: 0.88,
    acousticness: 0.12
  },
  {
    title: "Lust, Caution",
    genre: "Action / Drama",
    valence: 0.53,
    energy: 0.83,
    acousticness: 0.58
  },
  {
    title: "Mad Max 2",
    genre: "Adventure / Action",
    valence: 0.55,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action / Adventure",
    valence: 0.66,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Madagascar",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.73,
    acousticness: 0.56
  },
  {
    title: "Madagascar 3: Europe's Most Wanted",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.83,
    acousticness: 0.58
  },
  {
    title: "Madagascar: Escape 2 Africa",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.73,
    acousticness: 0.57
  },
  {
    title: "Madame Web",
    genre: "Action / Fantasy",
    valence: 0.67,
    energy: 0.85,
    acousticness: 0.32
  },
  {
    title: "Maintenance Required",
    genre: "Romance / Comedy",
    valence: 0.84,
    energy: 0.54,
    acousticness: 0.73
  },
  {
    title: "Maleficent",
    genre: "Fantasy / Adventure",
    valence: 0.98,
    energy: 0.9,
    acousticness: 0.39
  },
  {
    title: "Man of Steel",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Manitou's Canoe",
    genre: "Comedy / Western",
    valence: 0.64,
    energy: 0.55,
    acousticness: 0.65
  },
  {
    title: "Marty Supreme",
    genre: "Thriller / Drama",
    valence: 0.52,
    energy: 0.66,
    acousticness: 0.56
  },
  {
    title: "Mary Poppins",
    genre: "Comedy / Family",
    valence: 0.93,
    energy: 0.63,
    acousticness: 0.53
  },
  {
    title: "Matilda",
    genre: "Comedy / Family",
    valence: 0.94,
    energy: 0.62,
    acousticness: 0.57
  },
  {
    title: "Mavka: The Forest Song",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.82,
    acousticness: 0.4
  },
  {
    title: "Maximum Ride",
    genre: "Action / Adventure",
    valence: 0.77,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Meatballs",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.51,
    acousticness: 0.52
  },
  {
    title: "Megamind",
    genre: "Animation / Action",
    valence: 1,
    energy: 0.94,
    acousticness: 0.28
  },
  {
    title: "Megamind vs. the Doom Syndicate",
    genre: "Animation / Comedy",
    valence: 0.83,
    energy: 0.79,
    acousticness: 0.39
  },
  {
    title: "Memoir of a Snail",
    genre: "Animation / Drama",
    valence: 0.82,
    energy: 0.6,
    acousticness: 0.77
  },
  {
    title: "Men in Black",
    genre: "Action / Adventure",
    valence: 0.88,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Men in Black II",
    genre: "Action / Comedy",
    valence: 0.79,
    energy: 0.88,
    acousticness: 0.21
  },
  {
    title: "Mickey 17",
    genre: "Science Fiction / Comedy",
    valence: 0.85,
    energy: 0.85,
    acousticness: 0.26
  },
  {
    title: "Migration",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.72,
    acousticness: 0.48
  },
  {
    title: "Minions: The Rise of Gru",
    genre: "Family / Comedy",
    valence: 1,
    energy: 1,
    acousticness: 0.28
  },
  {
    title: "Minority Report",
    genre: "Science Fiction / Action",
    valence: 0.51,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Miracle on 34th Street",
    genre: "Comedy / Drama",
    valence: 0.86,
    energy: 0.51,
    acousticness: 0.77
  },
  {
    title: "Miracolo italiano",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.51,
    acousticness: 0.58
  },
  {
    title: "Miraculous: Ladybug & Cat Noir, The Movie",
    genre: "Animation / Fantasy",
    valence: 1,
    energy: 0.76,
    acousticness: 0.52
  },
  {
    title: "Miss Peregrine's Home for Peculiar Children",
    genre: "Fantasy / Adventure",
    valence: 0.9,
    energy: 0.64,
    acousticness: 0.6
  },
  {
    title: "Miss Right",
    genre: "Comedy / Romance",
    valence: 0.72,
    energy: 0.54,
    acousticness: 0.68
  },
  {
    title: "Missing Key",
    genre: "Fantasy / Animation",
    valence: 0.72,
    energy: 0.71,
    acousticness: 0.51
  },
  {
    title: "Mission: Impossible",
    genre: "Adventure / Action",
    valence: 0.57,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Mission: Impossible - Dead Reckoning Part One",
    genre: "Action / Thriller",
    valence: 0.52,
    energy: 0.99,
    acousticness: 0.09
  },
  {
    title: "Mission: Impossible - Fallout",
    genre: "Action / Adventure",
    valence: 0.66,
    energy: 0.89,
    acousticness: 0.25
  },
  {
    title: "Mission: Impossible - Ghost Protocol",
    genre: "Action / Thriller",
    valence: 0.52,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Moana",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.73,
    acousticness: 0.43
  },
  {
    title: "Moana 2",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.87,
    acousticness: 0.5
  },
  {
    title: "Monsters University",
    genre: "Animation / Family",
    valence: 0.84,
    energy: 0.55,
    acousticness: 0.56
  },
  {
    title: "Monsters, Inc.",
    genre: "Animation / Comedy",
    valence: 0.98,
    energy: 0.57,
    acousticness: 0.61
  },
  {
    title: "Morbius",
    genre: "Action / Science Fiction",
    valence: 0.62,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Moving Violation",
    genre: "Drama / Comedy",
    valence: 0.54,
    energy: 0.67,
    acousticness: 0.64
  },
  {
    title: "Mr. & Mrs. Smith",
    genre: "Action / Comedy",
    valence: 0.55,
    energy: 0.93,
    acousticness: 0.47
  },
  {
    title: "Mulan",
    genre: "Animation / Family",
    valence: 0.91,
    energy: 0.69,
    acousticness: 0.45
  },
  {
    title: "Muppet Treasure Island",
    genre: "Family / Comedy",
    valence: 0.97,
    energy: 0.65,
    acousticness: 0.52
  },
  {
    title: "Muppets from Space",
    genre: "Family / Comedy",
    valence: 0.84,
    energy: 0.65,
    acousticness: 0.45
  },
  {
    title: "Murder Mystery 2",
    genre: "Mystery / Comedy",
    valence: 0.5,
    energy: 0.76,
    acousticness: 0.42
  },
  {
    title: "Mutual Relations",
    genre: "Comedy / Romance",
    valence: 0.75,
    energy: 0.55,
    acousticness: 0.71
  },
  {
    title: "My Girl",
    genre: "Comedy / Drama",
    valence: 0.69,
    energy: 0.5,
    acousticness: 0.75
  },
  {
    title: "My Hero Academia: You're Next",
    genre: "Animation / Action",
    valence: 0.76,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "My Neighbor Totoro",
    genre: "Fantasy / Animation",
    valence: 0.98,
    energy: 0.62,
    acousticness: 0.51
  },
  {
    title: "My Sister in Law",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.6,
    acousticness: 0.49
  },
  {
    title: "Nacho Libre",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.55,
    acousticness: 0.5
  },
  {
    title: "Nanny McPhee",
    genre: "Fantasy / Comedy",
    valence: 0.97,
    energy: 0.61,
    acousticness: 0.54
  },
  {
    title: "National Lampoon's Christmas Vacation",
    genre: "Comedy",
    valence: 0.73,
    energy: 0.57,
    acousticness: 0.53
  },
  {
    title: "Nausicaä of the Valley of the Wind",
    genre: "Adventure / Animation",
    valence: 0.89,
    energy: 0.81,
    acousticness: 0.37
  },
  {
    title: "Ne Zha",
    genre: "Animation / Fantasy",
    valence: 0.91,
    energy: 0.81,
    acousticness: 0.36
  },
  {
    title: "Ne Zha 2",
    genre: "Animation / Fantasy",
    valence: 0.94,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "New Gods: Nezha Reborn",
    genre: "Animation / Fantasy",
    valence: 0.81,
    energy: 0.9,
    acousticness: 0.28
  },
  {
    title: "Night at the Museum",
    genre: "Action / Adventure",
    valence: 1,
    energy: 1,
    acousticness: 0.3
  },
  {
    title: "Niko: Beyond the Northern Lights",
    genre: "Animation / Family",
    valence: 0.91,
    energy: 0.65,
    acousticness: 0.56
  },
  {
    title: "Ninja Cheerleaders",
    genre: "Action / Comedy",
    valence: 0.68,
    energy: 0.72,
    acousticness: 0.39
  },
  {
    title: "Ninja Scroll",
    genre: "Fantasy / Adventure",
    valence: 0.89,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "No Time to Die",
    genre: "Action / Thriller",
    valence: 0.53,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Notting Hill",
    genre: "Romance / Comedy",
    valence: 0.78,
    energy: 0.5,
    acousticness: 0.67
  },
  {
    title: "Novocaine",
    genre: "Action / Comedy",
    valence: 0.55,
    energy: 0.91,
    acousticness: 0.27
  },
  {
    title: "O Brother, Where Art Thou?",
    genre: "Adventure / Comedy",
    valence: 0.71,
    energy: 0.85,
    acousticness: 0.4
  },
  {
    title: "Oblivion",
    genre: "Action / Science Fiction",
    valence: 0.58,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "Oh. What. Fun.",
    genre: "Comedy",
    valence: 0.67,
    energy: 0.57,
    acousticness: 0.49
  },
  {
    title: "Oliver Twist",
    genre: "Drama / Adventure",
    valence: 0.64,
    energy: 0.8,
    acousticness: 0.56
  },
  {
    title: "Omniscient Reader: The Prophecy",
    genre: "Action / Adventure",
    valence: 0.74,
    energy: 0.92,
    acousticness: 0.17
  },
  {
    title: "On Approval",
    genre: "Comedy / Romance",
    valence: 0.87,
    energy: 0.54,
    acousticness: 0.65
  },
  {
    title: "Once Upon a Time... in Hollywood",
    genre: "Comedy / Drama",
    valence: 0.6,
    energy: 0.65,
    acousticness: 0.59
  },
  {
    title: "One Hundred and One Dalmatians",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.71,
    acousticness: 0.5
  },
  {
    title: "One of Them Days",
    genre: "Comedy",
    valence: 0.67,
    energy: 0.6,
    acousticness: 0.5
  },
  {
    title: "Open Range",
    genre: "Western / Drama",
    valence: 0.63,
    energy: 0.63,
    acousticness: 0.76
  },
  {
    title: "Open Season",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.75,
    acousticness: 0.54
  },
  {
    title: "Operation Fortune: Ruse de Guerre",
    genre: "Action / Comedy",
    valence: 0.62,
    energy: 0.89,
    acousticness: 0.3
  },
  {
    title: "Operation Snatch",
    genre: "Comedy",
    valence: 0.61,
    energy: 0.51,
    acousticness: 0.53
  },
  {
    title: "Outside Bet",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.57,
    acousticness: 0.56
  },
  {
    title: "OVERLORD: The Sacred Kingdom",
    genre: "Action / Adventure",
    valence: 0.94,
    energy: 1,
    acousticness: 0.25
  },
  {
    title: "Pacific Rim",
    genre: "Action / Science Fiction",
    valence: 0.67,
    energy: 0.97,
    acousticness: 0.13
  },
  {
    title: "Pain & Gain",
    genre: "Comedy / Crime",
    valence: 0.62,
    energy: 0.84,
    acousticness: 0.28
  },
  {
    title: "Palm Springs",
    genre: "Comedy / Romance",
    valence: 0.82,
    energy: 0.65,
    acousticness: 0.47
  },
  {
    title: "Panda Plan",
    genre: "Action / Comedy",
    valence: 0.67,
    energy: 0.79,
    acousticness: 0.35
  },
  {
    title: "Papa Zola: The Movie",
    genre: "Animation / Action",
    valence: 1,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Parasite",
    genre: "Comedy / Thriller",
    valence: 0.57,
    energy: 0.71,
    acousticness: 0.6
  },
  {
    title: "Patrick",
    genre: "Drama / Comedy",
    valence: 0.69,
    energy: 0.51,
    acousticness: 0.76
  },
  {
    title: "Paul",
    genre: "Adventure / Comedy",
    valence: 0.86,
    energy: 0.88,
    acousticness: 0.26
  },
  {
    title: "PAW Patrol: The Mighty Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.73,
    acousticness: 0.54
  },
  {
    title: "Pecos Bill",
    genre: "Family / Western",
    valence: 0.77,
    energy: 0.51,
    acousticness: 0.73
  },
  {
    title: "Penguin Highway",
    genre: "Animation / Adventure",
    valence: 0.98,
    energy: 0.94,
    acousticness: 0.44
  },
  {
    title: "Penguins of Madagascar",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.83,
    acousticness: 0.56
  },
  {
    title: "Percy Jackson & the Olympians: The Lightning Thief",
    genre: "Adventure / Fantasy",
    valence: 0.89,
    energy: 0.66,
    acousticness: 0.42
  },
  {
    title: "Perfect Blue",
    genre: "Animation / Thriller",
    valence: 0.62,
    energy: 0.82,
    acousticness: 0.44
  },
  {
    title: "Peter Pan",
    genre: "Adventure / Fantasy",
    valence: 0.84,
    energy: 0.74,
    acousticness: 0.42
  },
  {
    title: "Pets on a Train",
    genre: "Animation / Comedy",
    valence: 0.84,
    energy: 0.96,
    acousticness: 0.31
  },
  {
    title: "Piranha 3D",
    genre: "Comedy / Horror",
    valence: 0.52,
    energy: 0.75,
    acousticness: 0.42
  },
  {
    title: "Pirates of the Caribbean: At World's End",
    genre: "Adventure / Fantasy",
    valence: 0.68,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest",
    genre: "Adventure / Fantasy",
    valence: 0.73,
    energy: 0.97,
    acousticness: 0.22
  },
  {
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    genre: "Adventure / Action",
    valence: 0.67,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Pirates of the Caribbean: On Stranger Tides",
    genre: "Adventure / Action",
    valence: 0.71,
    energy: 0.95,
    acousticness: 0.17
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    genre: "Adventure / Fantasy",
    valence: 0.75,
    energy: 0.92,
    acousticness: 0.17
  },
  {
    title: "Pixels",
    genre: "Action / Comedy",
    valence: 0.82,
    energy: 0.97,
    acousticness: 0.15
  },
  {
    title: "Place publique",
    genre: "Comedy / Drama",
    valence: 0.62,
    energy: 0.54,
    acousticness: 0.71
  },
  {
    title: "Planet of the Apes",
    genre: "Science Fiction / Adventure",
    valence: 0.6,
    energy: 0.93,
    acousticness: 0.22
  },
  {
    title: "Plankton: The Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.77,
    acousticness: 0.56
  },
  {
    title: "Playdate",
    genre: "Action / Comedy",
    valence: 0.88,
    energy: 0.76,
    acousticness: 0.43
  },
  {
    title: "Pocahontas",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.66,
    acousticness: 0.63
  },
  {
    title: "Pokémon 4Ever",
    genre: "Adventure / Fantasy",
    valence: 1,
    energy: 0.96,
    acousticness: 0.24
  },
  {
    title: "Pokémon: The First Movie",
    genre: "Animation / Family",
    valence: 1,
    energy: 1,
    acousticness: 0.27
  },
  {
    title: "Ponyo",
    genre: "Animation / Fantasy",
    valence: 0.89,
    energy: 0.59,
    acousticness: 0.57
  },
  {
    title: "Poor Things",
    genre: "Science Fiction / Romance",
    valence: 0.81,
    energy: 0.61,
    acousticness: 0.47
  },
  {
    title: "Popular Theory",
    genre: "Family / Comedy",
    valence: 0.96,
    energy: 0.74,
    acousticness: 0.38
  },
  {
    title: "Predator",
    genre: "Science Fiction / Action",
    valence: 0.52,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Predator: Badlands",
    genre: "Action / Science Fiction",
    valence: 0.69,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Predator: Killer of Killers",
    genre: "Animation / Action",
    valence: 0.67,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Prep & Landing: The Snowball Protocol",
    genre: "Animation",
    valence: 0.64,
    energy: 0.61,
    acousticness: 0.52
  },
  {
    title: "Pretty Woman",
    genre: "Romance / Comedy",
    valence: 0.81,
    energy: 0.5,
    acousticness: 0.71
  },
  {
    title: "Primo amore",
    genre: "Film",
    valence: 0.5,
    energy: 0.5,
    acousticness: 0.51
  },
  {
    title: "Princess Mononoke",
    genre: "Adventure / Fantasy",
    valence: 0.85,
    energy: 0.77,
    acousticness: 0.41
  },
  {
    title: "Private Lessons",
    genre: "Comedy / Romance",
    valence: 0.75,
    energy: 0.56,
    acousticness: 0.71
  },
  {
    title: "Professor Creeps",
    genre: "Comedy",
    valence: 0.62,
    energy: 0.51,
    acousticness: 0.49
  },
  {
    title: "Project Alien",
    genre: "Science Fiction / Action",
    valence: 0.56,
    energy: 0.92,
    acousticness: 0.18
  },
  {
    title: "Pulp Fiction",
    genre: "Thriller / Crime",
    valence: 0.52,
    energy: 0.85,
    acousticness: 0.34
  },
  {
    title: "Puss in Boots: The Last Wish",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.8,
    acousticness: 0.49
  },
  {
    title: "Ra.One",
    genre: "Adventure / Action",
    valence: 0.61,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Raiders of the Lost Ark",
    genre: "Adventure / Action",
    valence: 0.64,
    energy: 0.85,
    acousticness: 0.28
  },
  {
    title: "Ramayana: Part One",
    genre: "Action / Drama",
    valence: 0.54,
    energy: 0.79,
    acousticness: 0.47
  },
  {
    title: "Rampage",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 0.96,
    acousticness: 0.09
  },
  {
    title: "Rango",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.78,
    acousticness: 0.62
  },
  {
    title: "Rascal Does Not Dream of a Sister Venturing Out",
    genre: "Animation / Drama",
    valence: 0.72,
    energy: 0.66,
    acousticness: 0.63
  },
  {
    title: "Ratatouille",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.71,
    acousticness: 0.52
  },
  {
    title: "Rave Review",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.52,
    acousticness: 0.52
  },
  {
    title: "Ready Player One",
    genre: "Adventure / Action",
    valence: 0.72,
    energy: 0.95,
    acousticness: 0.07
  },
  {
    title: "Real Steel",
    genre: "Action / Science Fiction",
    valence: 0.5,
    energy: 0.8,
    acousticness: 0.36
  },
  {
    title: "Red Notice",
    genre: "Action / Comedy",
    valence: 0.58,
    energy: 0.89,
    acousticness: 0.3
  },
  {
    title: "Red One",
    genre: "Action / Comedy",
    valence: 0.82,
    energy: 0.86,
    acousticness: 0.37
  },
  {
    title: "Red Shoes and the Seven Dwarfs",
    genre: "Animation / Fantasy",
    valence: 1,
    energy: 0.82,
    acousticness: 0.6
  },
  {
    title: "Red Sonja",
    genre: "Adventure / Action",
    valence: 0.66,
    energy: 0.99,
    acousticness: 0.21
  },
  {
    title: "Rental Family",
    genre: "Drama / Comedy",
    valence: 0.7,
    energy: 0.5,
    acousticness: 0.74
  },
  {
    title: "Return of the Jedi",
    genre: "Adventure / Action",
    valence: 0.7,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Ricky Stanicky",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.52,
    acousticness: 0.52
  },
  {
    title: "Ride On",
    genre: "Action / Comedy",
    valence: 0.73,
    energy: 0.68,
    acousticness: 0.6
  },
  {
    title: "Rio",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.8,
    acousticness: 0.49
  },
  {
    title: "Rise of the Guardians",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.99,
    acousticness: 0.33
  },
  {
    title: "Robot Dreams",
    genre: "Animation / Drama",
    valence: 0.85,
    energy: 0.7,
    acousticness: 0.54
  },
  {
    title: "Robots",
    genre: "Animation / Comedy",
    valence: 0.99,
    energy: 0.72,
    acousticness: 0.41
  },
  {
    title: "Rogue One: A Star Wars Story",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Roofman",
    genre: "Crime / Comedy",
    valence: 0.55,
    energy: 0.65,
    acousticness: 0.64
  },
  {
    title: "RRR",
    genre: "Action / Adventure",
    valence: 0.65,
    energy: 0.8,
    acousticness: 0.41
  },
  {
    title: "Rurouni Kenshin: The Beginning",
    genre: "Action / Adventure",
    valence: 0.74,
    energy: 0.79,
    acousticness: 0.55
  },
  {
    title: "Rurouni Kenshin: The Final",
    genre: "Action / Adventure",
    valence: 0.52,
    energy: 0.81,
    acousticness: 0.54
  },
  {
    title: "Rush Hour",
    genre: "Action / Comedy",
    valence: 0.59,
    energy: 0.92,
    acousticness: 0.29
  },
  {
    title: "Rush Hour 3",
    genre: "Action / Comedy",
    valence: 0.61,
    energy: 0.89,
    acousticness: 0.31
  },
  {
    title: "Rye Lane",
    genre: "Comedy / Romance",
    valence: 0.76,
    energy: 0.52,
    acousticness: 0.71
  },
  {
    title: "Sakra",
    genre: "Action",
    valence: 0.52,
    energy: 0.77,
    acousticness: 0.34
  },
  {
    title: "Santa Claus",
    genre: "Family / Fantasy",
    valence: 0.98,
    energy: 0.59,
    acousticness: 0.57
  },
  {
    title: "Scary Movie",
    genre: "Comedy",
    valence: 0.73,
    energy: 0.59,
    acousticness: 0.49
  },
  {
    title: "Scorpion King: Book of Souls",
    genre: "Action / Adventure",
    valence: 0.75,
    energy: 0.93,
    acousticness: 0.19
  },
  {
    title: "Scouts Guide to the Zombie Apocalypse",
    genre: "Comedy / Horror",
    valence: 0.52,
    energy: 0.74,
    acousticness: 0.39
  },
  {
    title: "Screamboat",
    genre: "Horror / Comedy",
    valence: 0.51,
    energy: 0.76,
    acousticness: 0.41
  },
  {
    title: "Scrooge",
    genre: "Fantasy / Drama",
    valence: 0.54,
    energy: 0.5,
    acousticness: 0.57
  },
  {
    title: "Season of the Witch",
    genre: "Adventure / Fantasy",
    valence: 0.75,
    energy: 0.97,
    acousticness: 0.17
  },
  {
    title: "Second Tour",
    genre: "Comedy",
    valence: 0.72,
    energy: 0.55,
    acousticness: 0.52
  },
  {
    title: "Senario XX",
    genre: "Comedy / Adventure",
    valence: 0.75,
    energy: 0.94,
    acousticness: 0.31
  },
  {
    title: "Serenity",
    genre: "Science Fiction / Action",
    valence: 0.55,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Shahenshah",
    genre: "Action",
    valence: 0.56,
    energy: 0.73,
    acousticness: 0.34
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    genre: "Action / Adventure",
    valence: 0.7,
    energy: 0.97,
    acousticness: 0.16
  },
  {
    title: "Shaolin Soccer",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.78,
    acousticness: 0.35
  },
  {
    title: "Shazam! Fury of the Gods",
    genre: "Comedy / Action",
    valence: 0.79,
    energy: 0.92,
    acousticness: 0.31
  },
  {
    title: "SHINE 30",
    genre: "Film",
    valence: 0.52,
    energy: 0.55,
    acousticness: 0.46
  },
  {
    title: "Shivam",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.69,
    acousticness: 0.53
  },
  {
    title: "Shrek",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.91,
    acousticness: 0.5
  },
  {
    title: "Shrek 2",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.76,
    acousticness: 0.61
  },
  {
    title: "Shrek 5",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.84,
    acousticness: 0.5
  },
  {
    title: "Shrek Forever After",
    genre: "Comedy / Adventure",
    valence: 1,
    energy: 0.92,
    acousticness: 0.48
  },
  {
    title: "Shrek the Halls",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.87,
    acousticness: 0.43
  },
  {
    title: "Shrek the Third",
    genre: "Fantasy / Adventure",
    valence: 1,
    energy: 0.86,
    acousticness: 0.46
  },
  {
    title: "Sidelined 2: Intercepted",
    genre: "Romance / Comedy",
    valence: 0.81,
    energy: 0.53,
    acousticness: 0.68
  },
  {
    title: "Sin cobertura",
    genre: "Comedy / Family",
    valence: 0.98,
    energy: 0.82,
    acousticness: 0.42
  },
  {
    title: "Sing",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.67,
    acousticness: 0.79
  },
  {
    title: "Sing 2",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.64,
    acousticness: 0.7
  },
  {
    title: "Sing: Thriller",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.69,
    acousticness: 0.73
  },
  {
    title: "Sitaare Zameen Par",
    genre: "Comedy / Drama",
    valence: 0.7,
    energy: 0.54,
    acousticness: 0.72
  },
  {
    title: "Smurfs",
    genre: "Animation / Family",
    valence: 0.95,
    energy: 0.67,
    acousticness: 0.56
  },
  {
    title: "Snatch",
    genre: "Crime / Comedy",
    valence: 0.67,
    energy: 0.66,
    acousticness: 0.49
  },
  {
    title: "Snow White",
    genre: "Family / Fantasy",
    valence: 0.72,
    energy: 0.5,
    acousticness: 0.5
  },
  {
    title: "Snow White and the Huntsman",
    genre: "Adventure / Fantasy",
    valence: 0.63,
    energy: 0.66,
    acousticness: 0.52
  },
  {
    title: "Snow White and the Seven Dwarfs",
    genre: "Fantasy / Animation",
    valence: 0.94,
    energy: 0.6,
    acousticness: 0.48
  },
  {
    title: "Snowpiercer",
    genre: "Action / Science Fiction",
    valence: 0.5,
    energy: 0.81,
    acousticness: 0.38
  },
  {
    title: "Solo Leveling -ReAwakening-",
    genre: "Action / Adventure",
    valence: 0.87,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Son of a Rich",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.61,
    acousticness: 0.57
  },
  {
    title: "Sonic the Hedgehog",
    genre: "Action / Science Fiction",
    valence: 0.88,
    energy: 0.91,
    acousticness: 0.24
  },
  {
    title: "Sonic the Hedgehog 2",
    genre: "Action / Adventure",
    valence: 1,
    energy: 0.94,
    acousticness: 0.32
  },
  {
    title: "Sore: A Wife from the Future",
    genre: "Fantasy / Romance",
    valence: 0.77,
    energy: 0.6,
    acousticness: 0.54
  },
  {
    title: "Soul",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.69,
    acousticness: 0.73
  },
  {
    title: "Space Jam",
    genre: "Comedy / Animation",
    valence: 1,
    energy: 0.71,
    acousticness: 0.46
  },
  {
    title: "Spellbound",
    genre: "Animation / Fantasy",
    valence: 1,
    energy: 0.88,
    acousticness: 0.5
  },
  {
    title: "Spermageddon",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.95,
    acousticness: 0.4
  },
  {
    title: "Spider-Man",
    genre: "Action / Science Fiction",
    valence: 0.52,
    energy: 0.8,
    acousticness: 0.14
  },
  {
    title: "Spider-Man 3",
    genre: "Action / Adventure",
    valence: 0.71,
    energy: 0.99,
    acousticness: 0.05
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation / Action",
    valence: 0.83,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Spider-Man: Brand New Day",
    genre: "Science Fiction / Action",
    valence: 0.56,
    energy: 0.96,
    acousticness: 0.04
  },
  {
    title: "Spider-Man: Far From Home",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Spider-Man: Homecoming",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 1,
    acousticness: 0.03
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animated Action",
    valence: 0.9,
    energy: 0.95,
    acousticness: 0.1
  },
  {
    title: "Spider-Man: No Way Home",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 1,
    acousticness: 0.03
  },
  {
    title: "Spinal Tap II: The End Continues",
    genre: "Comedy / Music",
    valence: 0.76,
    energy: 0.61,
    acousticness: 0.65
  },
  {
    title: "Spirit: Stallion of the Cimarron",
    genre: "Animation / Adventure",
    valence: 0.97,
    energy: 0.57,
    acousticness: 0.97
  },
  {
    title: "Spirited",
    genre: "Comedy",
    valence: 0.72,
    energy: 0.59,
    acousticness: 0.51
  },
  {
    title: "Spirited Away",
    genre: "Animation / Family",
    valence: 0.91,
    energy: 0.62,
    acousticness: 0.53
  },
  {
    title: "Spycatcher J3: SOS Close Shave",
    genre: "Action",
    valence: 0.53,
    energy: 0.73,
    acousticness: 0.37
  },
  {
    title: "Stalker",
    genre: "Science Fiction / Drama",
    valence: 0.53,
    energy: 0.57,
    acousticness: 0.48
  },
  {
    title: "Stan Behavior",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.58,
    acousticness: 0.51
  },
  {
    title: "Star Wars",
    genre: "Adventure / Action",
    valence: 0.68,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    genre: "Adventure / Action",
    valence: 0.66,
    energy: 0.98,
    acousticness: 0.06
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    genre: "Adventure / Action",
    valence: 0.67,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Star Wars: The Force Awakens",
    genre: "Adventure / Action",
    valence: 0.68,
    energy: 0.98,
    acousticness: 0.12
  },
  {
    title: "Star Wars: The Last Jedi",
    genre: "Adventure / Action",
    valence: 0.67,
    energy: 0.96,
    acousticness: 0.09
  },
  {
    title: "Star Wars: The Mandalorian and Grogu",
    genre: "Action / Adventure",
    valence: 0.56,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Star Wars: The Rise of Skywalker",
    genre: "Adventure / Action",
    valence: 0.72,
    energy: 0.95,
    acousticness: 0.09
  },
  {
    title: "Stick It",
    genre: "Comedy / Drama",
    valence: 0.65,
    energy: 0.55,
    acousticness: 0.7
  },
  {
    title: "Stick Man",
    genre: "Animation / Family",
    valence: 0.83,
    energy: 0.51,
    acousticness: 0.57
  },
  {
    title: "Stitch Head",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.73,
    acousticness: 0.51
  },
  {
    title: "Storks",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.71,
    acousticness: 0.51
  },
  {
    title: "Street Fighter: The Legend of Chun-Li",
    genre: "Action / Adventure",
    valence: 0.61,
    energy: 0.87,
    acousticness: 0.26
  },
  {
    title: "Stuart Little",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.76,
    acousticness: 0.39
  },
  {
    title: "Super",
    genre: "Comedy / Action",
    valence: 0.64,
    energy: 0.66,
    acousticness: 0.55
  },
  {
    title: "Superfast!",
    genre: "Comedy / Action",
    valence: 0.72,
    energy: 0.79,
    acousticness: 0.34
  },
  {
    title: "Supergirl",
    genre: "Action / Adventure",
    valence: 0.61,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Superman",
    genre: "Science Fiction / Adventure",
    valence: 0.68,
    energy: 0.99,
    acousticness: 0.11
  },
  {
    title: "Superman Returns",
    genre: "Science Fiction / Action",
    valence: 0.6,
    energy: 0.96,
    acousticness: 0.12
  },
  {
    title: "Survive",
    genre: "Science Fiction / Thriller",
    valence: 0.52,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Sweet Dreams",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.61,
    acousticness: 0.49
  },
  {
    title: "Sword Art Online: The Movie – Ordinal Scale",
    genre: "Animation / Action",
    valence: 0.87,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "Sydney White",
    genre: "Comedy",
    valence: 0.73,
    energy: 0.5,
    acousticness: 0.51
  },
  {
    title: "Tangled",
    genre: "Animation / Family",
    valence: 0.93,
    energy: 0.68,
    acousticness: 0.5
  },
  {
    title: "Tasting Menu",
    genre: "Comedy",
    valence: 0.71,
    energy: 0.56,
    acousticness: 0.55
  },
  {
    title: "Taxi",
    genre: "Action / Comedy",
    valence: 0.69,
    energy: 1,
    acousticness: 0.27
  },
  {
    title: "Taxi 4",
    genre: "Action / Comedy",
    valence: 0.6,
    energy: 0.84,
    acousticness: 0.3
  },
  {
    title: "Ted",
    genre: "Comedy / Fantasy",
    valence: 0.83,
    energy: 0.69,
    acousticness: 0.45
  },
  {
    title: "Ted 2",
    genre: "Comedy / Fantasy",
    valence: 0.81,
    energy: 0.6,
    acousticness: 0.5
  },
  {
    title: "Teen Titans Go! To the Movies",
    genre: "Animation / Action",
    valence: 0.97,
    energy: 0.96,
    acousticness: 0.19
  },
  {
    title: "Teenage Mutant Ninja Turtles",
    genre: "Science Fiction / Action",
    valence: 0.82,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Terminal Entry",
    genre: "Action",
    valence: 0.51,
    energy: 0.65,
    acousticness: 0.37
  },
  {
    title: "Terminator Genisys",
    genre: "Science Fiction / Action",
    valence: 0.53,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Terms of Endearment",
    genre: "Drama / Comedy",
    valence: 0.7,
    energy: 0.52,
    acousticness: 0.73
  },
  {
    title: "Thamma",
    genre: "Comedy / Horror",
    valence: 0.53,
    energy: 0.74,
    acousticness: 0.37
  },
  {
    title: "That Christmas",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.85,
    acousticness: 0.42
  },
  {
    title: "The Adjustment Bureau",
    genre: "Science Fiction / Thriller",
    valence: 0.56,
    energy: 0.72,
    acousticness: 0.31
  },
  {
    title: "The Amazing Spider-Man",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Amazing Spider-Man 2",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 0.97,
    acousticness: 0.04
  },
  {
    title: "The Anniversary",
    genre: "Comedy",
    valence: 0.75,
    energy: 0.62,
    acousticness: 0.57
  },
  {
    title: "The Aristocats",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.8,
    acousticness: 0.5
  },
  {
    title: "The Avengers",
    genre: "Science Fiction / Action",
    valence: 0.64,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Back-Up Plan",
    genre: "Comedy / Romance",
    valence: 0.85,
    energy: 0.52,
    acousticness: 0.64
  },
  {
    title: "The Backup",
    genre: "Comedy",
    valence: 0.58,
    energy: 0.52,
    acousticness: 0.53
  },
  {
    title: "The Bad Guys",
    genre: "Family / Comedy",
    valence: 1,
    energy: 1,
    acousticness: 0.31
  },
  {
    title: "The Bad Guys 2",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.9,
    acousticness: 0.44
  },
  {
    title: "The Beverly Hillbillies",
    genre: "Comedy / Family",
    valence: 0.86,
    energy: 0.5,
    acousticness: 0.62
  },
  {
    title: "The Big Lebowski",
    genre: "Comedy / Crime",
    valence: 0.58,
    energy: 0.74,
    acousticness: 0.51
  },
  {
    title: "The Black Cauldron",
    genre: "Animation / Action",
    valence: 1,
    energy: 1,
    acousticness: 0.33
  },
  {
    title: "The Boy and the Heron",
    genre: "Animation / Adventure",
    valence: 0.96,
    energy: 0.74,
    acousticness: 0.58
  },
  {
    title: "The Break-Up",
    genre: "Romance / Comedy",
    valence: 0.75,
    energy: 0.54,
    acousticness: 0.7
  },
  {
    title: "The Cat in the Hat",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.83,
    acousticness: 0.47
  },
  {
    title: "The Christmas Chronicles",
    genre: "Comedy / Adventure",
    valence: 1,
    energy: 0.75,
    acousticness: 0.48
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    genre: "Adventure / Family",
    valence: 0.92,
    energy: 0.76,
    acousticness: 0.37
  },
  {
    title: "The Count of Monte Cristo",
    genre: "Adventure / Action",
    valence: 0.65,
    energy: 0.85,
    acousticness: 0.41
  },
  {
    title: "The Croods",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.77,
    acousticness: 0.55
  },
  {
    title: "The Croods: A New Age",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.84,
    acousticness: 0.45
  },
  {
    title: "The Day the Earth Blew Up: A Looney Tunes Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.95,
    acousticness: 0.32
  },
  {
    title: "The Devil Wears Prada",
    genre: "Drama / Comedy",
    valence: 0.63,
    energy: 0.53,
    acousticness: 0.74
  },
  {
    title: "The Dictator",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.58,
    acousticness: 0.53
  },
  {
    title: "The Dilemma",
    genre: "Comedy / Drama",
    valence: 0.6,
    energy: 0.55,
    acousticness: 0.68
  },
  {
    title: "The Dukes of Hazzard",
    genre: "Comedy / Adventure",
    valence: 0.79,
    energy: 0.97,
    acousticness: 0.33
  },
  {
    title: "The Edukators",
    genre: "Drama / Comedy",
    valence: 0.69,
    energy: 0.52,
    acousticness: 0.73
  },
  {
    title: "The Eminence in Shadow: Lost Echoes",
    genre: "Animation / Comedy",
    valence: 0.94,
    energy: 0.95,
    acousticness: 0.42
  },
  {
    title: "The Emperor's New Groove",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.88,
    acousticness: 0.5
  },
  {
    title: "The Empire Strikes Back",
    genre: "Adventure / Action",
    valence: 0.68,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "The Estate",
    genre: "Comedy / Drama",
    valence: 0.64,
    energy: 0.56,
    acousticness: 0.71
  },
  {
    title: "The Expendables 2",
    genre: "Action / Adventure",
    valence: 0.53,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "The Fakenapping",
    genre: "Comedy",
    valence: 0.74,
    energy: 0.61,
    acousticness: 0.55
  },
  {
    title: "The Fall Guy",
    genre: "Action / Comedy",
    valence: 0.86,
    energy: 0.72,
    acousticness: 0.51
  },
  {
    title: "The Family",
    genre: "Crime / Comedy",
    valence: 0.66,
    energy: 0.93,
    acousticness: 0.33
  },
  {
    title: "The Family Man",
    genre: "Comedy / Drama",
    valence: 0.88,
    energy: 0.53,
    acousticness: 0.78
  },
  {
    title: "The Family Plan",
    genre: "Action / Comedy",
    valence: 0.95,
    energy: 0.69,
    acousticness: 0.42
  },
  {
    title: "The Family Plan 2",
    genre: "Action / Comedy",
    valence: 0.78,
    energy: 0.83,
    acousticness: 0.38
  },
  {
    title: "The Fantastic 4: First Steps",
    genre: "Science Fiction / Adventure",
    valence: 0.68,
    energy: 1,
    acousticness: 0.03
  },
  {
    title: "The Fifth Element",
    genre: "Science Fiction / Action",
    valence: 0.66,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "The First Ride",
    genre: "Comedy / Drama",
    valence: 0.78,
    energy: 0.71,
    acousticness: 0.6
  },
  {
    title: "The First Snow of Fraggle Rock",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.56,
    acousticness: 0.73
  },
  {
    title: "The Flash",
    genre: "Action / Science Fiction",
    valence: 0.71,
    energy: 0.99,
    acousticness: 0.12
  },
  {
    title: "The Footballest 2",
    genre: "Family / Mystery",
    valence: 0.79,
    energy: 0.59,
    acousticness: 0.52
  },
  {
    title: "The Forbidden Kingdom",
    genre: "Action / Adventure",
    valence: 0.67,
    energy: 0.9,
    acousticness: 0.21
  },
  {
    title: "The Fountain",
    genre: "Drama / Adventure",
    valence: 0.73,
    energy: 0.68,
    acousticness: 0.52
  },
  {
    title: "The Game Plan",
    genre: "Comedy / Family",
    valence: 0.85,
    energy: 0.53,
    acousticness: 0.59
  },
  {
    title: "The Garfield Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.78,
    acousticness: 0.53
  },
  {
    title: "The Gentlemen",
    genre: "Comedy / Crime",
    valence: 0.65,
    energy: 0.62,
    acousticness: 0.44
  },
  {
    title: "The Golden Compass",
    genre: "Adventure / Fantasy",
    valence: 0.67,
    energy: 0.69,
    acousticness: 0.31
  },
  {
    title: "The Goonies",
    genre: "Adventure / Comedy",
    valence: 1,
    energy: 0.72,
    acousticness: 0.53
  },
  {
    title: "The Gorge",
    genre: "Romance / Science Fiction",
    valence: 0.58,
    energy: 0.79,
    acousticness: 0.34
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy / Drama",
    valence: 0.67,
    energy: 0.53,
    acousticness: 0.72
  },
  {
    title: "The Great Flood",
    genre: "Science Fiction / Adventure",
    valence: 0.65,
    energy: 0.7,
    acousticness: 0.43
  },
  {
    title: "The Great Muppet Caper",
    genre: "Family / Comedy",
    valence: 0.84,
    energy: 0.73,
    acousticness: 0.6
  },
  {
    title: "The Green Knight",
    genre: "Adventure / Drama",
    valence: 0.63,
    energy: 0.64,
    acousticness: 0.54
  },
  {
    title: "The Grinch",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.59,
    acousticness: 0.65
  },
  {
    title: "The Handmaiden",
    genre: "Thriller / Drama",
    valence: 0.53,
    energy: 0.53,
    acousticness: 0.76
  },
  {
    title: "The Hangover",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.51,
    acousticness: 0.57
  },
  {
    title: "The Hangover Part II",
    genre: "Comedy",
    valence: 0.68,
    energy: 0.55,
    acousticness: 0.54
  },
  {
    title: "The Heat",
    genre: "Action / Comedy",
    valence: 0.68,
    energy: 0.92,
    acousticness: 0.35
  },
  {
    title: "The Hobbit: An Unexpected Journey",
    genre: "Adventure / Fantasy",
    valence: 0.68,
    energy: 0.93,
    acousticness: 0.21
  },
  {
    title: "The Hobbit: The Battle of the Five Armies",
    genre: "Action / Adventure",
    valence: 0.74,
    energy: 0.96,
    acousticness: 0.24
  },
  {
    title: "The Hobbit: The Desolation of Smaug",
    genre: "Fantasy / Adventure",
    valence: 0.69,
    energy: 0.99,
    acousticness: 0.16
  },
  {
    title: "The Holdovers",
    genre: "Comedy / Drama",
    valence: 0.7,
    energy: 0.52,
    acousticness: 0.69
  },
  {
    title: "The Horsemen",
    genre: "Action / Adventure",
    valence: 0.58,
    energy: 0.75,
    acousticness: 0.48
  },
  {
    title: "The Hunchback of Notre Dame",
    genre: "Drama / Animation",
    valence: 0.85,
    energy: 0.56,
    acousticness: 0.75
  },
  {
    title: "The Hunger Games",
    genre: "Science Fiction / Adventure",
    valence: 0.57,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Hunger Games: Catching Fire",
    genre: "Adventure / Action",
    valence: 0.69,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "The Hunger Games: Mockingjay - Part 1",
    genre: "Science Fiction / Adventure",
    valence: 0.53,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    genre: "Science Fiction / Action",
    valence: 0.6,
    energy: 0.81,
    acousticness: 0.2
  },
  {
    title: "The Hunt",
    genre: "Comedy / Horror",
    valence: 0.54,
    energy: 0.75,
    acousticness: 0.4
  },
  {
    title: "The Hustle",
    genre: "Comedy",
    valence: 0.66,
    energy: 0.52,
    acousticness: 0.54
  },
  {
    title: "The Illusionist",
    genre: "Fantasy / Drama",
    valence: 0.56,
    energy: 0.63,
    acousticness: 0.67
  },
  {
    title: "The Incredible Hulk",
    genre: "Science Fiction / Action",
    valence: 0.61,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "The Incredibles",
    genre: "Action / Adventure",
    valence: 0.98,
    energy: 0.94,
    acousticness: 0.37
  },
  {
    title: "The Intouchables",
    genre: "Drama / Comedy",
    valence: 0.7,
    energy: 0.51,
    acousticness: 0.72
  },
  {
    title: "The Jungle Book",
    genre: "Family / Adventure",
    valence: 0.86,
    energy: 0.76,
    acousticness: 0.46
  },
  {
    title: "The Karate Kid",
    genre: "Action / Adventure",
    valence: 0.82,
    energy: 0.73,
    acousticness: 0.53
  },
  {
    title: "The King of Kings",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.75,
    acousticness: 0.63
  },
  {
    title: "The King of Snipers",
    genre: "Action / Crime",
    valence: 0.5,
    energy: 1,
    acousticness: 0.37
  },
  {
    title: "The Last Airbender",
    genre: "Action / Adventure",
    valence: 0.65,
    energy: 0.93,
    acousticness: 0.2
  },
  {
    title: "The Legend of Hei",
    genre: "Animation / Fantasy",
    valence: 0.83,
    energy: 0.91,
    acousticness: 0.37
  },
  {
    title: "The Legend of Hei 2",
    genre: "Animation / Fantasy",
    valence: 0.85,
    energy: 0.91,
    acousticness: 0.32
  },
  {
    title: "The Legend of Ochi",
    genre: "Family / Fantasy",
    valence: 0.86,
    energy: 0.67,
    acousticness: 0.39
  },
  {
    title: "The Legendary Lighter",
    genre: "Action",
    valence: 0.53,
    energy: 0.69,
    acousticness: 0.3
  },
  {
    title: "The Lego Movie",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.92,
    acousticness: 0.45
  },
  {
    title: "The Lion King",
    genre: "Family / Animation",
    valence: 0.96,
    energy: 0.61,
    acousticness: 0.63
  },
  {
    title: "The Little Mermaid",
    genre: "Adventure / Family",
    valence: 1,
    energy: 0.62,
    acousticness: 0.51
  },
  {
    title: "The Little Vampire 3D",
    genre: "Comedy / Animation",
    valence: 1,
    energy: 0.76,
    acousticness: 0.58
  },
  {
    title: "The Lorax",
    genre: "Animation / Family",
    valence: 0.85,
    energy: 0.55,
    acousticness: 0.57
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure / Fantasy",
    valence: 0.79,
    energy: 0.89,
    acousticness: 0.2
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure / Fantasy",
    valence: 0.76,
    energy: 0.94,
    acousticness: 0.23
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    genre: "Adventure / Fantasy",
    valence: 0.68,
    energy: 1,
    acousticness: 0.23
  },
  {
    title: "The Lost City",
    genre: "Action / Adventure",
    valence: 0.82,
    energy: 0.88,
    acousticness: 0.25
  },
  {
    title: "The Lost Future",
    genre: "Adventure / Science Fiction",
    valence: 0.62,
    energy: 0.75,
    acousticness: 0.27
  },
  {
    title: "The Lost Princess",
    genre: "Action / Adventure",
    valence: 0.59,
    energy: 0.86,
    acousticness: 0.28
  },
  {
    title: "The Magnificent Seven",
    genre: "Western / Action",
    valence: 0.58,
    energy: 0.89,
    acousticness: 0.41
  },
  {
    title: "The Martian",
    genre: "Drama / Adventure",
    valence: 0.6,
    energy: 0.76,
    acousticness: 0.44
  },
  {
    title: "The Marvels",
    genre: "Science Fiction / Adventure",
    valence: 0.69,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "The Mask",
    genre: "Romance / Comedy",
    valence: 0.79,
    energy: 0.66,
    acousticness: 0.52
  },
  {
    title: "The Matrix",
    genre: "Action / Science Fiction",
    valence: 0.64,
    energy: 0.84,
    acousticness: 0.16
  },
  {
    title: "The Matrix Reloaded",
    genre: "Adventure / Action",
    valence: 0.5,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Matrix Resurrections",
    genre: "Science Fiction / Action",
    valence: 0.63,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "The Matrix Revolutions",
    genre: "Adventure / Action",
    valence: 0.5,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Medallion",
    genre: "Thriller / Fantasy",
    valence: 0.74,
    energy: 1,
    acousticness: 0.22
  },
  {
    title: "The Mighty",
    genre: "Drama / Comedy",
    valence: 0.68,
    energy: 0.55,
    acousticness: 0.75
  },
  {
    title: "The Mummy",
    genre: "Adventure / Action",
    valence: 0.77,
    energy: 0.97,
    acousticness: 0.24
  },
  {
    title: "The Mummy Returns",
    genre: "Adventure / Action",
    valence: 0.69,
    energy: 0.9,
    acousticness: 0.23
  },
  {
    title: "The Muppet Christmas Carol",
    genre: "Music / Comedy",
    valence: 1,
    energy: 0.64,
    acousticness: 0.87
  },
  {
    title: "The Naked Gun",
    genre: "Action / Comedy",
    valence: 0.62,
    energy: 0.84,
    acousticness: 0.29
  },
  {
    title: "The Night My Dad Saved Christmas 2",
    genre: "Comedy / Family",
    valence: 0.9,
    energy: 0.51,
    acousticness: 0.63
  },
  {
    title: "The Nightmare Before Christmas",
    genre: "Fantasy / Animation",
    valence: 0.88,
    energy: 0.67,
    acousticness: 0.56
  },
  {
    title: "The Northman",
    genre: "Action / Adventure",
    valence: 0.73,
    energy: 0.93,
    acousticness: 0.21
  },
  {
    title: "The Odd Squad",
    genre: "Action / Science Fiction",
    valence: 0.65,
    energy: 0.98,
    acousticness: 0.19
  },
  {
    title: "The Odyssey",
    genre: "Adventure / Drama",
    valence: 0.66,
    energy: 0.7,
    acousticness: 0.49
  },
  {
    title: "The Old Guard 2",
    genre: "Action / Fantasy",
    valence: 0.63,
    energy: 0.86,
    acousticness: 0.26
  },
  {
    title: "The Orphans",
    genre: "Action",
    valence: 0.53,
    energy: 0.66,
    acousticness: 0.35
  },
  {
    title: "The Other Guys",
    genre: "Comedy / Action",
    valence: 0.72,
    energy: 0.83,
    acousticness: 0.42
  },
  {
    title: "The Phoenician Scheme",
    genre: "Comedy / Adventure",
    valence: 0.7,
    energy: 0.79,
    acousticness: 0.35
  },
  {
    title: "The Pickup",
    genre: "Action / Comedy",
    valence: 0.65,
    energy: 0.92,
    acousticness: 0.28
  },
  {
    title: "The Polar Express",
    genre: "Animation / Adventure",
    valence: 0.97,
    energy: 0.82,
    acousticness: 0.4
  },
  {
    title: "The Prince of Egypt",
    genre: "Adventure / Animation",
    valence: 0.95,
    energy: 0.67,
    acousticness: 0.65
  },
  {
    title: "The Princess and the Frog",
    genre: "Animation / Romance",
    valence: 1,
    energy: 0.59,
    acousticness: 0.69
  },
  {
    title: "The Princess Bride",
    genre: "Adventure / Family",
    valence: 1,
    energy: 0.66,
    acousticness: 0.57
  },
  {
    title: "The Quest",
    genre: "Action / Adventure",
    valence: 0.58,
    energy: 0.74,
    acousticness: 0.43
  },
  {
    title: "The Rats: A Witcher Tale",
    genre: "Fantasy / Drama",
    valence: 0.65,
    energy: 0.69,
    acousticness: 0.48
  },
  {
    title: "The Return",
    genre: "History / Drama",
    valence: 0.51,
    energy: 0.59,
    acousticness: 0.69
  },
  {
    title: "The Revenant",
    genre: "Western / Drama",
    valence: 0.61,
    energy: 0.58,
    acousticness: 0.71
  },
  {
    title: "The Roses",
    genre: "Comedy",
    valence: 0.67,
    energy: 0.54,
    acousticness: 0.55
  },
  {
    title: "The Roundup: No Way Out",
    genre: "Action / Crime",
    valence: 0.5,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "The Roundup: Punishment",
    genre: "Action / Crime",
    valence: 0.52,
    energy: 1,
    acousticness: 0.23
  },
  {
    title: "The Running Man",
    genre: "Action / Thriller",
    valence: 0.5,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "The Santa Clause",
    genre: "Fantasy / Drama",
    valence: 0.88,
    energy: 0.53,
    acousticness: 0.67
  },
  {
    title: "The Santa Clause 2",
    genre: "Fantasy / Comedy",
    valence: 1,
    energy: 0.65,
    acousticness: 0.49
  },
  {
    title: "The Santa Clause 3: The Escape Clause",
    genre: "Comedy / Family",
    valence: 0.98,
    energy: 0.66,
    acousticness: 0.52
  },
  {
    title: "The Satellite Girl and Milk Cow",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.81,
    acousticness: 0.43
  },
  {
    title: "The Sheep Detectives",
    genre: "Mystery / Comedy",
    valence: 0.54,
    energy: 0.72,
    acousticness: 0.61
  },
  {
    title: "The Shift",
    genre: "Science Fiction",
    valence: 0.52,
    energy: 0.66,
    acousticness: 0.33
  },
  {
    title: "The Simpsons Movie",
    genre: "Animation / Comedy",
    valence: 0.97,
    energy: 0.62,
    acousticness: 0.64
  },
  {
    title: "The SpongeBob Movie: Search for SquarePants",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.79,
    acousticness: 0.56
  },
  {
    title: "The SpongeBob Movie: Sponge Out of Water",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.84,
    acousticness: 0.47
  },
  {
    title: "The SpongeBob SquarePants Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.8,
    acousticness: 0.55
  },
  {
    title: "The Storm",
    genre: "Animation / Fantasy",
    valence: 0.93,
    energy: 1,
    acousticness: 0.23
  },
  {
    title: "The Suicide Squad",
    genre: "Action / Comedy",
    valence: 0.8,
    energy: 0.89,
    acousticness: 0.3
  },
  {
    title: "The Super Mario Bros. Movie",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.91,
    acousticness: 0.44
  },
  {
    title: "The Super Mario Galaxy Movie",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.81,
    acousticness: 0.48
  },
  {
    title: "The Three Avengers",
    genre: "Action / Drama",
    valence: 0.53,
    energy: 0.7,
    acousticness: 0.55
  },
  {
    title: "The Tomorrow War 2",
    genre: "Action / Science Fiction",
    valence: 0.57,
    energy: 0.84,
    acousticness: 0.17
  },
  {
    title: "The Torture Club",
    genre: "Drama / Comedy",
    valence: 0.67,
    energy: 0.52,
    acousticness: 0.69
  },
  {
    title: "The Toxic Avenger Unrated",
    genre: "Action / Comedy",
    valence: 0.72,
    energy: 0.87,
    acousticness: 0.16
  },
  {
    title: "The Traffic Policeman",
    genre: "Comedy",
    valence: 0.72,
    energy: 0.55,
    acousticness: 0.5
  },
  {
    title: "The Truman Show",
    genre: "Comedy / Drama",
    valence: 0.72,
    energy: 0.53,
    acousticness: 0.67
  },
  {
    title: "The Twilight Saga: Breaking Dawn - Part 1",
    genre: "Adventure / Fantasy",
    valence: 0.84,
    energy: 0.64,
    acousticness: 0.51
  },
  {
    title: "The Twilight Saga: Breaking Dawn - Part 2",
    genre: "Adventure / Fantasy",
    valence: 0.75,
    energy: 0.63,
    acousticness: 0.65
  },
  {
    title: "The Twilight Saga: New Moon",
    genre: "Adventure / Fantasy",
    valence: 0.81,
    energy: 0.63,
    acousticness: 0.63
  },
  {
    title: "The Ugly Stepsister",
    genre: "Horror / Comedy",
    valence: 0.57,
    energy: 0.75,
    acousticness: 0.48
  },
  {
    title: "The Unholylands",
    genre: "Comedy",
    valence: 0.6,
    energy: 0.59,
    acousticness: 0.55
  },
  {
    title: "The Valet",
    genre: "Comedy",
    valence: 0.7,
    energy: 0.55,
    acousticness: 0.55
  },
  {
    title: "The Visitors",
    genre: "Fantasy / Comedy",
    valence: 0.75,
    energy: 0.62,
    acousticness: 0.48
  },
  {
    title: "The Wall",
    genre: "Science Fiction / Drama",
    valence: 0.5,
    energy: 0.55,
    acousticness: 0.45
  },
  {
    title: "The Wandering Earth II",
    genre: "Science Fiction / Action",
    valence: 0.68,
    energy: 0.98,
    acousticness: 0.06
  },
  {
    title: "The Wild Robot",
    genre: "Animation / Science Fiction",
    valence: 0.98,
    energy: 0.74,
    acousticness: 0.49
  },
  {
    title: "The Wizard of Oz",
    genre: "Adventure / Fantasy",
    valence: 0.86,
    energy: 0.7,
    acousticness: 0.39
  },
  {
    title: "The Wizard of the Emerald City, Part I",
    genre: "Drama / Fantasy",
    valence: 0.56,
    energy: 0.59,
    acousticness: 0.62
  },
  {
    title: "The Wolf of Wall Street",
    genre: "Crime / Drama",
    valence: 0.61,
    energy: 0.67,
    acousticness: 0.62
  },
  {
    title: "This Is Spinal Tap",
    genre: "Comedy / Music",
    valence: 0.84,
    energy: 0.62,
    acousticness: 0.61
  },
  {
    title: "This Is the End",
    genre: "Action / Comedy",
    valence: 0.72,
    energy: 0.72,
    acousticness: 0.4
  },
  {
    title: "Thor",
    genre: "Adventure / Fantasy",
    valence: 0.7,
    energy: 0.99,
    acousticness: 0.17
  },
  {
    title: "Thor: Love and Thunder",
    genre: "Fantasy / Action",
    valence: 0.84,
    energy: 0.88,
    acousticness: 0.32
  },
  {
    title: "Thor: Ragnarok",
    genre: "Action / Adventure",
    valence: 0.81,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Thor: The Dark World",
    genre: "Action / Adventure",
    valence: 0.71,
    energy: 0.89,
    acousticness: 0.18
  },
  {
    title: "Thunderbolts*",
    genre: "Action / Science Fiction",
    valence: 0.68,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Tinker Bell",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.78,
    acousticness: 0.43
  },
  {
    title: "Tinker Bell and the Lost Treasure",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.77,
    acousticness: 0.46
  },
  {
    title: "Tinsel Town",
    genre: "Comedy / Romance",
    valence: 0.86,
    energy: 0.56,
    acousticness: 0.68
  },
  {
    title: "TMNT",
    genre: "Adventure / Animation",
    valence: 1,
    energy: 0.74,
    acousticness: 0.49
  },
  {
    title: "Top Gun",
    genre: "Action / Drama",
    valence: 0.5,
    energy: 0.71,
    acousticness: 0.55
  },
  {
    title: "Top Gun: Maverick",
    genre: "Action / Drama",
    valence: 0.54,
    energy: 0.6,
    acousticness: 0.57
  },
  {
    title: "Top Secret",
    genre: "Comedy",
    valence: 0.65,
    energy: 0.56,
    acousticness: 0.52
  },
  {
    title: "Toy Story",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.79,
    acousticness: 0.49
  },
  {
    title: "Toy Story 2",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.64,
    acousticness: 0.6
  },
  {
    title: "Toy Story 3",
    genre: "Animation / Family",
    valence: 0.98,
    energy: 0.57,
    acousticness: 0.64
  },
  {
    title: "Toy Story 4",
    genre: "Family / Comedy",
    valence: 1,
    energy: 0.81,
    acousticness: 0.52
  },
  {
    title: "Trading Places",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.58,
    acousticness: 0.57
  },
  {
    title: "Transformers One",
    genre: "Animation / Science Fiction",
    valence: 1,
    energy: 0.91,
    acousticness: 0.29
  },
  {
    title: "Transformers: Age of Extinction",
    genre: "Science Fiction / Action",
    valence: 0.6,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Transformers: Rise of the Beasts",
    genre: "Science Fiction / Adventure",
    valence: 0.7,
    energy: 0.98,
    acousticness: 0.12
  },
  {
    title: "Transformers: The Last Knight",
    genre: "Action / Adventure",
    valence: 0.63,
    energy: 0.98,
    acousticness: 0.07
  },
  {
    title: "Treasure Planet",
    genre: "Science Fiction / Adventure",
    valence: 1,
    energy: 0.99,
    acousticness: 0.24
  },
  {
    title: "Triangle of Sadness",
    genre: "Comedy / Drama",
    valence: 0.65,
    energy: 0.53,
    acousticness: 0.76
  },
  {
    title: "Troll",
    genre: "Fantasy / Action",
    valence: 0.72,
    energy: 0.98,
    acousticness: 0.24
  },
  {
    title: "Trolls",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.9,
    acousticness: 0.62
  },
  {
    title: "Trolls Band Together",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.72,
    acousticness: 0.72
  },
  {
    title: "Tron",
    genre: "Science Fiction / Action",
    valence: 0.67,
    energy: 0.98,
    acousticness: 0.11
  },
  {
    title: "TRON: Ares",
    genre: "Science Fiction / Adventure",
    valence: 0.68,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "TRON: Legacy",
    genre: "Adventure / Action",
    valence: 0.65,
    energy: 0.98,
    acousticness: 0.09
  },
  {
    title: "Tropic Thunder",
    genre: "Action / Comedy",
    valence: 0.62,
    energy: 1,
    acousticness: 0.38
  },
  {
    title: "Turbulence",
    genre: "Thriller / Action",
    valence: 0.51,
    energy: 1,
    acousticness: 0.26
  },
  {
    title: "Turning Red",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.68,
    acousticness: 0.51
  },
  {
    title: "U Are the Universe",
    genre: "Science Fiction / Adventure",
    valence: 0.8,
    energy: 0.85,
    acousticness: 0.27
  },
  {
    title: "Una artista en la familia",
    genre: "Comedy",
    valence: 0.69,
    energy: 0.57,
    acousticness: 0.51
  },
  {
    title: "Uncle Buck",
    genre: "Comedy / Drama",
    valence: 0.87,
    energy: 0.52,
    acousticness: 0.76
  },
  {
    title: "Under Ninja",
    genre: "Action",
    valence: 0.6,
    energy: 0.72,
    acousticness: 0.35
  },
  {
    title: "Under Wraps",
    genre: "Comedy / Family",
    valence: 0.69,
    energy: 0.64,
    acousticness: 0.47
  },
  {
    title: "Up",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.72,
    acousticness: 0.55
  },
  {
    title: "Upon the Magic Roads",
    genre: "Adventure / Fantasy",
    valence: 0.65,
    energy: 0.76,
    acousticness: 0.38
  },
  {
    title: "V for Vendetta",
    genre: "Action / Thriller",
    valence: 0.52,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Venom",
    genre: "Science Fiction / Action",
    valence: 0.53,
    energy: 0.85,
    acousticness: 0.19
  },
  {
    title: "Venom: The Last Dance",
    genre: "Action / Science Fiction",
    valence: 0.69,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Villa Ada",
    genre: "Comedy",
    valence: 0.64,
    energy: 0.51,
    acousticness: 0.55
  },
  {
    title: "Violent Night",
    genre: "Action / Comedy",
    valence: 0.77,
    energy: 0.87,
    acousticness: 0.3
  },
  {
    title: "Virgin Territory",
    genre: "Adventure / Action",
    valence: 0.96,
    energy: 0.82,
    acousticness: 0.45
  },
  {
    title: "Wake Up Dead Man: A Knives Out Mystery",
    genre: "Thriller / Mystery",
    valence: 0.5,
    energy: 0.84,
    acousticness: 0.36
  },
  {
    title: "WALL·E",
    genre: "Animation / Family",
    valence: 0.94,
    energy: 0.69,
    acousticness: 0.39
  },
  {
    title: "War 2",
    genre: "Action / Adventure",
    valence: 0.5,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Warrior Queen",
    genre: "Action / History",
    valence: 0.56,
    energy: 0.78,
    acousticness: 0.37
  },
  {
    title: "Weekend Warriors",
    genre: "Action / Comedy",
    valence: 0.82,
    energy: 0.84,
    acousticness: 0.48
  },
  {
    title: "What Women Want",
    genre: "Comedy / Romance",
    valence: 0.82,
    energy: 0.5,
    acousticness: 0.68
  },
  {
    title: "White Chicks",
    genre: "Comedy / Crime",
    valence: 0.57,
    energy: 0.62,
    acousticness: 0.48
  },
  {
    title: "White Christmas",
    genre: "Comedy / Music",
    valence: 0.91,
    energy: 0.57,
    acousticness: 0.76
  },
  {
    title: "Why Me?",
    genre: "Comedy / Action",
    valence: 0.72,
    energy: 0.71,
    acousticness: 0.4
  },
  {
    title: "Wicked",
    genre: "Drama / Romance",
    valence: 0.69,
    energy: 0.51,
    acousticness: 0.8
  },
  {
    title: "Wicked: For Good",
    genre: "Fantasy / Adventure",
    valence: 0.75,
    energy: 0.69,
    acousticness: 0.46
  },
  {
    title: "Wild Tales",
    genre: "Drama / Thriller",
    valence: 0.54,
    energy: 0.67,
    acousticness: 0.63
  },
  {
    title: "William Tell",
    genre: "Action / Adventure",
    valence: 0.58,
    energy: 0.79,
    acousticness: 0.56
  },
  {
    title: "Willy Wonka & the Chocolate Factory",
    genre: "Family / Fantasy",
    valence: 1,
    energy: 0.63,
    acousticness: 0.56
  },
  {
    title: "Wingwomen",
    genre: "Action / Comedy",
    valence: 0.65,
    energy: 0.74,
    acousticness: 0.58
  },
  {
    title: "Wish",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.79,
    acousticness: 0.42
  },
  {
    title: "Wish Dragon",
    genre: "Animation / Family",
    valence: 1,
    energy: 0.78,
    acousticness: 0.58
  },
  {
    title: "Wolf Children",
    genre: "Animation / Family",
    valence: 0.86,
    energy: 0.61,
    acousticness: 0.74
  },
  {
    title: "Wolf! Wolf!",
    genre: "Comedy / Animation",
    valence: 0.79,
    energy: 0.59,
    acousticness: 0.57
  },
  {
    title: "Wolfs",
    genre: "Crime / Comedy",
    valence: 0.59,
    energy: 0.71,
    acousticness: 0.42
  },
  {
    title: "Wonder Woman",
    genre: "Action / Adventure",
    valence: 0.74,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Wonder Woman 1984",
    genre: "Action / Adventure",
    valence: 0.77,
    energy: 0.92,
    acousticness: 0.18
  },
  {
    title: "Wonka",
    genre: "Comedy / Family",
    valence: 1,
    energy: 0.66,
    acousticness: 0.5
  },
  {
    title: "Worldbreaker",
    genre: "Science Fiction / Action",
    valence: 0.52,
    energy: 0.83,
    acousticness: 0.17
  },
  {
    title: "Wrath of the Titans",
    genre: "Fantasy / Adventure",
    valence: 0.68,
    energy: 0.93,
    acousticness: 0.17
  },
  {
    title: "Wreck-It Ralph",
    genre: "Family / Animation",
    valence: 1,
    energy: 0.78,
    acousticness: 0.53
  },
  {
    title: "X-Men: Days of Future Past",
    genre: "Action / Adventure",
    valence: 0.65,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "xXx: Return of Xander Cage",
    genre: "Action / Adventure",
    valence: 0.5,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Young Guns",
    genre: "Western / Action",
    valence: 0.64,
    energy: 0.94,
    acousticness: 0.34
  },
  {
    title: "Your Name.",
    genre: "Animation / Romance",
    valence: 0.73,
    energy: 0.51,
    acousticness: 0.84
  },
  {
    title: "Yu Pui Tsuen II",
    genre: "Drama / Fantasy",
    valence: 0.7,
    energy: 0.51,
    acousticness: 0.8
  },
  {
    title: "Zootopia",
    genre: "Animation / Adventure",
    valence: 1,
    energy: 0.73,
    acousticness: 0.49
  },
  {
    title: "Zootopia 2",
    genre: "Animation / Comedy",
    valence: 1,
    energy: 0.89,
    acousticness: 0.46
  },
  {
    title: "Zootopia 3",
    genre: "Animation / Family",
    valence: 0.78,
    energy: 0.61,
    acousticness: 0.64
  },
  {
    title: "남친깨기전에빨리빼!",
    genre: "Film",
    valence: 0.52,
    energy: 0.56,
    acousticness: 0.53
  },

  // --- HAPPY & CHILL ---
  {
    title: "(500) Days of Summer",
    genre: "Comedy / Drama",
    valence: 0.77,
    energy: 0.44,
    acousticness: 0.82
  },
  {
    title: "10 Things I Hate About You",
    genre: "Comedy / Romance",
    valence: 0.81,
    energy: 0.49,
    acousticness: 0.83
  },
  {
    title: "10Dance",
    genre: "Romance / Drama",
    valence: 0.61,
    energy: 0.42,
    acousticness: 0.87
  },
  {
    title: "20 Moves",
    genre: "Documentary / History",
    valence: 0.52,
    energy: 0.37,
    acousticness: 0.88
  },
  {
    title: "20th Century Girl",
    genre: "Romance / Drama",
    valence: 0.62,
    energy: 0.39,
    acousticness: 0.86
  },
  {
    title: "365 Days: This Day",
    genre: "Romance / Drama",
    valence: 0.64,
    energy: 0.41,
    acousticness: 0.87
  },
  {
    title: "9 Songs",
    genre: "Drama / Music",
    valence: 0.7,
    energy: 0.35,
    acousticness: 0.9
  },
  {
    title: "A Beautiful Mind",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.8
  },
  {
    title: "A Big Bold Beautiful Journey",
    genre: "Romance / Fantasy",
    valence: 0.72,
    energy: 0.43,
    acousticness: 0.74
  },
  {
    title: "A Christmas Story",
    genre: "Comedy / Family",
    valence: 0.85,
    energy: 0.48,
    acousticness: 0.56
  },
  {
    title: "A Man Called Otto",
    genre: "Comedy / Drama",
    valence: 0.66,
    energy: 0.45,
    acousticness: 0.66
  },
  {
    title: "A Merry Little Ex-Mas",
    genre: "Romance / Comedy",
    valence: 0.82,
    energy: 0.48,
    acousticness: 0.64
  },
  {
    title: "A Perfect Ending",
    genre: "Drama / Romance",
    valence: 0.65,
    energy: 0.43,
    acousticness: 0.78
  },
  {
    title: "A Silent Voice: The Movie",
    genre: "Animation / Drama",
    valence: 0.78,
    energy: 0.42,
    acousticness: 0.85
  },
  {
    title: "A Star Is Born",
    genre: "Music / Drama",
    valence: 0.73,
    energy: 0.35,
    acousticness: 0.9
  },
  {
    title: "About Time",
    genre: "Drama / Romance",
    valence: 0.75,
    energy: 0.48,
    acousticness: 0.78
  },
  {
    title: "Admission",
    genre: "Comedy / Drama",
    valence: 0.74,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "After",
    genre: "Romance / Drama",
    valence: 0.61,
    energy: 0.35,
    acousticness: 0.87
  },
  {
    title: "All American",
    genre: "Documentary",
    valence: 0.51,
    energy: 0.4,
    acousticness: 0.71
  },
  {
    title: "Amélie",
    genre: "Comedy / Romance",
    valence: 0.86,
    energy: 0.48,
    acousticness: 0.7
  },
  {
    title: "An Affair: My Sister-in-law's Love",
    genre: "Drama / Romance",
    valence: 0.54,
    energy: 0.35,
    acousticness: 0.8
  },
  {
    title: "Angel Baby",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.36,
    acousticness: 0.85
  },
  {
    title: "Anora",
    genre: "Drama / Comedy",
    valence: 0.79,
    energy: 0.38,
    acousticness: 0.86
  },
  {
    title: "Another Round",
    genre: "Comedy / Drama",
    valence: 0.68,
    energy: 0.48,
    acousticness: 0.69
  },
  {
    title: "Anthony Adverse",
    genre: "Drama / History",
    valence: 0.53,
    energy: 0.3,
    acousticness: 0.97
  },
  {
    title: "Anyone But You",
    genre: "Romance / Comedy",
    valence: 0.76,
    energy: 0.49,
    acousticness: 0.72
  },
  {
    title: "Arouse",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.32,
    acousticness: 0.88
  },
  {
    title: "Ask Me What You Want",
    genre: "Romance / Drama",
    valence: 0.58,
    energy: 0.34,
    acousticness: 0.84
  },
  {
    title: "Aşk Sadece Bir An",
    genre: "Romance / Drama",
    valence: 0.59,
    energy: 0.36,
    acousticness: 0.84
  },
  {
    title: "Atonement",
    genre: "Drama / Romance",
    valence: 0.61,
    energy: 0.39,
    acousticness: 0.84
  },
  {
    title: "Avatar: Creating the World of Pandora",
    genre: "Documentary",
    valence: 0.51,
    energy: 0.35,
    acousticness: 0.74
  },
  {
    title: "Avatar: The Deep Dive - A Special Edition of 20/20",
    genre: "Documentary",
    valence: 0.55,
    energy: 0.35,
    acousticness: 0.69
  },
  {
    title: "Babygirl",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.4,
    acousticness: 0.8
  },
  {
    title: "Batman & Bill",
    genre: "Documentary",
    valence: 0.52,
    energy: 0.45,
    acousticness: 0.69
  },
  {
    title: "Beau Pere",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.34,
    acousticness: 0.82
  },
  {
    title: "Beautiful Disaster",
    genre: "Romance / Drama",
    valence: 0.75,
    energy: 0.47,
    acousticness: 0.85
  },
  {
    title: "Before Sunrise",
    genre: "Romance",
    valence: 0.75,
    energy: 0.25,
    acousticness: 0.9
  },
  {
    title: "Being Charlie",
    genre: "Drama / Romance",
    valence: 0.55,
    energy: 0.34,
    acousticness: 0.85
  },
  {
    title: "Benedetta",
    genre: "History / Drama",
    valence: 0.57,
    energy: 0.36,
    acousticness: 0.98
  },
  {
    title: "Big",
    genre: "Fantasy / Drama",
    valence: 1,
    energy: 0.47,
    acousticness: 0.81
  },
  {
    title: "Big Daddy",
    genre: "Comedy / Drama",
    valence: 0.7,
    energy: 0.47,
    acousticness: 0.7
  },
  {
    title: "Bohemian Rhapsody",
    genre: "Music / Drama",
    valence: 0.6,
    energy: 0.48,
    acousticness: 0.77
  },
  {
    title: "Book Club",
    genre: "Romance / Comedy",
    valence: 0.77,
    energy: 0.43,
    acousticness: 0.85
  },
  {
    title: "Bosomy Mom 2",
    genre: "Romance",
    valence: 0.59,
    energy: 0.46,
    acousticness: 0.62
  },
  {
    title: "Bridesmaids",
    genre: "Comedy / Romance",
    valence: 0.8,
    energy: 0.49,
    acousticness: 0.69
  },
  {
    title: "Buddy's Mom",
    genre: "Drama / Romance",
    valence: 0.62,
    energy: 0.42,
    acousticness: 0.84
  },
  {
    title: "Call Me by Your Name",
    genre: "Romance / Drama",
    valence: 0.63,
    energy: 0.4,
    acousticness: 0.88
  },
  {
    title: "Capturing Avatar",
    genre: "Documentary",
    valence: 0.58,
    energy: 0.38,
    acousticness: 0.71
  },
  {
    title: "Career Opportunities",
    genre: "Romance / Comedy",
    valence: 0.8,
    energy: 0.49,
    acousticness: 0.66
  },
  {
    title: "Celestina: Burlesk Dancer",
    genre: "Drama / Romance",
    valence: 0.62,
    energy: 0.36,
    acousticness: 0.81
  },
  {
    title: "Challengers",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.43,
    acousticness: 0.87
  },
  {
    title: "Charlie Bartlett",
    genre: "Comedy / Drama",
    valence: 0.76,
    energy: 0.42,
    acousticness: 0.85
  },
  {
    title: "Cheeky",
    genre: "Comedy / Drama",
    valence: 0.82,
    energy: 0.39,
    acousticness: 0.86
  },
  {
    title: "Christy",
    genre: "History / Drama",
    valence: 0.5,
    energy: 0.36,
    acousticness: 0.86
  },
  {
    title: "Cinderella",
    genre: "Romance / Fantasy",
    valence: 0.82,
    energy: 0.39,
    acousticness: 0.85
  },
  {
    title: "Correspondence",
    genre: "Drama / Romance",
    valence: 0.65,
    energy: 0.41,
    acousticness: 0.79
  },
  {
    title: "Cradle Swapping",
    genre: "Drama / TV Movie",
    valence: 0.55,
    energy: 0.32,
    acousticness: 0.71
  },
  {
    title: "Crazy Love",
    genre: "Comedy / Romance",
    valence: 0.76,
    energy: 0.39,
    acousticness: 0.89
  },
  {
    title: "Dangal",
    genre: "Drama / Family",
    valence: 0.81,
    energy: 0.48,
    acousticness: 0.77
  },
  {
    title: "Dangerous Liaisons",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.43,
    acousticness: 0.84
  },
  {
    title: "Dear David",
    genre: "Drama / Romance",
    valence: 0.75,
    energy: 0.48,
    acousticness: 0.77
  },
  {
    title: "Departures",
    genre: "Drama",
    valence: 0.51,
    energy: 0.42,
    acousticness: 0.65
  },
  {
    title: "Desperate Lives",
    genre: "Drama / TV Movie",
    valence: 0.53,
    energy: 0.43,
    acousticness: 0.75
  },
  {
    title: "Digger",
    genre: "Comedy / Drama",
    valence: 0.63,
    energy: 0.48,
    acousticness: 0.66
  },
  {
    title: "Dog Pound",
    genre: "Drama",
    valence: 0.54,
    energy: 0.45,
    acousticness: 0.68
  },
  {
    title: "Dogtooth",
    genre: "Drama",
    valence: 0.52,
    energy: 0.39,
    acousticness: 0.66
  },
  {
    title: "Dreams",
    genre: "Drama / Romance",
    valence: 0.55,
    energy: 0.36,
    acousticness: 0.86
  },
  {
    title: "Drsná Planina",
    genre: "Drama",
    valence: 0.52,
    energy: 0.42,
    acousticness: 0.66
  },
  {
    title: "Due West: Our Sex Journey",
    genre: "Comedy / Drama",
    valence: 0.75,
    energy: 0.44,
    acousticness: 0.86
  },
  {
    title: "EKS",
    genre: "Drama",
    valence: 0.5,
    energy: 0.4,
    acousticness: 0.71
  },
  {
    title: "El inquilino",
    genre: "Drama / Comedy",
    valence: 0.69,
    energy: 0.49,
    acousticness: 0.69
  },
  {
    title: "Eva",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.39,
    acousticness: 0.81
  },
  {
    title: "Everything's Going to Be Great",
    genre: "Comedy / Drama",
    valence: 0.62,
    energy: 0.46,
    acousticness: 0.76
  },
  {
    title: "Family Matters",
    genre: "Drama / Family",
    valence: 0.63,
    energy: 0.44,
    acousticness: 0.76
  },
  {
    title: "Farewell My Concubine",
    genre: "Drama",
    valence: 0.55,
    energy: 0.43,
    acousticness: 0.63
  },
  {
    title: "Female War: A Nasty Deal",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.39,
    acousticness: 0.87
  },
  {
    title: "Fifty Shades Freed",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.35,
    acousticness: 0.85
  },
  {
    title: "Finding North",
    genre: "Comedy / Drama",
    valence: 0.81,
    energy: 0.39,
    acousticness: 0.87
  },
  {
    title: "First Daughter",
    genre: "Family / Comedy",
    valence: 0.95,
    energy: 0.4,
    acousticness: 0.94
  },
  {
    title: "First Love",
    genre: "Drama / Romance",
    valence: 0.81,
    energy: 0.38,
    acousticness: 0.87
  },
  {
    title: "First Taste",
    genre: "Romance / Drama",
    valence: 0.54,
    energy: 0.33,
    acousticness: 0.85
  },
  {
    title: "Forrest Gump",
    genre: "Comedy / Drama",
    valence: 0.81,
    energy: 0.42,
    acousticness: 0.82
  },
  {
    title: "Generation Gap",
    genre: "TV Movie / Drama",
    valence: 0.67,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "GGS - Ganteng-Ganteng Sange",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.35,
    acousticness: 0.79
  },
  {
    title: "given the Movie: To the Sea",
    genre: "Animation / Romance",
    valence: 0.74,
    energy: 0.48,
    acousticness: 0.67
  },
  {
    title: "Green Book",
    genre: "Drama / Comedy",
    valence: 0.7,
    energy: 0.47,
    acousticness: 0.86
  },
  {
    title: "Griffin & Phoenix",
    genre: "Comedy / Drama",
    valence: 0.83,
    energy: 0.45,
    acousticness: 0.88
  },
  {
    title: "Hachi: A Dog's Tale",
    genre: "Drama / Family",
    valence: 0.71,
    energy: 0.41,
    acousticness: 0.74
  },
  {
    title: "Haul Out the Holly",
    genre: "TV Movie / Comedy",
    valence: 0.79,
    energy: 0.39,
    acousticness: 0.91
  },
  {
    title: "Hello, My Name Is Doris",
    genre: "Comedy / Drama",
    valence: 0.79,
    energy: 0.42,
    acousticness: 0.89
  },
  {
    title: "Hi Nanna",
    genre: "Drama / Family",
    valence: 0.77,
    energy: 0.32,
    acousticness: 0.86
  },
  {
    title: "Hidden Desire",
    genre: "Romance / Drama",
    valence: 0.55,
    energy: 0.4,
    acousticness: 0.79
  },
  {
    title: "Hole-in-law",
    genre: "Romance",
    valence: 0.61,
    energy: 0.45,
    acousticness: 0.61
  },
  {
    title: "Holiday Heart",
    genre: "Drama / TV Movie",
    valence: 0.56,
    energy: 0.43,
    acousticness: 0.69
  },
  {
    title: "Hollywood Ending",
    genre: "Comedy / Drama",
    valence: 0.65,
    energy: 0.48,
    acousticness: 0.73
  },
  {
    title: "Home Alone 3",
    genre: "Comedy / Family",
    valence: 0.83,
    energy: 0.47,
    acousticness: 0.55
  },
  {
    title: "Home Alone 4",
    genre: "Comedy / Family",
    valence: 0.86,
    energy: 0.41,
    acousticness: 0.68
  },
  {
    title: "Homesick",
    genre: "Drama",
    valence: 0.52,
    energy: 0.46,
    acousticness: 0.7
  },
  {
    title: "Honkytonk Man",
    genre: "Drama / Music",
    valence: 0.65,
    energy: 0.42,
    acousticness: 0.78
  },
  {
    title: "Hope Gap",
    genre: "Drama",
    valence: 0.5,
    energy: 0.48,
    acousticness: 0.65
  },
  {
    title: "Hotel Chevalier",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.37,
    acousticness: 0.83
  },
  {
    title: "I Want You",
    genre: "Drama / Romance",
    valence: 0.61,
    energy: 0.32,
    acousticness: 0.86
  },
  {
    title: "Immortal Beloved",
    genre: "Drama / Music",
    valence: 0.71,
    energy: 0.43,
    acousticness: 0.94
  },
  {
    title: "In the Mood for Love",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.37,
    acousticness: 0.84
  },
  {
    title: "Inside 'Interstellar'",
    genre: "Documentary",
    valence: 0.54,
    energy: 0.42,
    acousticness: 0.71
  },
  {
    title: "Intimate Affairs",
    genre: "Drama / Comedy",
    valence: 0.6,
    energy: 0.45,
    acousticness: 0.74
  },
  {
    title: "It's a Wonderful Life",
    genre: "Drama / Family",
    valence: 0.75,
    energy: 0.49,
    acousticness: 0.7
  },
  {
    title: "Jailbirds",
    genre: "Drama",
    valence: 0.52,
    energy: 0.47,
    acousticness: 0.67
  },
  {
    title: "Japanese Mom",
    genre: "Romance / Drama",
    valence: 0.58,
    energy: 0.38,
    acousticness: 0.86
  },
  {
    title: "Jeanne and the Perfect Guy",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.37,
    acousticness: 0.84
  },
  {
    title: "John Candy: I Like Me",
    genre: "Documentary",
    valence: 0.61,
    energy: 0.46,
    acousticness: 0.71
  },
  {
    title: "Juno",
    genre: "Comedy / Drama",
    valence: 0.79,
    energy: 0.47,
    acousticness: 0.87
  },
  {
    title: "Kelas Bintang - Hot Moms",
    genre: "Drama / Romance",
    valence: 0.59,
    energy: 0.38,
    acousticness: 0.8
  },
  {
    title: "Kelas Bintang - Mangga Muda",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.37,
    acousticness: 0.81
  },
  {
    title: "L'Atalante",
    genre: "Comedy / Drama",
    valence: 0.84,
    energy: 0.46,
    acousticness: 0.89
  },
  {
    title: "La Séparation",
    genre: "Drama",
    valence: 0.5,
    energy: 0.47,
    acousticness: 0.65
  },
  {
    title: "La Tour",
    genre: "Documentary",
    valence: 0.57,
    energy: 0.37,
    acousticness: 0.72
  },
  {
    title: "La Vie en Rose",
    genre: "Music / Drama",
    valence: 0.6,
    energy: 0.41,
    acousticness: 0.79
  },
  {
    title: "Last Resort",
    genre: "Drama / Romance",
    valence: 0.65,
    energy: 0.38,
    acousticness: 0.81
  },
  {
    title: "Last Tango in Paris",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.35,
    acousticness: 0.78
  },
  {
    title: "Ligaw",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.44,
    acousticness: 0.81
  },
  {
    title: "Like Stars on Earth",
    genre: "Drama",
    valence: 0.53,
    energy: 0.49,
    acousticness: 0.63
  },
  {
    title: "Little Children",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.43,
    acousticness: 0.84
  },
  {
    title: "Little Manhattan",
    genre: "Comedy / Romance",
    valence: 0.8,
    energy: 0.49,
    acousticness: 0.65
  },
  {
    title: "Little Women",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.33,
    acousticness: 0.99
  },
  {
    title: "Lolita",
    genre: "Drama / Romance",
    valence: 0.6,
    energy: 0.4,
    acousticness: 0.84
  },
  {
    title: "Losing Chase",
    genre: "Drama / Romance",
    valence: 0.59,
    energy: 0.43,
    acousticness: 0.85
  },
  {
    title: "Love & Other Drugs",
    genre: "Drama / Comedy",
    valence: 0.76,
    energy: 0.39,
    acousticness: 0.87
  },
  {
    title: "Love Actually",
    genre: "Comedy / Romance",
    valence: 0.8,
    energy: 0.42,
    acousticness: 0.9
  },
  {
    title: "Love Lesson",
    genre: "Romance / Drama",
    valence: 0.77,
    energy: 0.45,
    acousticness: 0.82
  },
  {
    title: "Love Story",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.43,
    acousticness: 0.86
  },
  {
    title: "Lover",
    genre: "Romance / Drama",
    valence: 0.63,
    energy: 0.41,
    acousticness: 0.85
  },
  {
    title: "Low Down",
    genre: "Drama / Music",
    valence: 0.63,
    energy: 0.49,
    acousticness: 0.84
  },
  {
    title: "Ma mère",
    genre: "Drama",
    valence: 0.52,
    energy: 0.39,
    acousticness: 0.68
  },
  {
    title: "Macbeth",
    genre: "Drama",
    valence: 0.54,
    energy: 0.4,
    acousticness: 0.67
  },
  {
    title: "Manufacturing Dissent",
    genre: "Documentary",
    valence: 0.59,
    energy: 0.38,
    acousticness: 0.74
  },
  {
    title: "Marked Men: Rule + Shaw",
    genre: "Romance / Drama",
    valence: 0.65,
    energy: 0.41,
    acousticness: 0.85
  },
  {
    title: "Marriage Is a Crazy Thing",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.88
  },
  {
    title: "Materialists",
    genre: "Romance / Drama",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.82
  },
  {
    title: "Me Before You",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.36,
    acousticness: 0.86
  },
  {
    title: "Mean Girls",
    genre: "Drama / Comedy",
    valence: 0.67,
    energy: 0.45,
    acousticness: 0.66
  },
  {
    title: "Meet Bill",
    genre: "Comedy / Drama",
    valence: 0.74,
    energy: 0.42,
    acousticness: 0.85
  },
  {
    title: "Meet Joe Black",
    genre: "Fantasy / Drama",
    valence: 0.67,
    energy: 0.44,
    acousticness: 0.75
  },
  {
    title: "Merv",
    genre: "Comedy / Romance",
    valence: 0.84,
    energy: 0.49,
    acousticness: 0.73
  },
  {
    title: "Messi",
    genre: "Documentary",
    valence: 0.57,
    energy: 0.38,
    acousticness: 0.72
  },
  {
    title: "Mom's Friend 2",
    genre: "Romance",
    valence: 0.66,
    energy: 0.38,
    acousticness: 0.65
  },
  {
    title: "Mom's Friend 2020",
    genre: "Romance",
    valence: 0.61,
    energy: 0.48,
    acousticness: 0.64
  },
  {
    title: "Mother's Lover",
    genre: "Drama / Romance",
    valence: 0.66,
    energy: 0.37,
    acousticness: 0.8
  },
  {
    title: "My Fault: London",
    genre: "Drama / Romance",
    valence: 0.64,
    energy: 0.4,
    acousticness: 0.82
  },
  {
    title: "My Favourite Cake",
    genre: "Drama / Comedy",
    valence: 0.83,
    energy: 0.47,
    acousticness: 0.82
  },
  {
    title: "My Oxford Year",
    genre: "Romance / Comedy",
    valence: 0.8,
    energy: 0.39,
    acousticness: 0.85
  },
  {
    title: "My Secret Santa",
    genre: "Comedy / Romance",
    valence: 0.76,
    energy: 0.48,
    acousticness: 0.66
  },
  {
    title: "Naughty",
    genre: "Drama",
    valence: 0.53,
    energy: 0.43,
    acousticness: 0.73
  },
  {
    title: "Nea",
    genre: "Romance / Drama",
    valence: 0.57,
    energy: 0.36,
    acousticness: 0.85
  },
  {
    title: "Nice Sister-In-Law",
    genre: "Romance / Drama",
    valence: 0.55,
    energy: 0.37,
    acousticness: 0.83
  },
  {
    title: "Nine Months",
    genre: "Romance / Comedy",
    valence: 0.86,
    energy: 0.48,
    acousticness: 0.66
  },
  {
    title: "No Hard Feelings",
    genre: "Comedy / Romance",
    valence: 0.77,
    energy: 0.47,
    acousticness: 0.63
  },
  {
    title: "No Thank You",
    genre: "Drama / Comedy",
    valence: 0.6,
    energy: 0.47,
    acousticness: 0.7
  },
  {
    title: "Nouvelle Vague",
    genre: "Comedy / Drama",
    valence: 0.61,
    energy: 0.42,
    acousticness: 0.84
  },
  {
    title: "Operation Nutcracker",
    genre: "TV Movie / Romance",
    valence: 0.83,
    energy: 0.49,
    acousticness: 0.74
  },
  {
    title: "Oppenheimer",
    genre: "Drama / History",
    valence: 0.5,
    energy: 0.37,
    acousticness: 0.85
  },
  {
    title: "Our Fault",
    genre: "Romance / Drama",
    valence: 0.61,
    energy: 0.34,
    acousticness: 0.78
  },
  {
    title: "Paddington 2",
    genre: "Family",
    valence: 0.95,
    energy: 0.4,
    acousticness: 0.5
  },
  {
    title: "Palmer",
    genre: "Drama",
    valence: 0.5,
    energy: 0.48,
    acousticness: 0.66
  },
  {
    title: "Past Lives",
    genre: "Drama / Romance",
    valence: 0.59,
    energy: 0.36,
    acousticness: 0.85
  },
  {
    title: "Perfect Days",
    genre: "Drama",
    valence: 0.54,
    energy: 0.47,
    acousticness: 0.72
  },
  {
    title: "Persuasion",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.34,
    acousticness: 0.8
  },
  {
    title: "Playing with Love",
    genre: "Drama",
    valence: 0.5,
    energy: 0.44,
    acousticness: 0.68
  },
  {
    title: "Pleasure",
    genre: "Drama",
    valence: 0.51,
    energy: 0.4,
    acousticness: 0.69
  },
  {
    title: "Preparation for the Next Life",
    genre: "Drama / Romance",
    valence: 0.55,
    energy: 0.38,
    acousticness: 0.82
  },
  {
    title: "Pride & Prejudice",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.33,
    acousticness: 0.78
  },
  {
    title: "Provisional Liberty",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.41,
    acousticness: 0.84
  },
  {
    title: "Queen of Hearts",
    genre: "Drama",
    valence: 0.54,
    energy: 0.46,
    acousticness: 0.71
  },
  {
    title: "Raising Helen",
    genre: "Drama / Comedy",
    valence: 0.79,
    energy: 0.4,
    acousticness: 0.89
  },
  {
    title: "Red, White & Royal Blue",
    genre: "Comedy / Romance",
    valence: 0.84,
    energy: 0.46,
    acousticness: 0.64
  },
  {
    title: "Redeeming Love",
    genre: "Romance / Drama",
    valence: 0.61,
    energy: 0.42,
    acousticness: 0.95
  },
  {
    title: "Regretting You",
    genre: "Romance / Drama",
    valence: 0.58,
    energy: 0.42,
    acousticness: 0.79
  },
  {
    title: "Remote Control",
    genre: "Comedy / Drama",
    valence: 0.64,
    energy: 0.47,
    acousticness: 0.74
  },
  {
    title: "Ride Away",
    genre: "Comedy / Drama",
    valence: 0.68,
    energy: 0.47,
    acousticness: 0.9
  },
  {
    title: "Rocky",
    genre: "Drama",
    valence: 0.51,
    energy: 0.47,
    acousticness: 0.71
  },
  {
    title: "Russian Mom",
    genre: "Drama / Romance",
    valence: 0.61,
    energy: 0.34,
    acousticness: 0.81
  },
  {
    title: "Saiyaara",
    genre: "Romance / Drama",
    valence: 0.74,
    energy: 0.46,
    acousticness: 0.91
  },
  {
    title: "Secret Things",
    genre: "Drama",
    valence: 0.51,
    energy: 0.43,
    acousticness: 0.67
  },
  {
    title: "Secretary",
    genre: "Romance / Drama",
    valence: 0.82,
    energy: 0.45,
    acousticness: 0.91
  },
  {
    title: "Sense and Sensibility",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.34,
    acousticness: 0.85
  },
  {
    title: "Sentimental Value",
    genre: "Drama",
    valence: 0.52,
    energy: 0.41,
    acousticness: 0.64
  },
  {
    title: "Separate Ways",
    genre: "Drama",
    valence: 0.51,
    energy: 0.4,
    acousticness: 0.73
  },
  {
    title: "Serendipity",
    genre: "Comedy / Romance",
    valence: 0.81,
    energy: 0.49,
    acousticness: 0.65
  },
  {
    title: "Sexual Healing",
    genre: "Drama / Music",
    valence: 0.54,
    energy: 0.43,
    acousticness: 0.77
  },
  {
    title: "Shipmates Forever",
    genre: "Drama / Music",
    valence: 0.65,
    energy: 0.41,
    acousticness: 0.84
  },
  {
    title: "Sidelined: The QB and Me",
    genre: "Comedy / Romance",
    valence: 0.76,
    energy: 0.49,
    acousticness: 0.72
  },
  {
    title: "Smilin' Through",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.42,
    acousticness: 0.88
  },
  {
    title: "Solo Mio",
    genre: "Romance / Comedy",
    valence: 0.81,
    energy: 0.46,
    acousticness: 0.71
  },
  {
    title: "Something in the Air",
    genre: "Romance / Drama",
    valence: 0.64,
    energy: 0.42,
    acousticness: 0.82
  },
  {
    title: "Song Sung Blue",
    genre: "Drama / Music",
    valence: 0.71,
    energy: 0.41,
    acousticness: 0.92
  },
  {
    title: "Sorry, Baby",
    genre: "Drama / Comedy",
    valence: 0.61,
    energy: 0.44,
    acousticness: 0.74
  },
  {
    title: "Stealing Beauty",
    genre: "Drama / Romance",
    valence: 0.6,
    energy: 0.38,
    acousticness: 0.88
  },
  {
    title: "Stealing Lust",
    genre: "Romance",
    valence: 0.63,
    energy: 0.45,
    acousticness: 0.63
  },
  {
    title: "Subway Sadie",
    genre: "Romance / Comedy",
    valence: 0.78,
    energy: 0.47,
    acousticness: 0.87
  },
  {
    title: "Sugar Baby",
    genre: "Romance",
    valence: 0.61,
    energy: 0.41,
    acousticness: 0.64
  },
  {
    title: "Summer of 85",
    genre: "Romance / Drama",
    valence: 0.57,
    energy: 0.41,
    acousticness: 0.78
  },
  {
    title: "Summer Palace",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.43,
    acousticness: 0.83
  },
  {
    title: "Swingers",
    genre: "Romance / Drama",
    valence: 0.64,
    energy: 0.33,
    acousticness: 0.87
  },
  {
    title: "Taylor Swift | The Eras Tour | The Final Show",
    genre: "Music",
    valence: 0.61,
    energy: 0.48,
    acousticness: 0.6
  },
  {
    title: "Tell Me Softly",
    genre: "Romance / Drama",
    valence: 0.64,
    energy: 0.43,
    acousticness: 0.85
  },
  {
    title: "The Aviator",
    genre: "Drama",
    valence: 0.55,
    energy: 0.43,
    acousticness: 0.7
  },
  {
    title: "The Best You Can",
    genre: "Romance / Comedy",
    valence: 0.74,
    energy: 0.44,
    acousticness: 0.83
  },
  {
    title: "The Blind Side",
    genre: "Drama",
    valence: 0.51,
    energy: 0.48,
    acousticness: 0.69
  },
  {
    title: "The Bridges of Madison County",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.4,
    acousticness: 0.88
  },
  {
    title: "The Concubine",
    genre: "Drama",
    valence: 0.51,
    energy: 0.45,
    acousticness: 0.72
  },
  {
    title: "The Corruption",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.44,
    acousticness: 0.86
  },
  {
    title: "The Creature",
    genre: "Drama",
    valence: 0.5,
    energy: 0.46,
    acousticness: 0.68
  },
  {
    title: "The Delinquents",
    genre: "Drama",
    valence: 0.5,
    energy: 0.49,
    acousticness: 0.72
  },
  {
    title: "The Details",
    genre: "Comedy / Drama",
    valence: 0.69,
    energy: 0.49,
    acousticness: 0.69
  },
  {
    title: "The Fabelmans",
    genre: "Drama",
    valence: 0.52,
    energy: 0.49,
    acousticness: 0.71
  },
  {
    title: "The Family McMullen",
    genre: "Drama / Comedy",
    valence: 0.68,
    energy: 0.45,
    acousticness: 0.69
  },
  {
    title: "The Family Stone",
    genre: "Comedy / Drama",
    valence: 0.77,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "The Feels",
    genre: "Comedy / Drama",
    valence: 0.8,
    energy: 0.45,
    acousticness: 0.9
  },
  {
    title: "The Flesh",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.35,
    acousticness: 0.79
  },
  {
    title: "The Forge",
    genre: "Drama / Family",
    valence: 0.64,
    energy: 0.4,
    acousticness: 0.7
  },
  {
    title: "The French Dispatch of the Liberty, Kansas Evening Sun",
    genre: "Drama / Comedy",
    valence: 0.72,
    energy: 0.49,
    acousticness: 0.76
  },
  {
    title: "The Girl Next Door",
    genre: "Comedy / Romance",
    valence: 0.77,
    energy: 0.45,
    acousticness: 0.72
  },
  {
    title: "The Girl with the Needle",
    genre: "Drama / History",
    valence: 0.51,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "The Governess",
    genre: "Drama / Romance",
    valence: 0.61,
    energy: 0.42,
    acousticness: 0.78
  },
  {
    title: "The Greatest Showman",
    genre: "Drama",
    valence: 0.55,
    energy: 0.46,
    acousticness: 0.69
  },
  {
    title: "The Help",
    genre: "Drama",
    valence: 0.53,
    energy: 0.42,
    acousticness: 0.7
  },
  {
    title: "The Holiday",
    genre: "Comedy / Romance",
    valence: 0.77,
    energy: 0.46,
    acousticness: 0.68
  },
  {
    title: "The Hurricane",
    genre: "Drama",
    valence: 0.51,
    energy: 0.46,
    acousticness: 0.69
  },
  {
    title: "The Idea of You",
    genre: "Romance / Drama",
    valence: 0.76,
    energy: 0.46,
    acousticness: 0.89
  },
  {
    title: "The Illusioned Ones",
    genre: "Drama",
    valence: 0.51,
    energy: 0.39,
    acousticness: 0.65
  },
  {
    title: "The Intimate",
    genre: "Romance / Drama",
    valence: 0.62,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "The Judge",
    genre: "Drama",
    valence: 0.53,
    energy: 0.44,
    acousticness: 0.71
  },
  {
    title: "The Last Subway",
    genre: "Romance",
    valence: 0.68,
    energy: 0.39,
    acousticness: 0.61
  },
  {
    title: "The Legacy",
    genre: "Drama",
    valence: 0.51,
    energy: 0.41,
    acousticness: 0.66
  },
  {
    title: "The Life of Chuck",
    genre: "Fantasy / Drama",
    valence: 0.55,
    energy: 0.47,
    acousticness: 0.67
  },
  {
    title: "The Locusts",
    genre: "Drama / Romance",
    valence: 0.55,
    energy: 0.36,
    acousticness: 0.78
  },
  {
    title: "The Messenger",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.35,
    acousticness: 0.85
  },
  {
    title: "The Muppets Celebrate Jim Henson",
    genre: "Documentary / Drama",
    valence: 0.73,
    energy: 0.3,
    acousticness: 1
  },
  {
    title: "The Nanny Diaries",
    genre: "Comedy / Drama",
    valence: 0.75,
    energy: 0.47,
    acousticness: 0.83
  },
  {
    title: "The Next 365 Days",
    genre: "Romance / Drama",
    valence: 0.59,
    energy: 0.4,
    acousticness: 0.79
  },
  {
    title: "The Notebook",
    genre: "Romance / Drama",
    valence: 0.61,
    energy: 0.43,
    acousticness: 0.78
  },
  {
    title: "The Parent Trap",
    genre: "Comedy / Family",
    valence: 0.95,
    energy: 0.44,
    acousticness: 0.71
  },
  {
    title: "The Passion of Anna",
    genre: "Drama",
    valence: 0.53,
    energy: 0.44,
    acousticness: 0.64
  },
  {
    title: "The Piano Teacher",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.32,
    acousticness: 0.84
  },
  {
    title: "The Power of the Present",
    genre: "Documentary",
    valence: 0.61,
    energy: 0.44,
    acousticness: 0.74
  },
  {
    title: "The Princess Switch",
    genre: "Romance / Comedy",
    valence: 0.81,
    energy: 0.46,
    acousticness: 0.66
  },
  {
    title: "The Proposal",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.43,
    acousticness: 0.86
  },
  {
    title: "The Pursuit of Lust",
    genre: "Romance / Drama",
    valence: 0.64,
    energy: 0.38,
    acousticness: 0.87
  },
  {
    title: "The Pursuit of Lust 5",
    genre: "Drama / Romance",
    valence: 0.63,
    energy: 0.37,
    acousticness: 0.81
  },
  {
    title: "The Reader",
    genre: "Drama / Romance",
    valence: 0.6,
    energy: 0.42,
    acousticness: 0.81
  },
  {
    title: "The Sandpiper",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.33,
    acousticness: 0.83
  },
  {
    title: "The Sound of Music",
    genre: "Drama / Family",
    valence: 0.87,
    energy: 0.38,
    acousticness: 1
  },
  {
    title: "The Summers of It - Chapter Two: It Ends",
    genre: "Documentary",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.73
  },
  {
    title: "The Summers of It – Chapter One: You'll Float Too",
    genre: "Documentary",
    valence: 0.59,
    energy: 0.36,
    acousticness: 0.7
  },
  {
    title: "The Switch",
    genre: "Comedy / Romance",
    valence: 0.78,
    energy: 0.45,
    acousticness: 0.87
  },
  {
    title: "The Threesome",
    genre: "Comedy / Romance",
    valence: 0.8,
    energy: 0.41,
    acousticness: 0.87
  },
  {
    title: "The Treatment",
    genre: "Comedy / Drama",
    valence: 0.75,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "The Ultimate Life",
    genre: "Drama / Romance",
    valence: 0.55,
    energy: 0.41,
    acousticness: 0.81
  },
  {
    title: "The Upside",
    genre: "Comedy / Drama",
    valence: 0.63,
    energy: 0.49,
    acousticness: 0.72
  },
  {
    title: "The Voyeur",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.37,
    acousticness: 0.83
  },
  {
    title: "The Wilderness",
    genre: "Drama",
    valence: 0.5,
    energy: 0.47,
    acousticness: 0.71
  },
  {
    title: "The Witness",
    genre: "Drama",
    valence: 0.52,
    energy: 0.42,
    acousticness: 0.63
  },
  {
    title: "The Worst Person in the World",
    genre: "Drama / Romance",
    valence: 0.76,
    energy: 0.46,
    acousticness: 0.9
  },
  {
    title: "Three Months",
    genre: "Drama / Comedy",
    valence: 0.73,
    energy: 0.48,
    acousticness: 0.71
  },
  {
    title: "Three Wishes",
    genre: "Fantasy / Family",
    valence: 0.73,
    energy: 0.48,
    acousticness: 0.71
  },
  {
    title: "Through My Window",
    genre: "Romance / Drama",
    valence: 0.81,
    energy: 0.39,
    acousticness: 0.88
  },
  {
    title: "Titanic",
    genre: "Drama / Romance",
    valence: 0.6,
    energy: 0.39,
    acousticness: 0.86
  },
  {
    title: "Tootsie",
    genre: "Comedy / Romance",
    valence: 0.84,
    energy: 0.44,
    acousticness: 0.64
  },
  {
    title: "True Beauty: The Movie - Part 1",
    genre: "Romance / Comedy",
    valence: 0.83,
    energy: 0.48,
    acousticness: 0.88
  },
  {
    title: "Twilight",
    genre: "Fantasy / Drama",
    valence: 0.65,
    energy: 0.43,
    acousticness: 0.82
  },
  {
    title: "Two Worlds One Wish",
    genre: "Romance / Drama",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.84
  },
  {
    title: "Varsity Blues",
    genre: "Comedy / Drama",
    valence: 0.78,
    energy: 0.48,
    acousticness: 0.82
  },
  {
    title: "Vice",
    genre: "Drama / Comedy",
    valence: 0.63,
    energy: 0.48,
    acousticness: 0.72
  },
  {
    title: "W.E.",
    genre: "Drama / Romance",
    valence: 0.56,
    energy: 0.42,
    acousticness: 0.79
  },
  {
    title: "War Story",
    genre: "Drama",
    valence: 0.5,
    energy: 0.41,
    acousticness: 0.67
  },
  {
    title: "We Live in Time",
    genre: "Romance / Drama",
    valence: 0.59,
    energy: 0.34,
    acousticness: 0.81
  },
  {
    title: "Wet Woman in the Wind",
    genre: "Drama / Romance",
    valence: 0.57,
    energy: 0.35,
    acousticness: 0.84
  },
  {
    title: "What a Girl Wants",
    genre: "Comedy / Romance",
    valence: 0.99,
    energy: 0.36,
    acousticness: 0.94
  },
  {
    title: "What's Eating Gilbert Grape",
    genre: "Romance / Drama",
    valence: 0.65,
    energy: 0.37,
    acousticness: 0.79
  },
  {
    title: "When Harry Met Sally...",
    genre: "Comedy / Romance",
    valence: 0.83,
    energy: 0.4,
    acousticness: 0.9
  },
  {
    title: "While You Were Sleeping",
    genre: "Romance / Comedy",
    valence: 0.77,
    energy: 0.46,
    acousticness: 0.69
  },
  {
    title: "Wings of Christmas",
    genre: "Romance",
    valence: 0.57,
    energy: 0.46,
    acousticness: 0.65
  },
  {
    title: "Without Charlie",
    genre: "Romance / Comedy",
    valence: 0.7,
    energy: 0.4,
    acousticness: 0.84
  },
  {
    title: "XXXXXXX",
    genre: "Documentary",
    valence: 0.57,
    energy: 0.43,
    acousticness: 0.73
  },
  {
    title: "Yongju Valley",
    genre: "Drama / Romance",
    valence: 0.62,
    energy: 0.41,
    acousticness: 0.81
  },
  {
    title: "Yoon-Yool's Men Affairs",
    genre: "Drama / Romance",
    valence: 0.51,
    energy: 0.42,
    acousticness: 0.79
  },
  {
    title: "You Are the Apple of My Eye",
    genre: "Romance / Drama",
    valence: 0.81,
    energy: 0.41,
    acousticness: 0.89
  },
  {
    title: "Young Hearts",
    genre: "Drama / Romance",
    valence: 0.58,
    energy: 0.43,
    acousticness: 0.84
  },
  {
    title: "Young Mother 2",
    genre: "Drama / Romance",
    valence: 0.62,
    energy: 0.4,
    acousticness: 0.85
  },
  {
    title: "Your Fault",
    genre: "Drama / Romance",
    valence: 0.62,
    energy: 0.34,
    acousticness: 0.79
  },
  {
    title: "Your Heart Will Be Broken",
    genre: "Romance",
    valence: 0.63,
    energy: 0.48,
    acousticness: 0.67
  },

  // --- SAD & INTENSE ---
  {
    title: "12.12: The Day",
    genre: "Drama / Thriller",
    valence: 0.13,
    energy: 0.96,
    acousticness: 0.59
  },
  {
    title: "13 Days, 13 Nights: In the Hell of Kabul",
    genre: "Action / War",
    valence: 0.24,
    energy: 0.99,
    acousticness: 0.28
  },
  {
    title: "1917",
    genre: "War / History",
    valence: 0.29,
    energy: 0.73,
    acousticness: 0.79
  },
  {
    title: "211",
    genre: "Crime / Action",
    valence: 0.3,
    energy: 0.96,
    acousticness: 0.15
  },
  {
    title: "25th Hour",
    genre: "Crime / Drama",
    valence: 0.36,
    energy: 0.51,
    acousticness: 0.63
  },
  {
    title: "28 Days Later",
    genre: "Horror / Thriller",
    valence: 0.28,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "28 Weeks Later",
    genre: "Horror / Thriller",
    valence: 0.27,
    energy: 0.99,
    acousticness: 0.06
  },
  {
    title: "28 Years Later",
    genre: "Horror / Thriller",
    valence: 0.25,
    energy: 0.99,
    acousticness: 0.07
  },
  {
    title: "30 Days of Night",
    genre: "Horror / Thriller",
    valence: 0.22,
    energy: 0.85,
    acousticness: 0.18
  },
  {
    title: "578: Magnum",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 0.86,
    acousticness: 0.22
  },
  {
    title: "731: Evil Unbound",
    genre: "Drama / History",
    valence: 0.03,
    energy: 0.65,
    acousticness: 0.73
  },
  {
    title: "8MM",
    genre: "Thriller / Crime",
    valence: 0.15,
    energy: 0.96,
    acousticness: 0.24
  },
  {
    title: "A Bronx Tale",
    genre: "Drama / Crime",
    valence: 0.39,
    energy: 0.59,
    acousticness: 0.6
  },
  {
    title: "A Chinese Torture Chamber Story",
    genre: "Horror / Comedy",
    valence: 0.41,
    energy: 0.68,
    acousticness: 0.58
  },
  {
    title: "A House of Dynamite",
    genre: "Thriller",
    valence: 0.35,
    energy: 0.67,
    acousticness: 0.37
  },
  {
    title: "A Line of Fire",
    genre: "Action / Thriller",
    valence: 0.45,
    energy: 0.95,
    acousticness: 0.2
  },
  {
    title: "A Nightmare on Elm Street",
    genre: "Horror / Mystery",
    valence: 0.11,
    energy: 1,
    acousticness: 0.14
  },
  {
    title: "A Quiet Place",
    genre: "Horror / Drama",
    valence: 0.35,
    energy: 0.74,
    acousticness: 0.35
  },
  {
    title: "A Quiet Place: Day One",
    genre: "Horror / Science Fiction",
    valence: 0.21,
    energy: 1,
    acousticness: 0.01
  },
  {
    title: "A Serbian Film",
    genre: "Crime / Horror",
    valence: 0.08,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "A Son",
    genre: "Drama",
    valence: 0.48,
    energy: 0.5,
    acousticness: 0.64
  },
  {
    title: "A Tale of Two Sisters",
    genre: "Drama / Horror",
    valence: 0.15,
    energy: 0.75,
    acousticness: 0.44
  },
  {
    title: "A Working Man",
    genre: "Action / Crime",
    valence: 0.27,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Abigail",
    genre: "Horror / Thriller",
    valence: 0.1,
    energy: 0.96,
    acousticness: 0.18
  },
  {
    title: "Absolution",
    genre: "Action / Crime",
    valence: 0.25,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Abyss",
    genre: "Thriller / Action",
    valence: 0.47,
    energy: 0.91,
    acousticness: 0.25
  },
  {
    title: "After Alice",
    genre: "Thriller / Mystery",
    valence: 0.24,
    energy: 0.84,
    acousticness: 0.36
  },
  {
    title: "Agak Laen: Menyala Pantiku!",
    genre: "Comedy / Crime",
    valence: 0.43,
    energy: 0.71,
    acousticness: 0.6
  },
  {
    title: "AIBOU: The Movie IV",
    genre: "Crime / Mystery",
    valence: 0.31,
    energy: 0.78,
    acousticness: 0.39
  },
  {
    title: "Alarum",
    genre: "Action / Crime",
    valence: 0.3,
    energy: 0.98,
    acousticness: 0.22
  },
  {
    title: "Alien",
    genre: "Horror / Science Fiction",
    valence: 0.4,
    energy: 0.84,
    acousticness: 0.16
  },
  {
    title: "Alien: Romulus",
    genre: "Horror / Science Fiction",
    valence: 0.37,
    energy: 0.81,
    acousticness: 0.18
  },
  {
    title: "Alien³",
    genre: "Science Fiction / Action",
    valence: 0.38,
    energy: 1,
    acousticness: 0
  },
  {
    title: "All About Lily Chou-Chou",
    genre: "Drama / Crime",
    valence: 0.35,
    energy: 0.58,
    acousticness: 0.65
  },
  {
    title: "All Quiet on the Western Front",
    genre: "War / History",
    valence: 0.33,
    energy: 0.55,
    acousticness: 0.9
  },
  {
    title: "All Souls",
    genre: "Thriller",
    valence: 0.44,
    energy: 0.7,
    acousticness: 0.39
  },
  {
    title: "Almost Perfect",
    genre: "TV Movie / Thriller",
    valence: 0.46,
    energy: 0.62,
    acousticness: 0.47
  },
  {
    title: "Alpha",
    genre: "Horror / Drama",
    valence: 0.29,
    energy: 0.83,
    acousticness: 0.37
  },
  {
    title: "Already Dead",
    genre: "Crime / Drama",
    valence: 0.44,
    energy: 0.54,
    acousticness: 0.6
  },
  {
    title: "Altered States",
    genre: "Horror / Science Fiction",
    valence: 0.24,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Amaran",
    genre: "Action / Drama",
    valence: 0.44,
    energy: 0.88,
    acousticness: 0.47
  },
  {
    title: "Amber Alert",
    genre: "Thriller / Drama",
    valence: 0.4,
    energy: 0.61,
    acousticness: 0.54
  },
  {
    title: "American Psycho",
    genre: "Thriller / Drama",
    valence: 0.27,
    energy: 0.79,
    acousticness: 0.53
  },
  {
    title: "An Ordinary Case",
    genre: "Drama / Crime",
    valence: 0.44,
    energy: 0.53,
    acousticness: 0.67
  },
  {
    title: "Angels & Demons",
    genre: "Thriller / Mystery",
    valence: 0.21,
    energy: 0.84,
    acousticness: 0.34
  },
  {
    title: "Annabelle",
    genre: "Horror",
    valence: 0.3,
    energy: 0.68,
    acousticness: 0.39
  },
  {
    title: "Anything for Her",
    genre: "Drama / Thriller",
    valence: 0.33,
    energy: 0.6,
    acousticness: 0.6
  },
  {
    title: "Apocalypto",
    genre: "Action / Drama",
    valence: 0.44,
    energy: 0.56,
    acousticness: 0.7
  },
  {
    title: "Armored Command",
    genre: "War / Drama",
    valence: 0.29,
    energy: 0.56,
    acousticness: 0.75
  },
  {
    title: "Arrival",
    genre: "Drama / Science Fiction",
    valence: 0.42,
    energy: 0.72,
    acousticness: 0.48
  },
  {
    title: "Art of Eight Limbs",
    genre: "Action / Thriller",
    valence: 0.44,
    energy: 0.94,
    acousticness: 0.2
  },
  {
    title: "Avengers: Doomsday",
    genre: "Science Fiction",
    valence: 0.45,
    energy: 0.71,
    acousticness: 0.27
  },
  {
    title: "Avenging Angel",
    genre: "Action / Thriller",
    valence: 0.28,
    energy: 1,
    acousticness: 0.17
  },
  {
    title: "Azrael",
    genre: "Action / Horror",
    valence: 0.21,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Baby Driver",
    genre: "Action / Crime",
    valence: 0.49,
    energy: 0.88,
    acousticness: 0.28
  },
  {
    title: "Bad Boys for Life",
    genre: "Thriller / Action",
    valence: 0.38,
    energy: 0.97,
    acousticness: 0.19
  },
  {
    title: "Ballad of a Small Player",
    genre: "Crime / Drama",
    valence: 0.43,
    energy: 0.52,
    acousticness: 0.62
  },
  {
    title: "Ballerina",
    genre: "Action / Thriller",
    valence: 0.29,
    energy: 1,
    acousticness: 0.14
  },
  {
    title: "Bambi: The Reckoning",
    genre: "Horror / Thriller",
    valence: 0.13,
    energy: 0.9,
    acousticness: 0.2
  },
  {
    title: "Bang",
    genre: "Action / Thriller",
    valence: 0.45,
    energy: 0.87,
    acousticness: 0.23
  },
  {
    title: "Batman Begins",
    genre: "Drama / Crime",
    valence: 0.38,
    energy: 0.81,
    acousticness: 0.45
  },
  {
    title: "Beast of War",
    genre: "Thriller / Horror",
    valence: 0.06,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "Beautiful Teacher in Torture Hell",
    genre: "Drama / Thriller",
    valence: 0.14,
    energy: 0.87,
    acousticness: 0.43
  },
  {
    title: "Bicentennial Man",
    genre: "Science Fiction / Drama",
    valence: 0.46,
    energy: 0.62,
    acousticness: 0.55
  },
  {
    title: "Black Bag",
    genre: "Drama / Mystery",
    valence: 0.28,
    energy: 0.8,
    acousticness: 0.5
  },
  {
    title: "Black Hawk Down",
    genre: "Action / War",
    valence: 0.4,
    energy: 0.72,
    acousticness: 0.57
  },
  {
    title: "Black Phone 2",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.88,
    acousticness: 0.21
  },
  {
    title: "Black Samson",
    genre: "Action / Drama",
    valence: 0.46,
    energy: 0.6,
    acousticness: 0.52
  },
  {
    title: "Black Swan",
    genre: "Drama / Thriller",
    valence: 0.22,
    energy: 0.89,
    acousticness: 0.43
  },
  {
    title: "Blackrock",
    genre: "Drama / Thriller",
    valence: 0.32,
    energy: 0.59,
    acousticness: 0.54
  },
  {
    title: "Blade II",
    genre: "Fantasy / Horror",
    valence: 0.28,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Blade Runner",
    genre: "Science Fiction / Drama",
    valence: 0.41,
    energy: 0.75,
    acousticness: 0.37
  },
  {
    title: "Bone Lake",
    genre: "Horror / Thriller",
    valence: 0.09,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Border Hunters",
    genre: "Action / Thriller",
    valence: 0.4,
    energy: 0.9,
    acousticness: 0.26
  },
  {
    title: "Bound by Honor",
    genre: "Crime / Action",
    valence: 0.27,
    energy: 0.9,
    acousticness: 0.35
  },
  {
    title: "Boyka: Undisputed IV",
    genre: "Action / Drama",
    valence: 0.36,
    energy: 0.81,
    acousticness: 0.37
  },
  {
    title: "Bram Stoker's Dracula",
    genre: "Romance / Horror",
    valence: 0.39,
    energy: 0.71,
    acousticness: 0.51
  },
  {
    title: "Bramayugam",
    genre: "Horror / Thriller",
    valence: 0.13,
    energy: 0.88,
    acousticness: 0.4
  },
  {
    title: "Braveheart",
    genre: "Action / Drama",
    valence: 0.31,
    energy: 0.68,
    acousticness: 0.77
  },
  {
    title: "Breach",
    genre: "Drama / Thriller",
    valence: 0.24,
    energy: 0.67,
    acousticness: 0.61
  },
  {
    title: "Bridge of Spies",
    genre: "Thriller / Drama",
    valence: 0.32,
    energy: 0.58,
    acousticness: 0.58
  },
  {
    title: "Bring Her Back",
    genre: "Horror",
    valence: 0.34,
    energy: 0.68,
    acousticness: 0.39
  },
  {
    title: "Bullet Train Explosion",
    genre: "Action / Thriller",
    valence: 0.36,
    energy: 0.9,
    acousticness: 0.33
  },
  {
    title: "Burn",
    genre: "Thriller / Crime",
    valence: 0.37,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Burning",
    genre: "Mystery / Drama",
    valence: 0.31,
    energy: 0.76,
    acousticness: 0.55
  },
  {
    title: "Caligula: The Untold Story",
    genre: "Drama / History",
    valence: 0.21,
    energy: 0.58,
    acousticness: 0.67
  },
  {
    title: "Captain America: Brave New World",
    genre: "Action / Thriller",
    valence: 0.41,
    energy: 1,
    acousticness: 0.03
  },
  {
    title: "Captain Hook: The Cursed Tides",
    genre: "Adventure / Action",
    valence: 0.37,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Captive State",
    genre: "Science Fiction / Action",
    valence: 0.48,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Carry-On",
    genre: "Thriller / Action",
    valence: 0.46,
    energy: 0.84,
    acousticness: 0.24
  },
  {
    title: "Casino",
    genre: "Crime / Drama",
    valence: 0.45,
    energy: 0.57,
    acousticness: 0.63
  },
  {
    title: "Casino Royale",
    genre: "Adventure / Action",
    valence: 0.49,
    energy: 0.98,
    acousticness: 0.13
  },
  {
    title: "Catch Me If You Can",
    genre: "Drama / Crime",
    valence: 0.45,
    energy: 0.6,
    acousticness: 0.63
  },
  {
    title: "Caught Up",
    genre: "Drama / Thriller",
    valence: 0.24,
    energy: 0.75,
    acousticness: 0.45
  },
  {
    title: "Chained",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.88,
    acousticness: 0.36
  },
  {
    title: "Child's Play",
    genre: "Horror",
    valence: 0.28,
    energy: 0.69,
    acousticness: 0.39
  },
  {
    title: "Child's Play 3",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.91,
    acousticness: 0.23
  },
  {
    title: "Children of Men",
    genre: "Drama / Action",
    valence: 0.47,
    energy: 1,
    acousticness: 0.26
  },
  {
    title: "Chronicle",
    genre: "Science Fiction / Drama",
    valence: 0.37,
    energy: 0.75,
    acousticness: 0.4
  },
  {
    title: "City Hall",
    genre: "Drama / Thriller",
    valence: 0.37,
    energy: 0.57,
    acousticness: 0.52
  },
  {
    title: "City of God",
    genre: "Drama / Crime",
    valence: 0.4,
    energy: 0.51,
    acousticness: 0.64
  },
  {
    title: "Civil War",
    genre: "War / Action",
    valence: 0.36,
    energy: 0.72,
    acousticness: 0.56
  },
  {
    title: "Cleaner",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 0.93,
    acousticness: 0.24
  },
  {
    title: "Cloudy Clouds",
    genre: "Thriller / Drama",
    valence: 0.3,
    energy: 0.62,
    acousticness: 0.55
  },
  {
    title: "Clown in a Cornfield",
    genre: "Horror / Mystery",
    valence: 0.05,
    energy: 0.97,
    acousticness: 0.14
  },
  {
    title: "Cocaine Bear",
    genre: "Thriller / Comedy",
    valence: 0.43,
    energy: 0.89,
    acousticness: 0.37
  },
  {
    title: "Coffin Baby",
    genre: "Horror",
    valence: 0.27,
    energy: 0.68,
    acousticness: 0.36
  },
  {
    title: "Cold Hearts",
    genre: "Horror",
    valence: 0.29,
    energy: 0.67,
    acousticness: 0.39
  },
  {
    title: "Colombiana",
    genre: "Action / Thriller",
    valence: 0.35,
    energy: 0.95,
    acousticness: 0.39
  },
  {
    title: "Columbus Circle",
    genre: "Crime / Drama",
    valence: 0.16,
    energy: 0.85,
    acousticness: 0.4
  },
  {
    title: "Commitment",
    genre: "Action / Thriller",
    valence: 0.37,
    energy: 0.81,
    acousticness: 0.36
  },
  {
    title: "Companion",
    genre: "Horror / Science Fiction",
    valence: 0.25,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "Conclave",
    genre: "Drama / Thriller",
    valence: 0.31,
    energy: 0.66,
    acousticness: 0.52
  },
  {
    title: "Constantine",
    genre: "Fantasy / Action",
    valence: 0.45,
    energy: 0.96,
    acousticness: 0.13
  },
  {
    title: "Continental Split",
    genre: "Action / Thriller",
    valence: 0.41,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Control Factor",
    genre: "TV Movie / Action",
    valence: 0.47,
    energy: 0.96,
    acousticness: 0.08
  },
  {
    title: "Corrective Measures",
    genre: "Science Fiction / Action",
    valence: 0.48,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Cradle 2 the Grave",
    genre: "Action / Crime",
    valence: 0.37,
    energy: 0.81,
    acousticness: 0.45
  },
  {
    title: "Crank: High Voltage",
    genre: "Action / Thriller",
    valence: 0.34,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Craving Desire",
    genre: "Drama / Thriller",
    valence: 0.4,
    energy: 0.6,
    acousticness: 0.52
  },
  {
    title: "Crazy Lizard",
    genre: "Action / Thriller",
    valence: 0.25,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Creation of the Gods II: Demon Force",
    genre: "Action / Fantasy",
    valence: 0.47,
    energy: 0.9,
    acousticness: 0.33
  },
  {
    title: "Crime Story",
    genre: "Crime / Drama",
    valence: 0.24,
    energy: 0.78,
    acousticness: 0.51
  },
  {
    title: "Criminal Behavior",
    genre: "TV Movie / Thriller",
    valence: 0.42,
    energy: 0.6,
    acousticness: 0.47
  },
  {
    title: "CrissCross",
    genre: "Crime / Drama",
    valence: 0.38,
    energy: 0.59,
    acousticness: 0.66
  },
  {
    title: "Cure",
    genre: "Crime / Thriller",
    valence: 0.02,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "Cute But Ordinary",
    genre: "Drama / Thriller",
    valence: 0.38,
    energy: 0.6,
    acousticness: 0.52
  },
  {
    title: "Dangerous Animals",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.88,
    acousticness: 0.18
  },
  {
    title: "Dark Nuns",
    genre: "Horror / Mystery",
    valence: 0.06,
    energy: 0.98,
    acousticness: 0.36
  },
  {
    title: "Dark Tide",
    genre: "Thriller / Adventure",
    valence: 0.39,
    energy: 0.8,
    acousticness: 0.48
  },
  {
    title: "Dark Waters",
    genre: "Drama / Thriller",
    valence: 0.37,
    energy: 0.68,
    acousticness: 0.59
  },
  {
    title: "Daughter of Darkness",
    genre: "Thriller / Horror",
    valence: 0.39,
    energy: 0.92,
    acousticness: 0.22
  },
  {
    title: "Dawn of the Planet of the Apes",
    genre: "Science Fiction / Action",
    valence: 0.44,
    energy: 0.99,
    acousticness: 0.27
  },
  {
    title: "Dead of Winter",
    genre: "Thriller",
    valence: 0.4,
    energy: 0.66,
    acousticness: 0.36
  },
  {
    title: "Deadly Pickup",
    genre: "Thriller",
    valence: 0.39,
    energy: 0.7,
    acousticness: 0.35
  },
  {
    title: "Deep Fear",
    genre: "Horror / Thriller",
    valence: 0.03,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Deep Water",
    genre: "Drama / Mystery",
    valence: 0.18,
    energy: 0.71,
    acousticness: 0.48
  },
  {
    title: "Delivery Run",
    genre: "Action / Thriller",
    valence: 0.36,
    energy: 0.89,
    acousticness: 0.2
  },
  {
    title: "Den of Thieves",
    genre: "Crime / Thriller",
    valence: 0.36,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Desperation Road",
    genre: "Thriller / Action",
    valence: 0.29,
    energy: 0.94,
    acousticness: 0.33
  },
  {
    title: "Destroyer",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.84,
    acousticness: 0.25
  },
  {
    title: "Detective Belli",
    genre: "Crime / Drama",
    valence: 0.38,
    energy: 0.5,
    acousticness: 0.58
  },
  {
    title: "Dhurandhar",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 0.95,
    acousticness: 0.27
  },
  {
    title: "Diablo",
    genre: "Action / Thriller",
    valence: 0.35,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Die Hard",
    genre: "Action / Thriller",
    valence: 0.39,
    energy: 0.88,
    acousticness: 0.22
  },
  {
    title: "Die Hard 2",
    genre: "Action / Thriller",
    valence: 0.43,
    energy: 0.84,
    acousticness: 0.26
  },
  {
    title: "Die Hard: With a Vengeance",
    genre: "Action / Thriller",
    valence: 0.46,
    energy: 0.87,
    acousticness: 0.23
  },
  {
    title: "Die My Love",
    genre: "Drama / Thriller",
    valence: 0.42,
    energy: 0.65,
    acousticness: 0.52
  },
  {
    title: "Dirty Angels",
    genre: "Action / Drama",
    valence: 0.23,
    energy: 0.87,
    acousticness: 0.42
  },
  {
    title: "Dirty Story",
    genre: "Crime / Drama",
    valence: 0.35,
    energy: 0.56,
    acousticness: 0.6
  },
  {
    title: "Django Unchained",
    genre: "Drama / Western",
    valence: 0.45,
    energy: 0.51,
    acousticness: 0.85
  },
  {
    title: "Django Undisputed",
    genre: "Western",
    valence: 0.46,
    energy: 0.54,
    acousticness: 0.6
  },
  {
    title: "Doctor Sleep",
    genre: "Horror / Fantasy",
    valence: 0.4,
    energy: 0.86,
    acousticness: 0.33
  },
  {
    title: "Dollhouse",
    genre: "Horror / Mystery",
    valence: 0.19,
    energy: 0.8,
    acousticness: 0.3
  },
  {
    title: "Don't Breathe",
    genre: "Horror / Thriller",
    valence: 0.16,
    energy: 1,
    acousticness: 0.14
  },
  {
    title: "Dorian Gray",
    genre: "Fantasy / Drama",
    valence: 0.41,
    energy: 0.76,
    acousticness: 0.5
  },
  {
    title: "Double Identity",
    genre: "Crime / Thriller",
    valence: 0.3,
    energy: 0.84,
    acousticness: 0.32
  },
  {
    title: "Dracula",
    genre: "Horror / Fantasy",
    valence: 0.47,
    energy: 0.7,
    acousticness: 0.4
  },
  {
    title: "Dressed to Kill",
    genre: "Thriller / Mystery",
    valence: 0.11,
    energy: 0.98,
    acousticness: 0.21
  },
  {
    title: "Drive",
    genre: "Drama / Thriller",
    valence: 0.27,
    energy: 0.71,
    acousticness: 0.52
  },
  {
    title: "Drive Angry",
    genre: "Fantasy / Thriller",
    valence: 0.41,
    energy: 1,
    acousticness: 0.14
  },
  {
    title: "Dunkirk",
    genre: "War / Action",
    valence: 0.38,
    energy: 0.79,
    acousticness: 0.55
  },
  {
    title: "Dust Bunny",
    genre: "Action / Fantasy",
    valence: 0.46,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Eagle Eye",
    genre: "Mystery / Thriller",
    valence: 0.31,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Eden",
    genre: "Thriller / Drama",
    valence: 0.32,
    energy: 0.56,
    acousticness: 0.52
  },
  {
    title: "Edge of Darkness",
    genre: "Crime / Drama",
    valence: 0.1,
    energy: 0.8,
    acousticness: 0.39
  },
  {
    title: "El Angel",
    genre: "Drama / Crime",
    valence: 0.38,
    energy: 0.61,
    acousticness: 0.63
  },
  {
    title: "Elyas",
    genre: "Action / Thriller",
    valence: 0.37,
    energy: 0.91,
    acousticness: 0.21
  },
  {
    title: "End of Loyalty",
    genre: "Crime / Action",
    valence: 0.45,
    energy: 0.85,
    acousticness: 0.32
  },
  {
    title: "Endangered Species",
    genre: "Thriller / Drama",
    valence: 0.22,
    energy: 0.88,
    acousticness: 0.31
  },
  {
    title: "Erotic Ghost Story III",
    genre: "Horror / Drama",
    valence: 0.31,
    energy: 0.72,
    acousticness: 0.48
  },
  {
    title: "Escape",
    genre: "Action / Drama",
    valence: 0.43,
    energy: 0.8,
    acousticness: 0.4
  },
  {
    title: "Escape Room: Tournament of Champions",
    genre: "Horror / Thriller",
    valence: 0.08,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Evil Dead Rise",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.92,
    acousticness: 0.18
  },
  {
    title: "Executive Action",
    genre: "Thriller",
    valence: 0.35,
    energy: 0.7,
    acousticness: 0.42
  },
  {
    title: "Exhuma",
    genre: "Mystery / Horror",
    valence: 0.03,
    energy: 0.99,
    acousticness: 0.21
  },
  {
    title: "Exit 8",
    genre: "Horror / Mystery",
    valence: 0.05,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Extraction",
    genre: "Action / Thriller",
    valence: 0.41,
    energy: 0.9,
    acousticness: 0.24
  },
  {
    title: "Extraction 2",
    genre: "Action / Thriller",
    valence: 0.35,
    energy: 0.99,
    acousticness: 0.15
  },
  {
    title: "Eye for an Eye",
    genre: "Thriller / Drama",
    valence: 0.37,
    energy: 0.64,
    acousticness: 0.61
  },
  {
    title: "Eyes Wide Shut",
    genre: "Drama / Thriller",
    valence: 0.26,
    energy: 0.76,
    acousticness: 0.5
  },
  {
    title: "Fair Play",
    genre: "Drama / Thriller",
    valence: 0.45,
    energy: 0.6,
    acousticness: 0.73
  },
  {
    title: "Fall",
    genre: "Thriller",
    valence: 0.41,
    energy: 0.69,
    acousticness: 0.41
  },
  {
    title: "Fall for Me",
    genre: "Romance / Thriller",
    valence: 0.47,
    energy: 0.58,
    acousticness: 0.49
  },
  {
    title: "Fargo",
    genre: "Crime / Drama",
    valence: 0.29,
    energy: 0.7,
    acousticness: 0.54
  },
  {
    title: "Fast X",
    genre: "Action / Crime",
    valence: 0.29,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Fast X: Part 2",
    genre: "Action / Crime",
    valence: 0.23,
    energy: 0.99,
    acousticness: 0.14
  },
  {
    title: "Fear the Night",
    genre: "Action / Thriller",
    valence: 0.26,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Fifty Shades of Grey",
    genre: "Drama / Romance",
    valence: 0.47,
    energy: 0.61,
    acousticness: 0.69
  },
  {
    title: "Fight Club",
    genre: "Drama / Thriller",
    valence: 0.41,
    energy: 0.58,
    acousticness: 0.59
  },
  {
    title: "Final Balance",
    genre: "Thriller / Crime",
    valence: 0.15,
    energy: 0.82,
    acousticness: 0.45
  },
  {
    title: "Final Destination Bloodlines",
    genre: "Horror / Mystery",
    valence: 0.24,
    energy: 0.88,
    acousticness: 0.25
  },
  {
    title: "First Blood",
    genre: "Action / Adventure",
    valence: 0.31,
    energy: 1,
    acousticness: 0.23
  },
  {
    title: "First Moon",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.89,
    acousticness: 0.22
  },
  {
    title: "Five Nights at Freddy's",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.92,
    acousticness: 0.27
  },
  {
    title: "Five Nights at Freddy's 2",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.91,
    acousticness: 0.22
  },
  {
    title: "Five Nights at Freddy's 3",
    genre: "Horror / Thriller",
    valence: 0.18,
    energy: 0.9,
    acousticness: 0.19
  },
  {
    title: "Flight Risk",
    genre: "Action / Thriller",
    valence: 0.44,
    energy: 0.92,
    acousticness: 0.21
  },
  {
    title: "Flowers in the Attic",
    genre: "Drama / Mystery",
    valence: 0.28,
    energy: 0.69,
    acousticness: 0.57
  },
  {
    title: "Foes",
    genre: "Science Fiction / Horror",
    valence: 0.36,
    energy: 0.81,
    acousticness: 0.15
  },
  {
    title: "For a Few Dollars More",
    genre: "Western",
    valence: 0.47,
    energy: 0.58,
    acousticness: 0.64
  },
  {
    title: "Ford v Ferrari",
    genre: "Drama / Action",
    valence: 0.47,
    energy: 0.6,
    acousticness: 0.68
  },
  {
    title: "Four Brothers",
    genre: "Action / Crime",
    valence: 0.46,
    energy: 0.87,
    acousticness: 0.31
  },
  {
    title: "Fractured",
    genre: "Thriller / Drama",
    valence: 0.33,
    energy: 0.65,
    acousticness: 0.57
  },
  {
    title: "Frame Up",
    genre: "Thriller / Action",
    valence: 0.39,
    energy: 0.81,
    acousticness: 0.45
  },
  {
    title: "Frankenstein",
    genre: "Drama / Fantasy",
    valence: 0.4,
    energy: 0.77,
    acousticness: 0.46
  },
  {
    title: "Friend Request",
    genre: "Horror / Thriller",
    valence: 0.22,
    energy: 0.94,
    acousticness: 0.25
  },
  {
    title: "From Darkness",
    genre: "Horror / Mystery",
    valence: 0.12,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Frontier Days",
    genre: "Western",
    valence: 0.44,
    energy: 0.56,
    acousticness: 0.63
  },
  {
    title: "Full Eclipse",
    genre: "Horror / Action",
    valence: 0.24,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Furious 7",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Fury",
    genre: "War / Drama",
    valence: 0.38,
    energy: 0.78,
    acousticness: 0.61
  },
  {
    title: "Fury 12 Hours",
    genre: "Action / Mystery",
    valence: 0.47,
    energy: 0.78,
    acousticness: 0.28
  },
  {
    title: "Ganti-Ganti",
    genre: "Romance / Drama",
    valence: 0.42,
    energy: 0.57,
    acousticness: 0.72
  },
  {
    title: "Gatao",
    genre: "Crime / Action",
    valence: 0.4,
    energy: 0.8,
    acousticness: 0.29
  },
  {
    title: "GATAO: Big Brothers",
    genre: "Crime / Action",
    valence: 0.46,
    energy: 0.86,
    acousticness: 0.3
  },
  {
    title: "GATAO: Like Father Like Son",
    genre: "Crime / Action",
    valence: 0.45,
    energy: 0.82,
    acousticness: 0.27
  },
  {
    title: "Geostorm",
    genre: "Action / Science Fiction",
    valence: 0.48,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Get Out",
    genre: "Mystery / Thriller",
    valence: 0.04,
    energy: 0.99,
    acousticness: 0.13
  },
  {
    title: "Ghost",
    genre: "Fantasy / Drama",
    valence: 0.43,
    energy: 0.82,
    acousticness: 0.59
  },
  {
    title: "Ghost Mansion",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.88,
    acousticness: 0.2
  },
  {
    title: "Girl in the Basement",
    genre: "Thriller / Crime",
    valence: 0.3,
    energy: 0.7,
    acousticness: 0.43
  },
  {
    title: "Glass",
    genre: "Thriller / Drama",
    valence: 0.41,
    energy: 0.72,
    acousticness: 0.4
  },
  {
    title: "Godzilla",
    genre: "Science Fiction / Action",
    valence: 0.4,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Godzilla Minus One",
    genre: "Science Fiction / Horror",
    valence: 0.36,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Gone Girl",
    genre: "Mystery / Thriller",
    valence: 0.2,
    energy: 0.72,
    acousticness: 0.5
  },
  {
    title: "Gonjiam: Haunted Asylum",
    genre: "Horror / Mystery",
    valence: 0.19,
    energy: 0.79,
    acousticness: 0.26
  },
  {
    title: "Good Boy",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.87,
    acousticness: 0.27
  },
  {
    title: "GoodFellas",
    genre: "Drama / Crime",
    valence: 0.4,
    energy: 0.54,
    acousticness: 0.63
  },
  {
    title: "Greenland 2: Migration",
    genre: "Adventure / Thriller",
    valence: 0.49,
    energy: 0.95,
    acousticness: 0.14
  },
  {
    title: "Gridiron Gang",
    genre: "Crime / Drama",
    valence: 0.45,
    energy: 0.62,
    acousticness: 0.67
  },
  {
    title: "Guinea Pig: Devil's Experiment",
    genre: "Horror",
    valence: 0.23,
    energy: 0.68,
    acousticness: 0.37
  },
  {
    title: "Guy Ritchie's The Covenant",
    genre: "War / Action",
    valence: 0.25,
    energy: 0.99,
    acousticness: 0.25
  },
  {
    title: "Hackers",
    genre: "Action / Crime",
    valence: 0.32,
    energy: 0.91,
    acousticness: 0.38
  },
  {
    title: "Half Past Dead",
    genre: "Crime / Action",
    valence: 0.26,
    energy: 0.96,
    acousticness: 0.18
  },
  {
    title: "Hannie Caulder",
    genre: "Drama / Western",
    valence: 0.36,
    energy: 0.62,
    acousticness: 0.75
  },
  {
    title: "Hard Eight",
    genre: "Drama / Crime",
    valence: 0.41,
    energy: 0.57,
    acousticness: 0.59
  },
  {
    title: "Havoc",
    genre: "Action / Crime",
    valence: 0.25,
    energy: 0.99,
    acousticness: 0.37
  },
  {
    title: "Heat",
    genre: "Crime / Drama",
    valence: 0.38,
    energy: 0.83,
    acousticness: 0.42
  },
  {
    title: "Heat Lightning",
    genre: "Crime / Drama",
    valence: 0.41,
    energy: 0.56,
    acousticness: 0.62
  },
  {
    title: "Heretic",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.84,
    acousticness: 0.24
  },
  {
    title: "Hidden Face",
    genre: "Mystery / Thriller",
    valence: 0.21,
    energy: 0.86,
    acousticness: 0.32
  },
  {
    title: "High and Low",
    genre: "Drama / Crime",
    valence: 0.45,
    energy: 0.56,
    acousticness: 0.63
  },
  {
    title: "High Forces",
    genre: "Action / Crime",
    valence: 0.46,
    energy: 0.87,
    acousticness: 0.28
  },
  {
    title: "High Ground",
    genre: "Thriller / Crime",
    valence: 0.31,
    energy: 0.99,
    acousticness: 0.15
  },
  {
    title: "High Rollers",
    genre: "Action / Crime",
    valence: 0.32,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Higher Learning",
    genre: "Drama / Crime",
    valence: 0.24,
    energy: 0.73,
    acousticness: 0.47
  },
  {
    title: "Highest 2 Lowest",
    genre: "Thriller / Crime",
    valence: 0.27,
    energy: 0.75,
    acousticness: 0.48
  },
  {
    title: "HIM",
    genre: "Horror / Mystery",
    valence: 0.12,
    energy: 0.86,
    acousticness: 0.31
  },
  {
    title: "Holy Night: Demon Hunters",
    genre: "Action / Fantasy",
    valence: 0.28,
    energy: 1,
    acousticness: 0.06
  },
  {
    title: "Hombre",
    genre: "Western",
    valence: 0.47,
    energy: 0.51,
    acousticness: 0.58
  },
  {
    title: "Homefront",
    genre: "Action / Thriller",
    valence: 0.48,
    energy: 0.92,
    acousticness: 0.24
  },
  {
    title: "Horror Hotline... Big Head Monster",
    genre: "Horror",
    valence: 0.33,
    energy: 0.71,
    acousticness: 0.37
  },
  {
    title: "Horror Story",
    genre: "Thriller / Horror",
    valence: 0.11,
    energy: 0.91,
    acousticness: 0.21
  },
  {
    title: "Hotel Rwanda",
    genre: "Drama / History",
    valence: 0.29,
    energy: 0.55,
    acousticness: 0.89
  },
  {
    title: "Hour of the Wolf",
    genre: "Drama / Horror",
    valence: 0.25,
    energy: 0.67,
    acousticness: 0.58
  },
  {
    title: "House of Wax",
    genre: "Mystery / Horror",
    valence: 0.1,
    energy: 1,
    acousticness: 0.22
  },
  {
    title: "House Tour",
    genre: "Thriller",
    valence: 0.35,
    energy: 0.7,
    acousticness: 0.36
  },
  {
    title: "Housefull 5",
    genre: "Comedy / Mystery",
    valence: 0.44,
    energy: 0.87,
    acousticness: 0.37
  },
  {
    title: "Hunting Grounds",
    genre: "Action / Thriller",
    valence: 0.42,
    energy: 0.87,
    acousticness: 0.2
  },
  {
    title: "Hunting Season",
    genre: "Action / Drama",
    valence: 0.43,
    energy: 0.82,
    acousticness: 0.41
  },
  {
    title: "Hustle & Flow",
    genre: "Crime / Drama",
    valence: 0.49,
    energy: 0.6,
    acousticness: 0.77
  },
  {
    title: "I Am Legend",
    genre: "Drama / Science Fiction",
    valence: 0.34,
    energy: 0.8,
    acousticness: 0.39
  },
  {
    title: "I Know What You Did Last Summer",
    genre: "Horror / Mystery",
    valence: 0.09,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "I Saw the Devil",
    genre: "Thriller / Horror",
    valence: 0.22,
    energy: 0.89,
    acousticness: 0.25
  },
  {
    title: "I Spit on Your Grave",
    genre: "Thriller / Crime",
    valence: 0.07,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Ice Road: Vengeance",
    genre: "Action / Thriller",
    valence: 0.37,
    energy: 0.81,
    acousticness: 0.41
  },
  {
    title: "Icefall",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Identity",
    genre: "Mystery / Thriller",
    valence: 0.3,
    energy: 0.75,
    acousticness: 0.33
  },
  {
    title: "If I Had Legs I'd Kick You",
    genre: "Drama / Thriller",
    valence: 0.41,
    energy: 0.61,
    acousticness: 0.57
  },
  {
    title: "In the Fog",
    genre: "Drama / War",
    valence: 0.34,
    energy: 0.55,
    acousticness: 0.85
  },
  {
    title: "Incendies",
    genre: "Drama / War",
    valence: 0.22,
    energy: 0.64,
    acousticness: 0.67
  },
  {
    title: "Inglourious Basterds",
    genre: "Drama / Thriller",
    valence: 0.23,
    energy: 0.72,
    acousticness: 0.6
  },
  {
    title: "Inside Furioza",
    genre: "Action / Crime",
    valence: 0.39,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Insidious",
    genre: "Horror / Thriller",
    valence: 0.23,
    energy: 0.85,
    acousticness: 0.25
  },
  {
    title: "Insomnia",
    genre: "Thriller / Crime",
    valence: 0.28,
    energy: 0.69,
    acousticness: 0.48
  },
  {
    title: "Into Temptation",
    genre: "Drama / Mystery",
    valence: 0.4,
    energy: 0.59,
    acousticness: 0.62
  },
  {
    title: "Invaders of the Lost Gold",
    genre: "Adventure / Action",
    valence: 0.27,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Iron Lung",
    genre: "Horror / Science Fiction",
    valence: 0.26,
    energy: 0.81,
    acousticness: 0.15
  },
  {
    title: "Irreversible",
    genre: "Drama / Thriller",
    valence: 0.27,
    energy: 0.68,
    acousticness: 0.55
  },
  {
    title: "It",
    genre: "Horror / Thriller",
    valence: 0.23,
    energy: 0.91,
    acousticness: 0.26
  },
  {
    title: "It Chapter Two",
    genre: "Horror / Thriller",
    valence: 0.23,
    energy: 0.85,
    acousticness: 0.2
  },
  {
    title: "It Ends",
    genre: "Mystery / Horror",
    valence: 0.12,
    energy: 0.76,
    acousticness: 0.5
  },
  {
    title: "It Follows",
    genre: "Horror / Mystery",
    valence: 0.16,
    energy: 0.89,
    acousticness: 0.28
  },
  {
    title: "It Was Just an Accident",
    genre: "Drama / Thriller",
    valence: 0.28,
    energy: 0.74,
    acousticness: 0.49
  },
  {
    title: "Jack & Diane",
    genre: "Drama / Horror",
    valence: 0.32,
    energy: 0.59,
    acousticness: 0.72
  },
  {
    title: "Jaws",
    genre: "Horror / Thriller",
    valence: 0.32,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "John Wick",
    genre: "Action / Thriller",
    valence: 0.39,
    energy: 0.84,
    acousticness: 0.18
  },
  {
    title: "John Wick: Chapter 2",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    genre: "Action / Thriller",
    valence: 0.37,
    energy: 0.99,
    acousticness: 0.2
  },
  {
    title: "John Wick: Chapter 4",
    genre: "Action / Thriller",
    valence: 0.39,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Joker",
    genre: "Crime / Thriller",
    valence: 0.26,
    energy: 0.69,
    acousticness: 0.47
  },
  {
    title: "Joker: Folie à Deux",
    genre: "Drama / Crime",
    valence: 0.26,
    energy: 0.78,
    acousticness: 0.54
  },
  {
    title: "Kaantha",
    genre: "History / Crime",
    valence: 0.38,
    energy: 0.51,
    acousticness: 0.75
  },
  {
    title: "Keeper",
    genre: "Horror / Mystery",
    valence: 0.12,
    energy: 0.81,
    acousticness: 0.3
  },
  {
    title: "Kick-Ass",
    genre: "Action / Crime",
    valence: 0.47,
    energy: 0.84,
    acousticness: 0.24
  },
  {
    title: "Kill Bill: The Whole Bloody Affair",
    genre: "Action / Crime",
    valence: 0.43,
    energy: 0.87,
    acousticness: 0.26
  },
  {
    title: "Kill Bill: Vol. 1",
    genre: "Action / Crime",
    valence: 0.44,
    energy: 0.89,
    acousticness: 0.27
  },
  {
    title: "Kill Bill: Vol. 2",
    genre: "Action / Crime",
    valence: 0.34,
    energy: 1,
    acousticness: 0.17
  },
  {
    title: "Kill the Messenger",
    genre: "Crime / Drama",
    valence: 0.14,
    energy: 0.8,
    acousticness: 0.56
  },
  {
    title: "Kill Theory",
    genre: "Horror / Thriller",
    valence: 0.01,
    energy: 0.99,
    acousticness: 0.12
  },
  {
    title: "Killer Mermaid",
    genre: "Horror / Fantasy",
    valence: 0.36,
    energy: 0.78,
    acousticness: 0.31
  },
  {
    title: "Killers of the Flower Moon",
    genre: "Crime / History",
    valence: 0.32,
    energy: 0.51,
    acousticness: 0.76
  },
  {
    title: "Kingdom of Heaven",
    genre: "Drama / Action",
    valence: 0.45,
    energy: 0.85,
    acousticness: 0.69
  },
  {
    title: "Klute",
    genre: "Thriller / Mystery",
    valence: 0.21,
    energy: 0.97,
    acousticness: 0.29
  },
  {
    title: "Knives Out",
    genre: "Comedy / Crime",
    valence: 0.49,
    energy: 0.78,
    acousticness: 0.37
  },
  {
    title: "Knock Off",
    genre: "Action / Crime",
    valence: 0.37,
    energy: 0.97,
    acousticness: 0.14
  },
  {
    title: "Kryptic",
    genre: "Horror / Thriller",
    valence: 0.19,
    energy: 0.88,
    acousticness: 0.41
  },
  {
    title: "L.A. Confidential",
    genre: "Crime / Mystery",
    valence: 0.12,
    energy: 0.81,
    acousticness: 0.42
  },
  {
    title: "Laberinto de sombras",
    genre: "Horror",
    valence: 0.33,
    energy: 0.7,
    acousticness: 0.36
  },
  {
    title: "Land of Bad",
    genre: "Action / War",
    valence: 0.27,
    energy: 0.99,
    acousticness: 0.26
  },
  {
    title: "Last Exit",
    genre: "TV Movie / Action",
    valence: 0.37,
    energy: 0.72,
    acousticness: 0.46
  },
  {
    title: "Last Sentinel",
    genre: "Science Fiction / Thriller",
    valence: 0.41,
    energy: 0.84,
    acousticness: 0.19
  },
  {
    title: "Legends of the Condor Heroes: The Gallants",
    genre: "Action / Drama",
    valence: 0.43,
    energy: 0.66,
    acousticness: 0.66
  },
  {
    title: "Legends of the Fall",
    genre: "Drama / Western",
    valence: 0.49,
    energy: 0.66,
    acousticness: 0.9
  },
  {
    title: "Léon: The Professional",
    genre: "Crime / Drama",
    valence: 0.39,
    energy: 0.8,
    acousticness: 0.47
  },
  {
    title: "Limitless",
    genre: "Thriller / Mystery",
    valence: 0.35,
    energy: 0.91,
    acousticness: 0.1
  },
  {
    title: "Live Free or Die Hard",
    genre: "Action / Thriller",
    valence: 0.42,
    energy: 0.86,
    acousticness: 0.22
  },
  {
    title: "Longlegs",
    genre: "Crime / Horror",
    valence: 0.1,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Lord of War",
    genre: "Crime / Drama",
    valence: 0.23,
    energy: 0.75,
    acousticness: 0.5
  },
  {
    title: "Los Muértimer",
    genre: "Comedy / Horror",
    valence: 0.49,
    energy: 0.87,
    acousticness: 0.4
  },
  {
    title: "Lost Souls",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.78,
    acousticness: 0.37
  },
  {
    title: "Love Lies Bleeding",
    genre: "Crime / Romance",
    valence: 0.44,
    energy: 0.73,
    acousticness: 0.7
  },
  {
    title: "M3GAN",
    genre: "Science Fiction / Horror",
    valence: 0.28,
    energy: 0.88,
    acousticness: 0.17
  },
  {
    title: "M3GAN 2.0",
    genre: "Action / Science Fiction",
    valence: 0.46,
    energy: 0.99,
    acousticness: 0.08
  },
  {
    title: "Mai-chan's Daily Life",
    genre: "Horror",
    valence: 0.26,
    energy: 0.71,
    acousticness: 0.38
  },
  {
    title: "Man on Fire",
    genre: "Action / Drama",
    valence: 0.41,
    energy: 0.85,
    acousticness: 0.41
  },
  {
    title: "Mantis",
    genre: "Action / Crime",
    valence: 0.28,
    energy: 0.98,
    acousticness: 0.16
  },
  {
    title: "Marco",
    genre: "Action / Crime",
    valence: 0.34,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "Martin",
    genre: "Action / Drama",
    valence: 0.4,
    energy: 0.88,
    acousticness: 0.42
  },
  {
    title: "Meg 2: The Trench",
    genre: "Action / Science Fiction",
    valence: 0.33,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Memento",
    genre: "Mystery / Thriller",
    valence: 0.28,
    energy: 0.75,
    acousticness: 0.34
  },
  {
    title: "Memories of Murder",
    genre: "Crime / Drama",
    valence: 0.28,
    energy: 0.68,
    acousticness: 0.48
  },
  {
    title: "Message Man",
    genre: "Action / Crime",
    valence: 0.35,
    energy: 0.97,
    acousticness: 0.18
  },
  {
    title: "Midsommar",
    genre: "Horror / Drama",
    valence: 0.11,
    energy: 0.82,
    acousticness: 0.47
  },
  {
    title: "Misery",
    genre: "Drama / Thriller",
    valence: 0.4,
    energy: 0.66,
    acousticness: 0.6
  },
  {
    title: "Missing",
    genre: "Drama / Mystery",
    valence: 0.28,
    energy: 0.68,
    acousticness: 0.54
  },
  {
    title: "Mission: Impossible - The Final Reckoning",
    genre: "Action / Thriller",
    valence: 0.49,
    energy: 0.99,
    acousticness: 0.1
  },
  {
    title: "Money Monster",
    genre: "Thriller / Drama",
    valence: 0.4,
    energy: 0.66,
    acousticness: 0.54
  },
  {
    title: "Money Movers",
    genre: "Action / Crime",
    valence: 0.28,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Monster Island",
    genre: "Horror / Fantasy",
    valence: 0.29,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Mother",
    genre: "Crime / Drama",
    valence: 0.28,
    energy: 0.7,
    acousticness: 0.58
  },
  {
    title: "Moving In",
    genre: "Horror",
    valence: 0.28,
    energy: 0.77,
    acousticness: 0.36
  },
  {
    title: "Mulholland Drive",
    genre: "Thriller / Drama",
    valence: 0.28,
    energy: 0.78,
    acousticness: 0.49
  },
  {
    title: "Mulholland Falls",
    genre: "Drama / Mystery",
    valence: 0.13,
    energy: 0.82,
    acousticness: 0.48
  },
  {
    title: "Murder in Monaco",
    genre: "Documentary / Crime",
    valence: 0.45,
    energy: 0.53,
    acousticness: 0.61
  },
  {
    title: "Murder Obsession",
    genre: "Horror / Mystery",
    valence: 0.17,
    energy: 0.84,
    acousticness: 0.3
  },
  {
    title: "Murder One",
    genre: "Crime / Drama",
    valence: 0.43,
    energy: 0.54,
    acousticness: 0.64
  },
  {
    title: "Murder Syndicate",
    genre: "Action",
    valence: 0.49,
    energy: 0.77,
    acousticness: 0.33
  },
  {
    title: "My Fault",
    genre: "Drama / Romance",
    valence: 0.44,
    energy: 0.54,
    acousticness: 0.7
  },
  {
    title: "Mystic River",
    genre: "Thriller / Crime",
    valence: 0.21,
    energy: 0.85,
    acousticness: 0.47
  },
  {
    title: "Nahual",
    genre: "Horror",
    valence: 0.25,
    energy: 0.72,
    acousticness: 0.33
  },
  {
    title: "Napoleon",
    genre: "History / War",
    valence: 0.39,
    energy: 0.51,
    acousticness: 0.87
  },
  {
    title: "Night Carnage",
    genre: "Action / Horror",
    valence: 0.43,
    energy: 0.8,
    acousticness: 0.32
  },
  {
    title: "Night Shift",
    genre: "Horror",
    valence: 0.25,
    energy: 0.67,
    acousticness: 0.34
  },
  {
    title: "Nightcrawler",
    genre: "Crime / Drama",
    valence: 0.23,
    energy: 0.78,
    acousticness: 0.52
  },
  {
    title: "Ninja Assassin",
    genre: "Action / Adventure",
    valence: 0.46,
    energy: 0.99,
    acousticness: 0.16
  },
  {
    title: "No Alibi",
    genre: "Thriller / Crime",
    valence: 0.12,
    energy: 0.88,
    acousticness: 0.41
  },
  {
    title: "No Country for Old Men",
    genre: "Crime / Thriller",
    valence: 0.24,
    energy: 0.78,
    acousticness: 0.46
  },
  {
    title: "No Escape",
    genre: "Action / Drama",
    valence: 0.42,
    energy: 0.94,
    acousticness: 0.19
  },
  {
    title: "No Other Choice",
    genre: "Crime / Thriller",
    valence: 0.3,
    energy: 0.75,
    acousticness: 0.54
  },
  {
    title: "Nobody",
    genre: "Action / Thriller",
    valence: 0.39,
    energy: 0.93,
    acousticness: 0.26
  },
  {
    title: "Nobody 2",
    genre: "Action / Thriller",
    valence: 0.43,
    energy: 0.89,
    acousticness: 0.19
  },
  {
    title: "Nosferatu",
    genre: "Horror / Fantasy",
    valence: 0.33,
    energy: 0.79,
    acousticness: 0.33
  },
  {
    title: "Now You See Me",
    genre: "Thriller / Crime",
    valence: 0.29,
    energy: 0.84,
    acousticness: 0.29
  },
  {
    title: "Now You See Me 2",
    genre: "Thriller / Crime",
    valence: 0.25,
    energy: 0.78,
    acousticness: 0.27
  },
  {
    title: "Now You See Me: Now You Don't",
    genre: "Thriller / Crime",
    valence: 0.24,
    energy: 0.91,
    acousticness: 0.23
  },
  {
    title: "Nymphomaniac: Vol. II",
    genre: "Drama / Mystery",
    valence: 0.36,
    energy: 0.57,
    acousticness: 0.64
  },
  {
    title: "Ocean's Eleven",
    genre: "Thriller / Crime",
    valence: 0.28,
    energy: 0.77,
    acousticness: 0.35
  },
  {
    title: "Ocean's Thirteen",
    genre: "Crime / Thriller",
    valence: 0.3,
    energy: 0.8,
    acousticness: 0.29
  },
  {
    title: "Oldboy",
    genre: "Drama / Thriller",
    valence: 0.25,
    energy: 0.98,
    acousticness: 0.37
  },
  {
    title: "Olympus Has Fallen",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 0.86,
    acousticness: 0.23
  },
  {
    title: "Once Upon a Time in America",
    genre: "Drama / Crime",
    valence: 0.42,
    energy: 0.58,
    acousticness: 0.61
  },
  {
    title: "One Battle After Another",
    genre: "Thriller / Crime",
    valence: 0.36,
    energy: 0.98,
    acousticness: 0.16
  },
  {
    title: "Ong-Bak",
    genre: "Action / Crime",
    valence: 0.4,
    energy: 0.83,
    acousticness: 0.27
  },
  {
    title: "Operation Blood Hunt",
    genre: "Action / Adventure",
    valence: 0.39,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Operation Mincemeat",
    genre: "War / History",
    valence: 0.31,
    energy: 0.56,
    acousticness: 0.9
  },
  {
    title: "Osiris",
    genre: "Science Fiction / Action",
    valence: 0.4,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Ouija Castle",
    genre: "Horror / Fantasy",
    valence: 0.44,
    energy: 0.8,
    acousticness: 0.32
  },
  {
    title: "Outland",
    genre: "Science Fiction / Action",
    valence: 0.39,
    energy: 1,
    acousticness: 0.03
  },
  {
    title: "Oxen Split Torturing",
    genre: "Horror / Drama",
    valence: 0.33,
    energy: 0.61,
    acousticness: 0.53
  },
  {
    title: "Pacific Fear",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.88,
    acousticness: 0.18
  },
  {
    title: "Pan's Labyrinth",
    genre: "Fantasy / Drama",
    valence: 0.39,
    energy: 0.62,
    acousticness: 0.69
  },
  {
    title: "Paradise Lost: The Child Murders at Robin Hood Hills",
    genre: "Documentary / Crime",
    valence: 0.41,
    energy: 0.57,
    acousticness: 0.7
  },
  {
    title: "Paradox Effect",
    genre: "Action / Thriller",
    valence: 0.44,
    energy: 0.91,
    acousticness: 0.28
  },
  {
    title: "Pearl",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.84,
    acousticness: 0.18
  },
  {
    title: "Pearl Harbor",
    genre: "War / Romance",
    valence: 0.44,
    energy: 0.65,
    acousticness: 0.7
  },
  {
    title: "Perfume: The Story of a Murderer",
    genre: "Crime / Fantasy",
    valence: 0.49,
    energy: 0.61,
    acousticness: 0.52
  },
  {
    title: "Personal Affair",
    genre: "Crime / Drama",
    valence: 0.3,
    energy: 0.79,
    acousticness: 0.53
  },
  {
    title: "Phantom",
    genre: "Action / Thriller",
    valence: 0.31,
    energy: 1,
    acousticness: 0.22
  },
  {
    title: "Phone Booth",
    genre: "Thriller / Crime",
    valence: 0.27,
    energy: 0.84,
    acousticness: 0.36
  },
  {
    title: "Platoon",
    genre: "Drama / War",
    valence: 0.35,
    energy: 0.71,
    acousticness: 0.59
  },
  {
    title: "Play Dirty",
    genre: "Crime",
    valence: 0.46,
    energy: 0.61,
    acousticness: 0.4
  },
  {
    title: "Point Break",
    genre: "Action / Thriller",
    valence: 0.32,
    energy: 0.99,
    acousticness: 0.19
  },
  {
    title: "Police Call",
    genre: "Crime / Drama",
    valence: 0.3,
    energy: 0.56,
    acousticness: 0.57
  },
  {
    title: "Possession",
    genre: "Horror",
    valence: 0.28,
    energy: 0.73,
    acousticness: 0.39
  },
  {
    title: "Powerless King",
    genre: "Film",
    valence: 0.48,
    energy: 0.54,
    acousticness: 0.49
  },
  {
    title: "Predator 2",
    genre: "Science Fiction / Action",
    valence: 0.43,
    energy: 0.99,
    acousticness: 0.06
  },
  {
    title: "Predators",
    genre: "Science Fiction / Action",
    valence: 0.4,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Prescription: Murder",
    genre: "Crime / Mystery",
    valence: 0.27,
    energy: 0.66,
    acousticness: 0.61
  },
  {
    title: "Presence",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.88,
    acousticness: 0.44
  },
  {
    title: "Prey",
    genre: "Thriller / Action",
    valence: 0.44,
    energy: 0.99,
    acousticness: 0.06
  },
  {
    title: "Primate",
    genre: "Horror",
    valence: 0.25,
    energy: 0.76,
    acousticness: 0.36
  },
  {
    title: "Primitive War",
    genre: "Action / Horror",
    valence: 0.24,
    energy: 1,
    acousticness: 0.27
  },
  {
    title: "Prisoner of War",
    genre: "Action / War",
    valence: 0.23,
    energy: 0.94,
    acousticness: 0.42
  },
  {
    title: "Prisoners",
    genre: "Drama / Thriller",
    valence: 0.27,
    energy: 0.69,
    acousticness: 0.53
  },
  {
    title: "Project Hail Mary",
    genre: "Science Fiction / Adventure",
    valence: 0.42,
    energy: 0.93,
    acousticness: 0.21
  },
  {
    title: "Project Silence",
    genre: "Thriller / Action",
    valence: 0.32,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Project Wolf Hunting",
    genre: "Action / Thriller",
    valence: 0.07,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Psycho",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.95,
    acousticness: 0.12
  },
  {
    title: "Public Access",
    genre: "Drama / Thriller",
    valence: 0.3,
    energy: 0.68,
    acousticness: 0.55
  },
  {
    title: "Putin",
    genre: "Thriller / War",
    valence: 0.1,
    energy: 0.88,
    acousticness: 0.38
  },
  {
    title: "Quantum Apocalypse",
    genre: "Science Fiction / TV Movie",
    valence: 0.4,
    energy: 0.61,
    acousticness: 0.53
  },
  {
    title: "Quantum of Solace",
    genre: "Adventure / Action",
    valence: 0.44,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Raat Akeli Hai - The Bansal Murders",
    genre: "Thriller / Mystery",
    valence: 0.13,
    energy: 0.91,
    acousticness: 0.39
  },
  {
    title: "Rain Man",
    genre: "Drama",
    valence: 0.49,
    energy: 0.5,
    acousticness: 0.69
  },
  {
    title: "Ran",
    genre: "Action / Drama",
    valence: 0.45,
    energy: 0.63,
    acousticness: 0.64
  },
  {
    title: "Rape Zombie: Lust of the Dead",
    genre: "Comedy / Horror",
    valence: 0.49,
    energy: 0.77,
    acousticness: 0.4
  },
  {
    title: "Raw Target",
    genre: "Action",
    valence: 0.46,
    energy: 0.66,
    acousticness: 0.37
  },
  {
    title: "RE:BORN",
    genre: "Action / Crime",
    valence: 0.44,
    energy: 0.86,
    acousticness: 0.25
  },
  {
    title: "RED 2",
    genre: "Action / Comedy",
    valence: 0.49,
    energy: 1,
    acousticness: 0.24
  },
  {
    title: "Reflection in a Dead Diamond",
    genre: "Action / Thriller",
    valence: 0.31,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Relentless Justice",
    genre: "Thriller / Action",
    valence: 0.4,
    energy: 0.89,
    acousticness: 0.26
  },
  {
    title: "Reservoir Dogs",
    genre: "Crime / Thriller",
    valence: 0.29,
    energy: 0.83,
    acousticness: 0.31
  },
  {
    title: "Resident Evil: Welcome to Raccoon City",
    genre: "Action / Horror",
    valence: 0.39,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "Resurrection",
    genre: "Drama / Science Fiction",
    valence: 0.47,
    energy: 0.54,
    acousticness: 0.48
  },
  {
    title: "River Beauty",
    genre: "Horror / Mystery",
    valence: 0.11,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "Road House",
    genre: "Action / Thriller",
    valence: 0.48,
    energy: 0.84,
    acousticness: 0.24
  },
  {
    title: "RoboCop 2",
    genre: "Action / Adventure",
    valence: 0.44,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Ronin",
    genre: "Action / Thriller",
    valence: 0.39,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Saayavanam",
    genre: "Thriller / Drama",
    valence: 0.34,
    energy: 0.62,
    acousticness: 0.6
  },
  {
    title: "Safe Haven",
    genre: "Romance / Thriller",
    valence: 0.48,
    energy: 0.66,
    acousticness: 0.54
  },
  {
    title: "Safe House",
    genre: "Action / Thriller",
    valence: 0.41,
    energy: 0.93,
    acousticness: 0.26
  },
  {
    title: "Samurai Fury",
    genre: "Action / Drama",
    valence: 0.49,
    energy: 0.67,
    acousticness: 0.53
  },
  {
    title: "Saving Zoë",
    genre: "Drama / Mystery",
    valence: 0.2,
    energy: 0.7,
    acousticness: 0.51
  },
  {
    title: "Saw",
    genre: "Horror / Mystery",
    valence: 0.05,
    energy: 0.98,
    acousticness: 0.19
  },
  {
    title: "Scared Stiff",
    genre: "Horror",
    valence: 0.29,
    energy: 0.7,
    acousticness: 0.31
  },
  {
    title: "Scarface",
    genre: "Action / Crime",
    valence: 0.49,
    energy: 0.81,
    acousticness: 0.43
  },
  {
    title: "Scarlet Innocence",
    genre: "Thriller / Drama",
    valence: 0.45,
    energy: 0.61,
    acousticness: 0.73
  },
  {
    title: "School on Fire",
    genre: "Drama / Crime",
    valence: 0.28,
    energy: 0.71,
    acousticness: 0.51
  },
  {
    title: "Scream",
    genre: "Horror / Mystery",
    valence: 0.21,
    energy: 0.87,
    acousticness: 0.32
  },
  {
    title: "Scream VI",
    genre: "Horror / Crime",
    valence: 0.06,
    energy: 0.96,
    acousticness: 0.2
  },
  {
    title: "Se7en",
    genre: "Crime / Mystery",
    valence: 0.16,
    energy: 0.86,
    acousticness: 0.24
  },
  {
    title: "Secret Pleasures",
    genre: "Drama / Crime",
    valence: 0.35,
    energy: 0.5,
    acousticness: 0.64
  },
  {
    title: "Secrets of State",
    genre: "Thriller",
    valence: 0.39,
    energy: 0.71,
    acousticness: 0.34
  },
  {
    title: "Self/less",
    genre: "Science Fiction / Action",
    valence: 0.47,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Sem Break",
    genre: "Drama / Thriller",
    valence: 0.35,
    energy: 0.57,
    acousticness: 0.55
  },
  {
    title: "Send Help",
    genre: "Horror / Thriller",
    valence: 0.11,
    energy: 0.85,
    acousticness: 0.28
  },
  {
    title: "Seraphim Falls",
    genre: "Western / Action",
    valence: 0.45,
    energy: 0.7,
    acousticness: 0.63
  },
  {
    title: "Sergeant Madden",
    genre: "Crime / Drama",
    valence: 0.36,
    energy: 0.51,
    acousticness: 0.57
  },
  {
    title: "Seven Days",
    genre: "Drama / Horror",
    valence: 0.18,
    energy: 0.82,
    acousticness: 0.4
  },
  {
    title: "Seven Men from Now",
    genre: "Western",
    valence: 0.48,
    energy: 0.54,
    acousticness: 0.58
  },
  {
    title: "Shark Swarm",
    genre: "Drama / Horror",
    valence: 0.15,
    energy: 1,
    acousticness: 0.24
  },
  {
    title: "She Rides Shotgun",
    genre: "Action / Thriller",
    valence: 0.36,
    energy: 0.98,
    acousticness: 0.15
  },
  {
    title: "Shelby Oaks",
    genre: "Horror / Mystery",
    valence: 0.17,
    energy: 0.88,
    acousticness: 0.28
  },
  {
    title: "Shell Shock",
    genre: "Drama / War",
    valence: 0.37,
    energy: 0.58,
    acousticness: 0.77
  },
  {
    title: "Shogun's Joy of Torture",
    genre: "Horror / Drama",
    valence: 0.23,
    energy: 0.6,
    acousticness: 0.56
  },
  {
    title: "Shooter",
    genre: "Drama / Action",
    valence: 0.43,
    energy: 0.89,
    acousticness: 0.4
  },
  {
    title: "Shutter Island",
    genre: "Drama / Thriller",
    valence: 0.23,
    energy: 0.79,
    acousticness: 0.46
  },
  {
    title: "Sicario",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Sicario: Day of the Soldado",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "Significant Other",
    genre: "Science Fiction / Thriller",
    valence: 0.09,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Silent Night, Deadly Night",
    genre: "Horror / Thriller",
    valence: 0.12,
    energy: 0.89,
    acousticness: 0.21
  },
  {
    title: "Silk Road",
    genre: "Crime / Thriller",
    valence: 0.36,
    energy: 0.86,
    acousticness: 0.33
  },
  {
    title: "Silver Bullet",
    genre: "Horror",
    valence: 0.35,
    energy: 0.75,
    acousticness: 0.37
  },
  {
    title: "Sin City",
    genre: "Crime / Thriller",
    valence: 0.35,
    energy: 0.77,
    acousticness: 0.35
  },
  {
    title: "Sinister",
    genre: "Horror / Thriller",
    valence: 0.07,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Sinister 2",
    genre: "Horror",
    valence: 0.35,
    energy: 0.69,
    acousticness: 0.33
  },
  {
    title: "Sinners",
    genre: "Horror / Action",
    valence: 0.25,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "Sirāt",
    genre: "Drama / Thriller",
    valence: 0.31,
    energy: 0.58,
    acousticness: 0.51
  },
  {
    title: "Sisu",
    genre: "Action / War",
    valence: 0.4,
    energy: 0.8,
    acousticness: 0.44
  },
  {
    title: "Sisu: Road to Revenge",
    genre: "Action / War",
    valence: 0.37,
    energy: 0.85,
    acousticness: 0.41
  },
  {
    title: "Skin Trade",
    genre: "Thriller / Action",
    valence: 0.24,
    energy: 0.92,
    acousticness: 0.33
  },
  {
    title: "Skyfall",
    genre: "Action / Adventure",
    valence: 0.46,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "Slaughterhouse 2",
    genre: "Horror",
    valence: 0.34,
    energy: 0.66,
    acousticness: 0.39
  },
  {
    title: "Sleepers East",
    genre: "Comedy / Crime",
    valence: 0.49,
    energy: 0.75,
    acousticness: 0.39
  },
  {
    title: "Smash Palace",
    genre: "Drama / Thriller",
    valence: 0.4,
    energy: 0.59,
    acousticness: 0.52
  },
  {
    title: "Smile",
    genre: "Horror / Mystery",
    valence: 0.2,
    energy: 0.83,
    acousticness: 0.32
  },
  {
    title: "Smile 2",
    genre: "Horror / Mystery",
    valence: 0.18,
    energy: 0.86,
    acousticness: 0.28
  },
  {
    title: "Sniper: The Last Stand",
    genre: "Action / Thriller",
    valence: 0.46,
    energy: 0.92,
    acousticness: 0.23
  },
  {
    title: "Sniper: The White Raven",
    genre: "War / Action",
    valence: 0.33,
    energy: 0.79,
    acousticness: 0.62
  },
  {
    title: "Sniper: Ultimate Kill",
    genre: "Action",
    valence: 0.49,
    energy: 0.76,
    acousticness: 0.33
  },
  {
    title: "Sorority Murder",
    genre: "TV Movie / Thriller",
    valence: 0.47,
    energy: 0.68,
    acousticness: 0.41
  },
  {
    title: "Southpaw",
    genre: "Action / Drama",
    valence: 0.49,
    energy: 0.68,
    acousticness: 0.56
  },
  {
    title: "Speak No Evil",
    genre: "Horror / Thriller",
    valence: 0.22,
    energy: 0.9,
    acousticness: 0.26
  },
  {
    title: "Special Unit - The First Murder",
    genre: "Crime / Drama",
    valence: 0.39,
    energy: 0.59,
    acousticness: 0.72
  },
  {
    title: "Spectre",
    genre: "Action / Adventure",
    valence: 0.46,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "Speed",
    genre: "Action / Thriller",
    valence: 0.4,
    energy: 0.86,
    acousticness: 0.24
  },
  {
    title: "Speed Kills",
    genre: "Crime / Drama",
    valence: 0.26,
    energy: 0.7,
    acousticness: 0.47
  },
  {
    title: "Spithood",
    genre: "Horror / Thriller",
    valence: 0.11,
    energy: 0.84,
    acousticness: 0.23
  },
  {
    title: "Split",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.92,
    acousticness: 0.23
  },
  {
    title: "Sssssss",
    genre: "Horror / Science Fiction",
    valence: 0.29,
    energy: 0.89,
    acousticness: 0.19
  },
  {
    title: "Stand by Me",
    genre: "Crime / Drama",
    valence: 0.39,
    energy: 0.56,
    acousticness: 0.66
  },
  {
    title: "Stand Your Ground",
    genre: "Action / Thriller",
    valence: 0.3,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Stephen",
    genre: "Thriller",
    valence: 0.43,
    energy: 0.64,
    acousticness: 0.33
  },
  {
    title: "Stillwater",
    genre: "Drama / Crime",
    valence: 0.28,
    energy: 0.76,
    acousticness: 0.5
  },
  {
    title: "Stolen Girl",
    genre: "Thriller / Action",
    valence: 0.47,
    energy: 1,
    acousticness: 0.17
  },
  {
    title: "STRAW",
    genre: "Thriller / Drama",
    valence: 0.3,
    energy: 0.72,
    acousticness: 0.49
  },
  {
    title: "Street Kings",
    genre: "Action / Crime",
    valence: 0.27,
    energy: 0.93,
    acousticness: 0.32
  },
  {
    title: "Striking Rescue",
    genre: "Action / Crime",
    valence: 0.3,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "Subservience",
    genre: "Science Fiction / Horror",
    valence: 0.16,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "Succubus",
    genre: "Horror / Thriller",
    valence: 0.24,
    energy: 0.9,
    acousticness: 0.27
  },
  {
    title: "Sudden Fear",
    genre: "Thriller / Crime",
    valence: 0.28,
    energy: 0.85,
    acousticness: 0.36
  },
  {
    title: "Sugar Mill",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.93,
    acousticness: 0.22
  },
  {
    title: "Surrogates",
    genre: "Science Fiction / Action",
    valence: 0.39,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Taken",
    genre: "Action / Thriller",
    valence: 0.42,
    energy: 0.94,
    acousticness: 0.19
  },
  {
    title: "Taken 2",
    genre: "Action / Crime",
    valence: 0.35,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Taken 3",
    genre: "Thriller / Action",
    valence: 0.38,
    energy: 0.92,
    acousticness: 0.21
  },
  {
    title: "Talk to Me",
    genre: "Horror",
    valence: 0.29,
    energy: 0.69,
    acousticness: 0.37
  },
  {
    title: "Taxi Driver",
    genre: "Crime / Drama",
    valence: 0.38,
    energy: 0.61,
    acousticness: 0.58
  },
  {
    title: "Tee Yai: Born to Be Bad",
    genre: "Crime / Action",
    valence: 0.36,
    energy: 0.79,
    acousticness: 0.5
  },
  {
    title: "Tenet",
    genre: "Action / Thriller",
    valence: 0.45,
    energy: 1,
    acousticness: 0.05
  },
  {
    title: "Term Life",
    genre: "Thriller / Drama",
    valence: 0.29,
    energy: 0.94,
    acousticness: 0.34
  },
  {
    title: "Terminator 2: Judgment Day",
    genre: "Action / Thriller",
    valence: 0.45,
    energy: 1,
    acousticness: 0.08
  },
  {
    title: "Terminator 3: Rise of the Machines",
    genre: "Action / Thriller",
    valence: 0.45,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Terminator Salvation",
    genre: "Action / Science Fiction",
    valence: 0.45,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "Terrifier",
    genre: "Horror / Thriller",
    valence: 0.19,
    energy: 0.85,
    acousticness: 0.19
  },
  {
    title: "Terrifier 2",
    genre: "Horror / Thriller",
    valence: 0.13,
    energy: 0.83,
    acousticness: 0.24
  },
  {
    title: "Terrifier 3",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.89,
    acousticness: 0.26
  },
  {
    title: "Thanksgiving",
    genre: "Horror / Mystery",
    valence: 0.18,
    energy: 0.88,
    acousticness: 0.32
  },
  {
    title: "The 355",
    genre: "Action / Adventure",
    valence: 0.46,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "The Accountant",
    genre: "Crime / Thriller",
    valence: 0.31,
    energy: 0.71,
    acousticness: 0.53
  },
  {
    title: "The Accountant²",
    genre: "Mystery / Crime",
    valence: 0.13,
    energy: 0.88,
    acousticness: 0.24
  },
  {
    title: "The Amateur",
    genre: "Thriller / Action",
    valence: 0.48,
    energy: 0.93,
    acousticness: 0.2
  },
  {
    title: "The American",
    genre: "Crime / Drama",
    valence: 0.27,
    energy: 0.79,
    acousticness: 0.5
  },
  {
    title: "The Astronaut",
    genre: "Science Fiction / Horror",
    valence: 0.23,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Autopsy of Jane Doe",
    genre: "Horror / Mystery",
    valence: 0.17,
    energy: 0.81,
    acousticness: 0.32
  },
  {
    title: "The Batman",
    genre: "Noir Action",
    valence: 0.15,
    energy: 0.75,
    acousticness: 0.2
  },
  {
    title: "The Beast Within",
    genre: "Horror / Drama",
    valence: 0.19,
    energy: 0.84,
    acousticness: 0.4
  },
  {
    title: "The Beekeeper",
    genre: "Action / Crime",
    valence: 0.29,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "The Black Phone",
    genre: "Horror / Thriller",
    valence: 0.22,
    energy: 0.95,
    acousticness: 0.21
  },
  {
    title: "The Bleeding",
    genre: "Action / Horror",
    valence: 0.24,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Book",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.86,
    acousticness: 0.25
  },
  {
    title: "The Bourne Identity",
    genre: "Action / Drama",
    valence: 0.24,
    energy: 0.96,
    acousticness: 0.36
  },
  {
    title: "The Bribe",
    genre: "Crime / Drama",
    valence: 0.25,
    energy: 0.79,
    acousticness: 0.47
  },
  {
    title: "The Bricklayer",
    genre: "Action / Thriller",
    valence: 0.46,
    energy: 0.87,
    acousticness: 0.2
  },
  {
    title: "The Burglars",
    genre: "Action / Crime",
    valence: 0.34,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "The Carpenter's Son",
    genre: "Horror",
    valence: 0.28,
    energy: 0.74,
    acousticness: 0.39
  },
  {
    title: "The Collector",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.93,
    acousticness: 0.24
  },
  {
    title: "The Conjuring",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.9,
    acousticness: 0.23
  },
  {
    title: "The Conjuring 2",
    genre: "Horror",
    valence: 0.35,
    energy: 0.68,
    acousticness: 0.31
  },
  {
    title: "The Conjuring: Last Rites",
    genre: "Horror",
    valence: 0.32,
    energy: 0.7,
    acousticness: 0.38
  },
  {
    title: "The Conjuring: The Devil Made Me Do It",
    genre: "Horror / Mystery",
    valence: 0.12,
    energy: 0.99,
    acousticness: 0.19
  },
  {
    title: "The Connection",
    genre: "Thriller / Crime",
    valence: 0.33,
    energy: 1,
    acousticness: 0.2
  },
  {
    title: "The Contract",
    genre: "Drama / Action",
    valence: 0.3,
    energy: 0.98,
    acousticness: 0.34
  },
  {
    title: "The Crazies",
    genre: "Mystery / Horror",
    valence: 0.15,
    energy: 1,
    acousticness: 0.17
  },
  {
    title: "The Crossing",
    genre: "Drama / Thriller",
    valence: 0.34,
    energy: 0.64,
    acousticness: 0.58
  },
  {
    title: "The Crow",
    genre: "Action / Fantasy",
    valence: 0.4,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "The Crucifixion",
    genre: "Horror / Mystery",
    valence: 0.07,
    energy: 0.97,
    acousticness: 0.18
  },
  {
    title: "The Cursed",
    genre: "Horror / Drama",
    valence: 0.09,
    energy: 0.79,
    acousticness: 0.42
  },
  {
    title: "The Cursed: Insatiable Desires",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.89,
    acousticness: 0.18
  },
  {
    title: "The Cut",
    genre: "Thriller / Drama",
    valence: 0.4,
    energy: 0.56,
    acousticness: 0.59
  },
  {
    title: "The Dark",
    genre: "Horror / Thriller",
    valence: 0.08,
    energy: 0.97,
    acousticness: 0.17
  },
  {
    title: "The Dark Knight",
    genre: "Drama / Action",
    valence: 0.3,
    energy: 0.91,
    acousticness: 0.39
  },
  {
    title: "The Dark Knight Rises",
    genre: "Action / Crime",
    valence: 0.34,
    energy: 0.92,
    acousticness: 0.32
  },
  {
    title: "The Departed",
    genre: "Drama / Thriller",
    valence: 0.24,
    energy: 0.76,
    acousticness: 0.46
  },
  {
    title: "The Devil's Advocate",
    genre: "Drama / Mystery",
    valence: 0.1,
    energy: 0.81,
    acousticness: 0.45
  },
  {
    title: "The Devil’s Trap",
    genre: "Horror / Thriller",
    valence: 0.23,
    energy: 0.85,
    acousticness: 0.27
  },
  {
    title: "The Dig",
    genre: "Thriller / Crime",
    valence: 0.35,
    energy: 0.78,
    acousticness: 0.31
  },
  {
    title: "The Dogs",
    genre: "Horror / Thriller",
    valence: 0.01,
    energy: 0.98,
    acousticness: 0.16
  },
  {
    title: "The Elixir",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.84,
    acousticness: 0.26
  },
  {
    title: "The Equalizer",
    genre: "Thriller / Action",
    valence: 0.33,
    energy: 1,
    acousticness: 0.15
  },
  {
    title: "The Equalizer 3",
    genre: "Action / Thriller",
    valence: 0.31,
    energy: 1,
    acousticness: 0.18
  },
  {
    title: "The Evil Dead",
    genre: "Horror",
    valence: 0.33,
    energy: 0.68,
    acousticness: 0.31
  },
  {
    title: "The Exorcism of God",
    genre: "Horror / Crime",
    valence: 0.27,
    energy: 0.92,
    acousticness: 0.37
  },
  {
    title: "The Exorcist",
    genre: "Horror",
    valence: 0.3,
    energy: 0.73,
    acousticness: 0.38
  },
  {
    title: "The Exorcist: Believer",
    genre: "Horror / Thriller",
    valence: 0.18,
    energy: 0.83,
    acousticness: 0.19
  },
  {
    title: "The Expendables",
    genre: "Thriller / Adventure",
    valence: 0.48,
    energy: 0.99,
    acousticness: 0.18
  },
  {
    title: "The Fear",
    genre: "Horror",
    valence: 0.33,
    energy: 0.7,
    acousticness: 0.39
  },
  {
    title: "The Forsaken",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.84,
    acousticness: 0.27
  },
  {
    title: "The Gauntlet",
    genre: "Drama / Action",
    valence: 0.33,
    energy: 0.91,
    acousticness: 0.33
  },
  {
    title: "The Gentleman",
    genre: "Action / Crime",
    valence: 0.36,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "The Girl with the Dragon Tattoo",
    genre: "Drama / Thriller",
    valence: 0.19,
    energy: 0.84,
    acousticness: 0.44
  },
  {
    title: "The Godfather",
    genre: "Drama / Crime",
    valence: 0.45,
    energy: 0.61,
    acousticness: 0.62
  },
  {
    title: "The Godfather Part II",
    genre: "Drama / Crime",
    valence: 0.4,
    energy: 0.59,
    acousticness: 0.6
  },
  {
    title: "The Godfather Part III",
    genre: "Crime / Drama",
    valence: 0.31,
    energy: 0.75,
    acousticness: 0.51
  },
  {
    title: "The Good, the Bad and the Ugly",
    genre: "Western",
    valence: 0.45,
    energy: 0.52,
    acousticness: 0.63
  },
  {
    title: "The Green Mile",
    genre: "Fantasy / Drama",
    valence: 0.46,
    energy: 0.6,
    acousticness: 0.57
  },
  {
    title: "The Guardian",
    genre: "Action / Drama",
    valence: 0.46,
    energy: 0.69,
    acousticness: 0.56
  },
  {
    title: "The Hand That Rocks the Cradle",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.89,
    acousticness: 0.21
  },
  {
    title: "The Hateful Eight",
    genre: "Drama / Mystery",
    valence: 0.39,
    energy: 0.56,
    acousticness: 0.78
  },
  {
    title: "The Haunting",
    genre: "Horror / Thriller",
    valence: 0.16,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "The Home",
    genre: "Mystery / Horror",
    valence: 0.01,
    energy: 1,
    acousticness: 0.17
  },
  {
    title: "The Horde",
    genre: "Action / Horror",
    valence: 0.24,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "The Housemaid",
    genre: "Mystery / Thriller",
    valence: 0.3,
    energy: 0.77,
    acousticness: 0.33
  },
  {
    title: "The Human Centipede (First Sequence)",
    genre: "Horror",
    valence: 0.25,
    energy: 0.71,
    acousticness: 0.38
  },
  {
    title: "The Human Centipede 2 (Full Sequence)",
    genre: "Drama / Horror",
    valence: 0.16,
    energy: 0.8,
    acousticness: 0.49
  },
  {
    title: "The Human Centipede 3 (Final Sequence)",
    genre: "Horror",
    valence: 0.29,
    energy: 0.66,
    acousticness: 0.37
  },
  {
    title: "The Hunted",
    genre: "Drama / Action",
    valence: 0.33,
    energy: 0.96,
    acousticness: 0.37
  },
  {
    title: "The Imitation Game",
    genre: "History / Drama",
    valence: 0.21,
    energy: 0.68,
    acousticness: 0.75
  },
  {
    title: "The Jester 2",
    genre: "Horror / Thriller",
    valence: 0.12,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "The Killer",
    genre: "Crime / Thriller",
    valence: 0.35,
    energy: 0.76,
    acousticness: 0.28
  },
  {
    title: "The Killer of Swordsmen",
    genre: "Action",
    valence: 0.49,
    energy: 0.76,
    acousticness: 0.4
  },
  {
    title: "The King's Man",
    genre: "Action / Adventure",
    valence: 0.48,
    energy: 1,
    acousticness: 0.12
  },
  {
    title: "The Last Samurai",
    genre: "Drama / Action",
    valence: 0.41,
    energy: 0.71,
    acousticness: 0.56
  },
  {
    title: "The Life of David Gale",
    genre: "Drama / Thriller",
    valence: 0.24,
    energy: 0.79,
    acousticness: 0.52
  },
  {
    title: "The Limit",
    genre: "Action / Thriller",
    valence: 0.32,
    energy: 0.99,
    acousticness: 0.19
  },
  {
    title: "The Loft",
    genre: "Thriller",
    valence: 0.45,
    energy: 0.72,
    acousticness: 0.34
  },
  {
    title: "The Long Walk",
    genre: "Horror / Science Fiction",
    valence: 0.2,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "The Lost Bus",
    genre: "Drama / Mystery",
    valence: 0.2,
    energy: 0.74,
    acousticness: 0.48
  },
  {
    title: "The Machinist",
    genre: "Thriller / Drama",
    valence: 0.37,
    energy: 0.68,
    acousticness: 0.57
  },
  {
    title: "The Mannequin",
    genre: "Horror / Thriller",
    valence: 0,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "The Mastermind",
    genre: "Drama / Crime",
    valence: 0.34,
    energy: 0.59,
    acousticness: 0.6
  },
  {
    title: "The Maze Runner",
    genre: "Action / Mystery",
    valence: 0.35,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Menu",
    genre: "Comedy / Horror",
    valence: 0.39,
    energy: 0.91,
    acousticness: 0.27
  },
  {
    title: "The Messengers",
    genre: "Mystery / Thriller",
    valence: 0.05,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "The Ministers",
    genre: "Crime / Thriller",
    valence: 0.23,
    energy: 0.8,
    acousticness: 0.35
  },
  {
    title: "The Mist",
    genre: "Horror / Science Fiction",
    valence: 0.19,
    energy: 1,
    acousticness: 0.1
  },
  {
    title: "The Monkey",
    genre: "Horror / Comedy",
    valence: 0.49,
    energy: 0.75,
    acousticness: 0.34
  },
  {
    title: "The Monuments Men",
    genre: "War / Drama",
    valence: 0.36,
    energy: 0.72,
    acousticness: 0.76
  },
  {
    title: "The Negotiator",
    genre: "Action / Crime",
    valence: 0.31,
    energy: 0.91,
    acousticness: 0.37
  },
  {
    title: "The Nun",
    genre: "Horror",
    valence: 0.27,
    energy: 0.68,
    acousticness: 0.38
  },
  {
    title: "The Nun II",
    genre: "Horror",
    valence: 0.26,
    energy: 0.72,
    acousticness: 0.36
  },
  {
    title: "The Old Woman with the Knife",
    genre: "Action / Mystery",
    valence: 0.34,
    energy: 0.73,
    acousticness: 0.51
  },
  {
    title: "The One",
    genre: "Action / Science Fiction",
    valence: 0.45,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "The Orphanage",
    genre: "Horror / Drama",
    valence: 0.17,
    energy: 0.78,
    acousticness: 0.37
  },
  {
    title: "The Other",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.87,
    acousticness: 0.24
  },
  {
    title: "The Outlaws",
    genre: "Action / Crime",
    valence: 0.34,
    energy: 1,
    acousticness: 0.16
  },
  {
    title: "The Painter",
    genre: "Action / Thriller",
    valence: 0.44,
    energy: 0.89,
    acousticness: 0.2
  },
  {
    title: "The Patriot",
    genre: "Drama / History",
    valence: 0.37,
    energy: 0.74,
    acousticness: 0.76
  },
  {
    title: "The Pianist",
    genre: "Drama / War",
    valence: 0.4,
    energy: 0.55,
    acousticness: 0.69
  },
  {
    title: "The Pit and the Pendulum",
    genre: "Horror / Mystery",
    valence: 0.19,
    energy: 0.76,
    acousticness: 0.46
  },
  {
    title: "The Player",
    genre: "Mystery / Drama",
    valence: 0.46,
    energy: 0.85,
    acousticness: 0.51
  },
  {
    title: "The Plumber",
    genre: "TV Movie / Thriller",
    valence: 0.37,
    energy: 0.92,
    acousticness: 0.31
  },
  {
    title: "The Predator",
    genre: "Science Fiction / Action",
    valence: 0.44,
    energy: 1,
    acousticness: 0.02
  },
  {
    title: "The Prestige",
    genre: "Drama / Mystery",
    valence: 0.45,
    energy: 0.72,
    acousticness: 0.4
  },
  {
    title: "The Prince",
    genre: "Thriller / Action",
    valence: 0.45,
    energy: 0.83,
    acousticness: 0.22
  },
  {
    title: "The Proposition",
    genre: "Action / Adventure",
    valence: 0.37,
    energy: 1,
    acousticness: 0.37
  },
  {
    title: "The Prosecutor",
    genre: "Action / Drama",
    valence: 0.27,
    energy: 0.95,
    acousticness: 0.34
  },
  {
    title: "The Reckoning",
    genre: "Crime / Drama",
    valence: 0.22,
    energy: 0.71,
    acousticness: 0.58
  },
  {
    title: "The Recruit",
    genre: "Action / Thriller",
    valence: 0.47,
    energy: 0.9,
    acousticness: 0.21
  },
  {
    title: "The Resort",
    genre: "Horror",
    valence: 0.25,
    energy: 0.71,
    acousticness: 0.36
  },
  {
    title: "The Ritual",
    genre: "Horror / Drama",
    valence: 0.16,
    energy: 0.79,
    acousticness: 0.45
  },
  {
    title: "The Roundup",
    genre: "Action / Crime",
    valence: 0.41,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Sadness",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.9,
    acousticness: 0.21
  },
  {
    title: "The Secret Agent",
    genre: "Crime / Drama",
    valence: 0.17,
    energy: 0.85,
    acousticness: 0.47
  },
  {
    title: "The Secrets We Bury",
    genre: "Documentary / Mystery",
    valence: 0.31,
    energy: 0.58,
    acousticness: 0.64
  },
  {
    title: "The Sentinel",
    genre: "Horror / Mystery",
    valence: 0.23,
    energy: 0.97,
    acousticness: 0.24
  },
  {
    title: "The Shadow's Edge",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama / Crime",
    valence: 0.39,
    energy: 0.51,
    acousticness: 0.57
  },
  {
    title: "The Shining",
    genre: "Horror / Thriller",
    valence: 0.17,
    energy: 0.94,
    acousticness: 0.26
  },
  {
    title: "The Sixth Sense",
    genre: "Mystery / Thriller",
    valence: 0.2,
    energy: 0.76,
    acousticness: 0.52
  },
  {
    title: "The Strangers",
    genre: "Horror / Thriller",
    valence: 0.14,
    energy: 0.86,
    acousticness: 0.25
  },
  {
    title: "The Strangers: Chapter 2",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.89,
    acousticness: 0.25
  },
  {
    title: "The Substance",
    genre: "Horror / Science Fiction",
    valence: 0.17,
    energy: 1,
    acousticness: 0.01
  },
  {
    title: "The Surrender",
    genre: "Drama / Horror",
    valence: 0.2,
    energy: 0.6,
    acousticness: 0.58
  },
  {
    title: "The Suspect",
    genre: "Crime / Drama",
    valence: 0.25,
    energy: 0.73,
    acousticness: 0.51
  },
  {
    title: "The Terminator",
    genre: "Action / Thriller",
    valence: 0.4,
    energy: 1,
    acousticness: 0.04
  },
  {
    title: "The Thing",
    genre: "Horror / Mystery",
    valence: 0.23,
    energy: 0.97,
    acousticness: 0.08
  },
  {
    title: "The Tiger",
    genre: "Action / War",
    valence: 0.34,
    energy: 0.68,
    acousticness: 0.63
  },
  {
    title: "The Track",
    genre: "Drama / Thriller",
    valence: 0.33,
    energy: 0.65,
    acousticness: 0.54
  },
  {
    title: "The Tracker",
    genre: "Action",
    valence: 0.48,
    energy: 0.67,
    acousticness: 0.32
  },
  {
    title: "The Unhealer",
    genre: "Fantasy / Thriller",
    valence: 0.23,
    energy: 0.98,
    acousticness: 0.14
  },
  {
    title: "The Unholy Trinity",
    genre: "Western / Adventure",
    valence: 0.47,
    energy: 0.84,
    acousticness: 0.46
  },
  {
    title: "The Unknown Woman",
    genre: "Thriller / Drama",
    valence: 0.21,
    energy: 0.75,
    acousticness: 0.46
  },
  {
    title: "The Untold Story",
    genre: "Comedy / Crime",
    valence: 0.37,
    energy: 0.88,
    acousticness: 0.33
  },
  {
    title: "The Untouchables",
    genre: "Crime / History",
    valence: 0.26,
    energy: 0.8,
    acousticness: 0.51
  },
  {
    title: "The Usual Suspects",
    genre: "Drama / Crime",
    valence: 0.24,
    energy: 0.77,
    acousticness: 0.53
  },
  {
    title: "The Vanished",
    genre: "Thriller / Horror",
    valence: 0.13,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Vault",
    genre: "Drama / Action",
    valence: 0.45,
    energy: 0.88,
    acousticness: 0.39
  },
  {
    title: "The Veteran",
    genre: "Action / Crime",
    valence: 0.31,
    energy: 1,
    acousticness: 0.13
  },
  {
    title: "The Voyeurs",
    genre: "Thriller",
    valence: 0.41,
    energy: 0.7,
    acousticness: 0.4
  },
  {
    title: "The Ward",
    genre: "Horror / Mystery",
    valence: 0.04,
    energy: 0.96,
    acousticness: 0.15
  },
  {
    title: "The Witch: Part 1. The Subversion",
    genre: "Action / Mystery",
    valence: 0.49,
    energy: 0.98,
    acousticness: 0.14
  },
  {
    title: "The Witch: Part 2. The Other One",
    genre: "Action / Mystery",
    valence: 0.28,
    energy: 1,
    acousticness: 0
  },
  {
    title: "The Wonder",
    genre: "Drama / Mystery",
    valence: 0.31,
    energy: 0.61,
    acousticness: 0.62
  },
  {
    title: "Third Star",
    genre: "Drama",
    valence: 0.44,
    energy: 0.5,
    acousticness: 0.72
  },
  {
    title: "This Island",
    genre: "Action / Drama",
    valence: 0.38,
    energy: 0.79,
    acousticness: 0.38
  },
  {
    title: "Three",
    genre: "Adventure / Drama",
    valence: 0.41,
    energy: 0.76,
    acousticness: 0.5
  },
  {
    title: "Thunderball",
    genre: "Adventure / Action",
    valence: 0.49,
    energy: 1,
    acousticness: 0.14
  },
  {
    title: "Tin Soldier",
    genre: "Action / Thriller",
    valence: 0.38,
    energy: 0.9,
    acousticness: 0.25
  },
  {
    title: "Together",
    genre: "Horror / Romance",
    valence: 0.4,
    energy: 0.6,
    acousticness: 0.54
  },
  {
    title: "Tornado",
    genre: "Drama / Action",
    valence: 0.43,
    energy: 0.74,
    acousticness: 0.69
  },
  {
    title: "Trail of Vengeance",
    genre: "Western",
    valence: 0.45,
    energy: 0.54,
    acousticness: 0.59
  },
  {
    title: "Train to Busan",
    genre: "Horror",
    valence: 0.15,
    energy: 0.95,
    acousticness: 0.1
  },
  {
    title: "Trap",
    genre: "Crime / Thriller",
    valence: 0.25,
    energy: 0.75,
    acousticness: 0.27
  },
  {
    title: "Trigger Point",
    genre: "Action / Thriller",
    valence: 0.26,
    energy: 0.98,
    acousticness: 0.18
  },
  {
    title: "Troll 2",
    genre: "Action / Fantasy",
    valence: 0.48,
    energy: 0.94,
    acousticness: 0.2
  },
  {
    title: "Troy",
    genre: "War / Action",
    valence: 0.38,
    energy: 0.79,
    acousticness: 0.55
  },
  {
    title: "Truth & Treason",
    genre: "History / Drama",
    valence: 0.32,
    energy: 0.6,
    acousticness: 0.75
  },
  {
    title: "Twelve Monkeys",
    genre: "Science Fiction / Thriller",
    valence: 0.28,
    energy: 0.9,
    acousticness: 0.12
  },
  {
    title: "Twilight of the Warriors: Walled In",
    genre: "Action / Crime",
    valence: 0.38,
    energy: 1,
    acousticness: 0.19
  },
  {
    title: "Twisters",
    genre: "Action / Thriller",
    valence: 0.47,
    energy: 0.91,
    acousticness: 0.24
  },
  {
    title: "Under Fire",
    genre: "Drama / War",
    valence: 0.34,
    energy: 0.5,
    acousticness: 0.74
  },
  {
    title: "Under Suspicion",
    genre: "Thriller / Crime",
    valence: 0.26,
    energy: 0.79,
    acousticness: 0.49
  },
  {
    title: "Underground Breath",
    genre: "Documentary / Horror",
    valence: 0.29,
    energy: 0.58,
    acousticness: 0.58
  },
  {
    title: "Until Dawn",
    genre: "Horror / Mystery",
    valence: 0.19,
    energy: 0.78,
    acousticness: 0.31
  },
  {
    title: "Valiant One",
    genre: "War / Thriller",
    valence: 0.28,
    energy: 0.95,
    acousticness: 0.32
  },
  {
    title: "Van Helsing",
    genre: "Horror / Adventure",
    valence: 0.4,
    energy: 1,
    acousticness: 0.07
  },
  {
    title: "Velvet Dreams",
    genre: "Drama",
    valence: 0.49,
    energy: 0.5,
    acousticness: 0.69
  },
  {
    title: "Virgin Forest",
    genre: "Thriller / Crime",
    valence: 0.31,
    energy: 0.76,
    acousticness: 0.52
  },
  {
    title: "Virgin Sacrifices",
    genre: "Horror",
    valence: 0.24,
    energy: 0.76,
    acousticness: 0.37
  },
  {
    title: "Wake",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.87,
    acousticness: 0.21
  },
  {
    title: "Wanted",
    genre: "Action / Thriller",
    valence: 0.33,
    energy: 0.96,
    acousticness: 0.16
  },
  {
    title: "War for the Planet of the Apes",
    genre: "Drama / Science Fiction",
    valence: 0.42,
    energy: 0.66,
    acousticness: 0.54
  },
  {
    title: "War of the Worlds",
    genre: "Science Fiction / Thriller",
    valence: 0.44,
    energy: 0.78,
    acousticness: 0.17
  },
  {
    title: "Warfare",
    genre: "War / Action",
    valence: 0.34,
    energy: 0.77,
    acousticness: 0.38
  },
  {
    title: "Warrior",
    genre: "Drama / Action",
    valence: 0.48,
    energy: 0.63,
    acousticness: 0.55
  },
  {
    title: "Weak Spot",
    genre: "Thriller",
    valence: 0.41,
    energy: 0.71,
    acousticness: 0.39
  },
  {
    title: "Weapons",
    genre: "Horror / Mystery",
    valence: 0.14,
    energy: 0.82,
    acousticness: 0.25
  },
  {
    title: "Werewolves",
    genre: "Action / Horror",
    valence: 0.17,
    energy: 1,
    acousticness: 0.11
  },
  {
    title: "Whiplash",
    genre: "Drama Thriller",
    valence: 0.2,
    energy: 0.95,
    acousticness: 0.8
  },
  {
    title: "Who's Afraid of Virginia Woolf?",
    genre: "Drama",
    valence: 0.46,
    energy: 0.5,
    acousticness: 0.64
  },
  {
    title: "Wicked Minds",
    genre: "Mystery / Drama",
    valence: 0.45,
    energy: 0.62,
    acousticness: 0.73
  },
  {
    title: "Wild Things",
    genre: "Mystery / Thriller",
    valence: 0.19,
    energy: 0.76,
    acousticness: 0.52
  },
  {
    title: "Wildcat",
    genre: "Action / Thriller",
    valence: 0.37,
    energy: 0.98,
    acousticness: 0.18
  },
  {
    title: "World War Z",
    genre: "Action / Horror",
    valence: 0.3,
    energy: 1,
    acousticness: 0
  },
  {
    title: "Wrath of Man",
    genre: "Thriller / Crime",
    valence: 0.25,
    energy: 0.77,
    acousticness: 0.55
  },
  {
    title: "Wrong Turn",
    genre: "Horror / Thriller",
    valence: 0.18,
    energy: 0.86,
    acousticness: 0.27
  },
  {
    title: "Wrong Turn 2: Dead End",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.88,
    acousticness: 0.19
  },
  {
    title: "Wrong Turn 3: Left for Dead",
    genre: "Horror / Thriller",
    valence: 0.13,
    energy: 0.9,
    acousticness: 0.26
  },
  {
    title: "Wrong Turn 4: Bloody Beginnings",
    genre: "Horror / Thriller",
    valence: 0.15,
    energy: 0.85,
    acousticness: 0.19
  },
  {
    title: "Wrong Turn 5: Bloodlines",
    genre: "Horror / Thriller",
    valence: 0.21,
    energy: 0.86,
    acousticness: 0.27
  },
  {
    title: "X",
    genre: "Horror / Thriller",
    valence: 0.2,
    energy: 0.83,
    acousticness: 0.28
  },
  {
    title: "xXx",
    genre: "Action / Adventure",
    valence: 0.34,
    energy: 1,
    acousticness: 0.21
  },
  {
    title: "xXx: State of the Union",
    genre: "Action / Adventure",
    valence: 0.44,
    energy: 1,
    acousticness: 0.09
  },
  {
    title: "Zebra Lounge",
    genre: "Thriller",
    valence: 0.43,
    energy: 0.73,
    acousticness: 0.34
  },
  {
    title: "Zodiac",
    genre: "Crime / Mystery",
    valence: 0.15,
    energy: 0.86,
    acousticness: 0.21
  },
  {
    title: "Zombieland",
    genre: "Comedy / Horror",
    valence: 0.45,
    energy: 0.79,
    acousticness: 0.35
  },

  // --- SAD & CHILL ---
  {
    title: "12 Angry Men",
    genre: "Drama",
    valence: 0.49,
    energy: 0.48,
    acousticness: 0.67
  },
  {
    title: "Acting Out",
    genre: "Documentary / Drama",
    valence: 0.48,
    energy: 0.38,
    acousticness: 0.85
  },
  {
    title: "After the Hunt",
    genre: "Drama",
    valence: 0.47,
    energy: 0.43,
    acousticness: 0.64
  },
  {
    title: "Akin Ang Gabi",
    genre: "Drama",
    valence: 0.43,
    energy: 0.49,
    acousticness: 0.7
  },
  {
    title: "All In",
    genre: "Drama",
    valence: 0.47,
    energy: 0.43,
    acousticness: 0.69
  },
  {
    title: "All Man",
    genre: "Western",
    valence: 0.41,
    energy: 0.49,
    acousticness: 0.6
  },
  {
    title: "All Things Fair",
    genre: "Drama / Romance",
    valence: 0.41,
    energy: 0.44,
    acousticness: 0.88
  },
  {
    title: "American Beauty",
    genre: "Drama",
    valence: 0.49,
    energy: 0.43,
    acousticness: 0.68
  },
  {
    title: "American Exit",
    genre: "Drama",
    valence: 0.42,
    energy: 0.42,
    acousticness: 0.71
  },
  {
    title: "An Affair",
    genre: "Drama",
    valence: 0.42,
    energy: 0.46,
    acousticness: 0.68
  },
  {
    title: "Anand Math",
    genre: "Drama / History",
    valence: 0.46,
    energy: 0.41,
    acousticness: 0.83
  },
  {
    title: "Another Woman",
    genre: "Drama",
    valence: 0.45,
    energy: 0.39,
    acousticness: 0.66
  },
  {
    title: "Better Off",
    genre: "Film",
    valence: 0.4,
    energy: 0.45,
    acousticness: 0.49
  },
  {
    title: "Blue Film",
    genre: "Drama",
    valence: 0.4,
    energy: 0.47,
    acousticness: 0.66
  },
  {
    title: "Blue Moon",
    genre: "Drama",
    valence: 0.48,
    energy: 0.43,
    acousticness: 0.65
  },
  {
    title: "Call Boy",
    genre: "Drama",
    valence: 0.43,
    energy: 0.39,
    acousticness: 0.65
  },
  {
    title: "Dance First",
    genre: "History / Drama",
    valence: 0.45,
    energy: 0.39,
    acousticness: 0.88
  },
  {
    title: "Dark Mansions",
    genre: "Drama / TV Movie",
    valence: 0.44,
    energy: 0.42,
    acousticness: 0.75
  },
  {
    title: "Dead Poets Society",
    genre: "Drama",
    valence: 0.45,
    energy: 0.49,
    acousticness: 0.71
  },
  {
    title: "Ekis",
    genre: "Drama",
    valence: 0.49,
    energy: 0.49,
    acousticness: 0.72
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    genre: "Sci-Fi Romance",
    valence: 0.2,
    energy: 0.3,
    acousticness: 0.5
  },
  {
    title: "Faces",
    genre: "Drama",
    valence: 0.49,
    energy: 0.45,
    acousticness: 0.72
  },
  {
    title: "Fidelity",
    genre: "Drama",
    valence: 0.43,
    energy: 0.42,
    acousticness: 0.66
  },
  {
    title: "Frieda's Case",
    genre: "Drama",
    valence: 0.48,
    energy: 0.47,
    acousticness: 0.71
  },
  {
    title: "GOKU-OH 2",
    genre: "Film",
    valence: 0.48,
    energy: 0.49,
    acousticness: 0.46
  },
  {
    title: "Good Will Hunting",
    genre: "Drama",
    valence: 0.49,
    energy: 0.49,
    acousticness: 0.7
  },
  {
    title: "Grand Jete",
    genre: "Drama",
    valence: 0.42,
    energy: 0.48,
    acousticness: 0.68
  },
  {
    title: "Hacksaw Ridge",
    genre: "Drama / History",
    valence: 0.36,
    energy: 0.46,
    acousticness: 0.89
  },
  {
    title: "Her",
    genre: "Sci-Fi Drama",
    valence: 0.3,
    energy: 0.2,
    acousticness: 0.8
  },
  {
    title: "House of Gucci",
    genre: "Drama / Crime",
    valence: 0.34,
    energy: 0.47,
    acousticness: 0.81
  },
  {
    title: "Huwad",
    genre: "Drama",
    valence: 0.42,
    energy: 0.44,
    acousticness: 0.68
  },
  {
    title: "Import/Export",
    genre: "Drama",
    valence: 0.48,
    energy: 0.44,
    acousticness: 0.66
  },
  {
    title: "Ken Park",
    genre: "Drama",
    valence: 0.48,
    energy: 0.4,
    acousticness: 0.66
  },
  {
    title: "Kiskisan",
    genre: "Drama",
    valence: 0.43,
    energy: 0.47,
    acousticness: 0.68
  },
  {
    title: "Kulong",
    genre: "Drama",
    valence: 0.47,
    energy: 0.43,
    acousticness: 0.67
  },
  {
    title: "La provinciale",
    genre: "Drama",
    valence: 0.45,
    energy: 0.44,
    acousticness: 0.71
  },
  {
    title: "Last Summer",
    genre: "Drama",
    valence: 0.49,
    energy: 0.45,
    acousticness: 0.73
  },
  {
    title: "Left-Handed Girl",
    genre: "Drama",
    valence: 0.46,
    energy: 0.47,
    acousticness: 0.69
  },
  {
    title: "Les Misérables",
    genre: "History / Drama",
    valence: 0.49,
    energy: 0.35,
    acousticness: 0.85
  },
  {
    title: "Little Buddha",
    genre: "Drama / History",
    valence: 0.48,
    energy: 0.39,
    acousticness: 0.85
  },
  {
    title: "Love Strange Love",
    genre: "Drama / History",
    valence: 0.46,
    energy: 0.47,
    acousticness: 0.79
  },
  {
    title: "Making 'Nemo'",
    genre: "Documentary",
    valence: 0.45,
    energy: 0.42,
    acousticness: 0.73
  },
  {
    title: "Malena",
    genre: "Drama",
    valence: 0.43,
    energy: 0.47,
    acousticness: 0.72
  },
  {
    title: "Mamma Roma",
    genre: "Drama",
    valence: 0.46,
    energy: 0.39,
    acousticness: 0.66
  },
  {
    title: "Marivillin Gopurangal",
    genre: "Drama",
    valence: 0.38,
    energy: 0.39,
    acousticness: 0.72
  },
  {
    title: "Melissa P.",
    genre: "Drama",
    valence: 0.41,
    energy: 0.45,
    acousticness: 0.64
  },
  {
    title: "Mia",
    genre: "Drama / Documentary",
    valence: 0.46,
    energy: 0.34,
    acousticness: 0.91
  },
  {
    title: "Miss Lady Professor",
    genre: "Drama",
    valence: 0.43,
    energy: 0.39,
    acousticness: 0.69
  },
  {
    title: "Mom's Friend",
    genre: "Drama",
    valence: 0.44,
    energy: 0.38,
    acousticness: 0.71
  },
  {
    title: "Morning Moon Is Cruel",
    genre: "Drama",
    valence: 0.45,
    energy: 0.42,
    acousticness: 0.7
  },
  {
    title: "Mother's Job",
    genre: "Drama",
    valence: 0.44,
    energy: 0.47,
    acousticness: 0.65
  },
  {
    title: "Nuremberg",
    genre: "History / Drama",
    valence: 0.41,
    energy: 0.43,
    acousticness: 0.8
  },
  {
    title: "Obsessed",
    genre: "Drama",
    valence: 0.47,
    energy: 0.4,
    acousticness: 0.64
  },
  {
    title: "On the Go",
    genre: "Drama",
    valence: 0.45,
    energy: 0.45,
    acousticness: 0.66
  },
  {
    title: "Once Upon a Time in the West",
    genre: "Drama / Western",
    valence: 0.48,
    energy: 0.47,
    acousticness: 0.75
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    genre: "Drama",
    valence: 0.45,
    energy: 0.41,
    acousticness: 0.69
  },
  {
    title: "Open Wide",
    genre: "Film",
    valence: 0.47,
    energy: 0.48,
    acousticness: 0.48
  },
  {
    title: "Paper Ruscha",
    genre: "Documentary",
    valence: 0.48,
    energy: 0.43,
    acousticness: 0.68
  },
  {
    title: "Portrait of a Lady on Fire",
    genre: "Romance Drama",
    valence: 0.3,
    energy: 0.2,
    acousticness: 0.95
  },
  {
    title: "Potret Diri",
    genre: "Drama",
    valence: 0.4,
    energy: 0.48,
    acousticness: 0.69
  },
  {
    title: "PR Girls",
    genre: "Drama",
    valence: 0.43,
    energy: 0.49,
    acousticness: 0.63
  },
  {
    title: "Rita",
    genre: "Drama",
    valence: 0.48,
    energy: 0.48,
    acousticness: 0.69
  },
  {
    title: "Rose Bluelight",
    genre: "Drama",
    valence: 0.47,
    energy: 0.38,
    acousticness: 0.67
  },
  {
    title: "Saali Mohabbat",
    genre: "Drama",
    valence: 0.45,
    energy: 0.47,
    acousticness: 0.63
  },
  {
    title: "Saving Private Ryan",
    genre: "War / Drama",
    valence: 0.36,
    energy: 0.44,
    acousticness: 0.94
  },
  {
    title: "Scent of a Woman",
    genre: "Drama",
    valence: 0.46,
    energy: 0.4,
    acousticness: 0.69
  },
  {
    title: "Schindler's List",
    genre: "Drama / History",
    valence: 0.31,
    energy: 0.49,
    acousticness: 0.88
  },
  {
    title: "SHINE 51",
    genre: "Film",
    valence: 0.42,
    energy: 0.46,
    acousticness: 0.45
  },
  {
    title: "Sully",
    genre: "Drama / History",
    valence: 0.46,
    energy: 0.42,
    acousticness: 0.84
  },
  {
    title: "The Aerialist",
    genre: "Drama",
    valence: 0.44,
    energy: 0.44,
    acousticness: 0.73
  },
  {
    title: "The Agression",
    genre: "Drama / TV Movie",
    valence: 0.41,
    energy: 0.32,
    acousticness: 0.72
  },
  {
    title: "The Brawler",
    genre: "Crime / Drama",
    valence: 0.47,
    energy: 0.42,
    acousticness: 0.89
  },
  {
    title: "The Brutalist",
    genre: "Drama / History",
    valence: 0.42,
    energy: 0.38,
    acousticness: 0.8
  },
  {
    title: "The Children of Kozara",
    genre: "Drama / War",
    valence: 0.28,
    energy: 0.49,
    acousticness: 0.92
  },
  {
    title: "The Dupe",
    genre: "Drama",
    valence: 0.45,
    energy: 0.45,
    acousticness: 0.72
  },
  {
    title: "The Journey",
    genre: "Drama",
    valence: 0.49,
    energy: 0.44,
    acousticness: 0.69
  },
  {
    title: "The King's Speech",
    genre: "Drama / History",
    valence: 0.44,
    energy: 0.44,
    acousticness: 0.86
  },
  {
    title: "The Last Emperor",
    genre: "Drama / History",
    valence: 0.43,
    energy: 0.4,
    acousticness: 0.84
  },
  {
    title: "The Man in the Attic",
    genre: "TV Movie / Romance",
    valence: 0.47,
    energy: 0.45,
    acousticness: 0.8
  },
  {
    title: "The Passion of the Christ",
    genre: "Drama",
    valence: 0.48,
    energy: 0.45,
    acousticness: 0.67
  },
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    valence: 0.46,
    energy: 0.49,
    acousticness: 0.68
  },
  {
    title: "The Queen",
    genre: "Drama / History",
    valence: 0.41,
    energy: 0.4,
    acousticness: 0.87
  },
  {
    title: "The Senior",
    genre: "Drama",
    valence: 0.49,
    energy: 0.38,
    acousticness: 0.73
  },
  {
    title: "The Smashing Machine",
    genre: "History / Drama",
    valence: 0.48,
    energy: 0.38,
    acousticness: 0.86
  },
  {
    title: "The Social Network",
    genre: "Drama",
    valence: 0.49,
    energy: 0.46,
    acousticness: 0.7
  },
  {
    title: "The Thing with Feathers",
    genre: "Drama",
    valence: 0.43,
    energy: 0.46,
    acousticness: 0.63
  },
  {
    title: "The Travellers",
    genre: "Drama",
    valence: 0.44,
    energy: 0.4,
    acousticness: 0.67
  },
  {
    title: "The Tunnel",
    genre: "Drama",
    valence: 0.45,
    energy: 0.41,
    acousticness: 0.67
  },
  {
    title: "There Will Be Blood",
    genre: "Drama",
    valence: 0.45,
    energy: 0.48,
    acousticness: 0.69
  },
  {
    title: "Train Dreams",
    genre: "Drama",
    valence: 0.47,
    energy: 0.44,
    acousticness: 0.69
  },
  {
    title: "Uhaw",
    genre: "Drama",
    valence: 0.47,
    energy: 0.49,
    acousticness: 0.7
  },
  {
    title: "Western Religion",
    genre: "Western",
    valence: 0.41,
    energy: 0.49,
    acousticness: 0.67
  },
  {
    title: "When a Hot Night Opens 2",
    genre: "Drama",
    valence: 0.47,
    energy: 0.38,
    acousticness: 0.7
  },

];