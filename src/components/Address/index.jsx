import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Icon } from 'antd';
import Jazzicon from 'react-jazzicon';
import styled from 'styled-components';

const antIcon = <Icon type="loading" spin />;

const AddressWrapper = styled.div`
    height: 39px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 120px;
`;
const AddressLoader = styled.div`
    height: 39px;
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
    width: max-content;
`;
const AddressText = styled.p`
    font-size: 14px;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 70%;
    margin: 0px 0px;
`;

const Address = ({ userName, className }) => (
  <div className={className}>
    {!userName ? (
      <AddressLoader>
        <Spin indicator={antIcon} />
        <span>Loading account</span>
      </AddressLoader>
    ) : (
      <AddressWrapper>
        <Jazzicon diameter={39} />
        <AddressText>{userName}</AddressText>
      </AddressWrapper>
    )}
  </div>
);

Address.defaultProps = {
  userName: undefined,
};

Address.propTypes = {
  userName: PropTypes.string,
  className: PropTypes.string,
};

Address.defaultProps = {
  className: '',
};

export default Address;
