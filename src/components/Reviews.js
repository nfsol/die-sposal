import React from "react";
import Testimonial from ".//Testimonial";
import testCards from ".//content/testCards.json";
import Dryad from "./content/img/Dryad";
import Minotaur from "./content/img/Minotaur";
import Gobo from "./content/img/Gobo";
const Reviews = () => {
  const images = [<Dryad />, <Gobo />, <Minotaur />];
  return (
    <>
      <header className="header">
        <div className="infoContainer">
          <div className="headerText">
            <h1>Voluntary* Feedback</h1>
            <p>Feedback obtained with industry standard levels of coercion.</p>
          </div>
        </div>
      </header>
      <div className="testContainer">
        {testCards.map((entry, i) => {
          return <Testimonial data={entry} key={i} image={images[i]} />;
        })}
      </div>
    </>
  );
};

export default Reviews;
