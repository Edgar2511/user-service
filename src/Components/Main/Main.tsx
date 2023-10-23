import { Contact } from "./Contact/Contact";
import "./Main.css";
import { Offer } from "./Offer/Offer";
import { Plans } from "./Plans/Plans";
import { Title } from "./Title/Title";
import { WorkTeamProfile } from "./WorkTeamProfile/WorkTeamProfile";

export const Main = () => {
  return (
    <div className="Main">
      <Title />
      <Offer />
      <Plans />
      <WorkTeamProfile />
      <Contact />
    </div>
  );
};
