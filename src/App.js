import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import nyt2 from "./images/nyt2.jpg";
import { device } from "./components/device";
import styled from "styled-components";
import "./App.css";
import { connect } from "react-redux";
import {
  getData,
  getSearchData,
  setSubmitEnter,
  setButtonEnter,
  setCurrentArticles,
  setLoading,
  setTopNews,
  setSubmit,
  setKeyword,
  setSnippet,
  setErrorMsg,
  setCurrentPage,
  setError,
} from "./redux/actions/index";

import Articles from "./components/articles";
import Pagination from "./components/pagination";
import Alert from "./components/alert";

const BGImage = styled.div`
  position: absolute;
  top: 0;
  min-height: 50%;
  width: 100%;
  background-image: url(${(p) => p.nyt2});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  z-index: -1;

  @media ${device.laptopM} {
    min-height: 38%;
  }

  @media ${device.laptopS} {
    min-height: 42%;
  }

  @media ${device.pad} {
    min-height: 25%;
  }

  @media ${device.mobileM} {
    min-height: 50%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 170px;
  color: white;

  @media ${device.mobileM} {
    font-size: 12px;
    margin-top: 120px;
    padding: 0 10px;
    text-align: center;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileM} {
    flex-wrap: wrap;
  }
`;

const SearchBar = styled.input.attrs({
  type: "text",
  placeholder: "Search news by keyword",
})`
  width: 30%;
  height: 30px;
  padding-left: 10px;
  margin-left: 5px;
  outline: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 1px solid #213fb9;

  @media ${device.mobileM} {
    flex-basis: 70%;
  }
`;

const Button = styled.button`
  padding: 2px 15px;
  cursor: pointer;
  background-color: white;
  outline: none;
  border: 1px solid #213fb9;
  ${(p) => p.getTop && `height: 36px; border-radius: 15px;`};
  transition: background 0.2s ease-out;

  &:hover {
    background-color: #213fb9;
  }

  @media ${device.mobileM} {
    flex-basis: ${(p) => (p.getTop ? `85%` : `10%`)};
    ${(p) => p.getTop && `margin-bottom: 4px; `};
    ${(p) =>
      !p.getTop &&
      `border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;`};
    
}  
  }
`;

const ButtonName = styled.span`
  color: ${(p) => (p.enter ? `white` : `#213fb9`)};
  transition: color 0.2s ease-out;
