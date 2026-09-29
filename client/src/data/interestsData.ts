export interface InterestItem {
  id: string;
  title: string;
  imageUrl: string;
}

export const interestsData = {
  games: [
    { id: 'game-1', title: 'Pokemon', imageUrl: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/dc1ae8fc8a0a4eaf9a4a9c69b5dcd52f_1024' },
    { id: 'game-2', title: 'Animal Crossing New Horizons', imageUrl: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/c52f22a9b96f46df91f1a60482ac02e6_1024' },
    { id: 'game-3', title: 'Runescape', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4plRZxDHJhn6vtvGvz96k1cgKPbFiGa1iUhbQERJlZQ&s=10' },
    { id: 'game-4', title: 'Undertale/Deltarune', imageUrl: 'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/3d64ae29711e40feaf65d3148e2a46cf_1024' },
  ] as InterestItem[],
  
  movies: [
    { id: 'movie-1', title: 'The Fall (2006)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/liWcK5drDrypM2C9CRyW6K665Lz.jpg' },
    { id: 'movie-2', title: 'Monkey Man (2024)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/eWbRUKsoskjzpaYTUw2H2yVfMGh.jpg' },
    { id: 'movie-3', title: 'Mad Max: Fury Road (2015)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/wf0rvyXBTf2me1af6T0Z7WykTVo.jpg' },
    { id: 'movie-4', title: 'Hardcore Henry (2016)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/tskNxDDp9pq2QQrkDRHxRRFgr8H.jpg' },
  ] as InterestItem[],

  tvShows: [
    { id: 'tv-1', title: 'Person of Interest (2011)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/fcsHrM32ruheb8mowGrKGYnTz3M.jpg' },
    { id: 'tv-2', title: 'Fringe (2008)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/mPqZ9qCxap35iQLNABu1w8Zt9SH.jpg' },
    { id: 'tv-3', title: 'Evil (2019)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/mZvV71dsQkSs5cePbojeCsVAZlo.jpg' },
    { id: 'tv-4', title: 'Desperate Housewives (2004)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/tviGIfuP4gP3hi4IQhg0UuxhKGn.jpg' },
  ] as InterestItem[],

  anime: [
    { id: 'anime-1', title: 'Durarara!! (2010)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/ePTyPLVtMZdyPnU0KwFjrVCSQmI.jpg' },
    { id: 'anime-2', title: 'Attack on Titan (2013)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/pWFlyeunOIo51wYQOCx8kJDLm2y.jpg' },
    { id: 'anime-3', title: 'Fullmetal Alchemist: Brotherhood (2009)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/kjoGxuVepL2mFTUtdMGF6VvRv25.jpg' },
    { id: 'anime-4', title: 'Soul Eater (2008)', imageUrl: 'https://media.themoviedb.org/t/p/w440_and_h660_face/hAszc4fYfKU4SexxiSIigS3z2WU.jpg' },
  ] as InterestItem[],
};