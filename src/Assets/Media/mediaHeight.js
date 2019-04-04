import { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
const MediaHeight = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-height: ${sizes[label] / 16}em){
      ${css(...args)}
    }
  `;
  return acc;
}, {});


export default MediaHeight;
