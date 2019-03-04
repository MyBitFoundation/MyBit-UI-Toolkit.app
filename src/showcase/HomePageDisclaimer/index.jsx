import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDisclaimer = styled.div`
  margin: 1em;
`;
const StyledSpan = styled.span`
  display: block;
`;

const HomePageDisclaimer = ({ bugsReportLink, featureSubmitLink, communityLink }) => (
  <StyledDisclaimer>
    <StyledSpan>
      This is a community driven project. The internal MyBit team is not responsible for the development of this application.
    </StyledSpan>
    <StyledSpan>
      To submit bugs click <a href={bugsReportLink} target="_blank" rel="noopener noreferrer">here.</a>
      To add a feature please fork the repo.
    </StyledSpan>
    <StyledSpan>
      To suggest a feature click <a href={featureSubmitLink} target="_blank" rel="noopener noreferrer">here.</a>
    </StyledSpan>
    <StyledSpan>
      To discuss this project with the community click <a href={communityLink} target="_blank" rel="noopener noreferrer">here.</a>
    </StyledSpan>
  </StyledDisclaimer>
);

HomePageDisclaimer.propTypes = {
  bugsReportLink: PropTypes.string,
  featureSubmitLink: PropTypes.string,
  communityLink: PropTypes.string,
};

HomePageDisclaimer.defaultProps = {
  bugsReportLink: 'https://github.com/MyBitFoundation/MyBit-Dropzone.tech/issues',
  featureSubmitLink: 'https://t.me/mybitio',
  communityLink: 'https://hq.mybit.io',
};

export default HomePageDisclaimer;
