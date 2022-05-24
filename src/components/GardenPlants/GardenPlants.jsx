import React from "react";
import { Divider, Image } from "semantic-ui-react";

export default function GardenPlants() {

  return (
    <div>
      <h2>Garden Plants</h2>
      <Divider hidden />
      <Image.Group size="small">
        <Image src={"https://picsum.photos/200"} />
        <Image src={"https://picsum.photos/200"} />
        <Image src={"https://picsum.photos/200"} />
        <Image src={"https://picsum.photos/200"} />
      </Image.Group>
    </div>
  );
}