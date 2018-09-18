import React from 'react';
import PropTypes from 'prop-types';
import StyledSources from './StyledSources';
import StyledSource from './StyledSource';
import StyledMarkdown from '../StyledMarkdown';

export default class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.details.sources[0],
    };
  }

  render() {
    const { sources } = this.props.details;

    return (
      <div>
        <StyledSources>
          {sources.map((source, index) => {
          const separator = sources[index + 1] && true;
          return (
            <span key={source.command}>
              <StyledSource selected={source === this.state.selected} key={source.command} onClick={() => this.setState({ selected: source })}>{source.name}{' '}</StyledSource>
              {separator && <span>|</span>}
            </span>
          );
        })}
        </StyledSources>
        <StyledMarkdown>
          <pre>
            <code>
              {this.state.selected.command}
            </code>
          </pre>
        </StyledMarkdown>
      </div>
    );
  }
}

Sources.propTypes = {
  details: PropTypes.shape({
    sources: PropTypes.arrayOf(PropTypes.shape({
      command: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};
