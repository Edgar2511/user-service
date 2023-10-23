import { FC } from "react";
import "./Input.css";

interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = (props) => {
  const { placeholder } = props;

  return (
    <div className="Input">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
