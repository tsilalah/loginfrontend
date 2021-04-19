import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Button, Form, Grid, Input, Segment, Divider } from 'semantic-ui-react'
import {Component} from "react";
import User from './User/User';
import {createRef} from "react";

class App extends Component {
    state = {
        user: {
            nickname: 'None',
            counter: 0
        }
    };
    textInput = createRef();

    updateNickname = (event) => {
        this.setState({
            user: {
                nickname: event.target.value,
                counter: this.state.user.counter
            }
        })
    }

    updateCounter = () => {
        this.setState({
            user: {
                nickname: this.state.user.nickname,
                counter: this.state.user.counter + 1
            }
        })
    }

    render() {
        return (
            <div className="App">
                <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 400}}>
                        <Form size='large'>
                            <Segment stacked>
                                <GoogleLoginButton/>
                                <GithubLoginButton/>
                                <Divider />
                                Nickname: <Input fluid ref={this.textInput} placeholder={'Enter Nickname'} onChange={this.updateNickname.bind(this)} />
                                <Button fluid primary onClick={this.updateCounter}>Increment Counter</Button>
                                <Divider />
                                <User nickname={this.state.user.nickname} counter={this.state.user.counter} />
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default App;
