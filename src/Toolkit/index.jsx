import { Library, Example } from '@compositor/kit';
import styled from 'styled-components';
import NavBar from './NavBar';
import Components from './components';
import References from './StyledReferences';

const StyledView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 192px;
  position: relative;
  top: -8px;
`;

const StyledDoc = styled.div`
  padding: 10px 40px;
  border-radius: 23px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px 0px;

  h1{
    font-size: 30px;
    color: #4a4a4a;
    font-weight: 700;
  }

  section{
    margin-top: 50px;

    h2{
      font-weight: 400;
      color: #4a4a4a;
      margin-bottom: 20px;
    }
  }
`;

const StyledMarkdown = styled.div`
    width: 100%;
    padding: 0px 20px 6px 20px;
    font-size: 16px;
    background-color: rgb(249, 249, 249);
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Toolkit = () => (
  <Library
    title="UI Toolkit"
    renderSideNav={({
      title,
      examples,
    }) => (
      <NavBar
        examples={examples}
        title={title}
      />
    )}
  >
    {
    Components.map(({ name, details }) => (
      <Example name={name}>
        <StyledView>
          {details.component}
        </StyledView>
        <div style={{ padding: '15px' }}>
          <StyledDoc>
            <h1>{name}</h1>
            <section>
              <h2>Examples</h2>
              <StyledExamples>
                {details.examples}
              </StyledExamples>
            </section>
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
            <section>
              <h2>Props</h2>
            </section>
            <section>
              <h2 style={{ textAlign: 'right' }}>Ant References</h2>
              <References
                references={details.antReferences}
              />
            </section>
          </StyledDoc>
        </div>
      </Example>
    ))
  }
  </Library>
);

export default Toolkit;
