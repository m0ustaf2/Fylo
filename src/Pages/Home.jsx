import { Fragment } from "react/jsx-runtime";
import Landing from "../Components/Landing";
import Features from '../Components/Features';
import StayProductive from "../Components/StayProductive";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";


export default function Home() {
  return (
    <Fragment>
        <Landing/>
        <Features/>
        <StayProductive/>
        <Testimonials/>
        <GetStarted/>
    </Fragment>
  )
}
