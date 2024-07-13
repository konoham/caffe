import { useEffect, useState } from "react";
import featured from "../data/featured";
import BestSeller from "../data/baseSeller";
import IndoCoffee from "../data/indoCoffee";
import Expresso from "../data/Expresso";
import Brewed_Coffee from "../data/Brewed Coffee";
import Special_Coffee from "../data/Special_Coffee";

const SwitchType = (path) => {
  switch (path) {
    case "featured":
      return featured;
      break;
    case "latest":
      return IndoCoffee;
      break;
    case "Bestseller":
      return BestSeller;
      break;
    case "Espresso":
      return Expresso;
      break;
    case "Brewed":
      return Brewed_Coffee;
      break;
    case "Specialty":
      return Special_Coffee;
      break;
    default:
      break;
  }
};

export default SwitchType;
