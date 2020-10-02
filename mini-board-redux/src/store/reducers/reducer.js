const initialState = {
  posts : [
    {
      id: 1,
      title: 'first post',
      body: 'content'
    }
  ]
};

const reducer = (state = initialState, action) => {
  if (action.type === 'DELETE_POST') {
    const deletedArray = state.posts.filter((post, index) => post.id !== action.id)
    return {
      ...state,
      posts: deletedArray
    }
  }

  if (action.type === 'ADD_POST') {
    const arr = [...state.posts];
    arr.push({
      id: Math.floor(Math.random()*10000),
      title: action.title,
      body: action.body
    });
    return {
      ...state,
      posts: arr
    }
  }
  return state;
}

export default reducer;