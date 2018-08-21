const path = require('path');
const MotionDetectionModule = require('pi-motion-detection');
// const motionDetector = new MotionDetectionModule({
//   captureDirectory: path.resolve(__dirname, 'captures')
// });

const motionDetector = new MotionDetectionModule({
  // Required
  captureDirectory: `${__dirname}/images`, // Directory to store tmp photos and video captures. Those will be written into
  // captureDirectory/images and captureDirectory/videos respectively

  // Optional
  continueAfterMotion: false, // Defaults to false
  // Flag to control if motion detection will continue after detection

  captureVideoOnMotion: false // Defaults to false
  // Flag to control video capture on motion detection
});

motionDetector.on('motion', () => {
  console.log('motion!');
});

motionDetector.on('error', error => {
  console.log(error);
});

motionDetector.watch();
