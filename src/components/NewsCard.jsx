import "../styles/NewsCard.css";

const NewsCard = ({ article, isListView }) => {
  return (
    <div className={`newsCard${isListView ? " newsCard--list" : ""}`}>
      <div className="newsCard__imgWrap">
        <img src={article.image} alt={article.title} />
        {article.category && (
          <span className="newsCard__badge">{article.category}</span>
        )}
      </div>
      <div className="newsCard__body">
        <h3 className="newsCard__title">{article.title}</h3>
        <p className="newsCard__desc">{article.description}</p>
        <div className="newsCard__meta">
          <span className="newsCard__time">{article.timeAgo}</span>
          <span className="newsCard__dot">·</span>
          <span>By {article.author}</span>
          <span className="newsCard__dot">·</span>
          <span>{article.readTime}</span>
        </div>
        <div className="newsCard__actions">
          {article.likes !== null && (
            <button className="newsCard__action">
              <img src="/icons/heart-icon.svg" alt="heart" />
              <span>{article.likes}</span>
            </button>
          )}
          <button className="newsCard__action newsCard__action--bookmark">
            <img src="/icons/bookmarks-icon.svg" alt="bookmarks" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
