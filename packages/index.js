import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Img from './Img';
import Icon from './Icon';
import Address from './Address';
import Alert from './Alert';
import AnimatedLogo from './AnimatedLogo';
import AssetDeadlineStatus from './AssetDeadlineStatus';
import AssetInvestmentStatus from './AssetInvestmentStatus';
import Tooltip from './Tooltip';
import StatCard from './StatCard';
import Spin from './Spin';
import SectionHeader from './SectionHeader';
import ProgressBar from './ProgressBar';
import PortfolioValueItem from './PortfolioValueItem';
import PortfolioRevenueItem from './PortfolioRevenueItem';
import PortfolioDropdown from './PortfolioDropdown';
import Pagination from './Pagination';
import NavigationOption from './NavigationOption';
import Logo from './Logo';
import ListItem from './ListItem';
import List from './List';
import Filter from './Filter';
import ExchangeRate from './ExchangeRate';
import Dropdown from './Dropdown';
import ConnectionStatus from './ConnectionStatus';
import CategoryCard from './CategoryCard';
import BancorContainer, { Consumer as BancorConsumer } from './BancorContainer';
import AssetTitle from './AssetTitle';
import AccountInfo from './AccountInfo';
import AssetCard from './AssetCard';
import BancorWidgetButton from './BancorWidgetButton';
import Bounty from './Bounty';

import starIcon from '@ant-design/icons/svg/fill/star.svg';

import { withKnobs, text, boolean, number, color, select, array, object, date, optionsKnob as options, radios } from "@storybook/addon-knobs";

function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp);
}

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

