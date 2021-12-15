export const acomuladores = (dato) => {
  let acomu = 0;
  switch (dato) {
    case "3":
     acomu = 20;
      break;
    case "2":
     acomu = 13.33;
      break;
    case "1":
     acomu = 6.67;
      break;
    default:
      break;
  }
  return acomu; 
};

export const acomuladoresVocacional = (dato) => {
  let acomu = 0;
  switch (dato) {
    case "0":
      acomu = 16;
      break;
    default:
      break;
  }
  return acomu;
};

export const acomuladoresPersonalidad = (dato) => {
  let acomu = 0;
  switch (dato) {
    case "0":
      acomu = 10;
      break;
    default:
      break;
  }
  return acomu;
};