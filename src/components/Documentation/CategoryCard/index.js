import React from 'react';
import { Showcase, EditPageLink, InstallationSection, PropsTable } from '../../Common/';
import { CategoryCard } from '../../../showcase'
import demoImage from '../images/category-cryptocurrency-atm.png';
import { Helmet } from "react-helmet";

const EDIT_PAGE_LINK = "/"

const CategoryCardPage = (props) => (
    <div>
        <Helmet>
            <title>{props.pageTitle}</title>
        </Helmet>
    <h1>CategoryCard <EditPageLink editLink={EDIT_PAGE_LINK} /></h1>
    <p>A card for an Asset category (MyBit GO)</p>

    <InstallationSection name="CategoryCard" />

    <h1>Examples</h1>
    <Showcase data={assetTitleExample} />

    <h1>Props</h1>
    <PropsTable data={assetTitleProps} />
</div>
)

export default CategoryCardPage

//example data
const assetTitleExample = {
    component: (
        <div>
            <CategoryCard image={demoImage} path={"/category-card"} name={"Bitcoin ATM"} />
        </div>
    ),
    description: (
        <p>An example with all props</p>
    ),
    code: `<CategoryCard image={demoImage} path={"/path"} name={"Bitcoin ATM"} />`,
    display: 'inline-block'
}

//props data
const assetTitleProps = [{
    key: '1',
    property: 'image',
    description: `the background image of the card`,
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '2',
    property: 'path',
    description: 'the url of the category',
    type: 'string',
    required: 'true',
    default: '-'
},
{
    key: '3',
    property: 'name',
    description: 'the name of the category',
    type: 'string',
    required: 'true',
    default: '-'
}];