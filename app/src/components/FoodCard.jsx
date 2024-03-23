/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "../globalCss";

// {
//     "name": "RAMEN",
//     "price": 25,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/ramen.png",
//     "type": "lunch"
//     }

const FoodCard = ({ data: food, URL }) => {
  return (
    <>
      {food?.map((food) => (
        <Card key={food.name}>
          <span>
            <img src={URL + food.image} alt="" />
          </span>
          <div className="content">
            <h2>{food.name}</h2>
            <p>{food.text}</p>
            <span>
              <Button>$ {food.price.toFixed(2)}</Button>
            </span>
          </div>
        </Card>
      ))}
    </>
  );
};

export default FoodCard;

const Card = styled.div`
  width: 340px;
  height: 167px;
  border-radius: 20px;
  background-color: #88858530;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 5px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 16px;
      font-weight: 600;
      padding-bottom: 10px;
      white-space: nowrap;
    }
    p {
      font-size: 12px;
    }
    span {
      align-items: self-end;
      text-align: end;
      padding-top: 10px;
    }
  }
`;
