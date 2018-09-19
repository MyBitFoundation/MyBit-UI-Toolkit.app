import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledNavBar = styled.div`
  height: 100vh;
  background-color: white;

  .active{
    text-decoration: none;
  }

  h1 a{
    font-family: 'Roboto';
    font-weight: 600;
    padding: 10px;
    font-size: 16px;
    color: rgba(0,0,0,.65);
    margin-top: 20px;
    display: block;

    &:focus{
      text-decoration: none;
    }
  }

  li{
    list-style-type: none;
    font-size: 14px;
    padding: 7px 0px;
    position: relative;

    & a{
      color: rgba(0,0,0,.65);
    }

    .active{
      color: #1890ff;
      padding-left: 5px;
      border-left: 3px solid #1890ff;
      position: relative;
      font-weight: bold;
    }
  }
`;

const NavBar = ({ title, examples, handleMobileMenu }) => (
  <StyledNavBar>
    <NavLink to="/"><h1>{title}</h1></NavLink>
    <ul>
      {examples.map(example => (
        <li key={example.name}>
          <NavLink to={`/${example.name}`} onClick={handleMobileMenu}>
            {example.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </StyledNavBar>
);

NavBar.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  handleMobileMenu: PropTypes.func.isRequired,
};

export default NavBar;
