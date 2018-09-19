import { Dropdown, Theme } from '../../components/';

const DocumentedDropdown = {
  component: (
    <Dropdown menu={['Option 1', 'Option 2', 'Option 3']} selected="Option 1" styling={Theme.dropdown} placement="bottomRight" trigger="hover" handleClick={() => {}} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Dropdown menu={['Activate on hover', 'Option 2', 'Option 3']} selected="Activate on hover" styling={Theme.dropdown} placement="bottomRight" trigger="hover" handleClick={() => {}} />,
      <Dropdown menu={['Activate on click', 'Option 2', 'Option 3']} selected="Activate on click" styling={Theme.dropdown} placement="bottomRight" trigger="click" handleClick={() => {}} />,
    ],
  },
  usage: `
    <Dropdown 
      menu={["Option 1", "Option 2", "Option 3"]} 
      selected="Option 1" 
      styling={Theme.dropdown} 
      placement="bottomRight" 
      trigger="hover" 
      handleClick={() => {}} 
    />`,
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/dropdown',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/dropdown',
    name: 'bitsrc',
  }],
};

export default DocumentedDropdown;
