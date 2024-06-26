import {getWeatherDataByCoodinates} from "./data/weatherAPI.js";
import { GeoCoordinates } from "./data/location.js";

const newC = new GeoCoordinates(45.896230, -66.678910);
getWeatherDataByCoodinates(newC);