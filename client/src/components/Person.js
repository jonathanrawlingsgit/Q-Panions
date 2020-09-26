import React from 'react';
import Actions from './Actions';
import UserCreate from './Users/UserCreate';

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person;

  return (
    <>
    <UserCreate />
      <div className="person">
        <div className="person-photo">
          <img src={`/images/users/${image}`} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">
            {name}, <span>{age}</span>
          </p>
          <p className="person-info">{desc}</p>
        </div>
      </div>

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </>
  );
};

export default Person;