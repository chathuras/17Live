import styled from 'styled-components';

export const List = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0px;
`;

export const Row = styled.div<{order: number}>`
  width: 320px;
  height: 48px;
  position: absolute;
  top: ${props => 48 * props.order}px;
  left: 50%;
  margin-left: -160px;
  transition: all 0.3s ease 0s;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const NumberCell = styled.div`
  width: 24px;
  text-align: center;
`;

export const ImageCell = styled.div<{picture: string}>`
  background-image: url(${props => props.picture}), url(https://webcdn.17app.co/17live/ig-default.svg);
  background-size: 100%;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 2px solid rgb(255, 255, 255);
`;

export const PointCell = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-align: right;
  :after {
    display: inline-block;
    content: "pt";
  }
`;