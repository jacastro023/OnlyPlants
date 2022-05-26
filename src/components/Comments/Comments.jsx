import _ from "lodash";
import React, { Component, createRef } from "react";
import CommentsForm from "../CommentForm/CommentForm";
import "../Comments/comment.css";
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

export default function Comments({ post, handleAddComment, user, removeComment }) {

    function handleDelete(e){
        removeComment(e.target.id)
    }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Ref>
          <Segment>
            {post.comments.map((comment) => {
              return (
                <div>
                  <p className="commentdate">
                    {comment.createdAt.toString().slice(0, 10)}
                  </p>
                  <h2 className="commentdetails">
                    {comment.username}: {comment.comment}
                    {user.username == comment.username ? (
                      <i class="trash alternate icon trashicon" id={comment._id} onClick={handleDelete}></i>
                    ) : null}
                  </h2>
                </div>
              );
            })}

            <Rail position="left">
              <Sticky>
                <CommentsForm handleAddComment={handleAddComment} />
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid.Column>
    </Grid>
  );
}
