import React from "react";
function TechnologyCard({ technology, stack, addToStack }) {
  const isAdded = stack.some((item) => item.id === technology.id);

  return (
    <article className="technology-card">
      <div className="card-top">
        <img src={technology.icon} alt={technology.name} className="tech-icon" />
        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="description">{technology.description}</p>

      <div className="card-info">
        <span className="category">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span>
      </div>

      <button
        className={isAdded ? "added-button" : "add-button"}
        onClick={() => addToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;
