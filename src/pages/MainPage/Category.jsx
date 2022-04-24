import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Category({ category, setCategory }) {
  const handleCategory = (e) => {
    setCategory(e.target.innerText);
  };

  return (
    <CategoryContainer>
      <CategoryItem onClick={handleCategory}>전체</CategoryItem>
      <CategoryItem onClick={handleCategory}>화장품</CategoryItem>
      <CategoryItem onClick={handleCategory}>의류</CategoryItem>
      <CategoryItem onClick={handleCategory}>식품</CategoryItem>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.ul`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CategoryItem = styled.li`
  margin-left: 3vw;
`;
