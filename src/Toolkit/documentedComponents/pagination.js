import { Theme, Pagination } from '../../components/';


const DocumentedPagination = {
  component: (
    <Pagination styling={Theme.pagination} defaultCurrent={6} total={500} />
  ),
  examples: {
    styling: `
      >div{
        margin: 5px;
      }
    `,
    content: [
      <Pagination styling={Theme.pagination} defaultCurrent={6} total={500} />,
    ],
  },
  usage: '<Pagination styling={Theme.pagination}/>',
  theming: '',
  sources: [{
    command: 'npm i --save @mybit-ui/pagination',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/pagination',
    name: 'bitsrc',
  }],
  antReferences: [],
};

export default DocumentedPagination;
