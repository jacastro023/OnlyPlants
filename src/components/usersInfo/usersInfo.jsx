import React from "react";
import { Link } from "react-router-dom";
import { Divider, Image } from "semantic-ui-react";
import "../usersInfo/usersinfo.css";

function UsersInfo({ users }) {
  console.log(users);
  return (
    <>
      {users.map((user) => {
        return (
          <>
            <div className="usersinfodiv">
              <Link to={`/${user.username}`} className="usersinfoimg">
                <Image key={user._id}  avatar src={user.photoUrl} />
              </Link>
              <h3 className="userinfoname">{user.username}</h3>
            </div>
            <Divider />
          </>
        );
      })}
    </>
  );
}

export default UsersInfo;
