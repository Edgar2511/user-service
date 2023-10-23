import { Input } from "@mui/material";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="Contact">
      <div className="Title">
        <span>Who We Offer</span>
      </div>
      <form>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Subject" />
        <Input placeholder="Comment" />
      </form>
      <div>
        <button className="messageBtn">SEND</button>
      </div>
    </div>
  );
};
