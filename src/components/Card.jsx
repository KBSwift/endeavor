const Card = ({post}) => {
  return (
    <>
      <article data-bs-toggle="modal" data-bs-target={`#postModal${post.id}`}>
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.altText} />
      </article>
      <div 
        className="modal fade"
        id={`postModal${post.id}`}
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title">{post.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
              </button>
            </div>
            <div className="modal-body">
              <img src={post.image} alt={post.altText} className="modal-image card-img-top" />
              <p>{post.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
