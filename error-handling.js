module.exports = (Bacon, asyncTask) => {
  const showErrorMessage = asyncTask.map(false).mapError(true).toProperty(false);
  return showErrorMessage;
};