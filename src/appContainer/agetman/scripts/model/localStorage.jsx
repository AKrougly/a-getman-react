export const loadState = () => {
  try {
    //localStorage.clear();
    const serializedState = localStorage.getItem('items');
    console.log(serializedState);
    if (serializedState === null) {
      return undefined;
    }
    const jsonState = JSON.parse(serializedState);
    //console.log(jsonState);
    return jsonState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('items', serializedState);
  } catch (err) {
    // ignore write errors
  }
};
