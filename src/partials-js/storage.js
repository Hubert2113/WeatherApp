const seveStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const removeStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    localStorage.remove(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

const lengthStorage = () => {
  return loadStorage.length();
};

export default {
  seveStorage,
  loadStorage,
  removeStorage,
  lengthStorage,
};
