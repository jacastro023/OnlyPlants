import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Grid } from "semantic-ui-react";

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
      <Grid.Row>
        <Grid.Column>
          <PageHeader handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <h1>Home Page</h1>
      </Grid.Row>
    </Grid>
  );
}
