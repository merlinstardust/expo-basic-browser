const convertTextToUrl = (text) => {
  const hasNoSpaces = text.split(' ').length === 1;
  const hasDot = text.includes('.');
  const isUrl = hasNoSpaces && hasDot;
  if (isUrl) {
    if (text.startsWith('www.')) {
      return `https://${text}`;
    }
    if (! text.startsWith('http')) {
      return `https://${text}`;
    }
  }

  const googleQuery = `https://www.google.com/search?q=${encodeURI(text)}`;
  return googleQuery;
};

export default convertTextToUrl;
