import { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import PostCard from "../../components/PostCard/PostCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import * as postAPI from "../../utils/postApi";
import * as likesAPI from "../../utils/likeApi";

import { useParams } from "react-router-dom";
import { Grid, Divider } from "semantic-ui-react";

export default function DetailsPage({ user, handleLogout }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);
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

  // then when the component loads we can use that username to fetch all the users data
  // then we can store that in state
  useEffect(() => {
    getPost();
  }, []);

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
      <Grid.Row>
        <h1>Details Page</h1>
        <Divider />
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
        <PostCard
              post={post}
              key={post._id}
              addLike={addLike}
              removeLike={removeLike}
              user={user}
            />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
