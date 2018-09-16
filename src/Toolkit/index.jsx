import React from 'react';
import { Library, Example } from '@compositor/kit';
import styled from 'styled-components';
import NavBar from './NavBar';
import References from './StyledReferences';
import StyledMenuButton from './StyledMenuButton';
import HandleMobile from './HandleMobile';
import StyledDocumentation from './StyledDocumentation';
import Sources from './Sources';
import Components from './components';

const StyledView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 192px;
  position: relative;
  top: -8px;
`;

const StyledMarkdown = styled.div`
    width: 100%;
    padding: 0px 20px;
    font-size: 16px;
    background-color: rgb(249, 249, 249);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  ${props => (props ? props.styling : '')};
`;

const getExamples = details => (
  <section>
    <h2>Examples</h2>
    <StyledExamples styling={details.examples.styling}>
      {details.examples.content}
    </StyledExamples>
  </section>
);

const getUsage = details => (
  <section>
    <h2>Usage</h2>
    <StyledMarkdown>
      <pre>
        <code>
          {details.usage}
        </code>
      </pre>
    </StyledMarkdown>
  </section>
);

const getTheming = details => (
  <section>
    <h2>Theming</h2>
    <StyledMarkdown>
      <pre>
        <code>
          {details.theming}
        </code>
      </pre>
    </StyledMarkdown>
  </section>
);

const getProps = () => (
  <section>
    <h2>Props</h2>
  </section>
);

const getInstall = details => (
  <section>
    <h2>Installation</h2>
    <Sources details={details} />
  </section>
);

const getReferences = details => (
  <section>
    <h2
      style={{ textAlign: 'right' }}
    >
      Ant References
    </h2>
    <References
      references={details.antReferences}
    />
  </section>
);

class Toolkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
  }

  render() {
    return (
      <div>
        <HandleMobile
          menuOpen={this.state.mobileMenuOpen}
        />
        <StyledMenuButton
          menuOpen={this.state.mobileMenuOpen}
          onClick={() => this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })}
        />
        <Library
          title={
            <a
              href="/"
              onClick={() => this.setState({ mobileMenuOpen: false })}
            >
             UI Toolkit
            </a>
          }
          renderSideNav={({
            title,
            examples,
          }) => (
            <NavBar
              examples={examples}
              title={title}
              handleMobileMenu={() => this.setState({ mobileMenuOpen: false })}
            />
          )}
        >
          {
          Components.map(({ name, details }) => (
            <Example
              name={name}
              key={name}
            >
              <StyledView>
                {details.component}
              </StyledView>
              <div style={{ padding: '15px' }}>
                <StyledDocumentation
                  menuOpen={this.state.mobileMenuOpen}
                >
                  <h1>{name}</h1>
                  {getExamples(details)}
                  {getInstall(details)}
                  {getUsage(details)}
                  {getTheming(details)}
                  {getProps(details)}
                  {getReferences(details)}
                </StyledDocumentation>
              </div>
            </Example>
          ))
        }
        </Library>
      </div>
    );
  }
}

export default Toolkit;
