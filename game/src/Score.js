const setScore = function (score) {
  if (typeof (Storage) !== 'undefined') {
    const highscore = localStorage.getItem('highscore');

    if (highscore !== null) {
      if (score > highscore) {
        localStorage.setItem('highscore', score);
      }
    } else {
      localStorage.setItem('highscore', score);
    }
    return localStorage.getItem('highscore');
  }
};

export { setScore };
