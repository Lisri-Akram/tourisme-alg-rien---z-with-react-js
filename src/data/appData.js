export const regionsData = [
  {
    id: 1,
    name: 'Littoral Méditerranéen',
    description: 'Côte bleue, plages dorées et villes historiques',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    destinations: 15,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    name: 'Sahara Algérien',
    description: 'Dunes infinies et oasis mystérieuses',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=800&h=500&fit=crop',
    destinations: 12,
    color: 'from-amber-500 to-orange-400'
  },
  {
    id: 3,
    name: 'Atlas Tellien',
    description: 'Montagnes majestueuses et vallées verdoyantes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    destinations: 8,
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 4,
    name: 'Hauts Plateaux',
    description: 'Steppes immenses et patrimoine ancestral',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop',
    destinations: 10,
    color: 'from-purple-500 to-violet-400'
  }
];

export const destinationsData = [
  {
    id: 1,
    name: 'Alger la Blanche',
    type: 'patrimoine',
    region: 'Nord',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
    description: 'Capitale historique aux mille facettes, mélange d\'architecture ottomane et coloniale',
    location: 'Alger',
    highlights: ['Casbah d\'Alger', 'Notre-Dame d\'Afrique', 'Jardin d\'Essai'],
    gallery: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    name: 'Taghit Oasis',
    type: 'desert',
    region: 'Sahara',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Oasis spectaculaire entourée de dunes dorées et de palmeraies luxuriantes',
    location: 'Béchar',
    highlights: ['Dunes de sable rouge', 'Palmeraies', 'Architecture ksourienne'],
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 3,
    name: 'Tipaza Antique',
    type: 'patrimoine',
    region: 'Nord',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    description: 'Site archéologique romain face à la Méditerranée, patrimoine mondial UNESCO',
    location: 'Tipaza',
    highlights: ['Ruines romaines', 'Amphithéâtre', 'Vue sur mer'],
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 4,
    name: 'Chréa National Park',
    type: 'montagne',
    region: 'Montagnes',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Parc national montagneux, paradis des randonneurs avec cèdres centenaires',
    location: 'Blida',
    highlights: ['Cèdres de l\'Atlas', 'Randonnées', 'Faune endémique'],
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 5,
    name: 'Oran la Radieuse',
    type: 'plage',
    region: 'Nord',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
    description: 'Perle de l\'Ouest algérien, mélange de culture andalouse et méditerranéenne',
    location: 'Oran',
    highlights: ['Santa Cruz', 'Corniche oranaise', 'Théâtre régional'],
    gallery: [
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 6,
    name: 'Djanet Tassili',
    type: 'desert',
    region: 'Sahara',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    description: 'Formations rocheuses spectaculaires et art rupestre millénaire',
    location: 'Illizi',
    highlights: ['Art rupestre', 'Formations géologiques', 'Ciel étoilé'],
    gallery: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73aff?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    ]
  }
];