function moveTower(height, fromPole, toPole, helpPole) {
  if(height == 0) return;
  moveTower(height - 1, fromPole, helpPole, toPole);
  moveDisk(fromPole, toPole);
  moveTower(height - 1, helpPole, toPole, fromPole);
}

function moveDisk(from, to) {
  console.log("Moving a disk from " + from + " to " + to + ".");
}

moveTower(3, "Start", "End", "Middle");