import React from "react";
import { Link } from "react-router-dom";
import { Counter } from "../common/Counter";
import { TimeElapsed } from "../common/TimeElapsed";

type TProps = {
  children: JSX.Element | JSX.Element[];
}

const MainLayout = ({ children }: TProps) => (
  <>
    <b>
      <i>
        Time elapsed: <TimeElapsed />
      </i>
      <Counter />
    </b>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
    { children }
  </>
)

export { MainLayout }
