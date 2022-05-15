import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'utils/constants';

export default function Category({ currentCategory, setCurrentCategory }) {
  const categoryData = ['전체'];

  const handleCategory = (e) => {
    setCurrentCategory(e.target.innerText);
  };

  return (
    <CategoryWrap>
      <CategoryContainer>
        {categoryData.map((category) => {
          if (category === currentCategory) {
            return (
              <ClickedCategoryItem key={category}>
                {category}
              </ClickedCategoryItem>
            );
          } else {
            return (
              <CategoryItem onClick={handleCategory} key={category}>
                {category}
              </CategoryItem>
            );
          }
        })}
      </CategoryContainer>
    </CategoryWrap>
  );
}

const CategoryWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CategoryContainer = styled.ul`
  display: flex;
  align-items: center;
  max-width: 1000px;
  height: 50px;
  margin: 0 auto;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  margin-left: 3vw;
`;

const ClickedCategoryItem = styled(CategoryItem)`
  font-family: 'GmarketSansBold';
  color: ${PALLETS.PURPLE};
`;
