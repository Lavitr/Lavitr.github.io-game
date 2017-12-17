
function handleKeyDown(evt) {
  Keyboard.keyDown = evt.keyCode;
  // console.log(evt.keyCode, evt.type);
}

function handleKeyUp() {
  Keyboard.keyDown = -1;
}

const Keyboard = {
  keyDown: -1,

  initialize() {
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
  },
};

export default Keyboard;
