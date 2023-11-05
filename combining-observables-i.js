module.exports = (Bacon, messages, keys, decoderFunction) => {
  return messages.zip(keys).map(decoderFunction).log()
};