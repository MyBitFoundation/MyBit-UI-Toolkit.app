import { Button, Filter, Switch, Spin, Menu, Dropdown, Stats, StatCard, Pagination, Icon, ConnectionStatus, Input, Tooltip, Heading, NavBar, Header, Footer, Card } from './documentedComponents';

import MoreComponents from './more_components';

const Components = [...MoreComponents,
  {
    name: 'Input',
    details: Input,
  }, {
    name: 'ConnectionStatus',
    details: ConnectionStatus,
  }, {
    name: 'Switch',
    details: Switch,
  }, {
    name: 'Spin',
    details: Spin,
  }, {
    name: 'Filter',
    details: Filter,
  }, {
    name: 'Dropdown',
    details: Dropdown,
  }, {
    name: 'Menu',
    details: Menu,
  }, {
    name: 'Stats',
    details: Stats,
  }, {
    name: 'StatCard',
    details: StatCard,
  }, {
    name: 'Pagination',
    details: Pagination,
  }, {
    name: 'Icon',
    details: Icon,
  }, {
    name: 'Button',
    details: Button,
  }, {
    name: 'Heading',
    details: Heading,
  }, {
    name: 'Tooltip',
    details: Tooltip,
  }, {
    name: 'Navigation Bar',
    details: NavBar,
  }, {
    name: 'Header',
    details: Header,
  }, {
    name: 'Footer',
    details: Footer,
  }, {
    name: 'Card',
    details: Card,
  },
];

export default Components;
