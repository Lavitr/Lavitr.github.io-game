import { makeSound } from './sound';
import displayLoading from './displayLoading';


const assets = {

  toLoad: 0,
  loaded: 0,
  imageExtensions: ['png', 'jpg', 'gif'],
  audioExtensions: ['mp3', 'ogg', 'wav', 'webm'],


  load(sources) {
    return new Promise((resolve) => {
      const loadHandler = () => {
        this.loaded += 1;
        if (this.toLoad === this.loaded) {
        /*  this.toLoad = 0;
          this.loaded = 0; */
          resolve();
        }
        // percentage of loaded assets
        const percent = Math.ceil(this.loaded / this.toLoad * 100);
        displayLoading(percent);
      };

      this.toLoad = sources.length;

      sources.forEach((source) => {
        // Find the file extension of the asset
        const extension = source.split('.').pop();

        // Load Image files 
        if (this.imageExtensions.indexOf(extension) !== -1) {
          this.loadImage(source, loadHandler);
        }
        // Load audio files  
        else if (this.audioExtensions.indexOf(extension) !== -1) {
          this.loadSound(source, loadHandler);
        } else {
          console.log(`File type not recognized: ${source}`);
        }
      });
    });
  },

  loadImage(source, loadHandler) {
    const image = new Image();
    image.addEventListener('load', loadHandler);
    const fileName = source.split('/').pop().split('.')[0];
    this[fileName] = image;
    image.src = source;
  },

  loadSound(source, loadHandler) {
    const sound = makeSound(source, loadHandler);
    const fileName = source.split('/').pop().split('.')[0];
    this[fileName] = sound;
  },
};


export default assets;
