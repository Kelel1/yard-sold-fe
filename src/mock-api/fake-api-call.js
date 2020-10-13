import data from "./mock.data.json";

export const fetchAllItems = () => {
  return new Promise((resolve, reject) => {
    resolve(data.allItems);
  });
};
