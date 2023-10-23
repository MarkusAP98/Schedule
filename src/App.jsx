import ClickableButton from "./components/ClickableBtns";
import ColoredClickableBtn from "./components/ColoredClickableBtn"

export default function App() {

  return (
    <div className="place-content-center p-20 m-52 shadow-xl">
      <h1 className="text-5xl font-extrabold">October 2023</h1>
      <h3 className="center mt-10">MY AVAILABILITY THIS MONTH</h3>
      <div>
        <ul className="flex justify-between pt-20 mb-10">
          <li className="">Monday</li>
          <li className="">Tuesday</li>
          <li className="">Wednesday</li>
          <li className="">Thursday</li>
          <li className="">Friday</li>
          <li className="">Saturday</li>
          <li className="">Sunday</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <ColoredClickableBtn text="25" />
        <ColoredClickableBtn text="26" />
        <ColoredClickableBtn text="27" />
        <ColoredClickableBtn text="28" />
        <ColoredClickableBtn text="29" />
        <ColoredClickableBtn text="30" />
        <ClickableButton text="1" />
      </div>
      <div className="flex justify-between">
        <ClickableButton text="2" />
        <ClickableButton text="3" />
        <ClickableButton text="4" />
        <ClickableButton text="5" />
        <ClickableButton text="6" />
        <ClickableButton text="7" />
        <ClickableButton text="8" />
      </div>
      <div className="flex justify-between">
        <ClickableButton text="9" />
        <ClickableButton text="10" />
        <ClickableButton text="11" />
        <ClickableButton text="12" />
        <ClickableButton text="13" />
        <ClickableButton text="14" />
        <ClickableButton text="15" />
      </div>
      <div className="flex justify-between">
        <ClickableButton text="16" />
        <ClickableButton text="17" />
        <ClickableButton text="18" />
        <ClickableButton text="19" />
        <ClickableButton text="20" />
        <ClickableButton text="21" />
        <ClickableButton text="22" />
      </div>
      <div className="flex justify-between">
        <ClickableButton text="23" />
        <ClickableButton text="24" />
        <ClickableButton text="25" />
        <ClickableButton text="26" />
        <ClickableButton text="27" />
        <ClickableButton text="28" />
        <ClickableButton text="29" />
      </div>
      <div className="flex justify-between">
        <ClickableButton text="30" />
        <ClickableButton text="31" />
        <ColoredClickableBtn text="1" />
        <ColoredClickableBtn text="2" />
        <ColoredClickableBtn text="3" />
        <ColoredClickableBtn text="4" />
        <ColoredClickableBtn text="5" />
      </div>
    </div>
  );
}
