import _ from "lodash";
import React, { Component, createRef } from "react";
import PostGallery from "../PostGallery/PostGallery";
import "../Comments/comment.css";
import UsersInfo from "../usersInfo/usersInfo";
import "../allUsers/allusers.css";
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
  i,
} from "semantic-ui-react";

export default function allUsers({
  posts,
  loading,
  addLike,
  removeLike,
  isProfile,
  user,
  users,
}) {
  return (
    <Grid centered >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Ref>
          <Segment>
            <h1 className="centerpost">Explore all Posts:</h1>
            {posts.length > 0 ? (
              <PostGallery
                posts={posts}
                numPhotosCol={1}
                isProfile={false}
                loading={loading}
                addLike={addLike}
                removeLike={removeLike}
                user={user}
              />
            ) : (
              <h2 className="centerpost">No posts yet</h2>
            )}

            <Rail position="right">
              <Sticky className="stickyusersinfo">
                  <h1 className="alluserstitle">All Users:</h1>
                <UsersInfo users={users} />
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid.Column>
    </Grid>
  );
}
