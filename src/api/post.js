import axios from "axios";


const baseUrl = "http://127.0.0.1:8000/";

/**
 * Function to get list of todos
 */
export const getTodos = async () => {
  const response = await axios.get(baseUrl);
  const data = response.data;
  return data.todos;
};

/**
 * Function to add a new todo
 */
export const addTodo = async (todo) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: [...prevData.todos, todo].map((e, i) => ({ ...e, id: i })),
  };
  const response = await axios.post(baseUrl, newData);

  return response.data.todos;
};

/**
 * Function to remove a todo
 */
export const removeTodo = async (id) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: prevData.todos.filter((e) => e.id !== id),
  };
  const response = await axios.post(baseUrl, newData);

  return response.data.todos;
};

/**
 * Function to toggle done status
 */
export const updateIsDone = async (id) => {
  const prevResponse = await axios.get(baseUrl);
  const prevData = prevResponse.data;
  const newData = {
    ...prevData,
    todos: prevData.todos.map((e) =>
      e.id === id ? { ...e, isDone: !e.isDone } : e
    ),
  };
  const response = await axios.post(baseUrl, newData);
  return response.data.todos;
};