import ButtonsPage from './Buttons'
import ShowcasePage from './Showcase'
import AddressPage from './Address';
import AccountInfoPage from './AccountInfo'
import BountyPage from './Bounty'
import AlertPage from './Alert'
import ButtonPage from './Button'
import ConnectionStatusPage from './ConnectionStatus'
import DropdownPage from './Dropdown'
import FilterPage from './Filter'
import HeadingPage from './Heading'
import IconPage from './Icon'
import ImgPage from './Img'
import InputPage from './Input'
import ListPage from './List'
import ListItemPage from './ListItem'
import MenuPage from './Menu'
import PaginationPage from './Pagination'
import SpinPage from './Spin'
import StatsPage from './Stats'
import StatCardPage from './StatCard'
import SwitchPage from './Switch'
import PortfolioDropdownPage from './PortfolioDropdown'
import AssetTitlePage from './AssetTitle'
import AssetDeadlineStatusPage from './AssetDeadlineStatus'
import AssetInvestmentStatusPage from './AssetInvestmentStatus' 
import AssetCardPage from './AssetCard' 
import CategoryCardPage from './CategoryCard'
import ExchangeRatePage from './ExchangeRate'
import LogoPage from './Logo'
import MyBitGoHeaderPage from './MyBitGoHeader'
import ProgressBarPage from './ProgressBar'
import NavigationOptionPage from './NavigationOption'
import NavigationBarPage from './NavigationBar'
import PortfolioRevenueItemPage from './PortfolioRevenueItem'
import PortfolioValueItemPage from './PortfolioValueItem'
import TotalPortfolioValuePage from './TotalPortfolioValue'
import TotalPortfolioRevenuePage from './TotalPortfolioRevenue'
import BancorWidgetButtonPage from './BancorWidgetButton'

import { 
    GENERAL,
    FEEDBACK,
    NAVIGATION,
    FORMS,
    ASSETS,
    USER,
    WIDGETS,
    TEMPLATES,
    LIBRARY_COMPONENTS
 } from './categories'
import { moreDocumentationRoutes } from './more_components'

export { BountyPage, ButtonsPage }

const documentationRoutes = [
    ...moreDocumentationRoutes,
    {
        title: "Showcase",
        url: "showcase",
        component: ShowcasePage,
        category: LIBRARY_COMPONENTS
    },
    {
        title: "TotalPortfolioValue",
        url: "total-portfolio-value",
        component: TotalPortfolioValuePage,
        category: ASSETS
    },
    {
        title: "TotalPortfolioRevenue",
        url: "total-portfolio-revenue",
        component: TotalPortfolioRevenuePage,
        category: ASSETS
    },
    {
        title: "PortfolioRevenueItem",
        url: "portfolio-revenue-item",
        component: PortfolioRevenueItemPage,
        category: ASSETS
    },
    {
        title: "PortfolioValueItem",
        url: "portfolio-value-item",
        component: PortfolioValueItemPage,
        category: ASSETS
    },
    {
        title: "NavigationBar",
        url: "navigation-bar",
        component: NavigationBarPage,
        category: NAVIGATION
    },
    {
        title: "NavigationOption",
        url: "navigation-option",
        component: NavigationOptionPage,
        category: NAVIGATION
    },
    {
        title: "ProgressBar",
        url: "progress-bar",
        component: ProgressBarPage,
        category: GENERAL
    },
    {
        title: "MyBitGoHeader",
        url: "mybitgo-header",
        component: MyBitGoHeaderPage,
        category: TEMPLATES
    },
    {
        title: "Logo",
        url: "logo",
        component: LogoPage,
        category: GENERAL
    },
    {
        title: "ExchangeRate",
        url: "exchange-rate",
        component: ExchangeRatePage,
        category: GENERAL
    },
    {
        title: "CategoryCard",
        url: "category-card",
        component: CategoryCardPage,
        category: ASSETS
    },
    {
        title: "AssetCard",
        url: "asset-card",
        component: AssetCardPage,
        category: ASSETS
    },
    {
        title: "AssetInvestmentStatus",
        url: "asset-investment-status",
        component: AssetInvestmentStatusPage,
        category: ASSETS
    },
    {
        title: "AssetDeadlineStatus",
        url: "asset-deadline-status",
        component: AssetDeadlineStatusPage,
        category: ASSETS
    },
    {
        title: "AssetTitle",
        url: "asset-title",
        component: AssetTitlePage,
        category: ASSETS
    },
    {
        title: "AccountInfo",
        url: "account-info",
        component: AccountInfoPage,
        category: USER
    },
    {
        title: "Address",
        url: "address",
        component: AddressPage,
        category: USER
    },
    {
        title: "Buttons",
        url: "buttons",
        component: ButtonPage,
        category: GENERAL
    },
    {
        title: "Bounty",
        url: "bounty",
        component: BountyPage,
        category: TEMPLATES
    },
    {
        title: "Alert",
        url: "alert",
        component: AlertPage,
        category: FEEDBACK
    },
    {
        title: "Connection status",
        url: "connection-status",
        component: ConnectionStatusPage,
        category: FEEDBACK
    },
    {
        title: "Dropdown",
        url: "dropdown",
        component: DropdownPage,
        category: NAVIGATION
    },
    {
        title: "Filter",
        url: "filter",
        component: FilterPage,
        category: GENERAL
    },
    {
        title: "Heading",
        url: "heading",
        component: HeadingPage,
        category: GENERAL
    },
    {
        title: "Icon",
        url: "icon",
        component: IconPage,
        category: GENERAL
    },
    {
        title: "Img",
        url: "img",
        component: ImgPage,
        category: GENERAL
    },
    {
        title: "Input",
        url: "input",
        component: InputPage,
        category: FORMS
    },
    {
        title: "List",
        url: "list",
        component: ListPage,
        category: GENERAL
    },
    {
        title: "ListItem",
        url: "list-item",
        component: ListItemPage,
        category: GENERAL
    },
    {
        title: "Menu",
        url: "menu",
        component: MenuPage,
        category: NAVIGATION
    },
    {
        title: "Pagination",
        url: "pagination",
        component: PaginationPage,
        category: NAVIGATION
    },
    {
        title: "PortfolioDropdown",
        url: "portfolio-dropdown",
        component: PortfolioDropdownPage,
        category: ASSETS
    },
    {
        title: "Spin",
        url: "spin",
        component: SpinPage,
        category: FEEDBACK
    },
    {
        title: "StatCard",
        url: "stat-card",
        component: StatCardPage,
        category: GENERAL
    },
    {
        title: "Stats",
        url: "stats",
        component: StatsPage,
        category: GENERAL
    },
    {
        title: "Switch",
        url: "switch",
        component: SwitchPage,
        category: FORMS
    },
    {
        title: "Bancor Button",
        url: "bancor-button",
        component: BancorWidgetButtonPage,
        category: WIDGETS
    }
].sort(function(a, b) {
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1;
    return 0;
})

export default documentationRoutes