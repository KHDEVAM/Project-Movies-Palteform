const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "0aad7dcb5315bb00f7357068a15c84e1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
