import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledNavBar = styled.div`
  height: 100vh;

  .active{
    text-decoration: none;
  }

  h1{
    font-family: 'Roboto';
    font-weight: 600;
    padding: 20px;
    font-size: 25px;
  }

  li{
    list-style-type: none;
    font-size: 18px;
    padding: 12px 0px;
    position: relative;

    & a{
      color: rgba(0,0,0,.65);
    }

    .active{
      color: #1890ff;
      position: relative;
      font-weight: bold;
    }
  }
`;

const NavBar = ({ title, examples }) => (
  <StyledNavBar>
    <NavLink to="/"><h1>{title}</h1></NavLink>
    <ul>
      {examples.map(example => (
        <li key={example.name}>
          <NavLink to={`/${example.name}`}>
            {example.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </StyledNavBar>
);

NavBar.propTypes = {
  examples: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavBar;
