import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import Details from "../../components/Details/Details";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as postAPI from "../../utils/postApi";
import * as likesAPI from "../../utils/likeApi";
import * as commentAPI from "../../utils/commentApi";

import { useParams } from "react-router-dom";
import { Grid, Divider } from "semantic-ui-react";

export default function DetailsPage({ user, handleLogout }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  // We need to grab the username out of the url,
  const { id } = useParams();
  console.log(id, "<-----this is postId");

  async function addLike(postId) {
    try {
      const data = await likesAPI.create(postId);
      console.log(data, " <- the response from the server when we make a like");
      getPost(); // <- to go get the updated posts with the like
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function removeLike(likeId) {
    try {
      const data = await likesAPI.removeLike(likeId);
      console.log(
        data,
        "<-  this is the response from the server when we remove a like"
      );
      getPost();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function removeComment(commentId) {
    try {
      const data = await commentAPI.removeComment(commentId);
      console.log(
        data,
        "<-  this is the response from the server when we remove a like"
      );
      getPost();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function getPost() {
    try {
      const data = await postAPI.getPost(id);
      setPost(() => data.post);
      setLoading(() => false);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
    }
  }

  async function handleAddComment(comment) {
    console.log(id);
    console.log(comment);
    try {
      setLoading(true);
      const data = await commentAPI.create(id, comment); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(
        data,
        " this is response from the server, in handleAddComment"
      );
      setComments([data.comments, ...comments]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  // then when the component loads we can use that username to fetch all the users data
  // then we can store that in state
  useEffect(() => {
    getPost();
  }, [comments]);

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <Loading />
      </>
    );
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }} textAlign="center">
          <Details
            post={post}
            key={post._id}
            addLike={addLike}
            removeLike={removeLike}
            handleAddComment={handleAddComment}
            user={user}
            removeComment={removeComment}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
