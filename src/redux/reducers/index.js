import {
  ARTICLE_DATA,
  SEARCH_ARTICLE_DATA,
  BUTTON_ENTER,
  CURRENT_ARTICLES,
  CURRENT_PAGE,
  KEYWORD,
  LOADING,
  SUBMIT,
  SUBMIT_ENTER,
  TOP_NEWS,
  SNIPPET,
  ERROR,
  ERROR_MESSAGE,
} from "../constants/action-types";

const initialState = {
  submitEnter: false,
  buttonEnter: false,
  currentPage: 1,
  currentArticles: [],
  loading: false,
  topNews: false,
  submit: false,
  keyword: "",
  articles: [],
  snippet: true,
  errorMsg: "",
  error: false,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ARTICLE_DATA) {
    return {
      ...state,
      articles: Object.assign([], action.payload),
    };
  }

  if (action.type === SEARCH_ARTICLE_DATA) {
    return {
      ...state,
      articles: Object.assign([], action.payload),
    };
  }
  // BUTTON_ENTER, CURRENT_ARTICLES, CURRENT_PAGE, KEYWORD, LOADING, SUBMIT, SUBMIT_ENTER, TOP_NEWS
  if (action.type === BUTTON_ENTER) {
    return {
      ...state,
      buttonEnter: action.payload,
    };
  }

  if (action.type === CURRENT_ARTICLES) {
    return {
      ...state,
      currentArticles: action.payload,
    };
  }
  if (action.type === CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.payload,
    };
  }

  if (action.type === KEYWORD) {
    return {
      ...state,
      keyword: action.payload,
    };
  }
  if (action.type === LOADING) {
    return {
      ...state,
      loading: action.payload,
    };
  }

  if (action.type === SUBMIT) {
    return {
      ...state,
      submit: action.payload,
    };
  }

  if (action.type === SUBMIT_ENTER) {
    return {
      ...state,
      submitEnter: action.payload,
    };
  }

  if (action.type === TOP_NEWS) {
    return {
      ...state,
      topNews: action.payload,
    };
  }

  if (action.type === SNIPPET) {
    return {
      ...state,
      snippet: action.payload,
    };
  }

  if (action.type === ERROR_MESSAGE) {
    return {
      ...state,
      errorMsg: action.payload,
    };
  }

  if (action.type === ERROR) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};

export default rootReducer;
