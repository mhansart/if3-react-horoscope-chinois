const truncature = (str, nbr) => {
  let html;
  if (str.length < nbr) {
    html = str;
  } else {
    const idx = (str.slice(nbr, str.length)).indexOf(' ');
    html = `${str.slice(0, 150 + idx)} ...`;
  }
  return html;
};
export default truncature;
