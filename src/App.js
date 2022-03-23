import { createContext, useContext, useEffect, useReducer } from 'react'

// 将数据集中在一个 store 对象
const store = {
  user: null,
  books: null,
  movies: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.user }
    case 'setBooks':
      return { ...state, books: action.books }
    case 'setMovies':
      return { ...state, movies: action.movies }
    default:
      throw new Error()
  }
}

// 创建一个 Context
const Context = createContext(null)

const App = () => {
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <User />
      <hr />
      <Books />
      <hr />
      <Movies />
      <hr />
    </Context.Provider>
  )
}
const User = () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/user').then(user => {
      dispatch({ type: 'setUser', user })
    })
  }, [])
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : '加载中...'}</div>
    </div>
  )
}
const Books = () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/books').then(books => {
      dispatch({ type: 'setBooks', books })
    })
  }, [])
  return (
    <div>
      <h1>书籍</h1>
      <ol>{state.books ? state.books.map(book => <li key={book.id}>{book.name}</li>) : '加载中...'}</ol>
    </div>
  )
}
const Movies = () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    ajax('/movies').then(movies => {
      dispatch({ type: 'setMovies', movies })
    })
  }, [])
  return (
    <div>
      <h1>电影</h1>
      <ol>{state.movies ? state.movies.map(movie => <li key={movie.id}>{movie.name}</li>) : '加载中...'}</ol>
    </div>
  )
}
export default App

// 帮助函数

// 假 ajax
// 一秒钟后，根据 path 返回一个对象，必定成功不会失败
const ajax = path => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === '/user') {
        resolve({
          id: 1,
          name: 'heycn'
        })
      } else if (path === '/books') {
        resolve([
          {
            id: 1,
            name: '书籍1'
          },
          {
            id: 2,
            name: '书籍2'
          }
        ])
      } else if (path === '/movies') {
        resolve([
          {
            id: 1,
            name: '电影1'
          },
          {
            id: 2,
            name: '电影2'
          }
        ])
      }
    }, 1000)
  })
}
