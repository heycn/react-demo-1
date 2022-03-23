export default {
  setBooks: (state, action) => {
    return { ...state, books: action.books }
  },
  deleteBook: () => '删除书籍'
}
