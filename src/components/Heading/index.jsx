import PropTypes from 'prop-types';
import styled from 'styled-components';

const MyBitHeadingStyle = styled.div`
  h1, h2, h3,
  h4, h5, h6{
    font-family: 'Gilroy', 'Roboto';
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.styling.color};
  }
`;

const MyBitHeading = ({
  children, styling, size,
}) => {
  const Heading = `h${size}`;

  return (
    <MyBitHeadingStyle styling={styling}>
      <Heading>
        {children}
      </Heading>
    </MyBitHeadingStyle>
  );
};

MyBitHeading.propTypes = {
  styling: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

MyBitHeading.defaultProps = {
  styling: {
    color: '#ffffff',
  },
};

export default MyBitHeading;
