import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PostCard({ post, isProfile, removeLike, addLike, user }) {
  console.log(post);
  const navigate = useNavigate();
  // call the addLike or the removeLike when we click on the heart!

  // We need to know if the logged in user has liked this particular post!
  // we search the array of objects that is post.likes to see if the logged in users
  // id exists in that array of objects
  const likeIndex = post.likes.findIndex(
    (like) => like.username === user.username
  );

  const clickHandler =
    likeIndex > -1
      ? () => removeLike(post.likes[likeIndex]._id)
      : () => addLike(post._id);

  // if the logged users id exists, the heart should be red, because the logged in user has liked the post
  // and the clicked handler should removeLike
  const likeColor = likeIndex > -1 ? "red" : "grey";
  // if the logged users id doesn't exist in the post.likes array, then the heart should be
  // grey, because the user hasn't liked the post, and the click handler should be addLike

  function handleClick() {
    navigate(`/details/${post._id}`);
  }

  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      <Image
        src={`${post.photoUrl}`}
        wrapped
        ui={false}
        onClick={handleClick}
      />
      <Card.Description textAlign="center">Name: {post.name}</Card.Description>
      {isProfile ? (
        ""
      ) : (
        <Card.Content>
          <Card.Description>{post.description}</Card.Description>
        </Card.Content>
      )}

      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

export default PostCard;