`;

// const SearchButton = styled(Button).attrs({ type: "button" });

const App = ({
  articles,
  submitEnter,
  buttonEnter,
  currentPage,
  loading,
  keyword,
  snippet,
  errorMsg,
  error,
  getData,
  getSearchData,
  setSubmitEnter,
  setButtonEnter,
  setCurrentArticles,
  setLoading,
  setSubmit,
  setKeyword,
  setSnippet,
  setCurrentPage,
  setErrorMsg,
  setError,
}) => {
  //A function creates first and last index of articles which will be used in Pagination.
  const firstLastIndex = (currPg) => {
    let articlesPerPage = 4;
    let indexOfLastArticles = currPg * articlesPerPage;
    let indexOfFirstArticles = indexOfLastArticles - articlesPerPage;

    return [indexOfFirstArticles, indexOfLastArticles];
  };

  // onClick function for generating most popular top 20 news
  const handleArticles = async () => {
    let indexes = firstLastIndex(currentPage);

    setLoading(true);

    await setCurrentPage(1);
    await setSubmit(false);
    await getData();

    if (articles) {
      setCurrentArticles(articles.slice(indexes[0], indexes[1]));
    }

    setTopNews(true);
    setSnippet(false);
    setLoading(false);
  };

  //Two useEffects are for separating articles by 4 and create first 4 articles when users visit my website

  useEffect(() => {
    let indexes = firstLastIndex(currentPage);
    getData();
    let snippet = articles.slice(0, 4);
    if (snippet) {
      setCurrentArticles(articles.slice(indexes[0], indexes[1]));
    }
  }, []);

  useEffect(() => {
    let indexes = firstLastIndex(currentPage);
    if (articles) {
      setCurrentArticles(articles.slice(indexes[0], indexes[1]));
    }
  }, [currentPage, articles]);

  //handle on change. Save input keyword and also check the length of it (max 40 chars). Create an error message if needed
  const handleChange = (e) => {
    let input = e.target.value;
    if (input.length <= 40) {
      setKeyword(input);
    } else {
      setError(true);
      setErrorMsg("Keyword should be less than 40 characters");
    }
  };

  //Handle on submit. Check the keyword before submit if it is empty or contains qoute(s). Create an error message if needed
  const handleSubmit = async (e) => {
    e.preventDefault();
    let cleanedKeyword = keyword.replace(/['"]+/g, "").trim();
    if (cleanedKeyword !== "") {
      setLoading(true);
      await setCurrentPage(1);
      await setSubmit(true);
      await getSearchData(keyword);
      setError(false);
      setKeyword("");
      setSnippet(false);
      setLoading(false);
    } else {
      setError(true);
      setErrorMsg("Keyword should not be empty");
      setKeyword("");
    }
  };

  console.log(errorMsg);

  return (
    <div>
      <BGImage
        aria-label="background-image"
        role="background-image"
        nyt2={nyt2}
      ></BGImage>
      {error && <Alert />}
      <TitleContainer role="app-title" aria-label="app-title">
        <h1>Search most popular articles in New York Times</h1>
      </TitleContainer>
      <form role="search" method="get" onSubmit={(e) => handleSubmit(e)}>
        <SearchContainer role="search-container">
          <Button
            role="button"
            aria-label="api-call-button"
            type="button"
            getTop={true}
            onMouseEnter={() => setButtonEnter(true)}
            onMouseLeave={() => setButtonEnter(false)}
          >
            <ButtonName
              role="button-name"
              aria-label="button-name"
              onClick={() => handleArticles()}
              enter={buttonEnter}
            >
              Get top 20 articles
            </ButtonName>
          </Button>
          <SearchBar
            role="search-bar"
            aria-label="search-bar"
            onChange={handleChange}
            value={keyword}
            error={error}
          />
          <Button
            role="submit"
            aria-label="submit"
            type="submit"
            onMouseEnter={() => setSubmitEnter(true)}
            onMouseLeave={() => setSubmitEnter(false)}
          >
            <SearchIcon
              className={submitEnter ? "icon-color-hover" : "icon-color"}
            />
          </Button>
        </SearchContainer>
      </form>
      {!loading && <Articles />}
      {!loading && !snippet && <Pagination />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    searchArticles: state.searchArticles,
    submitEnter: state.submitEnter,
    buttonEnter: state.buttonEnter,
    currentPage: state.currentPage,
    currentArticles: state.currentArticles,
    loading: state.loading,
    topNews: state.topNews,
    submit: state.submit,
    keyword: state.keyword,
    snippet: state.snippet,
    placeHolder: state.placeHolder,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    getSearchData: (keyword) => dispatch(getSearchData(keyword)),
    setSubmitEnter: (enter) => dispatch(setSubmitEnter(enter)),
    setButtonEnter: (enter) => dispatch(setButtonEnter(enter)),
    setCurrentArticles: (currArt) => dispatch(setCurrentArticles(currArt)),
    setCurrentPage: (num) => dispatch(setCurrentPage(num)),
    setLoading: (loading) => dispatch(setLoading(loading)),
    setTopNews: (topNews) => dispatch(setTopNews(topNews)),
    setSubmit: (submit) => dispatch(setSubmit(submit)),
    setKeyword: (keyword) => dispatch(setKeyword(keyword)),
    setSnippet: (snippet) => dispatch(setSnippet(snippet)),
    setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
    setError: (error) => dispatch(setError(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
