import React, { useState, useEffect } from 'react';

import SearchHeader from './SearchHeader';
import SearchResult from './SearchResult';

export default function SearchPage() {
  const [inpKeyword, setInpKeyword] = useState('');

  return (
    <>
      <SearchHeader />
      <SearchResult />
    </>
  );
}
