function textTranformPipe(text, length) {
  if (text.length > length) {
    let result = text.substring(0, length);
    return result.concat("...");
  } else {
    return text;
  }
}

export default textTranformPipe;
