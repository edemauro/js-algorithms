function moveTower(height, fromPole, toPole, withPole) {
  if(height >= 1) {
    moveTower(height - 1, fromPole, withPole, toPole);
    moveDisk(fromPole, toPole);
    moveTower(height - 1, withPole, toPole, fromPole);
  }
}

function moveDisk(from, to) {
  console.log("Moving a disk from " + from + " to " + to + ".");
}

moveTower(3, "Start", "End", "Middle");