import styled, { css } from 'styled-components';

export const FundraisingList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  & .content_card {
    margin-bottom: 30px;
    width: 100%;
    height: 250px;
    background-color: var(--white-color);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  & .card_inner {
    flex-direction: column;
    flex-wrap: wrap;
  }

  & .card_thumbnail {
    width: 35%;
  }

  & .card_content {
    padding: 34px 20px;
    width: 65%;
    box-sizing: border-box;
  }

  & .card_title {
    font-size: 18px;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }

  & .card_subtext {
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.6;
  }

  & .progress_container {
    margin-top: auto;
  }

  & .progress_bar {
    height: 4px;
  }
`;

export const FundraisingWrapper = styled.div`
  box-sizing: border-box;
  height: 150px;
  width: 300px;

  & .card_subtext {
    ${({ subtextLineClamp }) =>
      subtextLineClamp ? `-webkit-line-clamp: ${subtextLineClamp};` : ''}
  }
`;
