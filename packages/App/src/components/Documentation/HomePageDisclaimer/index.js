import React from 'react';
import { Helmet } from "react-helmet";
import { Row, Col } from 'antd';
import { PropsTable, Showcase, EditPageLink, InstallationSection } from '../../Common';
import HomePageDisclaimer from '@mybit/ui.home-page-disclaimer';

const EDIT_PAGE = "https://github.com/MyBitFoundation/MyBit-UI.website/blob/develop/src/components/Documentation/HomePageDisclaimer/index.js"
const DisclaimerExample = {
  component: <HomePageDisclaimer />,
  description: <p>Homepage Disclaimer</p>,
  code: `<HomePageDisclaimer />`,
  display: 'block',
};
const propsData = [
  {
    key: '1',
    property: 'bugsReportLink',
    description: 'Link to bug reporting page',
    type: 'string',
    required: 'False',
    default: 'https://github.com/MyBitFoundation/MyBit-Dropzone.tech/issues',
  },
  {
    key: '2',
    property: 'featureSubmitLink',
    description: 'Link to feature submission page',
    type: 'string',
    required: 'False',
    default: 'https://t.me/mybitio',
  },
  {
    key: '3',
    property: 'communityLink',
    description: 'Link to community page',
    type: 'string',
    required: 'False',
    default: 'https://hq.mybit.io',
  },
];

export default (props) => (
  <div>
      <Helmet>
          <title>{props.pageTitle}</title>
      </Helmet>
      <h1>Homepage Disclaimer <EditPageLink editLink={EDIT_PAGE} /></h1>
      <p>This component is used on the homepage.</p>
      <InstallationSection url={props.url} />

      <h1>Examples</h1>
      <Row gutter={16}>
          <Col span={24}>
              <h3>Sample Disclaimer</h3>
              <Showcase data={DisclaimerExample} />
          </Col>
      </Row>


      <h1>Props</h1>
      <PropsTable data={propsData} />

  </div>
);
