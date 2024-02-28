import { useState } from "react";
import "./App.css";
import Cards from "./Cards.jsx";
import AngularImage from "./images/AngularImage.png";
import ReactImage from "./images/ReactImage.png";
import VueImage from "./images/VueImage.png";
import JsImage from "./images/JavaScriptImage.png";
import "bulma/css/bulma.css";

function App() {
  let lipsum =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae velit ab qui repellendus blanditiis accusantium placeat ducimus iure ratione sapiente praesentium, porro ipsa unde. Commodi ipsam id dolorum recusandae.";

  return (
    <>
      <div className="App">
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">JavaScript and His Friends</p>
            <p className="subtitle">JS Frameworks</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="columns">
                <Cards
                  title="Angular"
                  description={lipsum}
                  images={AngularImage}
                />
              </div>
              <div className="columns">
                <Cards title="React" description={lipsum} images={ReactImage} />
              </div>
              <div className="columns">
                <Cards title="Vue" description={lipsum} images={VueImage} />
              </div>
              <div className="columns">
                <Cards
                  title="JavaScript"
                  description={lipsum}
                  images={JsImage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
