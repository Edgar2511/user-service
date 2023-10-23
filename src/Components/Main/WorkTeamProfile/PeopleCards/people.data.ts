export interface PeopleData {
  imageSrc: string;
  fullName: string;
  position: string;
  personalInfo: string;
}

export const data: PeopleData[] = [
  {
    imageSrc: "https://www.w3schools.com/w3images/team2.jpg",
    fullName: "John Doe",
    position: "CEO & Founder",
    personalInfo:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    imageSrc: "https://www.w3schools.com/w3images/team1.jpg",
    fullName: "Jane Doe",
    position: "Architect",
    personalInfo:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    imageSrc: "https://www.w3schools.com/w3images/team3.jpg",
    fullName: "Mike Ross",
    position: "Architect",
    personalInfo:
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
];
