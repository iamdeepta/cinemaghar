const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWE0NDE2YmQwNGNmMmMwYmE2ZTcyMTdmZTliYTg4NSIsInN1YiI6IjY2NDc2OGExNmIyMWFjNmE1OTIyYjA0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wE_JqlDiH6s4tJYnevf7oDUND8T20PgLXs3e6uyivUE",
  },
};

export const getMovies = async (page: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );

  const result = await response.json();

  return result;
};
