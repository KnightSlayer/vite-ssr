import React from "react";
import { Route } from "react-router-dom";
import { aboutPath, About } from "~/_components/routes/About"
import { homePath, Home } from "~/_components/routes/Home"
import { MainLayout } from "~/_components/layouts/MainLayout"

function Page() {
  return (
    <MainLayout>
      <Route exact path={homePath} >
        <Home/>
      </Route>
      <Route path={aboutPath}>
        <About/>
      </Route>
    </MainLayout>
  );
}

export { Page };
