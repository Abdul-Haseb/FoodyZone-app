/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Logo } from "./Icons";
import { Button } from "../globalCss";

const UpperSection = ({ searchFood, handleSelectedMeal, selectedMeal }) => {
  return (
    <Header>
      <div className="logo_searchBar">
        <Logo />
        <span>
          <input
            type="search"
            name="SearchBar"
            id="search"
            placeholder="Search Food..."
            onChange={searchFood}
          />
        </span>
      </div>
      <nav>
        <Button onClick={() => handleSelectedMeal("all")}>All</Button>
        <Button onClick={() => handleSelectedMeal("breakfast")}>
          BreakFast
        </Button>
        <Button onClick={() => handleSelectedMeal("lunch")}>Lunch</Button>
        <Button onClick={() => handleSelectedMeal("dinner")}>Dinner</Button>
      </nav>
      {/* <p>{selectedMeal}</p> */}
    </Header>
  );
};

export default UpperSection;

const Header = styled.header`
  color: white;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 0;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top: 30px;
  }

  .logo_searchBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #search {
    all: unset;
    background-color: transparent;
    border: 1px solid red;
    width: 250px;
    height: 40px;
    padding: 3px 6px;
  }
`;
