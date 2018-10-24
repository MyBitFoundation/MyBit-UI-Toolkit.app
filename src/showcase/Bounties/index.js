import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Header from './header';
import Card from './card';
import StyledCards from './StyledCards';
import StyledSpinner from './loading/StyledSpinner';
import Spin from '../Spin';
import StyledMessage from './StyledMessage';
import StyledPagination from './StyledPagination';
import Pagination from '../Pagination';
import Theme from '../theme';

const sortBy = (items, type) => {
  switch (type) {
    case 'Most recent':
      items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return;
    case 'Highest value': items.sort((a, b) => b.value - a.value); return;
    case 'Lowest value': items.sort((a, b) => a.value - b.value); return;
    default: items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};


const Bounties = ({
  theme, // eslint-disable-line
  issues, // eslint-disable-line
  categories, // eslint-disable-line
  selectedCategory, // eslint-disable-line
  setCategory, // eslint-disable-line
  handleClickedFilter, // eslint-disable-line
  showCompletedTasks, // eslint-disable-line
  handleShowCompletedTasks, // eslint-disable-line
  showAmountInCrypto, // eslint-disable-line
  handleShowAmountInCrypto, // eslint-disable-line
  bountiesPerPage, // eslint-disable-line
  currentPage, // eslint-disable-line
  setCurrentPage, // eslint-disable-line
  orderBy, // eslint-disable-line
  handleOrderByClicked, // eslint-disable-line
}) => {
  let issuesFiltered;
  let totalIssuesFiltered = 0;

  // apply filters
  // filter by category and filters

  if (issues && issues[selectedCategory]) {
    issuesFiltered = issues[selectedCategory].issues.slice();
    issuesFiltered = issuesFiltered.filter((issue) => {
      let flag = false;
      issue.labels.forEach((label) => {
        flag = issues[selectedCategory].filters[label] ? true : flag;
      });
      flag = true;
      return flag;
    });

    // filter by completed tasks or not completed tasks
    issuesFiltered = showCompletedTasks ?
      issuesFiltered.filter(issue => issue.merged) :
      issuesFiltered.filter(issue => !issue.merged);
    sortBy(issuesFiltered, orderBy);
    totalIssuesFiltered = issuesFiltered.length;

    // slice results for pagination
    const startIndex = currentPage * bountiesPerPage;
    const endIndex = (currentPage + 1) * bountiesPerPage;
    issuesFiltered = issuesFiltered.slice(startIndex, endIndex);
  }

  let toReturn;
  const header = (
    <Header
      theme={theme}
      categories={categories}
      selectedCategory={selectedCategory}
      setCategory={setCategory}
      issues={issues}
      handleClickedFilter={handleClickedFilter}
      showCompletedTasks={showCompletedTasks}
      showAmountInCrypto={showAmountInCrypto}
      handleShowAmountInCrypto={handleShowAmountInCrypto}
      handleShowCompletedTasks={handleShowCompletedTasks}
      issuesFiltered={issuesFiltered}
      currentPage={currentPage}
      bountiesPerPage={bountiesPerPage}
      totalIssuesFiltered={totalIssuesFiltered}
      orderBy={orderBy}
      handleOrderByClicked={handleOrderByClicked}
    />
  );

  if (!issues) {
    toReturn = (
      <StyledMessage>
        <StyledSpinner>
          <Spin
            size="large"
            theme={theme.spin}
          />
        </StyledSpinner>
        <p>Loading Bounties</p>
      </StyledMessage>
    );
  } else if (!issuesFiltered || issuesFiltered.length === 0) {
    toReturn = (
      <div>
        {header}
        <StyledMessage>No bounties found</StyledMessage>
      </div>
    );
  } else {
    toReturn = (
      <div>
        {header}
        <StyledCards>
          {issuesFiltered.map(bounty => (
            <Card
              {...bounty}
              key={`${bounty.title} ${bounty.createdAt}`}
              theme={theme.buttons}
              showAmountInCrypto={showAmountInCrypto}
            />
          ))}
        </StyledCards>
        <StyledPagination>
          <Pagination
            onChange={newCurrentPage => setCurrentPage(newCurrentPage - 1)}
            total={totalIssuesFiltered}
            current={currentPage + 1}
            pageSize={bountiesPerPage}
            defaultCurrent={1}
            theme={theme.pagination}
          />
        </StyledPagination>
      </div>
    );
  }
  return toReturn;
};

Bounties.propTypes = {
  theme: PropTypes.object, // eslint-disable-line
  issues: PropTypes.object, // eslint-disable-line
};

Bounties.defaultProps = {
  theme: Theme,
  issues: undefined,
};

export default withTheme(Bounties);
