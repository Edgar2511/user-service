import { FC } from "react";
import "./PeopleCard.css";

export interface PeopleCardProps {
  imageSrc: string;
  fullName: string;
  position: string;
  personalInfo: string;
}

export const PeopleCard: FC<PeopleCardProps> = (props) => {
  const { personalInfo, fullName, imageSrc, position } = props;
  return (
    <div className="card">
      <img src={imageSrc} alt="#" />
      <h2>{fullName}</h2>
      <p>{position}</p>
      <p>{personalInfo}</p>
      <button>Contact</button>
    </div>
  );
};
