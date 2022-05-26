import React from "react";
import { Divider, Image } from "semantic-ui-react";
import garden1 from "../../images/garden/garden1.jpeg"
import garden2 from "../../images/garden/garden2.jpeg"
import garden3 from "../../images/garden/garden3.jpeg"
import garden4 from "../../images/garden/garden4.jpeg"
import garden5 from "../../images/garden/garden5.jpeg"
import garden6 from "../../images/garden/garden6.jpeg"
import "../FruitPlants/fruitplants.css"


export default function GardenPlants() {
  return (
    <div>
      <h2>Garden Plants</h2>
      <Image.Group size="small">
        <Image src={garden1} />
        <Image src={garden2} />
        <Image src={garden3} />
        <Image src={garden4} />
        <Image src={garden5} />
        <Image src={garden6} />
      </Image.Group>
    </div>
  );
}
