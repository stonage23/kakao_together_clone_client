import React, { useState } from 'react';
import * as S from './Styled';
import { Span } from 'components/CommonStyles/Styled';

const TextArea = ({ name, placeholder, textMaxLength }) => {
  const [textLength, setTextLength] = useState(0);

  const handleTextLength = e => {
    const length = e.target.value.length;
    setTextLength(length);
  };
  return (
    <S.TextArea className="textarea_container">
      <S.TextAreaFieldBox className="textarea_field_box">
        <S.TextAreaField
          name={name}
          placeholder={placeholder}
          className="textarea"
          onChange={handleTextLength}
        ></S.TextAreaField>
      </S.TextAreaFieldBox>
      <S.TextAreaUtilBox className="textarea_util_box">
        <S.TextAreaUtil className="textarea_util">
          <Span size={13}>
            <Span>{textLength}</Span>/{textMaxLength}
          </Span>
        </S.TextAreaUtil>
      </S.TextAreaUtilBox>
    </S.TextArea>
  );
};

export default TextArea;
