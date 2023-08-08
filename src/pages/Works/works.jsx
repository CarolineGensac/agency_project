import React from "react";
import { Link } from "react-router-dom";


const Works = () => {
  return (
    <div className="introduction-container">
      <h2>Works</h2>
      <p>
        Au fil des années, nous avons pu accompagner les meilleurs. Découvrez
        pas à pas comment nous avons été présents pour lancer vos marques
        préférées.
      </p>

      <div className="container">
        <div className="card">
          <div className="header">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="img platon"
            />
          </div>
          <div className="descr">
            <h1>Platon</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              perferendis voluptas consequatur ipsa consectetur quam cum
              repellat earum.
            </p>
          </div>
          <Link className= "btn" to="/works/platon">En savoir plus</Link>
        </div>

        <div className="card">
          <div className="header">
            <img
              src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt="img sedal"
            />
          </div>
          <div className="descr">
            <h1>Sedal</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              perferendis voluptas consequatur ipsa consectetur quam cum
              repellat earum.
            </p>
          </div>
          <Link className= "btn" to="/works/sedal">En savoir plus</Link>
        </div>

        <div className="card">
          <div className="header">
            <img
              src="https://images.unsplash.com/photo-1626371972453-9d3041d2c1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="img solane"
            />
          </div>
          <div className="descr">
            <h1>Solane</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              perferendis voluptas consequatur ipsa consectetur quam cum
              repellat earum.
            </p>
          </div>
          <Link className= "btn" to="/works/solane">En savoir plus</Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
