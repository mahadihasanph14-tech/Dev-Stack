import React from "react";
function StackPanel({ stack, removeFromStack, removeAll }) {
  return (
    <aside className="stack-panel">
      <h3>Your Stack</h3>

      <p className="selected-count">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${stack.length > 1 ? "ies" : ""} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="empty-stack">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt={technology.name} />
                <div>
                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
                <button
                  onClick={() => removeFromStack(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button className="remove-all" onClick={removeAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;
