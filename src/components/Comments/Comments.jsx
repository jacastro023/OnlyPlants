import _ from "lodash";
import React, { Component, createRef } from "react";
import CommentsForm from "../CommentForm/CommentForm";
import "../Comments/comment.css"
import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
} from "semantic-ui-react";

export default function PostFeed({ post, handleAddComment }) {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Ref>
          <Segment>
            {post.comments.map((comment) => {
              return (
                <div>
                  <p className="commentdate">{comment.createdAt.toString().slice(0, 10)}</p>
                  <h2 className="commentdetails">
                    {comment.username}: {comment.comment}
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
