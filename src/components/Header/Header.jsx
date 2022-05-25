import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";
import "./header.css"

export default function PageHeader({ user, handleLogout }) {
    console.log(user, 'user in header')
  return (
    <Segment clearing className="navcss">
      <Header as="h2" floated="right">
        <Link to="/" className="headerLinks">
          <Icon name="home" ></Icon>
        </Link>
        <Link to="/post" className="headerLinks">
          Post
        </Link>
        <Link to="/feed" className="headerLinks">
          Feed
        </Link>
        <Link to="" onClick={handleLogout} className="headerLinks2">
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to={`/${user?.username}`}>
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
      </Header>
      <Header as="h1" floated="left" className="titlebg">OnlyPlants</Header>
    </Segment>
  );
}