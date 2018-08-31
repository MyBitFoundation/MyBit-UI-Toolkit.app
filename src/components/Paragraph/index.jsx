import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyBitParagraphStyle = styled.p`
  font-family: 'Roboto';
  color: ${props => props.styling.color};
  font-size: ${props => props.styling.fontSize};
`;

const MyBitParagraph = ({
  children, styling,
}) => (
  <MyBitParagraphStyle styling={styling}>
    {children}
  </MyBitParagraphStyle>
);

MyBitParagraph.propTypes = {
  styling: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
};

MyBitParagraph.defaultProps = {
  styling: {
    fontSize: '16px',
    color: '#ffffff',
  },
};

export default MyBitParagraph;
