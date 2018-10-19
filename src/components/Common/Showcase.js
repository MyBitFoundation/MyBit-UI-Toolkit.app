import React, { Component } from 'react';
import { Button, Divider, message  } from 'antd';
import CodeHighlighter from './CodeHighlighter';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledShowcaseWrapper = styled.div`
    border: 1px solid #e8e8e8;
    width: 100%;
    margin-bottom: 20px;
    .showcase-divider > span {
        font-size: 14px !important;
    }
    .showcase-demo {
        padding: 16px 16px 0px 16px;
        overflow: auto;
    }
    .showcase-demo > div > * {
        margin: 16px;
    }
    .showcase-demo > div > * {
        display: ${props => props.display};
    }
    .showcase-code-notes {
        padding: 0px 20px;
        line-height: 28px;
    }
`

class Showcase extends Component {
    state = {
        showCode: false,
    }

    toggleCode = () => {
        this.setState({
            showCode: !this.state.showCode,
        });
    }

    copyToClipboard = str => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        message.info(`You have successfully copied a code snippet!`);
    };

    render() {
        const { data } = this.props
        return (
            <StyledShowcaseWrapper display={data.display} >
                <div className="showcase-demo">
                    {data.component}
                </div>
                <Divider orientation="left" className="showcase-divider">
                    <Button onClick={this.toggleCode} type="dashed" size="small">
                        {this.state.showCode ? 'Hide code </>' : 'Show code <>'}
                    </Button>
                </Divider>
                <div className="showcase-code-notes">
                    {data.description}
                </div>
                {this.state.showCode &&
                    <div className="showcase-code-container" onClick={() => this.copyToClipboard(data.code)}>
                        <Divider dashed={true} />
                        <CodeHighlighter code={data.code} />
                    </div>
                }
            </StyledShowcaseWrapper>
        )
    }
}

Showcase.propTypes = {
    data: PropTypes.shape({
        component: PropTypes.element.isRequired,
        description: PropTypes.element.isRequired,
        code: PropTypes.string.isRequired,
        display: PropTypes.oneOf(['inline-block', 'block'])
    }).isRequired
};

export default Showcase
