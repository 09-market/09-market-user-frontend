import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { isLogined } from 'utils/isLogined';

import ProfilePageHeader from './ProfilePageHeader';
import OptionModal from 'components/OptionModal';

export default function ProfilePage() {
  const params = useParams();
  const [userId, setUserId] = useState('');
  const [optionClicked, setOptionClicked] = useState(false);

  if (isLogined()) {
    return (
      <>
        {optionClicked && (
          <OptionModal
            optionClicked={optionClicked}
            setOptionClicked={setOptionClicked}
            userId={userId}
          />
        )}
        <p>ProfilePage</p>
      </>
    );
  } else {
    return <Navigate replace to="/signin" />;
  }
}
