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
        this.executeDemo = this.executeDemo.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }
    handleSubmit(e){
        debugger
        e.preventDefault();
        // this.state = a user (bc we're in session) - and so the state is one user, which we merge with an empty object and then return as user
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        debugger
        // if (this.props.errors.length === 0 {this.props.history.push('/books');
        // this.props.history.push('/books');
 

    }
    executeDemo(e) {
        
        e.preventDefault();
        this.props.processForm({ email: "demo", password: "starwars" });
        //on success
        this.props.history.push('/bookshelf');
    }

    renderErrors() {
        debugger
        if (this.props.formType==="signup") {

            return (
                <ul className="error-pop-ups">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
     }
    }
    renderSlogan(){
        if (this.props.formType==="signup"){
            return ( 
                <img className="slogan" src={window.sloganURL} />
            )
        } else {
            return
        }
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
    renderBlurb(){
        if (this.props.formType==="signup"){
            return (
                <p className="lilBlurb">By clicking 'Sign Up' you are agreeing that you are <span className="cherry">a cherry who </span> wears small earmuffs.</p>
            )
        }
    }
    renderDemo(){
        if (this.props.formType==="signup"){
            return
        } else {
            return (
                <button className="DemoButton" onClick={this.executeDemo}>Demo</button>                    

            )
        }
    }
    renderTopBlurb(){
        if (this.props.formType === "signup") {
            return(
                <h2 className="topBlurb">New here? Create a free account!</h2>
                )
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
               
            {this.renderSlogan()}
                


                <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form-box`}>
          <br />
                    {this.renderErrors()}
                    <div className={`${this.props.formType}-form`}>
                            {this.renderTopBlurb()}
                        {/* <br /> */}
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
                        {this.renderBlurb()}
                        {this.renderDemo()}

                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

