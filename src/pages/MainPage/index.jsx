import React, { useState } from 'react';

import Category from './Category';
import PostItems from './PostItems';

export default function MainPage() {
  const [category, setCategory] = useState('all');

  return (
    <>
      <Category category={category} setCategory={setCategory} />
      <PostItems category={category} />
    </>
  );
}
