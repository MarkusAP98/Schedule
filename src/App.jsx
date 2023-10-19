import React, { useState } from "react";

export default function App() {
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
          <button className="card">2</button>
          <button className="card">3</button>
          <button className="card">4</button>
          <button className="card">5</button>
          <button className="card">6</button>
          <button className="card">7</button>
          <button className="card">8</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className="card">9</button>
          <button className="card">10</button>
          <button className="card">11</button>
          <button className="card">12</button>
          <button className="card">13</button>
          <button className="card">14</button>
          <button className="card">15</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className="card">16</button>
          <button className="card">17</button>
          <button className="card">18</button>
          <button className="card">19</button>
          <button className="card">20</button>
          <button className="card">21</button>
          <button className="card">22</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className="card">23</button>
          <button className="card">24</button>
          <button className="card">25</button>
          <button className="card">26</button>
          <button className="card">27</button>
          <button className="card">28</button>
          <button className="card">29</button>
        </div>
        <div className="flex justify-between pt-2 m-10">
          <button className="card">30</button>
          <button className="card">31</button>
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
