export async function getPopularMovies(url, options) {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovie(url, options) {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}
