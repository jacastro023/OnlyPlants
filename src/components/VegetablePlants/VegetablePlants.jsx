import React from "react";
import { Divider, Image } from "semantic-ui-react";
import vegi1 from "../../images/vegetables/vegi1.jpeg"
import vegi2 from "../../images/vegetables/vegi2.jpeg"
import vegi3 from "../../images/vegetables/vegi3.jpeg"
import vegi4 from "../../images/vegetables/vegi4.jpeg"
import vegi5 from "../../images/vegetables/vegi5.jpeg"
import vegi6 from "../../images/vegetables/vegi6.jpeg"
import "../FruitPlants/fruitplants.css"


export default function VegetablePlants() {
  return (
    <div className="vegetables">
      <h2>Vegetable Plants</h2>
      <Image.Group size="small">
        <Image src={vegi1} />
        <Image src={vegi2} />
        <Image src={vegi3} />
        <Image src={vegi4} />
        <Image src={vegi5} />
        <Image src={vegi6} />
      </Image.Group>
    </div>
  );
}
