import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button/build';
import Img from './Img/build';
import Icon from './Icon/build';
import Address from './Address/build';
import Alert from './Alert/build';
import AnimatedLogo from './AnimatedLogo/build';
import AssetDeadlineStatus from './AssetDeadlineStatus';
import AssetInvestmentStatus from './AssetInvestmentStatus';

import { withKnobs, text, boolean, number, color, select, object, date, optionsKnob as options, radios } from "@storybook/addon-knobs";

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
                "color": "black",
                "colorHover": "#40a9ff",
                "colorActive": "#096dd9",
                "backgroundColorHover": "transparent",
                "backgroundColorActive": "transparent",
                "borderColor": "black",
                "borderColorHover": "#40a9ff",
                "borderColorActive": "#096dd9"
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
;