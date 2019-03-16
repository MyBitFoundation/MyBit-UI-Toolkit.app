import {addDecorator, addParameters, configure} from '@storybook/react';
import '@storybook/addon-console';
import {withInfo} from "@storybook/addon-info";
import { create } from '@storybook/theming';
import { jsxDecorator } from 'storybook-addon-jsx';

function loadStories() {
    require('../packages/index.stories');
    // You can require as many stories as you need.
}

addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'Storybook',
            brandUrl: 'http://localhost:9001'
        }),
        isFullscreen: false,
        panelPosition: 'right',
        showNav: true,
        showPanel: true,
        sortStoriesByKind: true,
        /**
         * regex for finding the hierarchy separator
         * @example:
         *   null - turn off hierarchy
         *   /\// - split by `/`
         *   /\./ - split by `.`
         *   /\/|\./ - split by `/` or `.`
         * @type {Regex}
         */
        hierarchySeparator: null,
        /**
         * regex for finding the hierarchy root separator
         * @example:
         *   null - turn off multiple hierarchy roots
         *   /\|/ - split by `|`
         * @type {Regex}
         */
        hierarchyRootSeparator: null,
        /**
         * sidebar tree animations
         * @type {Boolean}
         */
        sidebarAnimations: true,
        /**
         * id to select an addon panel
         * @type {String}
         */
        selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
        /**
         * enable/disable shortcuts
         * @type {Boolean}
         */
        enableShortcuts: false, // true by default
    }
});

addDecorator(jsxDecorator);
addDecorator(withInfo);

configure(loadStories, module);