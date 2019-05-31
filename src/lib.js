import { useEffect } from "react";
import update from "react-addons-update";

export function useMyContext(context, value = "state") {
  const myContext = localStorage.getItem(value);
  return myContext ? JSON.parse(myContext) : context;
}

export function useMyReducer([state, dispatch], value = "state") {
  useEffect(() => localStorage.setItem(value, JSON.stringify(state)), [
    state,
    value
  ]);
  return [state, dispatch];
}

export function updateStatus(myState, myId, myCheck) {
  let index = myState.todos.findIndex(item => item.id === myId);
  let s = myState.todos;
  return update(s, {
    [index]: {
      completed: { $set: myCheck }
    }
  });
}

export function filterList(list, filter) {
  if (filter === "all") {
    return list;
  } else if (filter === "new") {
    return list.filter(val => val.completed !== true);
  } else if (filter === "completed") {
    return list.filter(val => val.completed === true);
  }
}

export function strIncl(strInObj, q) {
  return strInObj.indexOf(q) !== -1;
}
