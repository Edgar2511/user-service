import { PeopleCards } from "./PeopleCards/PeopleCards";
import { data } from "./PeopleCards/people.data";
import "./WorkTeamProfile.css";

export const WorkTeamProfile = () => {
  return (
    <div className="WorkTeamProfile">
      <div className="Title">
        <span>Who We Offer</span>
      </div>
      <PeopleCards data={data} />
    </div>
  );
};
