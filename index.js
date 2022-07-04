const returnEqualItemInArr = (arr, target) => {
  return arr.filter((item) => {
    return item === target;
  });
};

const returnNotEqualItemInArr = (arr, arg) => {
  return arr.filter((item) => {
    return item !== arg;
  });
};

const returnObjNotEqualInArr = (arr, par, target) => {
  return arr.filter((obj) => {
    return obj[par] !== target;
  });
};

const returnObjEqualInArr = (arr, par, target) => {
  return arr.filter((obj) => {
    return obj[par] === target;
  });
};

const copyOriginalArrAndDoThisToEach = (arr, doFunc) => {
  return arr.map((item) => {
    return doFunc(item);
  });
};

const compactFunc = {
  returnEqualItemInArr,
  returnNotEqualItemInArr,
  returnObjEqualInArr,
  returnObjNotEqualInArr,
  copyOriginalArrAndDoThisToEach,
};

module.exports = compactFunc;
