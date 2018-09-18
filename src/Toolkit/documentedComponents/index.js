export { default as Button } from './button';

export const NavBar = {
  component: (
    <p>todo...</p>
  ),
  examples: [
    <p>todo...</p>,
  ],
  usage: '//TODO',
  theming: '//TODO',
  sources: [{
    command: 'npm i --save @mybit-ui/button',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/button',
    name: 'bitsrc',
  }],
  antReferences: [{
    name: 'Button',
    url: 'https://ant.design/components/button/',
  }, {
    name: 'Dropdown',
    url: 'https://ant.design/components/button/',
  }],
};

export const Header = NavBar;
export const Menu = NavBar;
export const Footer = NavBar;
export const Card = NavBar;
