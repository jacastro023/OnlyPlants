import React, { useState } from "react";

import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddPostForm(props) {
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddComment(comment);

    // Have to submit the form now! We need a function!
  }

  return (
    <Form comment>
      <h2>Add a Comment:</h2>
      <Form.TextArea name="comment" onChange={handleChange} required />
      <Button
        content="Add Comment"
        labelPosition="left"
        icon="edit"
        onClick={handleSubmit}
      />
    </Form>
  );
}
