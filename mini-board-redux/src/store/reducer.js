const initialState = {
  posts : [
    {
      id: 1,
      title: 'first post',
      body: 'content'
    },
    {
      id: 2,
      title: 'second post',
      body: 'content'
    },
    {
      id: 3,
      title: 'third post',
      body: 'content'

    }
  ]
};

const reducer = (state = initialState, action) => {
  console.log(state.posts);
  if (action.type === 'DELETE') {
    const deletedArray = state.posts.filter((post, index) => post.id !== action.id)
    return {
      ...state,
      posts: deletedArray
    }
  }
  return state;
}

export default reducer;