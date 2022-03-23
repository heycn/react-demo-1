export default {
  setUser: (state, action) => {
    return { ...state, user: action.user }
  },
  removeUser: () => '删除用户'
}
