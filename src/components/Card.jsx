import { Link } from "react-router-dom";

const Card = ({post}) => {
  return (
    <article>
      <Link to={`/blog-posts/detail/${post.id}`}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.altText} />
      </Link>
    </article>
  );
}

export default Card;
