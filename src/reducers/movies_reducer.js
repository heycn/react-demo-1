export default {
  setMovies: (state, action) => {
    return { ...state, movies: action.movies }
  },
  deleteMovie: () => '删除电影'
}
