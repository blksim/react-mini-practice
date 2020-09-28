import React, { Component } from 'react';

import classes from './Form.module.css';
import Input from '../Input/Input';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';

class Form extends Component {
  state = {
    favForm: {
      username: {
        elementConfig: {
          type: 'text',
          placeholder: '누구신지..🦜'
        },
        valid: false,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 20
        },
        value: '',
        touched: false
      },
      habit: {
        elementConfig: {
          type: 'text',
          placeholder: '나만의 습관 혹은 의식이 있다면?🐛'
        },
        valid: false,
        validation: {
          required: true,
          minLength: 10,
          maxLength: 50
        },
        value: '',
        touched: false

      },
      music: {
        elementConfig: {
          type: 'text',
          placeholder: '요즘 가장 자주 듣는 음악🙉'
        },
        valid: false,
        validation: {
          required: true,
          minLength: 10,
          maxLength: 50
        },
        value: '',
        touched: false

      },
      movie: {
        elementConfig: {
          type: 'text',
          placeholder: '좋아하는 영화나 드라마나 다큐🦔'
        },
        valid: false,
        validation: {
          required: true,
          minLength: 10,
          maxLength: 50
        },
        value: '',
        touched: false
      },
      comment: {
        elementConfig: {
          type: 'textarea',
          placeholder: '그냥 아무말이나 적어주세요..🤭'
        },
        valid: false,
        validation: {
          required: true,
          minLength: 10,
          maxLength: 500
        },
        value: '',
        touched: false
      }
    },
    formIsValid: false,
    loading: false
  }

  onChangeHandler = (event, inputIdentifier) => {
    const updatedForm = { ...this.state.favForm };
    const updatedElement = { ...updatedForm[inputIdentifier] };

    updatedElement.value = event.target.value;
    updatedElement.valid = this.validate(updatedElement.value, updatedElement.validation);
    updatedElement.touched = true;
    updatedForm[inputIdentifier] = updatedElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ favForm: updatedForm, formIsValid: formIsValid });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for (let elementIdentifier in this.state.favForm) {
      formData[elementIdentifier] = this.state.favForm[elementIdentifier].value;
    }

    fetch(
      'https://mini-form.firebaseio.com/form.json', 
    { method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formData) 
    })
      .then((res) => {
        alert('감사합니다.잘 읽어볼게요🥰');
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  validate(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }
  
  render () {
    const elementsArr = [];
   
    for (const element in this.state.favForm) {
      elementsArr.push({
        id: element,
        config:  this.state.favForm[element]
      });
    }

    let form = (
    <form onSubmit={this.onSubmitHandler} className={classes.Form}>
      {elementsArr.map(element => (
        <Input
          key={element.id}
          type={element.config.elementConfig.type}
          placeholder={element.config.elementConfig.placeholder}
          value={element.config.value}
          shouldValidate={element.config.validation}
          invalid={!element.config.valid}
          touched={element.config.touched}
          changed={(event) => this.onChangeHandler(event, element.id)}
          />
      ))}
       <Button btnType="Success" value='Submit' disabled={!this.state.formIsValid}/>
       </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (<section className={classes.Section}>
      <h4>LivingRoomDanceParty 플레이리스트 들으면서 만든 폼!예!</h4>
      {form}</section>);
  }
};

export default Form;