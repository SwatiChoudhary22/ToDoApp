import {
  THINGS_TODO,
  THINGS_TODONE,
  DELETE,
  INCOMPLETE,
  COMPLETE,
} from "./todo";
export const thingsTodo = (data: string) => {
  return {
    type: "THINGS_TODO",
    data: data,
  };
};
export const thingsDoneTodo = (data: string) => {
  return {
    type: "THINGS_TODONE",
    data: data,
  };
};
export const deleteTodo = (data: string) => {
  return {
    type: "DELETE",
    data: data,
  };
};
export const incomplete = (data: string) => {
  return {
    type: "INCOMPLETE",
    data: data,
  };
};
export const complete = (data: any) => {
  return {
    type: "COMPLETE",
    data: data,
  };
};
