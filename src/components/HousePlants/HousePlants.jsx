import React from "react";
import { Divider, Image } from "semantic-ui-react";
import house1 from "../../images/house/plants1.jpeg"
import house2 from "../../images/house/plants2.jpeg"
import house3 from "../../images/house/plants3.jpeg"
import house4 from "../../images/house/plants4.jpeg"
import house5 from "../../images/house/plants5.jpeg"
import house6 from "../../images/house/plants6.jpeg"
import "../FruitPlants/fruitplants.css"


export default function HousePlants() {
  return (
    <div>
      <h2>house Plants</h2>
      <Image.Group size="small">
        <Image src={house1} />
        <Image src={house2} />
        <Image src={house3} />
        <Image src={house4} />
        <Image src={house5} />
        <Image src={house6} />
      </Image.Group>
    </div>
  );
}
