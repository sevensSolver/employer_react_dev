export const checkUppercaseAndNumb = (str) => {
  if (/[^a-zA-Z]/.test(str) && str !== str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

export const preventInvalidCharacters = (e) => {
  if (parseInt(e.target.value) === 0) {
    e.target.value = '';
  }
  if (e.target.value === '' && e.code === 'Digit0') {
    e.preventDefault();
  }
  if (e.code === 'Minus') {
    e.preventDefault();
  }
  if (e.key === 'e') {
    e.preventDefault();
  }
  if (e.target.value === '' && e.key === '.') {
    e.preventDefault();
  }
};

export const validateEmptySpace = {
  validator(item, value) {
    if (value && value.trim().length > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Field cannot be empty'));
    // return Promise.reject(new Error(`${item.field} cannot be empty`));
  },
};
