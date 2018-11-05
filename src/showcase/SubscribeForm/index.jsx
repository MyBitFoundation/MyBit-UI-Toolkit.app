import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Input from '../Input';
import Button from '../Button';

class SubscribeForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      isButtonDisabled: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  
  buttonRef = React.createRef();

  validateEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  handleInputChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleButtonClick(e){
    console.log(this.state.value);
    if (!this.validateEmail(this.state.value)){
      this.setState({
        value: '',
        placeholder: 'Invalid email. Try again'
      });
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://cors-anywhere.herokuapp.com/https://mailchimp.mybit.io/api/member/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        this.setState({isButtonDisabled: true});
        xhr.send(JSON.stringify({
          email: this.state.value, list: this.props.listId
      }));
        const renewState = (placeholder) => {
          this.setState({
            value: '',
            placeholder: placeholder,
            isButtonDisabled: false
          });
        } 
        xhr.onload = function() {
          renewState('Done');
        }
        xhr.onerror = function(error) {
          renewState('Invalid subscription');
        }
    }
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <span style={{'margin-right': '15px'}}>
          <Input type='email' value={this.state.value} size={this.props.size} placeholder={this.state.placeholder} onChange={this.handleInputChange}/>
        </span>
        <span> 
          <Button type='solid' color='blue' disabled={this.state.isButtonDisabled} onClick={this.handleButtonClick}>{this.state.buttonText}</Button>
        </span>
      </div>
    );
  }
}

SubscribeForm.propTypes = {
    size: PropTypes.string,
    listId: PropTypes.string.isRequired,
  };
  
  SubscribeForm.defaultProps = {
    size: '',
    listId: 'general',
  };

export default withTheme(SubscribeForm);