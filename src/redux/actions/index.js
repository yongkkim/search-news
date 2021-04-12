import axios from "axios";
import {
  BUTTON_ENTER,
  CURRENT_ARTICLES,
  CURRENT_PAGE,
  ERROR,
  KEYWORD,
  LOADING,
  ERROR_MESSAGE,
  SNIPPET,
  SUBMIT,
  SUBMIT_ENTER,
  TOP_NEWS,
} from "../constants/action-types";

export function getData() {
  return async (dispatch) => {
    return await axios
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=LnFPt84z7OUmVRWwgcMtZJcUR0nTrKTl"
      )
      .then((data) => {
        dispatch({ type: "ARTICLE_DATA", payload: data.data.results });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getSearchData(keyword) {
  return async (dispatch) => {
    return await axios
      .get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
          keyword +
          "&api-key=LnFPt84z7OUmVRWwgcMtZJcUR0nTrKTl"
      )
      .then((data) => {
        dispatch({
          type: "SEARCH_ARTICLE_DATA",
          payload: data.data.response.docs,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function setSubmitEnter(enter) {
  return { type: SUBMIT_ENTER, payload: enter };
}
export function setButtonEnter(enter) {
  return { type: BUTTON_ENTER, payload: enter };
}
export function setCurrentArticles(currArt) {
  return { type: CURRENT_ARTICLES, payload: currArt };
}
export function setCurrentPage(num) {
  return { type: CURRENT_PAGE, payload: num };
}
export function setLoading(loading) {
  return { type: LOADING, payload: loading };
}
export function setTopNews(topNews) {
  return { type: TOP_NEWS, payload: topNews };
}
export function setSubmit(submit) {
  return { type: SUBMIT, payload: submit };
}
export function setKeyword(keyword) {
  return { type: KEYWORD, payload: keyword };
}
export function setSnippet(snippet) {
  return { type: SNIPPET, payload: snippet };
}
export function setErrorMsg(errorMsg) {
  console.log(errorMsg);
  return { type: ERROR_MESSAGE, payload: errorMsg };
}
export function setError(error) {
  return { type: ERROR, payload: error };
}
