import React from 'react'
import { useSelector } from 'react-redux';

function Programmer() {

  const user = useSelector((state) => state.user);
  const nameee = JSON.stringify(user);
  console.log(user.token);
  console.log(user);
  console.log(nameee);
 const nameu= JSON.parse(nameee);
  console.log(nameu);
  return (
    <div>Programmer
      <h6>alors donc {nameu.token} </h6>
      <h6>le user est {user.token}</h6>
    </div>
  );
}

export default Programmer