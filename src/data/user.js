const data = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Jane", age: 21 },
  { id: 3, name: "Joe", age: 22 },
  { id: 4, name: "Jack", age: 23 },
  { id: 5, name: "Jill", age: 24 },
];

const user = {
  getAll: () => data,
  getById: (id) => data.find((user) => user.id === id),
  getByName: (name) => data.find((user) => user.name === name),
  getByAge: (age) => data.find((user) => user.age === age),
  add: (user) => {
    data.push(user);
    return user;
  },
};
export default user;
