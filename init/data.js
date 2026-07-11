const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "trending",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "city",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "farm",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "trending",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "city",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "arctic",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "camping",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "city",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "trending",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farm",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "city",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "room",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "city",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "room",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "trending",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nested in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "domes",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "farm",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "city",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "camping",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "houseboat",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "arctic",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "room",
  },

  {
    title: "Stargazing Geodesic Dome",
    description:
      "Sleep under the stars in this luxury geodesic dome. Features a transparent ceiling perfect for night-sky viewing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Sedona",
    country: "United States",
    category: "domes",
  },
  {
    title: "Futuristic Eco-Dome in the Desert",
    description:
      "Experience off-grid luxury living in this solar-powered dome surrounded by stunning desert landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Wadi Rum",
    country: "Jordan",
    category: "domes",
  },
  {
    title: "Mountain View Glamping Dome",
    description:
      "Perched high on a ridge, this heated dome offers panoramic views of snow-capped peaks and cozy interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "domes",
  },
  {
    title: "Jungle Canopy Dome",
    description:
      "Immerse yourself in nature with this luxury dome suspended near the rainforest canopy. Wake up to bird songs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1250,
    location: "Bali",
    country: "Indonesia",
    category: "domes",
  },
  {
    title: "Arctic Aurora Borealis Dome",
    description:
      "A fully insulated glass dome designed specifically for watching the Northern Lights from the comfort of your bed.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Tromsø",
    country: "Norway",
    category: "domes",
  },
  {
    title: "Oceanfront Sunset Dome",
    description:
      "Perched on a rocky cliffside, this stunning dome offers uninterrupted views of Pacific sunsets and crashing waves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Big Sur",
    country: "United States",
    category: "domes",
  },
  {
    title: "Forest Hideaway Biosphere",
    description:
      "Escape to this secluded botanical dome hidden deep within a pine forest. Perfect for a digital detox.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Vancouver Island",
    country: "Canada",
    category: "domes",
  },
  {
    title: "Luxury Vineyard Dome",
    description:
      "Stay inside a premium dome located right in the middle of a historic vineyard. Includes private wine tasting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Mendoza",
    country: "Argentina",
    category: "domes",
  },
  {
    title: "Canyon Rim Dome Retreat",
    description:
      "An architectural marvel dome built right on the edge of a red-rock canyon. Unmatched sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Moab",
    country: "United States",
    category: "domes",
  },
  {
    title: "Icelandic Lava Field Dome",
    description:
      "A minimalist, cozy dome situated in the middle of a surreal volcanic lava field. Close to hot springs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Reykjavik",
    country: "Iceland",
    category: "domes",
  },

  {
    title: "Medieval Fortress in Tuscany",
    description:
      "Live like a lord in this 12th-century fortress. Features original stone walls, a private courtyard, and breathtaking views of the Italian countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5500,
    location: "Siena",
    country: "Italy",
    category: "castles",
  },
  {
    title: "Victorian Castle Estate",
    description:
      "A grand Victorian-style castle with lush gardens and intricate architecture. Perfect for large gatherings and royal-themed holidays.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590059132213-f91590b121b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "castles",
  },
  {
    title: "Fairytale Loire Valley Chateau",
    description:
      "Straight out of a storybook, this French chateau features pointed turrets, a moat, and world-class wine cellars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Amboise",
    country: "France",
    category: "castles",
  },
  {
    title: "Gothic Revival Castle",
    description:
      "Experience the dark elegance of Gothic architecture. This castle offers massive fireplaces, stained glass windows, and a library of ancient books.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Bavaria",
    country: "Germany",
    category: "castles",
  },
  {
    title: "Cliffside Irish Castle",
    description:
      "Wake up to the sound of crashing waves in this historic castle perched on the rugged Atlantic cliffs of Ireland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599341626413-989d6a23cd3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "County Clare",
    country: "Ireland",
    category: "castles",
  },
  {
    title: "Spanish Alcázar Retreat",
    description:
      "A beautiful castle reflecting Moorish influence. Enjoy the intricate tile work, indoor gardens, and a private cooling pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Granada",
    country: "Spain",
    category: "castles",
  },
  {
    title: "Lakeside Fortress",
    description:
      "This castle sits directly on the edge of a serene lake. Includes a private dock and a grand hall with lakefront views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Lake Como",
    country: "Italy",
    category: "castles",
  },
  {
    title: "Baronial Highlands Castle",
    description:
      "An imposing stone castle in the heart of the Scottish Highlands. Perfect for hiking enthusiasts and history buffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Inverness",
    country: "United Kingdom",
    category: "castles",
  },
  {
    title: "Modernized Castle Tower",
    description:
      "A unique stay in a refurbished medieval tower. Modern luxury meets ancient stone architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Prague",
    country: "Czech Republic",
    category: "castles",
  },
  {
    title: "Renovated Palace Wing",
    description:
      "Stay in a private wing of a historic royal palace. Experience high ceilings, gold-leaf decor, and sprawling parklands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Vienna",
    country: "Austria",
    category: "castles",
  },
  {
    title: "Organic Olive Farmhouse",
    description:
      "Stay in a beautifully restored farmhouse surrounded by centuries-old olive groves. Participate in private olive oil tasting sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Tuscany",
    country: "Italy",
    category: "farm",
  },
  {
    title: "Lavender Fields Ranch",
    description:
      "Wake up to the soothing aroma of endless purple lavender fields. Features a cozy rustic barn converted into a luxury suite.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Provence",
    country: "France",
    category: "farm",
  },
  {
    title: "Traditional Alpaca Farm",
    description:
      "A family-friendly farm stay where you can interact with friendly alpacas, enjoy farm-to-table breakfast, and explore rolling green hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farm",
  },
  {
    title: "Historic Dairy Farm Cottage",
    description:
      "Experience authentic country life in this renovated 19th-century dairy farm. Enjoy fresh milk, homemade cheese, and peaceful morning walks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Vermont",
    country: "United States",
    category: "farm",
  },
  {
    title: "Eco-Friendly Rice Terrace Lodge",
    description:
      "Immerse yourself in agriculture with this luxury lodge situated right inside active, cascading green rice fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Ubud",
    country: "Indonesia",
    category: "farm",
  },
  {
    title: "Highland Cattle Ranch",
    description:
      "A massive, rustic ranch in the valleys featuring iconic fluffy Highland cows. Perfect for campfires and stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Aberdeenshire",
    country: "United Kingdom",
    category: "farm",
  },
  {
    title: "Sun-Drenched Vineyard Estate",
    description:
      "Live on a boutique vineyard. Take a stroll through grapevines and enjoy premium wine selections right from the source.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Napa Valley",
    country: "United States",
    category: "farm",
  },
  {
    title: "Secluded Windmill Homestead",
    description:
      "A charming, historical farm complete with a working windmill, organic vegetable patches, and open horse pastures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1050,
    location: "Groningen",
    country: "Netherlands",
    category: "farm",
  },
  {
    title: "Coffee Plantation Retreat",
    description:
      "Nestled in the mountains, this farm stay lets you pick your own coffee beans and learn the art of traditional roasting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Coorg",
    country: "India",
    category: "farm",
  },
  {
    title: "Outback Sheep Station",
    description:
      "Experience life on a massive Australian sheep station. Rugged, open terrain paired with modern, air-conditioned cabin luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1350,
    location: "Alice Springs",
    country: "Australia",
    category: "farm",
  },
  {
    title: "Luxury Heritage Kettuvallam",
    description:
      "Cruise through the serene backwaters in a traditional wooden houseboat. Features premium wooden interiors, a private chef, and sun decks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Alleppey",
    country: "India",
    category: "houseboat",
  },
  {
    title: "Modern Floating Villa",
    description:
      "A sleek, glass-walled contemporary houseboat docked in a peaceful canal. Experience city living right on the water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Amsterdam",
    country: "Netherlands",
    category: "houseboat",
  },
  {
    title: "Tropical Lagoon Houseboat",
    description:
      "Anchor in a crystal-clear turquoise lagoon. Step off your living room deck directly into coral reefs and marine life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "houseboat",
  },
  {
    title: "Cozy Lakefront Catamaran",
    description:
      "Perfect for adventure lovers. This compact houseboat comes with built-in kayaks, paddleboards, and an onboard barbecue grill.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Lake Powell",
    country: "United States",
    category: "houseboat",
  },
  {
    title: "Traditional Dal Lake Shikara Barge",
    description:
      "Stay in an exquisitely carved historic cedarwood houseboat. Enjoy stunning views of the surrounding snow-capped mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1562914399-bfb17f62649a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Srinagar",
    country: "India",
    category: "houseboat",
  },
  {
    title: "Sleek Nordic Floating Cabin",
    description:
      "A minimalist Scandinavian-designed houseboat featuring a private onboard sauna and floor-to-ceiling fjord views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Oslo Fjord",
    country: "Norway",
    category: "houseboat",
  },
  {
    title: "Seine River Studio Houseboat",
    description:
      "An artistic and charming boat converted into a romantic studio apartment, parked right in the center of the city lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Paris",
    country: "France",
    category: "houseboat",
  },
  {
    title: "Spacious Multi-Deck River Queen",
    description:
      "Massive double-decker boat perfect for families. Includes a water slide, rooftop lounge, and state-of-the-art entertainment system.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Murray River",
    country: "Australia",
    category: "houseboat",
  },
  {
    title: "Eco-Friendly Solar Houseboat",
    description:
      "Live 100% off-grid with zero carbon footprint. Fully powered by solar energy, moving silently through peaceful mangrove waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Key West",
    country: "United States",
    category: "houseboat",
  },
  {
    title: "Historic Thames Narrowboat",
    description:
      "Experience classic British charm in this beautifully restored vintage narrowboat. Great for navigating historic lock systems.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "London",
    country: "United Kingdom",
    category: "houseboat",
  },
  {
    title: "The Glass Peak Observatory",
    description:
      "A modern architectural marvel perched on a high ridge. Features floor-to-ceiling glass walls for uninterrupted views of the jagged peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountains",
  },
  {
    title: "High-Altitude Himalayan Lodge",
    description:
      "Authentic stone-built lodge offering a deep spiritual retreat. Wake up to the sight of snow-dusted Himalayan giants.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Manali",
    country: "India",
    category: "mountains",
  },
  {
    title: "Rugged Rockies Log Cabin",
    description:
      "Classic hand-hewn log cabin nestled in a pine forest. Perfect for cozy nights by the fireplace after a day of hiking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
  },
  {
    title: "Andean Sky Retreat",
    description:
      "Eco-conscious pods located high in the Andes. Experience thin air, crisp nights, and incredible mountain sunrises.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Cusco",
    country: "Peru",
    category: "mountains",
  },
  {
    title: "Alpine Meadow Chalet",
    description:
      "Located in a lush green valley surrounded by towering cliffs. Features a wrap-around balcony and outdoor hot tub.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Cortina d'Ampezzo",
    country: "Italy",
    category: "mountains",
  },
  {
    title: "The Cloud-9 Lookout",
    description:
      "A remote cabin sitting above the cloud line. Feel like you are floating in the sky with 360-degree mountain vistas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Queenstown",
    country: "New Zealand",
    category: "mountains",
  },
  {
    title: "Smoky Mountain Hideaway",
    description:
      "A rustic retreat hidden in the Blue Ridge Mountains. Known for its misty mornings and dense, vibrant forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Gatlinburg",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Patagonian Basecamp",
    description:
      "Designed for adventurers, this cabin serves as the perfect basecamp for trekking in the granite spires of Patagonia.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Torres del Paine",
    country: "Chile",
    category: "mountains",
  },
  {
    title: "Boreal Forest Cabin",
    description:
      "A secluded cabin in the far north mountains. Experience true silence and the chance to see the Aurora from your porch.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Lapland",
    country: "Finland",
    category: "mountains",
  },
  {
    title: "Sierra Nevada Summit Suite",
    description:
      "High-end luxury suite located at a mountain resort. Ski-in access during winter and epic trail access in summer.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Lake Tahoe",
    country: "United States",
    category: "mountains",
  },
  {
    title: "Redwood Forest Safari Tent",
    description:
      "Luxury canvas glamping tent raised on wooden platforms among towering 1000-year-old redwood trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 850,
    location: "Big Sur",
    country: "United States",
    category: "camping",
  },
  {
    title: "Desert Nomad Bell Tent",
    description:
      "An authentic, aesthetic bell tent with bohemian rugs, glowing lanterns, and an open campfire setup.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 600,
    location: "Joshua Tree",
    country: "United States",
    category: "camping",
  },
  {
    title: "Riverside Tipi Adventure",
    description:
      "Stay in a traditional towering tipi right next to a rushing, crystal-clear trout river. Kayaks included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 550,
    location: "Montana",
    country: "United States",
    category: "camping",
  },
  {
    title: "Volcanic Ash Glamping Camp",
    description:
      "Camp in high-tech, weather-proof safari setups on black volcanic sand near active hot springs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Kyoto Highlands",
    country: "Japan",
    category: "camping",
  },
  {
    title: "Backcountry Lakefront Hammock Camp",
    description:
      "For true minimalists: an engineered open-air ultra-glamp setup with mosquito-netted suspended hanging beds over the lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 400,
    location: "Lake Tahoe",
    country: "United States",
    category: "camping",
  },
  {
    title: "Serengeti Star-Bed Canopy",
    description:
      "Sleep on an elevated wooden platform protected by canvas netting. Listen to lions roaring under the African stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Serengeti",
    country: "Tanzania",
    category: "camping",
  },
  {
    title: "Vintage Airstream Camp",
    description:
      "A beautifully restored 1970s shiny silver Airstream trailer complete with an outdoor stock-tank pool and festoon lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Austin",
    country: "United States",
    category: "camping",
  },
  {
    title: "Canyon Edge Cliff-Camp",
    description:
      "An extreme glamping setup bolted onto massive canyon ledges. Not for the faint-hearted! Breathtaking morning drops.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Moab",
    country: "United States",
    category: "camping",
  },
  {
    title: "Pine Valley Tree-Suspended Tent",
    description:
      "Tents suspended completely between strong pine branches. Experience zero-ground contact camping.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 500,
    location: "Black Forest",
    country: "Germany",
    category: "camping",
  },
  {
    title: "Patagonia Expedition Basecamp",
    description:
      "Heavy-duty dome structures built inside a wind-swept valley valley basecamp for pure raw mountain trekking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "El Chaltén",
    country: "Argentina",
    category: "camping",
  },
  {
    title: "Charming Gothic Quarter Room",
    description:
      "A cozy private room with a Juliet balcony opening directly onto historic medieval cobbled streets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 450,
    location: "Barcelona",
    country: "Spain",
    category: "room",
  },
  {
    title: "Artist's Attic Studio Room",
    description:
      "Bright and sunny attic room with slanted skylights, paint easels, and high-speed fiber internet.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 500,
    location: "Paris",
    country: "France",
    category: "room",
  },
  {
    title: "Minimalist Zen Suite",
    description:
      "A peaceful private bedroom with traditional tatami mats, paper sliding doors, and a garden view.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 650,
    location: "Kyoto",
    country: "Japan",
    category: "room",
  },
  {
    title: "Industrial Brick Loft Room",
    description:
      "A spacious private bedroom inside an industrial-chic shared warehouse loft apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Brooklyn",
    country: "United States",
    category: "room",
  },
  {
    title: "Heritage Havel's Private Room",
    description:
      "Stay in a beautifully preserved 19th-century royal mansion featuring ornate archways and block-print bedding.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 400,
    location: "Jaipur",
    country: "India",
    category: "room",
  },
  {
    title: "Bungalow Room Near Beach",
    description:
      "A breezy, light-filled bedroom with a private porch hammock just 2 minutes walk from the surf.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 550,
    location: "Canggu",
    country: "Indonesia",
    category: "room",
  },
  {
    title: "Modern Minimal Suite Downtown",
    description:
      "Clean lines, king bed, smart lights, and access to a massive rooftop infinity community pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Singapore",
    country: "Singapore",
    category: "room",
  },
  {
    title: "Sunny Canal-Side Room",
    description:
      "A gorgeous room inside a historic townhouse featuring big bay windows looking directly into the canal waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Amsterdam",
    country: "Netherlands",
    category: "room",
  },
  {
    title: "Cozy Suburb Garden Room",
    description:
      "Quiet private room tucked inside an elegant suburban bungalow with full access to a blooming English rose garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 350,
    location: "London",
    country: "United Kingdom",
    category: "room",
  },
  {
    title: "High-Rise Skyview Room",
    description:
      "A stunning corner-room with floor-to-ceiling glass panel windows showing off spectacular neon night city lines.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Hong Kong",
    country: "Hong Kong",
    category: "room",
  },
  {
    title: "Insta-Famous Mirror Villa",
    description:
      "A stunning architectural marvel wrapped completely in high-grade mirrors that blend invisibly into the trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Saddleworth",
    country: "United Kingdom",
    category: "trending",
  },
  {
    title: "Overwater Glass Bottom Villa",
    description:
      "Currently viral everywhere! Stay directly above marine life with transparent glass lounge floors and an ocean slide.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Maldives",
    country: "Maldives",
    category: "trending",
  },
  {
    title: "Luxury Cliffside Infinity Pool Oasis",
    description:
      "Ranked top #1 most wish-listed tropical luxury property of the season. Features jaw-dropping ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Santorini",
    country: "Greece",
    category: "trending",
  },
  {
    title: "Cyberpunk Capsule Penthouse",
    description:
      "A highly demanded sci-fi aesthetic penthouse integrated with smart glowing neon art and voice controls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Shinjuku, Tokyo",
    country: "Japan",
    category: "trending",
  },
  {
    title: "Eco-Bamboo Luxury Mansion",
    description:
      "A stunning organic structural mansion constructed 100% out of giant black timber bamboo stalks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Selat",
    country: "Indonesia",
    category: "trending",
  },
  {
    title: "Red Rock Cave Mansion",
    description:
      "Carved completely deep inside organic stone cliffsides. Features highly viral subterranean plunge pools.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4900,
    location: "Petra Valley",
    country: "Jordan",
    category: "trending",
  },
  {
    title: "Blackout Luxury A-Frame",
    description:
      "This all-black A-frame cabin went viral for its brutalist design mixed with peaceful thick pine forest settings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1850,
    location: "Catskills",
    country: "United States",
    category: "trending",
  },
  {
    title: "Modernist Desert Pod",
    description:
      "A spectacular minimalist geometric steel pod. Famous for luxury fashion shoot backdrops and alien vistas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Palm Springs",
    country: "United States",
    category: "trending",
  },
  {
    title: "Floating Sphere Tree-Suite",
    description:
      "A perfectly round fiberglass orbital pod hanging high above the rainforest floor via high-tensile steel cables.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Quebec Wilderness",
    country: "Canada",
    category: "trending",
  },
  {
    title: "Historic Windmill Renaissance Stay",
    description:
      "A multi-million views trending transformed 18th-century stone windmill with fully modernized retro luxury interior levels.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Mykonos Town",
    country: "Greece",
    category: "trending",
  },
  {
    title: "Skyline Skyscraper Penthouse",
    description:
      "Live on the 82nd floor with unmatched panoramic views of Central Park, a private helipad, and sky lounge access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "New York City",
    country: "United States",
    category: "city",
  },
  {
    title: "Chic Haussmann Apartment",
    description:
      "Classic Paris living featuring grand white crown mold panels, marble fireplaces, and balconies looking at the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Paris",
    country: "France",
    category: "city",
  },
  {
    title: "Futuristic Shinjuku High-Rise",
    description:
      "Immerse into neon streets with this high-tech urban fortress apartment in the busiest intersection of the world.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tokyo",
    country: "Japan",
    category: "city",
  },
  {
    title: "Industrial Warehouse Conversion Loft",
    description:
      "Massive open floor plan apartment with exposed rusted steel pillars, 20-foot high ceilings, and graffiti wall galleries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "London East End",
    country: "United Kingdom",
    category: "city",
  },
  {
    title: "Luxury Marina Skyscraper Studio",
    description:
      "Stunning ultra-modern studio located directly above superyacht docks with 24/7 view of active city lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Dubai Marina",
    country: "United Arab Emirates",
    category: "city",
  },
  {
    title: "Historic Brownstone Suite",
    description:
      "An authentic brick-faced townhouse room with classical ivy facades and private wrought-iron spiral staircases.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1650,
    location: "Boston Downtown",
    country: "United States",
    category: "city",
  },
  {
    title: "Downtown Minimalist Rooftop Pod",
    description:
      "A compact glass and architectural concrete pod situated directly on top of a central corporate complex skyscraper roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Los Angeles",
    country: "United States",
    category: "city",
  },
  {
    title: "Vibrant Centro Historical Apartment",
    description:
      "Stay in a bursting colorful high-ceiling apartment situated right inside historic plazas and salsa clubs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Mexico City",
    country: "Mexico",
    category: "city",
  },
  {
    title: "Sleek Waterfront Financial District Loft",
    description:
      "A modern glass condo overlooking busy bay ports, towering skyscrapers, and buzzing city fast life.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Singapore Bay",
    country: "Singapore",
    category: "city",
  },
  {
    title: "Artistic Berlin Studio Flat",
    description:
      "Located right in the alternative heart of Berlin. Features vintage vinyl music stations and high industrial windows.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Kreuzberg, Berlin",
    country: "Germany",
    category: "city",
  },
];

module.exports = { data: sampleListings };
