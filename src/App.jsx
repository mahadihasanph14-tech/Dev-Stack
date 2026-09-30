import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Technology data could not be loaded");
        setLoading(false);
      });
  }, []);

  function addToStack(technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  }

  function removeFromStack(id) {
    const selectedTechnology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (selectedTechnology) {
      toast.info(`${selectedTechnology.name} removed from your stack`);
    }
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack");
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="technologies-section" id="technologies">
          <div className="section-heading">
            <h2>
              Explore the <span>Technologies</span>
            </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="content-layout">
            <div className="technology-grid">
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>Loading technologies...</p>
                </div>
              ) : (
                technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    stack={stack}
                    addToStack={addToStack}
                  />
                ))
              )}
            </div>

            <StackPanel
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
