import React, { useState } from "react";

import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddPostForm(props) {
  const [selectedFile, setSelectedFile] = useState("");
  const [state, setState] = useState({
    name: '',
    description: ''
  });

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('name', state.name);
    formData.append('description', state.description);
    props.handleAddPost(formData);

    // Have to submit the form now! We need a function!
  }

  return (
    <Grid textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              className="form-control"
              name="name"
              value={state.name}
              placeholder="Plant name?"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              name="description"
              value={state.description}
              placeholder="Describe your plant?"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
            />
            <Button type="submit" className="btn">
              Add Plant
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
