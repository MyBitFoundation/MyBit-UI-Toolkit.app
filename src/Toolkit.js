import { Library, Example, Detail } from '@compositor/kit';
import styled from 'styled-components';
import DocumentedButton from './documentedComponents/button';

const StyledView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 192px;
  position: relative;
  top: -8px;
`;

const StyledDoc = styled.div`
  padding: 10px 10px;

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
    }
  }
`;

const StyledExamples = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Toolkit = () => (
  <Library>
    <Example name="Button">
      <StyledView>
        {DocumentedButton.component}
      </StyledView>
      <Detail>
        <StyledDoc>
          <h1>Button</h1>
          <section>
            <h2>Examples</h2>
            <StyledExamples>
              {DocumentedButton.examples}
            </StyledExamples>
          </section>
          <section>
            <h2>API</h2>
          </section>
        </StyledDoc>
      </Detail>
    </Example>
  </Library>
);

export default Toolkit;
