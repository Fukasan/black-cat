import React from "react";
import CostCalculator from "../pages/cost-calculator";

interface RouteConfig {
  path: string;
  element: React.ReactElement
}

const routesConfig:RouteConfig[] = [
  {
    path: '/',
    element: <CostCalculator />
  }
]

export default routesConfig