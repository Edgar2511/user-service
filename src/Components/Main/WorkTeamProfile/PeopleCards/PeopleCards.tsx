import "./PeopleCards.css";
import { PeopleCard } from "./PeopleCard/PeopleCard";
import { FC } from "react";
import { PeopleData } from "./people.data";

interface PeopleCards {
  data: PeopleData[];
}

export const PeopleCards: FC<PeopleCards> = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map(({ fullName, imageSrc, personalInfo, position }) => (
        <PeopleCard
          key={imageSrc}
          fullName={fullName}
          imageSrc={imageSrc}
          personalInfo={personalInfo}
          position={position}
        />
      ))}
    </div>
  );
};
