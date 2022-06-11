import React from 'react';

import GoBackHeader from 'components/GoBackHeader';
import ItemData from './ItemData';
import CommentsData from './CommentsData';
import InputComment from './InputComment';

export default function ItemDetailPage() {
  return (
    <>
      <GoBackHeader headerTitle="상품" />
      <main>
        <ItemData />
        <CommentsData />
        <InputComment />
      </main>
    </>
  );
}
