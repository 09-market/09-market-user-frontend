import React from 'react';

import GoBackHeader from 'components/GoBackHeader';
import ItemData from './ItemData';
import InputComment from './InputComment';

export default function ItemDetailPage() {
  return (
    <>
      <GoBackHeader headerTitle="상품" />
      <ItemData />
      <InputComment />
    </>
  );
}
