import React from 'react';

export default function UserInfoList(props) {
  const {userInfo} = props;

  return (
    <li>
      {userInfo}
    </li>
  );
}
