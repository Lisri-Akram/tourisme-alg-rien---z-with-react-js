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
    image: 'https://images.unsplash.com/photo-1535585538107-e457d37fbde5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxnZXJpYXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Capitale historique aux mille facettes, mélange d\'architecture ottomane et coloniale',
    location: 'Alger',
    highlights: ['Casbah d\'Alger', 'Notre-Dame d\'Afrique', 'Jardin d\'Essai'],
    gallery: [
      'https://images.unsplash.com/photo-1610133290889-0ed892ce5157?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://static.wixstatic.com/media/fb33fe_d2ba99212ae44d1cb6d355f5163313ba~mv2.jpg/v1/fill/w_980,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb33fe_d2ba99212ae44d1cb6d355f5163313ba~mv2.jpg',
      'https://elwatan-dz.com/storage/23781/JARDIN.gif'
    ]
  },
  {
    id: 2,
    name: 'Taghit Oasis',
    type: 'desert',
    region: 'Sahara',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1465217787303-8f029c50d092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Oasis spectaculaire entourée de dunes dorées et de palmeraies luxuriantes',
    location: 'Béchar',
    highlights: ['Dunes de sable rouge', 'Palmeraies', 'Architecture ksourienne'],
    gallery: [
      'https://plus.unsplash.com/premium_photo-1681149342561-96713cd1728a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1680883742267-7a1eec2ea140?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://www.pierreseche.com/images/fig15_darb_boussemghoun.jpg'
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
    image: 'https://images.unsplash.com/photo-1610725954918-8f791efcda3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1544494232-30565e6bdf9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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