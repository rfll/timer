// Input command line arguments
const cmdLineArgs = process.argv.slice(2);
// variable to convert command line args into milliseconds
let delay = 0;

// Loop through command line arguments
// Input each arg into setTimeout
// Multiply command line arg by 1000 as setTimeout delay

for (let arg of cmdLineArgs) {
  // Break loop if no args provided
  if (cmdLineArgs === []) {
    break;
  }
  // Skip any negative numbers
  if (arg < 0) {
    continue;
  }
  // Skip if args are not a number
  if (!Number(arg)) {
    continue;
  }
  // My arguments converted to seconds for setTimeout
  delay = arg * 1000;

  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
}
