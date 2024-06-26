export const items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' },
  { id: 4, name: 'Item 4', description: 'Description for item 4' },
  { id: 5, name: 'Item 5', description: 'Description for item 5' },
  { id: 6, name: 'Item 6', description: 'Description for item 6' },
  { id: 7, name: 'Item 7', description: 'Description for item 7' },
  { id: 8, name: 'Item 8', description: 'Description for item 8' },
  { id: 9, name: 'Item 9', description: 'Description for item 9' },
  { id: 10, name: 'Item 10', description: 'Description for item 10' },
];

export const fakeList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
};
