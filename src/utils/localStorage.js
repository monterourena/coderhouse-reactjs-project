function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getLocalStorage(key) {
  const item = JSON.parse(localStorage.getItem(key));

  if (!item) {
    setLocalStorage(key, []);
    return [];
  }
  return item;
}

export { getLocalStorage, setLocalStorage };
