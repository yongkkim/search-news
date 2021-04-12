import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setCurrentPage } from "../redux/actions/index";
import { device } from "../components/device";
const Pages = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin-bottom: 10px;
  padding: 0;
`;

const Page = styled.li`
  display: flex;
  border: 1px solid #213fb9;
  color: #213fb9;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: background 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    background-color: #213fb9;
    color: white;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Pagination = ({ articles, setCurrentPage }) => {
  const articlesPerPage = 4;
  const totalArticles = articles.length;
  const pageNumbers = [];

  // This for loop is to create how many pages are needed for retrieved articles.
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pages>
      {pageNumbers.map((num) => (
        <Page
          aria-label="pagination"
          onClick={() => setCurrentPage(num)}
          key={num}
        >
          {num}
        </Page>
      ))}
    </Pages>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (num) => dispatch(setCurrentPage(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
