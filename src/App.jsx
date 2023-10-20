import React, { useState } from "react";

export default function App() {
  const [isClicked, setClickState] = useState(false);

  const handleClick = () => {
    setClickState(!isClicked);
  };

  const card = isClicked ? "static-card" : "card";

  return (
    <div className="place-content-center p-40 m-60 shadow-xl">
      <h1 className="text-5xl font-extrabold">October 2023</h1>
      <h3 className="center mt-10">MY AVAILABILITY THIS MONTH</h3>
      <div className="">
        <ul className="flex justify-between pt-24 m-10">
          <li className="">Monday</li>
          <li className="">Tuesday</li>
          <li className="">Wednesday</li>
          <li className="">Thursday</li>
          <li className="">Friday</li>
          <li className="">Saturday</li>
          <li className="">Sunday</li>
        </ul>
        <div className="flex justify-between pt-2 m-10">
          <button className="card text-sky-400/75">25</button>
          <button className="card text-sky-400/75">26</button>
          <button className="card text-sky-400/75">27</button>
          <button className="card text-sky-400/75">28</button>
          <button className="card text-sky-400/75">29</button>
          <button className="card text-sky-400/75">30</button>
          <button className="card">1</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className={card} onClick={handleClick}>
            2
          </button>
          <button className={card} onClick={handleClick}>3</button>
          <button className={card} onClick={handleClick}>4</button>
          <button className={card} onClick={handleClick}>5</button>
          <button className={card} onClick={handleClick}>6</button>
          <button className={card} onClick={handleClick}>7</button>
          <button className={card} onClick={handleClick}>8</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className={card} onClick={handleClick}>9</button>
          <button className={card} onClick={handleClick}>10</button>
          <button className={card} onClick={handleClick}>11</button>
          <button className={card} onClick={handleClick}>12</button>
          <button className={card} onClick={handleClick}>13</button>
          <button className={card} onClick={handleClick}>14</button>
          <button className={card} onClick={handleClick}>15</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className={card} onClick={handleClick}>16</button>
          <button className={card} onClick={handleClick}>17</button>
          <button className={card} onClick={handleClick}>18</button>
          <button className={card} onClick={handleClick}>19</button>
          <button className={card} onClick={handleClick}>20</button>
          <button className={card} onClick={handleClick}>21</button>
          <button className={card} onClick={handleClick}>22</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className={card} onClick={handleClick}>23</button>
          <button className={card} onClick={handleClick}>24</button>
          <button className={card} onClick={handleClick}>25</button>
          <button className={card} onClick={handleClick}>26</button>
          <button className={card} onClick={handleClick}>27</button>
          <button className={card} onClick={handleClick}>28</button>
          <button className={card} onClick={handleClick}>29</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className={card} onClick={handleClick}>30</button>
          <button className={card} onClick={handleClick}>31</button>
          <button className="card text-sky-400/75">1</button>
          <button className="card text-sky-400/75">2</button>
          <button className="card text-sky-400/75">3</button>
          <button className="card text-sky-400/75">4</button>
          <button className="card text-sky-400/75">5</button>
        </div>
      </div>
    </div>
  );
}
