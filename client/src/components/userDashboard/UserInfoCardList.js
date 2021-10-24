import React from 'react';

export default function UserInfoList(props) {
  const {name, startTime} = props;

  return (
    <li>
      {name}
    </li>
  );
}
