export const getUpdatedBoard = (initialBoard, index) => {
  const output = [...initialBoard];
  const boardsLength = output.length - 1;

  let currentSeedCount = output[index].seedCount;
  output[index].seedCount = 0;

  let nextIndex = index + 1;

  while (currentSeedCount > 0) {
    if (nextIndex > boardsLength) {
      output[0].seedCount += 1;
      nextIndex = 0;
    } else {
      output[nextIndex].seedCount += 1;
    }
    nextIndex += 1;
    currentSeedCount -= 1;
  }

  return output;
}
