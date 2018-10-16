import React, { Component } from 'react';
import { Input, Switch, Divider } from 'antd';
import styled from 'styled-components';

const StyledPlaygroundWrapper = styled.div`
    border: 1px solid #e8e8e8;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    .playground-demo {
        padding: 16px;
        flex: 1 0 320px;
        overflow: auto;
        background: ${ props => props.showGrid ? `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFvshcRvooaEBzw2Z0N9BYAQDjWAbVyzWZGwAAAABJRU5ErkJggg==") repeat` : '#f2f4f5'} ;
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

    render() {
        const { component: Component } = this.props
        
        return (
            <StyledPlaygroundWrapper showGrid={this.state.showTransparencyGrid}>
                <div className="playground-demo">
                    <Component {...this.state}>Sample text</Component>
                </div>
                <div className="playground-code-notes">
                    <div>
                        {Object.keys(this.state.styling).map(key => {
                            return (
                                <div key={key} style={{padding: '5px 0'}}>
                                    <label>{key}: </label><br/>
                                    <Input style={{width: '320px'}} type="text" name={key} value={this.state.styling[key]} onChange={this.handleChange}/>
                                </div>
                            )
                        })}
                        <Divider />
                        <label>
                        <Switch size="small" checked={this.state.showTransparencyGrid} onChange={(showTransparencyGrid) => {this.setState({showTransparencyGrid})}} /> Show transparency grid</label>
                    </div>
                </div>
            </StyledPlaygroundWrapper>
        )
    }
}

export default Playground