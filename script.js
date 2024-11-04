const btnDiv = document.querySelector('.fixed-button');
const paragraph = document.querySelector('p');

document.addEventListener('scroll', (e) => {
  let btnBottom = btnDiv.offsetTop + btnDiv.offsetHeight;
  let overflowPercentage =
    ((btnBottom - paragraph.offsetHeight) / btnDiv.offsetHeight) * 100;

  btnDiv.style.background = `linear-gradient(
      to bottom,
      rgb(252, 70, 70) ${100 - overflowPercentage}%,
      rgba(255, 255, 255, 0) ${100 - overflowPercentage}%
    )`;
});
