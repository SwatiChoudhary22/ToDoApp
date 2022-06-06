import Todo from "./Modals/TodoModel";
import { createStore, Reducer } from "redux";
type State = {
  todos: Todo[];
};

const initialState: State = { todos: [] };

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;