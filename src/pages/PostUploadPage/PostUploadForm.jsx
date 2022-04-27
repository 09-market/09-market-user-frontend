import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { PALLETS } from 'utils/constants';
import axios from '../../api/axios';

export default function PostUploadForm() {
  const [inputImgUrl, setInputImgUrl] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputInfo, setInputInfo] = useState('');
  const [inputPrice, setInputPrice] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputCategory, setInputCategory] = useState('');

  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (
      inputImgUrl.length > 0 &&
      inputName.length > 0 &&
      inputInfo.length > 0 &&
      inputPrice > 0 &&
      inputAmount > 0 &&
      inputCategory.length > 0
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [
    inputImgUrl,
    inputName,
    inputInfo,
    inputPrice,
    inputAmount,
    inputCategory,
  ]);

  const handleInputImg = (e) => {
    setInputImgUrl(e.target.files);
    encodeFileToBase64(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setInputImgUrl(reader.result);
        resolve();
      };
    });
  };

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputInfo = (e) => {
    setInputInfo(e.target.value);
  };

  const handleInputPrice = (e) => {
    setInputPrice(e.target.value);
  };

  const handleInputAmount = (e) => {
    setInputAmount(e.target.value);
  };

  const handleInputCategory = (e) => {
    setInputCategory(e.target.value);
  };

  const handleUploadBtn = () => {
    try {
      axios.post(`/api/item`, {
        file: inputImgUrl,
        itemDto: {
          name: inputName,
          itemInfo: inputInfo,
          price: inputPrice,
          amount: inputAmount,
          category: inputCategory,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PostUploadWrap>
      <Form>
        <ImgUpload itemImgUrl={inputImgUrl}>
          <input
            type="file"
            className="blind"
            accept="image/*"
            onChange={handleInputImg}
          />
          {inputImgUrl.length === 0 && '이미지 업로드'}
        </ImgUpload>
        <label htmlFor="inpName">상품명</label>
        <input
          type="text"
          placeholder="상품명 입력"
          required
          id="inpName"
          value={inputName}
          onChange={handleInputName}
        />
        <label htmlFor="inpInfo">상품정보</label>
        <input
          type="textarea"
          placeholder="상품정보 입력"
          required
          id="inpInfo"
          value={inputInfo}
          onChange={handleInputInfo}
        />
        <label htmlFor="inpPrice">가격</label>
        <input
          type="number"
          placeholder="가격 입력."
          required
          id="inpPrice"
          value={inputPrice}
          onChange={handleInputPrice}
        />
        <label htmlFor="inpAmount">수량</label>
        <input
          type="number"
          placeholder="수량 입력"
          required
          id="inpAmount"
          value={inputAmount}
          onChange={handleInputAmount}
        />
        <label htmlFor="inpName">카테고리</label>
        <input
          type="text"
          placeholder="카테고리 입력"
          required
          id="inpName"
          value={inputCategory}
          onChange={handleInputCategory}
        />
      </Form>
      <UploadButton
        type="button"
        disabled={disabledBtn}
        onClick={handleUploadBtn}
      >
        게시하기
      </UploadButton>
    </PostUploadWrap>
  );
}

const PostUploadWrap = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95vw;

  input {
    border: 1px solid ${PALLETS.LIGHT_GRAY};
    padding: 10px;
    margin-bottom: 10px;
  }

  label {
    margin: 0 0 5px 10px;
  }
`;

const ImgUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${PALLETS.WHITE};
  width: 100%;
  height: 300px;
  margin: 0 0 20px !important;

  ${(props) =>
    props.itemImgUrl.length > 0
      ? `background-image:url(${props.itemImgUrl});`
      : `background-color : ${PALLETS.PURPLE};`}
  background-size: cover;
  border-radius: 5px;
`;

const UploadButton = styled.button`
  background-color: ${PALLETS.PURPLE};
  color: ${PALLETS.WHITE};
  padding: 15px 0;
  width: 80%;

  &:disabled {
    cursor: inherit;
    opacity: 0.5;
  }
`;
