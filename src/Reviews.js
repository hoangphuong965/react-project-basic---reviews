import React, { useState } from "react";
import data from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return data.length - 1;
    } else if (number > data.length - 1) {
      return 0;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(() => {
      let prev = index - 1;
      return checkNumber(prev);
    });
  };
  const nextPerson = () => {
    setIndex(() => {
      let next = index + 1;
      return checkNumber(next);
    });
  };

  return (
    <>
      <article>
        <div>
          <img src={image} alt={name} className='person-img' />
        </div>
        <h2>{name}</h2>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='btn prev-btn' onClick={prevPerson}>
            <i class='fa fa-arrow-left' aria-hidden='true'></i>
          </button>
          <button className='btn next-btn' onClick={nextPerson}>
            <i class='fa fa-arrow-right' aria-hidden='true'></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default Reviews;
