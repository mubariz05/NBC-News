import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import "./css/NewsDetail.css";
import Loader from "../../components/Loader";

const proxyImage = (url) =>
  url
    ? `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=700&fit=cover`
    : null;

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cached = useMemo(
    () => JSON.parse(localStorage.getItem("cachedArticles") || "[]"),
    [],
  );

  const article = cached[Number(id)] ?? null;

  const related = useMemo(
    () => cached.filter((_, i) => i !== Number(id)).slice(0, 3),
    [cached, id],
  );

  useEffect(() => {
    if (!article) navigate("/");
  }, [article, navigate]);

  if (!article) return <Loader />;

  if (!article) return <Loader />;

  const imageUrl =
    proxyImage(
      article.urlToImage && !article.urlToImage.includes("removed")
        ? article.urlToImage
        : null,
    ) || `https://picsum.photos/seed/${id}/700/400`;

  return (
    <div className="article-wrapper">
      <main className="article-main">
        {/* Byline */}
        <div className="article-byline">
          <img
            className="author-avatar"
            src={`https://i.pravatar.cc/40?u=${article.author}`}
            alt="author"
          />
          <div>
            <span className="author-name">
              {article.author || article.source?.name || "Unknown"}
            </span>
            <span className="author-role"> · Reporter</span>
          </div>
          <time className="article-date">
            {new Date(article.publishedAt).toLocaleDateString("az-AZ", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {/* Lead image */}
        <figure className="article-figure">
          <img
            src={imageUrl}
            alt={article.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://picsum.photos/seed/${id}/700/400`;
            }}
          />
          <figcaption>{article.source?.name}</figcaption>
        </figure>

        {/* Lead paragraph */}
        <p className="article-lead">{article.description}</p>

        {/* Content */}
        <p className="article-body-text">
          {article.content
            ? article.content.replace(/\[\+\d+ chars\]$/, "").trim()
            : "Məzmun mövcud deyil."}
        </p>

        <div className="article-read-more">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Tam məqaləni oxu →
          </a>
        </div>

        {/* Tags */}
        <div className="article-tags">
          {[article.source?.name, "Xəbər"].filter(Boolean).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Reactions */}
        <div className="article-reactions">
          <button className="reaction-btn">❤️ </button>
          <button className="reaction-btn">💬 </button>
          <button className="reaction-btn share-btn">↗ Share</button>
        </div>

        {/* Author Card */}
        <div className="author-card">
          <img
            src={`https://i.pravatar.cc/60?u=${article.author}`}
            alt="author"
            className="author-card-avatar"
          />
          <div className="author-card-info">
            <strong>
              {article.author || article.source?.name || "Unknown"}
            </strong>
            <p>{article.source?.name} üçün müxbir.</p>
          </div>
        </div>
      </main>

      {/* Sidebar */}
      <aside className="article-sidebar">
        <div className="sidebar-section">
          <h4 className="sidebar-title">Tövsiyə edilir</h4>
          {related.map((item, i) => (
            <div
              className="sidebar-card"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/news/${i < Number(id) ? i : i + 1}`)}
            >
              <img
                src={
                  proxyImage(item.urlToImage) ||
                  `https://picsum.photos/seed/${i}/120/80`
                }
                alt="related"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://picsum.photos/seed/${i}/120/80`;
                }}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default NewsDetail;
