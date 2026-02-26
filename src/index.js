import "./index.css";
import { ItWorks } from "./components/ItWorks.jsx";
import { Home } from "./components/Home.jsx"
import register from 'preact-custom-element';

register(ItWorks, "x-it-works");
register(Home, "x-home");
