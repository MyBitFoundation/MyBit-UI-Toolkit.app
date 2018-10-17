import React, { Component } from 'react';
import { Button, Input, Switch, Divider, Tabs } from 'antd';
import styled from 'styled-components';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import json from 'react-syntax-highlighter/languages/prism/json';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('json', json);

const customStyle = {
    background: "#fff",
    margin: "0px 10px",
    padding: "0px 10px 15px 10px"
};



const StyledPlaygroundWrapper = styled.div`
    border: 1px solid #e8e8e8;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    .playground-demo {
        padding: 16px;
        flex: 1 0 320px;
        overflow: auto;
        background: ${ props => props.showgrid ? `url("data:image/svg+xml,%3Csvg%20fill%3D%22%23999%22%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22m0%200h1v1h1v1h-1v-1h-1z%22%2F%3E%0A%3C%2Fsvg%3E") repeat` : '#f2f4f5'} ;
        background-size: 18px;
        background-attachment: fixed;
        border: 1px solid #ccc;
        transition: .2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .playground-demo > div > * {
        margin: 16px;
    }
    .playground-demo > div > * {
        display: ${props => props.display};
    }
    .playground-code-notes {
        padding: 20px;
        line-height: 28px;
        flex: 0 0 320px;
        width: 320px;
        .tabContent {
            max-width: 100%;
            max-height: 320px;
            overflow: auto;
        }
    }
`

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTransparencyGrid: false,
            styling: props.styling
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            styling: {
                ...this.state.styling,
                [e.target.name]: e.target.value
            }
        })
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
    };

    render() {
        const { component: Component } = this.props
        
        return (
            <StyledPlaygroundWrapper showgrid={this.state.showTransparencyGrid}>
                <div className="playground-demo">
                    <Component {...this.state}>Sample text</Component>
                </div>
                <div className="playground-code-notes">
                    <Tabs>
                        <Tabs.TabPane tab="Configure" key="tab1">
                            <div className="tabContent">
                                {Object.keys(this.state.styling).map(key => {
                                    return (
                                        <div key={key} style={{padding: '5px 0'}}>
                                            <label>{key}: </label><br/>
                                            <Input style={{width: '100%'}} type="text" name={key} value={this.state.styling[key]} onChange={this.handleChange}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <Divider />
                            <label>
                            <Switch size="small" checked={this.state.showTransparencyGrid} onChange={(showTransparencyGrid) => {this.setState({showTransparencyGrid})}} /> Show transparency grid</label>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Styling Object" key="tab2">
                            <div className="tabContent">
                                <SyntaxHighlighter language='json' customStyle={customStyle} style={prism}>
                                    {JSON.stringify(this.state.styling, null, ' ')}
                                </SyntaxHighlighter>
                            </div>
                            <Divider />
                            <Button onClick={() => {
                                this.copyToClipboard(JSON.stringify(this.state.styling, null, ' '));
                            }}>Copy Styling Object</Button>
                        </Tabs.TabPane>
                    </Tabs>
                    
                </div>
            </StyledPlaygroundWrapper>
        )
    }
}

export default Playground