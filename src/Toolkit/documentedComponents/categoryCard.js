import { CategoryCard } from '../../components/';
import demoImage from '../../images/category-cryptocurrency-atm.png'

const DocumentedCategoryCard = {
  component: (
    <CategoryCard image={demoImage} path={"#"} name={"Bitcoin ATM"} />
  ),
  examples: {
    content: [
        <CategoryCard image={demoImage} path={"#"} name={"Bitcoin ATM"} />
    ],
  },
  usage: `
  import demoImage from './image.png'
  <CategoryCard image={demoImage} path={"/path"} name={"Bitcoin ATM"} />
  `,
  theming: '',
  props: `
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/categoryCard',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/categoryCard',
    name: 'bitsrc',
  }],
};

export default DocumentedCategoryCard;
