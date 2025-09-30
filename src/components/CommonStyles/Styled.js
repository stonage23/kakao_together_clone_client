import styled from "styled-components";


export const Typography = styled.div`
    color: ${({color}) => color ? color : "rgb(32, 32, 32)"};
    font-size: 16px;
    font-style: normal;
    overflow-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    text-overflow: ellipsis;
    letter-spacing: -0.1px;
    line-height: 1.56;
`;

export const Strong = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
`;


export const Title = styled(Strong)`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`;


export const A = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;


export const Span = styled.span`
    color: rgb(136, 136, 136);
    font-size: 13px;
    overflow-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.1px;
    line-height: 1.56;
`;


export const P = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-style: normal;
    overflow-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    letter-spacing: -0.1px;
    line-height: 1.56;
`;

export const ExternalHyperlink = styled.a`
    display: inline-block;
    font: inherit;
    color: inherit;
`;

/**
 * 브라우저에는 보이지 않지만 DOM에는 생성되는 label 요소
 * @description 사용하고자 하는 태그로 변환(as)하여 사용
 */
export const HiddenLabelTag = styled.div`
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    width: 1px;
    height: 1px;
    margin: -1px;
    color: transparent;
`;