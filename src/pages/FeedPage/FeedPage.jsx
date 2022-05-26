import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as postsAPI from "../../utils/postApi";
import * as likesAPI from '../../utils/likeApi';




import { Grid } from "semantic-ui-react";



export default function Feed({user, handleLogout}) {
  const [posts, setPosts] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  async function addLike(postId){
    try {
      const data = await likesAPI.create(postId)
      getPosts(); // <- to go get the updated posts with the like
    } catch(err){
      setError(err.message)
    }
  }

  async function removeLike(likeId){
    try {
      const data = await likesAPI.removeLike(likeId);
      getPosts()
      
    } catch(err){
      setError(err.message);
    }
  }


  // R read in crud
  async function getPosts() {
    try {
      const data = await postsAPI.getAll();
      setPosts([...data.posts]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getPosts();
  }, []);



  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <PostGallery
            posts={posts}
            numPhotosCol={1}
            isProfile={false}
            loading={loading}
            addLike={addLike}
            removeLike={removeLike}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}