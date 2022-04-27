import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { isLogined } from 'utils/isLogined';

export default function ProfilePage() {
  const params = useParams();
  const [userData, setUserData] = useState({});

  if (isLogined()) {
    return (
      <>
        <p>ProfilePage</p>
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
