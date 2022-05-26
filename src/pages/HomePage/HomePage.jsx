import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import FruitPlants from "../../components/FruitPlants/FruitPlants";
import GardenPlants from "../../components/GardenPlants/GardenPlants";
import HousePlants from "../../components/HousePlants/HousePlants";
import VegetablePlants from "../../components/VegetablePlants/VegetablePlants";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Intro from "../../components/Intro/Intro";
import Footer from "../../components/Footer/Footer";
import { Grid, Divider } from "semantic-ui-react";
import "../HomePage/home.css"

export default function HomePage({ user, handleLogout }) {
  const [error, setError] = useState("");

  if (error) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    <Grid centered>
      <Grid.Row className="padding">
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="padding1">
        <Intro />
      </Grid.Row>
      <Grid.Row>
        <FruitPlants />
      </Grid.Row>
      <Grid.Row>
        <GardenPlants />
      </Grid.Row>
      <Grid.Row>
        <HousePlants />
      </Grid.Row>
      <Grid.Row>
        <VegetablePlants />
      </Grid.Row>
      <Footer />
    </Grid>
  );
}
