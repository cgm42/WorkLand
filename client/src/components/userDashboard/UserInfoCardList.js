import React from 'react';

export default function UserInfoList(props) {
  const {name} = props;

  return (
    <li>
      {name}
    </li>
  );
}