stories
    .addParameters({
        info: {
            inline: true,
            header: false,
            styles: {
            },
        },
    })
    .add('Button', () => (
        <Button
            active={boolean('Active', false)}
            color={options('Color', {
                    Blue: 'blue',
                    Green: 'green'
                }, 'blue',
                   {
                       display: 'inline-radio'
               })}
            type={options('Type', {
                    Outline: 'outline',
                    Solid: 'solid'
                }, 'outline', {
                    display: 'inline-radio'
                })}
            size={options('Size', {
                Large: 'large',
                Small: 'small',
                Default: 'default'
            }, 'default', {
                display: 'inline-radio'
            })}
            loading={boolean('Loading', false)}
            ghost={boolean('Ghost', false)}
            block={boolean('Block', false)}
            icon={text('Icon', 'link')}
            styling={object('Styling Object', {
                "color": color('Text Color', "black"),
                "colorHover": color('Color Hover', "#40a9ff"),
                "colorActive": color('Color Active', "#096dd9"),
                "backgroundColorHover": color('Background Color Hover', "transparent"),
                "backgroundColorActive": color('Background Color Active', "transparent"),
                "borderColor": color('Border Color', "black"),
                "borderColorHover": color('Border Color Hover', "#40a9ff"),
                "borderColorActive": color('Border Color Active', "#096dd9")
            })}
        >
            {text('Label', 'Button')}
        </Button>
    ), {
        knobs: {
            timestamps: true,
            escapeHTML: true
        }
    })

    .add('Image', () => (
        <Img
            src={text('Source', 'https://via.placeholder.com/350x150')}
            alt={text('Alternative Information', 'Sample Image')}
            className={text('Class', '')}
        />
    ))

    .add('Icon', () => (
        <Icon
            isRight={boolean('isRight', true)}
            type={text('Type', 'link')}
        />
    ))

    .add('Address', () => (
        <Address
            userName={text('UserName', '0xA91BDAF22')}
            className={text('Class', '')}
        />
    ))

    .add('Alert', () => (
        <Alert
            type={options('Type', {
                Info: 'info',
                Success: 'success',
                Warning: 'warning',
                Error: 'error'
            }, 'info', {
                display: 'select'
            })}
            message={text('Message', 'Info Message')}
            handleAlertClosed={() => {}}
        />
    ))

    .add('Animated Logo', () => (
        <AnimatedLogo
            size={text('Size', '100px')}
            primaryColor={color('Primary Color', '#001358')}
            secondaryColor={color('Secondary Color', 'rgb(24, 144, 255)')}
            animationSpeed={text('Animation Speed', '2200ms')}
            animationIterationCount={text('Animation Iteration Count', "1")}
        />
    ))

    .add('Asset Deadline Status', () => (
        <AssetDeadlineStatus
            status={options('Type', {
                Expired: 'expired',
                Active: 'active',
                Funded: 'funded'
            }, 'expired', {
                display: 'select'
            })}

            deadline={myDateKnob('Deadline', new Date(2017, 7, 24, 10, 33, 30))}
        />
    ))

    .add('Asset Investment Status', () => (
        <AssetInvestmentStatus
            raised={text('Raised', "322.38 USD")}
            goal={text('Goal', "$100,000.00")}
            investors={number('Number of Investors', 3)}
        />
    ))

    .add('Tooltip', () => (
        <div>
            <Tooltip
                title={text('Title', 'prompt text')}
                arrowPointAtCenter={boolean('Arrow Point At Center', false)}
                placement={options('Placement', {
                    Left: 'left',
                    Right: 'right',
                    Top: 'top',
                    Bottom: 'bottom',
                    TopLeft: 'topLeft',
                    TopRight: 'topRight',
                    BottomLeft: 'bottomLeft',
                    BottomRight: 'bottomRight',
                    LeftTop: 'leftTop',
                    LeftBottom: 'leftBottom',
                    RightTop: 'rightTop'
                }, 'top', {
                    display: 'select'
                })}
            >
                <Button>Button</Button>
            </Tooltip>
        </div>
    ))

    .add('Stat Card', () => (
        <StatCard
            key="StatCard-example-1"
            stat={object('Stat', {
                name: text('Name', 'Statistic...'),
                value: text('Value', '...with value')
            })}
        />
    ))

    .add('Spin', () => (
        <Spin
            styling={object('Styling Object', {
                color: color('Color', 'red')
            })}
            size={options('Size', {
                Small: 'small',
                Default: 'default',
                Large: 'large'
            }, 'small', {
                display: 'select'
            })}
        />
    ))

    .add('Section Header with size as number', () => (
        <SectionHeader
            size={number('Size', 1, {
                range: true,
                min: 1,
                max: 6,
                step: 1,
            })}
            dividerColor={color('Divider Color', '#fb3448')}
            textColor={color('Text Color', '#383838')}
            squareSize={number('Square Size', 10)}
            position={options('Position', {
                Left: 'left',
                Center: 'center',
                Right: 'right',
            }, 'center', {
                display: 'select'
            })}
        >
            {text('Label', 'Crypto Currency')}
        </SectionHeader>
    ))

    .add('Section Header with size as string', () => (
        <SectionHeader
            size={text('Size', '64px')}
            dividerColor={color('Divider Color', '#fb3448')}
            textColor={color('Text Color', '#383838')}
            squareSize={number('Square Size', 10)}
            position={options('Position', {
                Left: 'left',
                Center: 'center',
                Right: 'right',
            }, 'center', {
                display: 'select'
            })}
        >
            {text('Label', 'Crypto Currency')}
        </SectionHeader>
    ))

    .add('Progress Bar', () => (
        <ProgressBar
            percent={number('Percent', 50, {
                range: true,
                min: 0,
                max: 100,
                step: 1,
            })}
            status={options('Status', {
                Success: 'success',
                Exception: 'exception',
                Active: 'active'
            }, 'exception', {
                display: 'select'
            })}
            showInfo={boolean('Show Info', false)}
            styling={object('Styling Object', {
                "color": color('Color', "#ccc"),
                "exceptionColor": color('Exception Color', "#f5222d"),
                "successColor": color('Success Color', "#00F281"),
                "progressColor": color('Progress Color', "#1890ff")
            })}
        />
    ))

    .add('Portfolio Value Item', () => (
        <PortfolioValueItem
            assetID={text('Asset ID', "asset-title-value")}
            name={text('name', "Asset Title")}
            ownership={text('Percentage of asset owned', "11.86")}
            value={text('Value of ownership percentage', '196.68')}
        />
    ))

    .add('Portfolio Revenue Item', () => (
        <PortfolioRevenueItem
            assetID={text('Asset ID', "asset-title-value")}
            name={text('name', "Asset Title")}
            monthlyRevenue={number('Monthly Revenue', 1392.54)}
            totalRevenue={number('Total Revenue', 96.68)}
        />
    ))

    .add('Portfolio Dropdown', () => (
        <PortfolioDropdown
            name={text('Name', "Sample")}
            icon={text('Icon', "line-chart")}
            color={color('Color', "blue")}
            portfolioData={array('Portfolio Data', [
                object('Asset 1', {
                    assetID: 'asset-id-1',
                    name: 'Example Asset',
                    data: {
                        ownership: '22',
                        value: '14081.25',
                    },
                }),
                object('Asset 2', {
                    assetID: 'asset-id-2',
                    name: 'Example Asset 2',
                    data: {
                        ownership: '22',
                        value: '14081.25',
                    },
                }),
                object('Asset 3', {
                    assetID: 'asset-id-3',
                    name: 'Example Asset 3',
                    data: {
                        ownership: '22',
                        value: '14081.25',
                    },
                },),
            ])}
            total={text('Total', "42243.75")}
        />
    ))

    .add('Pagination', () => (
        <Pagination
            styling={object('Styling', {
                color: color('Color', 'rgba(0, 0, 0, 0.65)'),
                borderColor: color('Border Color', '#d9d9d9'),
                backgroundColor: color('Background Color', '#ffffff'),
                itemActiveBorderColor: color('Item Active Border Color', 'blue'),
                itemHoverBorderColor: color('Item Hover Border Color', 'blue'),
                disabledItemBorderColor: color('Disabled Item Border Color', '#d9d9d9'),
                disabledItemColor: color('Disabled Item Color', 'rgba(0, 0, 0, 0.25)'),
            })}
            current={number('Current Page Number', 1)}
            defaultCurrent={number('Default Initial Page Number', 1)}
            defaultPageSize={number('Default Page Size', 10)}
            hideOnSinglePage={boolean('Hide on Single Page', false)}
            pageSize={number('Page Size', 10)}
            pageSizeOptions={array('Page Size Options', ['10', '20', '30', '40'])}
            showQuickJumper={boolean('Show Quick Jumper', false)}
            showSizeChanger={boolean('Show Size Changer', false)}
            simple={boolean('Simple Mode', false)}
            size={text('Size of Pagination', "small")}
            total={number('Total Data Items', 100)}
        />
    ))

    .add('Navigation Option', () => (
        <BrowserRouter>
            <NavigationOption
                name={text('Name', "Not Selectable")}
                icon={starIcon}
                selectable={boolean('Selectable', false)}
                selected={boolean('Selected', false)}
                url={text('URL', "#")}
            />
        </BrowserRouter>
    ))

    .add('Logo', () => (
        <div style={{backgroundColor: '#2e58db', width: '200px'}}>
            <Logo
                className={text('Class Name', "classname")}
            />
        </div>
    ))

    .add('List', () => (
        <List
            component={ListItem}
            items={array('Items', ['Item 1', 'Item2', 'Item3'])}
        />
    ))

    .add('Filter', () => (
        <Filter
            checked={boolean('Checked', false)}
            styling={object('Styling', {
                "checkedColor": color('Checked Color', "#1890ff"),
                "checkedBackgroundColor": color('Checked Background Color', "#e6f7ff"),
                "checkedBorderColor": color('Checked Border Color', "#91d5ff"),
                "uncheckedBackgroundColor": color('UnChecked Background Color', "transparent"),
                "uncheckedBorderColor": color('UnChecked Border Color', "transparent"),
                "uncheckedColor": color('Unchecked Color', "rgba(0, 0, 0, 0.65)"),
                "hoverColor": color('Hover Color', "#1890ff")
            })}
        >
            Filter one
        </Filter>
    ))

    .add('Exchange Rate', () => (
        <ExchangeRate
            mybitPrice={number('price of MYB in USD', 0.321)}
            USD_MYB_SYMBOL={text('Symbol to represent the price ratio', "USD/MYB")}
        />
    ))

    .add('Dropdown', () => (
        <Dropdown
            styling={object('Styling Object', {
                "color": color('Color', "#1890ff"),
                "colorHover": color('Color Hover', "#40a9ff"),
                "submenuColorHover": color('Submenu Color Hover', "#1890ff"),
                "submenuBackgroundColorHover": color('Submenu Background Color Hover', "#e6f7ff")
            })}
            menu={array('Menu', ['Option 1', 'Option 2', 'Option 3'])}
            selected={text('Selected Item from Menu', "Option 1")}
            placement={options('Placement', {
                TopLeft: 'topLeft',
                TopRight: 'topRight',
                TopCenter: 'topCenter',
                BottomLeft: 'bottomLeft',
                BottomRight: 'bottomRight',
                BottomCenter: 'bottomCenter'
            }, 'topCenter', {
                display: 'select'
            })}
            trigger={options('Trigger', {
                Click: 'click',
                Hover: 'hover',
                ContextMenu: 'contextMenu'
            }, 'hover', {
                display: 'select'
            })}
            handleClick={() => {}}
        />
    ))

    .add('Connection Status', () => (
        <ConnectionStatus
            loading={boolean('Loading', false)}
            network={text('Network', "ropsten")}
        />
    ))

    .add('Category Card', () => (
        <BrowserRouter>
            <CategoryCard
                image={starIcon}
                path={text('Path', "/path")}
                name={text('Name', "Bitcoin ATM")}
            />
        </BrowserRouter>
    ))

    .add('Bancor Container', () => (
        <BancorContainer>
            <BancorConsumer>
                {bancor => (
                    <React.Fragment>
                        <Button onClick={() => bancor.initBancor()}>GET MYB</Button>
                        <Button onClick={() => bancor.initBancor({
                            baseCurrencyId: "5937d635231e97001f744267",
                            pairCurrencyId: "5937d635231e97001f744267",
                            displayCurrency: "ETH",
                            operation: "buy",
                        })}>GET ETH</Button>
                    </React.Fragment>
                )}
            </BancorConsumer>
        </BancorContainer>
    ))

    .add('Asset Title', () => (
        <AssetTitle
            assetName={text('Asset Name', "Bitcoin ATM")}
            city={text('City', "Sofia")}
            country={text('Country', "Bulgaria")}
            className={text('Class', '')}
        />
    ))

    .add('Account Info', () => (
        <AccountInfo
            myBitBalance={text('MyBit Balance', "20")}
            ethBalance={text('Eth Balance', "8")}
            userName={text('Username', "0xDA2F8123")}
        />
    ))

    .add('Asset Card', () => (
        <BrowserRouter>
            <AssetCard
                funded={text('Funded', "6120")}
                goal={text('Goal', "10000")}
                city={text('City', "Sofia")}
                country={text('Country', "Bulgaria")}
                name={text('Name', "Bitcoin ATM")}
                category={text('Category', "#")}
                clickHandler={() => {}}
                id={text('ID', "#")}
                backgroundImage={starIcon}
                fundingStage={options('Funding Stage', {
                    One: "1",
                    Two: "2",
                    Three: "3",
                    Four: "4"
                }, '1', {
                    display: 'select'
                })}
                pastDate={boolean('Past Date', true)}
            />
        </BrowserRouter>
    ))

    .add('Bancor Widget Button', () => (
        <BancorWidgetButton
            type={number('Type', 1)}
            baseCurrencyId={text('Base Currency ID', "5b164627ae2482321708eb93")}
            pairCurrencyId={text('Pair Currency ID', "5937d635231e97001f744267")}
            primaryColor={color('Primary Color', "#1890ff")}
            displayCurrency={text('Display Currency', "ETH")}
            operation={options('Operation', {
                Buy: "buy",
                Sell: "sell"
            }, "buy", {
                display: 'select'
            })}
        >
            {text('Title', 'Custom Title')}
        </BancorWidgetButton>
    ))

    .add('Bounty', () => (
        <Bounty
            createdAt={date('Created At', new Date('Jan 20 2017'))}
            labels={array('Labels', ['Bounty'])}
            merged={boolean('Merged', false)}
            mybitInUsd={text('MyBit In USD', "1.21")}
            repoName={text('Repo Name', "MyBit-Go.website")}
            repoUrl={text('Repo URL', "https://github.com/MyBitFoundation/MyBit-Go.website")}
            title={text('Issue Description', "Reduce balance to only four decimals")}
            tokenSymbol={text('Token Symbol', "MYB")}
            url={text('Issue URL', "https://github.com/MyBitFoundation/MyBit-Go.website/issues/48")}
            value={text('Prize Value', 50)}
            showAmountInCrypto={boolean('Show Amount In Crypto', false)}
        />
    ))
;