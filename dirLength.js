function imageLengths(S) {
  let arr = S.split('\n');
  let sum = 0;
  let spaces = 0;

  // iterate over the lines starting from the bottom
  for(let i = arr.length - 1; i >= 0; i--) {
    let line = arr[i]; 
    // Number of spaces a parent directory must have is < than number of spaces of the image
    // if we come across the image, set spaces = number of spaces in prefix of image
    // and reset number of spaces for each image we come across
    if(line.indexOf('.gif') > 1 || line.indexOf('.jpeg') > 1) {
      spaces = line.length - line.trim().length;
      sum += line.trim().length + 1;
    }
    // if line has less spaces than image, we found a parent!
    // we must decrement spaces to get the parent's parent and so forth
    if(spaces > line.length - line.trim().length) {
      sum += line.trim().length + 1;
      spaces--;
    }
  }

  console.log(sum);
}

var listing = 'dir1\n dir11\n dir12\n  picture.jpeg\n  dir121\n  file1.txt\ndir2\n file2.gif';
var listing2 = 'dir2\n file2.gif';
imageLengths(listing2);