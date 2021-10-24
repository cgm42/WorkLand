import React from 'react';

function UserInfoCardList(props) {
  const {name, startTime} = props;
  console.log(startTime)

  return (
    <>
      {startTime && <li>{name}{startTime}</li>}
      {!startTime && <li>{name}</li>}
    </>
  );
};

export default UserInfoCardList;
