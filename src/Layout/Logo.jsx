import CircularText from "../components/CircularText";
import { Data } from "../Data";

export default function Logo() {
  return (
    <div className="p-4 w-1/4">
      <CircularText
        text={Data.role + " "}
        onHover="speedUp"
        spinDuration={20}
        className="custom-class flex justify-center items-center"
      >
        <img
          src="/src/assets/images/favicon.png"
          alt=""
          className="w-[40px] h-[40px] grayscale-100"
        />
      </CircularText>
    </div>
  );
}
