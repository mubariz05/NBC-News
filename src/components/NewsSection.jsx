import { useState } from "react";
import "../styles/NewsSection.css";
import mockNews from "../../lib/mockData";
import NewsCard from "../components/NewsCard";
import PickCard from "./PickCard";

const tabs = ["Latest Stories", "Think", "Health"];

const liveArticle = mockNews.find((a) => a.isLive) ?? mockNews[0];
const editorsPicks = mockNews.filter((a) => a.isEditorsPick);

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isListView, setIsListView] = useState(false);

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

          <div
            className={`newsSection__grid${isListView ? " newsSection__grid--list" : ""}`}
          >
            {mockNews.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                isListView={isListView}
              />
            ))}
          </div>

          <button className="newsSection__viewMore">VIEW MORE</button>
        </div>

        <aside className="newsSection__sidebar">
          <div className="sidebar__liveHeader">
            <span>Live</span>
            <div className="sidebar__liveDotWrap">
              <div className="sidebar__liveDotRing" />
              <div className="sidebar__liveDot" />
            </div>
          </div>
          <div className="sidebar__liveCard">
            <img src={liveArticle.image} alt={liveArticle.title} />
            <p>{liveArticle.title}</p>
          </div>

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
