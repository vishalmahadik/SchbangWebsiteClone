// src/utils/utils.js
export const splitTextIntoWords = (text) => {
  return text.split(" ").map((word, index) => (
    <span key={index} className={`reveal-word reveal-word-${index + 1}`}>
      {word}&nbsp;
    </span>
  ));
};
