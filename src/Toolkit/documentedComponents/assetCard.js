import { AssetCard } from '../../components/';
import demoImage from '../../images/category-cryptocurrency-atm.png'

const DocumentedAssetCard = {
  component: (
    <AssetCard 
        funded={"1000"}
        goal={"10000"} 
        city={"Sofia"} 
        country={"Bulgaria"} 
        name={"Bitcoin ATM"} 
        category={"#"} 
        clickHandler={() => {}}
        id={"#"}
        backgroundImage={demoImage}
        fundingStage={"3"}
    />
  ),
  examples: {
    content: [
        <AssetCard 
            funded={"6120"}
            goal={"10000"} 
            city={"Sofia"} 
            country={"Bulgaria"} 
            name={"Bitcoin ATM"} 
            category={"#"} 
            clickHandler={() => {}}
            id={"#"}
            backgroundImage={demoImage}
            fundingStage={"2"}
            pastDate={true}
            key={'example1'}
        />,
        <AssetCard 
            funded={"3223"}
            goal={"10000"} 
            city={"Sofia"} 
            country={"Bulgaria"} 
            name={"Bitcoin ATM"} 
            category={"#"} 
            clickHandler={() => {}}
            id={"#"}
            backgroundImage={demoImage}
            fundingStage={"2"}
            pastDate={false}
            key={'example2'}
        />,
        <AssetCard 
            funded={"1000"}
            goal={"10000"} 
            city={"Sofia"} 
            country={"Bulgaria"} 
            name={"Bitcoin ATM"} 
            category={"#"} 
            clickHandler={() => {}}
            id={"#"}
            backgroundImage={demoImage}
            fundingStage={"3"}
            pastDate={false}
            key={'example3'}
        />,
    ],
  },
  usage: `
    //expired asses (red progress bar)
    <AssetCard 
        funded={"6120"}
        goal={"10000"} 
        city={"Sofia"} 
        country={"Bulgaria"} 
        name={"Bitcoin ATM"} 
        category={"#"} 
        clickHandler={() => {}}
        id={"#"}
        backgroundImage={demoImage}
        fundingStage={"2"}
        pastDate={true}
    />,
    //active asset (blue progress bar)
    <AssetCard 
        funded={"3223"}
        goal={"10000"} 
        city={"Sofia"} 
        country={"Bulgaria"} 
        name={"Bitcoin ATM"} 
        category={"#"} 
        clickHandler={() => {}}
        id={"#"}
        backgroundImage={demoImage}
        fundingStage={"2"}
        pastDate={false}
    />,
    //funded asset (green progress bar)
    <AssetCard 
        funded={"1000"}
        goal={"10000"} 
        city={"Sofia"} 
        country={"Bulgaria"} 
        name={"Bitcoin ATM"} 
        category={"#"} 
        clickHandler={() => {}}
        id={"#"}
        backgroundImage={demoImage}
        fundingStage={"3"}
    />,
  `,
  theming: '',
  props: `
  funded: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  id: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  fundingStage: PropTypes.string.isRequired,
  pastDate: PropTypes.bool.isRequired,
  `,
  sources: [{
    command: 'npm i --save @mybit-ui/address',
    name: 'npm',
  }, {
    command: 'bit i --save @mybit-ui/address',
    name: 'bitsrc',
  }],
};

export default DocumentedAssetCard;
