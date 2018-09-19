export { default as Button } from './button';
export { default as Input } from './input';
export { default as Heading } from './heading';
export { default as Tooltip } from './tooltip';
export { default as ConnectionStatus } from './connectionStatus';
export { default as Switch } from './switch';
export { default as Icon } from './icon';
export { default as Pagination } from './pagination';
export { default as StatCard } from './statCard';
export { default as Stats } from './stats';
export { default as ExchangeRate } from './exchangeRate';
export { default as PortfolioRevenueItem } from './portfolioRevenueItem'

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
