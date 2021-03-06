import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import PageHeader from "../../components/Header/Header";
import { useNavigate, Link } from "react-router-dom";
import icon from "../../images/icon.png";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <PageHeader handleLogout={props.handleLogout} user={props.user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="green" textAlign="center">
            <Image src={icon} /> Log-in to your
            account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="green"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message color="green">
            New to us?{" "}
            <Link to="/signup" className="greensign">
              Sign Up
            </Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
