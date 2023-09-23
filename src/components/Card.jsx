const Card = ({title, image, altText}) => {
  return (
      <article> 
        <h2>{title}</h2>
        <img src={image} alt={altText} />
      </article>
  );
}

export default Card;