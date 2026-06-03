import { useEffect, useState } from "react";
import "../styles/NewsSection.css";
import NewsCard from "@/components/NewsCard";
import PickCard from "@/components/PickCard";
import { fetchArticlesByQuery } from "@/api/newsService";
import Loader from "@/components/Loader";

const tabs = ["Latest Stories", "Think", "Health"];

const proxyImage = (url) =>
  url
    ? `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=600&h=400&fit=cover`
    : null;

const normalize = (a, i) => ({
  id: i,
  title: a.title || "Başlıq yoxdur",
  description: a.description
    ? a.description.slice(0, 120) + "..."
    : "Məzmun mövcud deyil.",
  image: (() => {
    const url = a.urlToImage;
    if (!url || url.includes("removed"))
      return `https://picsum.photos/seed/${i}/600/400`;
    return proxyImage(url);
  })(),
  author: a.author || a.source?.name || "Unknown",
  timeAgo: new Date(a.publishedAt).toLocaleDateString(),
  readTime: "3 min read",
  likes: null,
  category: a.source?.name,
  isLive: i === 0,
  isEditorsPick: i < 4,
});

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [isListView, setIsListView] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 12;

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchArticlesByQuery("news", PAGE_SIZE * page);
        if (!cancelled) setArticles(data.articles || []);
        if (!cancelled) {
          setArticles(data.articles || []);
          localStorage.setItem(
            "cachedArticles",
            JSON.stringify(data.articles || []),
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [page]);

  const normalized = articles.map(normalize);
  const liveArticle = normalized[0];
  const editorsPicks = normalized.slice(0, 4);

  return (
    <section className="newsSection">
      <div className="newsSection__container">
        <div className="newsSection__main">
          <div className="newsSection__tabs">
            <div className="newsSection__tabList">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`newsSection__tab${i === activeTab ? " active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              className={`newsSection__gridBtn${isListView ? " newsSection__gridBtn--active" : ""}`}
              onClick={() => setIsListView((prev) => !prev)}
              title={isListView ? "Switch to grid view" : "Switch to list view"}
            >
              {isListView ? (
                <img src="/icons/grid-icon.svg" alt="grid view" />
              ) : (
                <img src="/icons/list.svg" alt="list view" />
              )}
            </button>
          </div>

          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px 0",
              }}
            >
              <Loader />
            </div>
          ) : (
            <div
              className={`newsSection__grid${isListView ? " newsSection__grid--list" : ""}`}
            >
              {normalized.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  isListView={isListView}
                />
              ))}
            </div>
          )}
          <button
            className="newsSection__viewMore"
            onClick={() => setPage((p) => p + 1)}
          >
            VIEW MORE
          </button>
        </div>

        <aside className="newsSection__sidebar">
          <div className="sidebar__liveHeader">
            <span>Live</span>
            <div className="sidebar__liveDotWrap">
              <div className="sidebar__liveDotRing" />
              <div className="sidebar__liveDot" />
            </div>
          </div>
          {liveArticle && (
            <div className="sidebar__liveCard">
              <img src={liveArticle.image} alt={liveArticle.title} />
              <p>{liveArticle.title}</p>
            </div>
          )}

          <div className="sidebar__locationBox">
            <h4>Location News</h4>
            <p>Get Location specific News</p>
            <input type="text" placeholder="Enter Your Location" />
            <button>SUBMIT</button>
          </div>
        </aside>
      </div>

      <div className="editorPicks">
        <div className="editorPicks__header">
          <h2>Editor's Picks</h2>
          <img src="/icons/star-icon.svg" alt="star" />
        </div>
        <div className="editorPicks__grid">
          {editorsPicks.map((pick) => (
            <PickCard key={pick.id} pick={pick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
