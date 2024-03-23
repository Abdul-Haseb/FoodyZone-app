import { useEffect, useState } from "react";
import styled from "styled-components";
import FoodCard from "./FoodCard";
import UpperSection from "./UpperSection";

const URL = "http://localhost:9000";

const MainSections = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState("all");

  const searchFood = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setFiltered(null);
    }
    const filteredData = data?.filter((food) =>
      food.name.toLowerCase().includes(inputValue)
    );
    setFiltered(filteredData);
    console.log(filtered);
  };

  useEffect(() => {
    setLoading(true);
    const FetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setData(data);
        setFiltered(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, []);

  const handleSelectedMeal = (type) => {
    if (type === "all") {
      setFiltered(data);

      setSelectedMeal("all");
      return;
    }
    const filteredBtn = data?.filter((meal) => meal?.type.includes(type));
    setFiltered(filteredBtn);
    setSelectedMeal(type);
  };
  console.log(data);
  if (loading) return <div>{loading}</div>;
  return (
    <>
      <UpperSection
        searchFood={searchFood}
        selectedMeal={selectedMeal}
        handleSelectedMeal={handleSelectedMeal}
      />
      <Main>
        <div className="foodCardsContainer">
          <FoodCard data={filtered} URL={URL} />
        </div>
      </Main>
    </>
  );
};

export default MainSections;

const Main = styled.main`
  height: calc(100vh - 236px);
  width: 100%;
  background-image: url("/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  .foodCardsContainer {
    max-width: 1100px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
  }
`;
