import React from 'react'
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        // this.state = a user (bc we're in session) - and so the state is one user, which we merge with an empty object and then return as user
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderUsername(){
        if (this.props.formType==="login"){
            return
        } else {

            return (
                <>
                <label>
                    <input type="text"
                        placeholder="Name"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className={`${this.props.formType}-input`}/>
                </label>
            <br/>
            </>
            );
        }
    }

    render() {
        let inputText = "";
        if (this.props.formType === "login"){
            inputText = "Sign In";
        } else {
            inputText = "Sign Up"
        }
        return (
            <div className={`${this.props.formType}-form-container`}>
                <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
          <br />
                    {/* Please Signup/Login! or signup/login (formtype vs navlink)*/}
                    {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <div className={`${this.props.formType}-form`}>
                        <br />
                            {this.renderUsername()}
                        <label>
              <input type="text"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className={`${this.props.formType}-input`}
                            />
                        </label>
                        <br />


                        <label>
              <input type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className={`${this.props.formType}-input`}
                            />
                        </label>
                        <br />
                        <input className={`${this.props.formType}-submit`} type="submit" value={inputText} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

