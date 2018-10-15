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
import SectionHeaderPage from './SectionHeader'

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
        category: LIBRARY_COMPONENTS,
        pageTitle: "Component: Showcase"
    },
    {
        title: "TotalPortfolioValue",
        url: "total-portfolio-value",
        component: TotalPortfolioValuePage,
        category: ASSETS,
        pageTitle: "Component: TotalPortfolioValue"
    },
    {
        title: "SectionHeader",
        url: "section-header",
        component: SectionHeaderPage,
        category: GENERAL,
        pageTitle: "Component: SectionHeader"
    },
    {
        title: "TotalPortfolioRevenue",
        url: "total-portfolio-revenue",
        component: TotalPortfolioRevenuePage,
        category: ASSETS,
        pageTitle: "Component: TotalPortfolioRevenue"
    },
    {
        title: "PortfolioRevenueItem",
        url: "portfolio-revenue-item",
        component: PortfolioRevenueItemPage,
        category: ASSETS,
        pageTitle: "Component: PortfolioRevenueItem"
    },
    {
        title: "PortfolioValueItem",
        url: "portfolio-value-item",
        component: PortfolioValueItemPage,
        category: ASSETS,
        pageTitle: "Component: PortfolioValueItem"
    },
    {
        title: "NavigationBar",
        url: "navigation-bar",
        component: NavigationBarPage,
        category: NAVIGATION,
        pageTitle: "Component: NavigationBar"
    },
    {
        title: "NavigationOption",
        url: "navigation-option",
        component: NavigationOptionPage,
        category: NAVIGATION,
        pageTitle: "Component: NavigationOption"
    },
    {
        title: "ProgressBar",
        url: "progress-bar",
        component: ProgressBarPage,
        category: GENERAL,
        pageTitle: "Component: ProgressBar"
    },
    {
        title: "MyBitGoHeader",
        url: "mybitgo-header",
        component: MyBitGoHeaderPage,
        category: TEMPLATES,
        pageTitle: "Component: MyBitGoHeader"
    },
    {
        title: "Logo",
        url: "logo",
        component: LogoPage,
        category: GENERAL,
        pageTitle: "Component: Logo"
    },
    {
        title: "ExchangeRate",
        url: "exchange-rate",
        component: ExchangeRatePage,
        category: GENERAL,
        pageTitle: "Component: ExchangeRate"
    },
    {
        title: "CategoryCard",
        url: "category-card",
        component: CategoryCardPage,
        category: ASSETS,
        pageTitle: "Component: CategoryCard"
    },
    {
        title: "AssetCard",
        url: "asset-card",
        component: AssetCardPage,
        category: ASSETS,
        pageTitle: "Component: AssetCard"
    },
    {
        title: "AssetInvestmentStatus",
        url: "asset-investment-status",
        component: AssetInvestmentStatusPage,
        category: ASSETS,
        pageTitle: "Component: AssetInvestmentStatus"
    },
    {
        title: "AssetDeadlineStatus",
        url: "asset-deadline-status",
        component: AssetDeadlineStatusPage,
        category: ASSETS,
        pageTitle: "Component: AssetDeadlineStatus"
    },
    {
        title: "AssetTitle",
        url: "asset-title",
        component: AssetTitlePage,
        category: ASSETS,
        pageTitle: "Component: AssetTitle"
    },
    {
        title: "AccountInfo",
        url: "account-info",
        component: AccountInfoPage,
        category: USER,
        pageTitle: "Component: AccountInfo"
    },
    {
        title: "Address",
        url: "address",
        component: AddressPage,
        category: USER,
        pageTitle: "Component: Address"
    },
    {
        title: "Buttons",
        url: "buttons",
        component: ButtonPage,
        category: GENERAL,
        pageTitle: "Component: Buttons"
    },
    {
        title: "Bounty",
        url: "bounty",
        component: BountyPage,
        category: TEMPLATES,
        pageTitle: "Component: Bounty"
    },
    {
        title: "Alert",
        url: "alert",
        component: AlertPage,
        category: FEEDBACK,
        pageTitle: "Component: Alert"
    },
    {
        title: "Connection status",
        url: "connection-status",
        component: ConnectionStatusPage,
        category: FEEDBACK,
        pageTitle: "Component: ConnectionStatus"
    },
    {
        title: "Dropdown",
        url: "dropdown",
        component: DropdownPage,
        category: NAVIGATION,
        pageTitle: "Component: Dropdown"
    },
    {
        title: "Filter",
        url: "filter",
        component: FilterPage,
        category: GENERAL,
        pageTitle: "Component: Filter"
    },
    {
        title: "Heading",
        url: "heading",
        component: HeadingPage,
        category: GENERAL,
        pageTitle: "Component: Heading"
    },
    {
        title: "Icon",
        url: "icon",
        component: IconPage,
        category: GENERAL,
        pageTitle: "Component: Icon"
    },
    {
        title: "Img",
        url: "img",
        component: ImgPage,
        category: GENERAL,
        pageTitle: "Component: Img"
    },
    {
        title: "Input",
        url: "input",
        component: InputPage,
        category: FORMS,
        pageTitle: "Component: Input"
    },
    {
        title: "List",
        url: "list",
        component: ListPage,
        category: GENERAL,
        pageTitle: "Component: List"
    },
    {
        title: "ListItem",
        url: "list-item",
        component: ListItemPage,
        category: GENERAL,
        pageTitle: "Component: ListItem"
    },
    {
        title: "Menu",
        url: "menu",
        component: MenuPage,
        category: NAVIGATION,
        pageTitle: "Component: Menu"
    },
    {
        title: "Pagination",
        url: "pagination",
        component: PaginationPage,
        category: NAVIGATION,
        pageTitle: "Component: Pagination"
    },
    {
        title: "PortfolioDropdown",
        url: "portfolio-dropdown",
        component: PortfolioDropdownPage,
        category: ASSETS,
        pageTitle: "Component: PortfolioDropdown"
    },
    {
        title: "Spin",
        url: "spin",
        component: SpinPage,
        category: FEEDBACK,
        pageTitle: "Component: Spin"
    },
    {
        title: "StatCard",
        url: "stat-card",
        component: StatCardPage,
        category: GENERAL,
        pageTitle: "Component: StatCard"
    },
    {
        title: "Stats",
        url: "stats",
        component: StatsPage,
        category: GENERAL,
        pageTitle: "Component: Stats"
    },
    {
        title: "Switch",
        url: "switch",
        component: SwitchPage,
        category: FORMS,
        pageTitle: "Component: Switch"
    },
    {
        title: "Bancor Button",
        url: "bancor-button",
        component: BancorWidgetButtonPage,
        category: WIDGETS,
        pageTitle: "Component: Bancor Widget"
    }
].sort(function(a, b) {
    if(a.title > b.title) return 1;
    if(a.title < b.title) return -1;
    return 0;
})

export default documentationRoutes