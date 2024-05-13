import React from "react";
import ReactDOM from "react-dom";
// food ordering  app

// Headers
// 1.imaage
// 2.menu
// body
// 1.search
// 2.food card

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderLayout />
      <Body />
    </div>
  );
};

const HeaderLayout = () => {
  return (
    <div className="header-layout">
      <LogoContainer />
      <MenuContainer />
    </div>
  );
};
const LogoContainer = () => {
  return (
    <div className="logo-container">
      <img src="https://image.pngaaa.com/127/684127-middle.png" alt="Logo" />
    </div>
  );
};

const MenuContainer = () => {
  return (
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Details</li>
        <li>Card</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

const FoodCard = () => {
  return (
    <div className="food-card">
      <h3>Pizza Margherita</h3>
      <img
        src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg"
        alt="food-card-img"
      ></img>
      <p style={{ margin: "2px", padding: "1px" }}>
        <strong>pizza,burger</strong>
      </p>
      <div className="food-card-order-sum">
        <span>45 min</span>
        <span>2.1 km</span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
