import { useState } from "react";

export default function FutureGetaways() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="futuregetaways">
      <div className="container">
        <h2>Inspiration for future getaways</h2>
        <div className="tabcontainer">
          <a
            className={toggleState === 1 ? "tab_selected" : "tab"}
            onClick={() => toggleTab(1)}
          >
            <p className={toggleState === 1 ? "selectedp" : "tabtext"}>
              Historic Destinations
            </p>
          </a>
          <a
            className={toggleState === 2 ? "tab_selected" : "tab"}
            onClick={() => toggleTab(2)}
          >
            <p className={toggleState === 2 ? "selectedp" : "tabtext"}>
              Coastal Destinations
            </p>
          </a>
          <a
            className={toggleState === 3 ? "tab_selected" : "tab"}
            onClick={() => toggleTab(3)}
          >
            <p className={toggleState === 3 ? "selectedp" : "tabtext"}>
              Island Destinations
            </p>
          </a>
          <a
            className={toggleState === 4 ? "tab_selected" : "tab"}
            onClick={() => toggleTab(4)}
          >
            <p className={toggleState === 4 ? "selectedp" : "tabtext"}>
              Lake Destinations
            </p>
          </a>
          <a
            className={toggleState === 5 ? "tab_selected" : "tab"}
            onClick={() => toggleTab(5)}
          >
            <p className={toggleState === 5 ? "selectedp" : "tabtext"}>
              Other Popular Destinations
            </p>
          </a>
        </div>
        <div className="divider" />
        {toggleState === 1 ? (
          <div className="tableresults" id="table">
            <div>
              <h3>Aberdeen</h3>
              <p>Scotland</p>
            </div>
            <div>
              <h3>Aberystwyth</h3>
              <p>Wales</p>
            </div>
            <div>
              <h3>Alnwick</h3>
              <p>England</p>
            </div>
            <div>
              <h3>Bamburgh</h3>
              <p>England</p>
            </div>
            <div>
              <h3>Berwick-upon-Tweed</h3>
              <p>England</p>
            </div>
            <div>
              <h3>Boscastle</h3>
              <p>Scotland</p>
            </div>
            <div>
              <h3>Brittany</h3>
              <p>Bourgogne-Franche-Comte</p>
            </div>
            <div>
              <h3>Budapest</h3>
              <p>Hungary</p>
            </div>
            <div>
              <h3>Cardiff</h3>
              <p>Wales</p>
            </div>
            <div>
              <h3>Castleton</h3>
              <p>England</p>
            </div>
            <div>
              <h3>Cheltenam</h3>
              <p>England</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {toggleState === 2 ? (
          <div className="tableresults" id="table">
            <div>
              <h3>Brighton</h3>
              <p>England</p>
            </div>
            <div>
              <h3>Lancing</h3>
              <p>England</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {toggleState === 3 ? (
          <div className="tableresults" id="table">
            <div>
              <h3>Ibiza</h3>
              <p>Spain</p>
            </div>
            <div>
              <h3>Madeira</h3>
              <p>Portugal</p>
            </div>
          </div>
        ) : (
          ""
        )}

        {toggleState === 4 ? (
          <div className="tableresults" id="table">
            <div>
              <h3>Lake</h3>
              <p>Example</p>
            </div>
            <div>
              <h3>Lake</h3>
              <p>Example</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {toggleState === 5 ? (
          <div className="tableresults" id="table">
            <div>
              <h3>Example</h3>
              <p>Example</p>
            </div>
            <div>
              <h3>Example</h3>
              <p>Example</p>
            </div>
            <div>
              <h3>Example</h3>
              <p>Example</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
