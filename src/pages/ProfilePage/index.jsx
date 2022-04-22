import React from 'react';
import { Navigate } from 'react-router-dom';

import { isLogined } from 'utils/isLogined';

export default function ProfilePage() {
  if (isLogined()) {
    return (
      <div>
        <h2>ProfilePage</h2>
      </div>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
