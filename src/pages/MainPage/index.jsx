import React, { useState } from 'react';

import Category from './Category';
import PostItems from './PostItems';

export default function MainPage() {
  const [currentCategory, setCurrentCategory] = useState('전체');

  return (
    <>
      <Category
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <PostItems currentCategory={currentCategory} />
    </>
  );
}
