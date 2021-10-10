import {
  ACTION_BLOG_GET,
  ACTION_BLOG_GET_FAIL,
  ACTION_BLOG_LIST,
  ACTION_BLOG_LIST_FAIL,
  ACTION_BLOG_ADD,
} from '../actionTypes/blog'

export const initialState = {
  blogData: [],
  currentBlog: {},
}

const blog = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_BLOG_GET:
      return {
        ...state,
        currentBlog: action.payload,
      }
    case ACTION_BLOG_GET_FAIL:
      return {
        ...state,
        currentBlog: {},
      }
    case ACTION_BLOG_LIST:
      return {
        ...state,
        blogData: action.payload,
      }
    case ACTION_BLOG_LIST_FAIL:
      return {
        ...state,
        blogData: [],
      }
    case ACTION_BLOG_ADD:
      return {
        ...state,
        blogData: [...state.blogData, action.payload] 
      }
    default:
      return state
  }
}
export default blog