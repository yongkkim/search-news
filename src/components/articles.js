import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import { connect } from "react-redux";
import { setError, setErrorMsg } from "../redux/actions/index";
import { device } from "../components/device";

const ArticleContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

const Section = styled.section`
  padding: 0 20%;
  margin-top: 120px;

  @media ${device.mobileM} {
    padding: 0 3%;
    margin-top: 100px;
  }
`;

const Title = styled.h3`
  margin: 0;
`;

const Container = styled.article`
  padding: 10px;
`;

const SubContainer = styled.div`
  display: flex;

  @media ${device.mobileM} {
    flex-direction: column;
  }
`;

const Link = styled.a`
  align-self: center;
  text-decoration: none;
  border: 1px solid #213fb9;
  padding: 5px;
  color: #213fb9;
  transition: background 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    background-color: #213fb9;
    color: white;
  }

  @media ${device.mobileM} {
    width: 100%;
    text-align: center;
  }
`;

const Content = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  flex: 1 1 0%;

  @media ${device.mobileRotate} {
    font-size: 11px;
  }
`;

const Aside = styled.aside`
  @media ${device.mobileM} {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 84px;

  @media ${device.mobileM} {
    width: inherit;
    object-fit: cover;
    height: unset;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  background-color: #cfcfcf;
  color: #cfcfcf;
  height: 1px;
`;

const Articles = ({
  currentArticles,
  loading,
  submit,
  topNews,
  setError,
  setErrorMsg,
}) => {
  useEffect(() => {
    if ((topNews || submit) && currentArticles.length === 0) {
      setError(true);
      setErrorMsg("No results are found. Please try different keywords");
    } else {
      setError(false);
      setErrorMsg("");
    }
  }, [currentArticles]);

  if (loading) {
    return <span>Loading...</span>;
  }

  const images = currentArticles.map((art) => {
    const metadata = submit ? art.multimedia[0] : art.media[0];
    if (!submit && metadata) {
      return metadata["media-metadata"][
        art.media[0]["media-metadata"].length - 1
      ];
    }

    if (submit && metadata) {
      return "https://static01.nyt.com/" + metadata.url;
    }

    return null;
  });

  return (
    <Section>
      <ArticleContainer>
        {currentArticles.map((art, index) => (
          <Fragment key={art.asset_id}>
            <li key={art.id}>
              <Container>
                <SubContainer>
                  {images[index] ? (
                    <Aside aria-label="article-image">
                      <Image src={submit ? images[index] : images[index].url} />
                    </Aside>
                  ) : (
                    <CropOriginalIcon
                      style={{ height: 84, width: 126 }}
                      aria-label="article-no-image"
                    />
                  )}
                  <Content>
                    <Title aria-label="article-title">
                      {submit ? art.headline.main : art.title}
                    </Title>
                    <p aria-label="article-abstract">{art.abstract}</p>
                  </Content>
                  <Link
                    href={art.url}
                    target="_blank"
                    aria-label="article-link"
                  >
                    visit to read
                  </Link>
                </SubContainer>
              </Container>
            </li>
            <Divider />
          </Fragment>
        ))}
      </ArticleContainer>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    currentArticles: state.currentArticles,
    loading: state.loading,
    submit: state.submit,
    topNews: state.topNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setError: (error) => dispatch(setError(error)),
    setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
