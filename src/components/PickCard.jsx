import "../styles/NewsCard.css";

const PickCard = ({ pick }) => {
  return (
    <div className="pickCard">
      <div className="pickCard__imgWrap">
        <img src={pick.image} alt={pick.title} />
        {pick.category && (
          <span className="newsCard__badge">{pick.category}</span>
        )}
      </div>
      <div className="pickCard__body">
        <h3>{pick.title}</h3>
        <p>{pick.description}</p>
      </div>
    </div>
  );
};

export default PickCard;
