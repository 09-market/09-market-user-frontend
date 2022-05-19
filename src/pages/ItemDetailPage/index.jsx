import React from 'react';
import styled from 'styled-components';

import GoBackHeader from 'components/GoBackHeader';
import Item from './Item';

export default function ItemDetailPage() {
  return (
    <>
      <GoBackHeader headerTitle="상품" />
      <Item />
    </>
  );
}
