import {addDecorator, addParameters, configure} from '@storybook/react';
import '@storybook/addon-console';
import {withInfo} from "@storybook/addon-info";

function loadStories() {
    require('../packages/index.js');
    // You can require as many stories as you need.
}

addParameters({
    options: {
        /**
         * name to display in the top left corner
         * @type {String}
         */
        name: 'Storybook',
        /**
         * URL for name in top left corner to link to
         * @type {String}
         */
        url: 'http://localhost:9001',
        /**
         * show story component as full screen
         * @type {Boolean}
         */
        goFullScreen: false,
        /**
         * display panel that shows a list of stories
         * @type {Boolean}
         */
        showStoriesPanel: true,
        /**
         * display panel that shows addon configurations
         * @type {Boolean}
         */
        showAddonPanel: true,
        /**
         * display floating search box to search through stories
         * @type {Boolean}
         */
        showSearchBox: false,
        /**
         * show addon panel as a vertical panel on the right
         * @type {Boolean}
         */
        addonPanelInRight: false,
        /**
         * sorts stories
         * @type {Boolean}
         */
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
    },
});

addDecorator(withInfo);

configure(loadStories, module);