const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '68842ebe0094f4ca247fb64a6697336f',
    language: 'fr-FR',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    fr: (fr)=>`https://api.themoviedb.org/3/movie/76341?api_key=68842ebe0094f4ca247fb64a6697336f&language=${fr}`,
    eng: (eng)=>`https://api.themoviedb.org/3/movie/76341?api_key=68842ebe0094f4ca247fb64a6697336f&language=${eng}`
    
}

export default apiConfig;