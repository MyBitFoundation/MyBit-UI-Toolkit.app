import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';
import StyledSubHeader from './StyledSubHeader';
import StyledCategories from './StyledCategories';
import StyledFilters from './StyledFilters';
import StyledListHeader from './StyledListHeader';
import StyledItemsCounter from './StyledItemsCounter';
import StyledListHeaderLeft from './StyledListHeaderLeft';
import Menu from '../../Menu';
import SwitchWithLabel from './SwitchWithLabel';
import Filter from '../../Filter';
import Dropdown from '../../Dropdown';

const Header = ({
  styling,
  categories,
  selectedCategory, // eslint-disable-line
  setCategory, // eslint-disable-line
  issues, // eslint-disable-line
  handleClickedFilter, // eslint-disable-line
  showCompletedTasks, // eslint-disable-line
  handleShowCompletedTasks, // eslint-disable-line
  handleShowAmountInCrypto, // eslint-disable-line
  showAmountInCrypto, // eslint-disable-line
  issuesFiltered, // eslint-disable-line
  bountiesPerPage, // eslint-disable-line
  currentPage, // eslint-disable-line
  totalIssuesFiltered, // eslint-disable-line
  orderBy, // eslint-disable-line
  handleOrderByClicked // eslint-disable-line
}) => {
  let max = 0;
  let min = 0;
  if (issuesFiltered) {
    if (bountiesPerPage > totalIssuesFiltered) {
      min = totalIssuesFiltered > 0 ? (currentPage * bountiesPerPage) + 1 : 0;
      max = totalIssuesFiltered;
    } else {
      min = (currentPage * bountiesPerPage) + 1;
      max = totalIssuesFiltered >= (currentPage + 1) * bountiesPerPage ?
        (currentPage + 1) * bountiesPerPage :
        ((currentPage * (bountiesPerPage + 1)) + issuesFiltered.length) - 1;
    }
  }

  return (
    <div>
      <StyledTitle>
        Bounties
      </StyledTitle>
      <StyledSubHeader>
      Choose your expertise
      </StyledSubHeader>
      <StyledCategories>
        <Menu
          onClick={item => setCategory(item.key)}
          selectedKeys={[selectedCategory]}
          mode="horizontal"
          items={categories}
          className="categories-desktop"
          styling={styling.menu}
        />
        <Menu
          onClick={item => setCategory(item.key)}
          selectedKeys={[selectedCategory]}
          mode="vertical"
          items={categories}
          className="categories-mobile"
          styling={styling.menu}
        />
      </StyledCategories>
      <StyledFilters>
        {
          issues[selectedCategory] &&
          Object.entries(issues[selectedCategory].filters).map(filter => (
            <Filter
              styling={styling.filters}
              checked={filter[1]}
              key={filter[0]}
              onChange={(checked) => { handleClickedFilter(filter[0], checked); }}
            >
              {filter[0]}
            </Filter>
          ))
        }
      </StyledFilters>
      <StyledListHeader>
        <div>
          <StyledListHeaderLeft>
            <StyledItemsCounter>
              {issuesFiltered ? `Showing ${min}-${max} of ${totalIssuesFiltered}` : 'Showing 0 of 0'}
            </StyledItemsCounter>
            <Fragment>
              <SwitchWithLabel
                size="small"
                checked={showCompletedTasks}
                styling={styling.switch}
                handleClick={handleShowCompletedTasks}
                label="Show completed tasks"
                key="rma2"
              />
              <SwitchWithLabel
                size="small"
                checked={showAmountInCrypto}
                styling={styling.switch}
                handleClick={handleShowAmountInCrypto}
                label="Display amount in crypto"
                key="put2"
                stylingSwitch={{
                  marginLeft: '20px',
                }}
              />
            </Fragment>
          </StyledListHeaderLeft>
        </div>
        <div>
          <Dropdown
            placement="bottomCenter"
            selected={orderBy}
            handleClick={order => handleOrderByClicked(order)}
            menu={['Most recent', 'Highest value', 'Lowest value']}
            styling={styling.dropdown}
            trigger="click"
          />
        </div>
      </StyledListHeader>
    </div>
  );
};

Header.propTypes = {
  styling: PropTypes.object.isRequired, // eslint-disable-line
  categories: PropTypes.array, //eslint-disable-line
};

Header.defaultProps = {
  categories: [{
    name: 'Development',
    filters: ['Front-End', 'Smart Contracts', 'APIs', 'Debugging', 'Other'],
  }, {
    name: 'Design',
    filters: ['Sketch', 'Photoshop'],
  }, {
    name: 'Marketing',
    filters: ['Market this', 'Market that'],
  }],
};

export default Header;
