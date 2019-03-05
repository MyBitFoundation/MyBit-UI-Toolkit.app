import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button/lib';

import { withKnobs, text, boolean, number, color, select, optionsKnob as options, radios } from "@storybook/addon-knobs";

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
    .add('general button', () => (
        <Button
            active={boolean('Active', true)}
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
        >
            {text('Label', 'Button')}
        </Button>
    ), {
        knobs: {
            timestamps: true,
            escapeHTML: true
        }
    })
;