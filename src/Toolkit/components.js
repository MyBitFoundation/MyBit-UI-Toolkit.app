import { Button, Switch, Icon, ConnectionStatus, Input, Tooltip, Heading, NavBar, Header, Menu, Footer, Card } from './documentedComponents';

import MoreComponents from './more_components'

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
    name: 'Menu',
    details: Menu,
  }, {
    name: 'Footer',
    details: Footer,
  }, {
    name: 'Card',
    details: Card,
  },
];

export default Components;
