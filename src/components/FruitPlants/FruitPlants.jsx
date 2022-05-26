import React from "react";
import { Divider, Image } from "semantic-ui-react";
import fruit1 from "../../images/fruits/fruit1.jpeg"
import fruit2 from "../../images/fruits/fruit2.jpeg"
import fruit3 from "../../images/fruits/fruit3.jpeg"
import fruit4 from "../../images/fruits/fruit4.jpeg"
import fruit5 from "../../images/fruits/fruit5.jpeg"
import fruit6 from "../../images/fruits/fruit6.jpeg"
import "../FruitPlants/fruitplants.css"


export default function HousePlants() {
  return (
    <div>
      <h2>Fruit Plants</h2>
      <Image.Group size="small">
        <Image src={fruit1} />
        <Image src={fruit2} />
        <Image src={fruit3} />
        <Image src={fruit4} />
        <Image src={fruit5} />
        <Image src={fruit6} />
      </Image.Group>
    </div>
  );
}
