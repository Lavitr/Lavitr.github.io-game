const displayLoading = (percent) => {
  const percentLoadedWrapper = document.getElementById('loading');
  const percentLoaded = document.getElementById('percentage');
  percentLoaded.innerText = `${percent}%`;
  if (percent === 100) {
    percentLoadedWrapper.classList.add('invisible');
  }
};


export default displayLoading;
