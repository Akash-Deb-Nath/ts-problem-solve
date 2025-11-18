const formatValue = (
  value: number | string | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type genericArray<T> = Array<T>;
const getLength = <T>(input: string | genericArray<T>): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Books = { title: string; rating: number };
const filterByRating = (books: Array<Books>): Array<Books> => {
  const filterBooks = books.filter((book) => book.rating >= 4.0);
  return filterBooks;
};

type User = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (users: Array<User>): Array<User> => {
  const filterUsers = users.filter((user) => user.isActive);
  return filterUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (
  arr1: Array<string | number>,
  arr2: Array<string | number>
): Array<string | number> => {
  const uniqueValues: Array<string | number> = [];

  const found = (value: string | number): boolean => {
    for (let i = 0; i < uniqueValues.length; i++) {
      if (value === uniqueValues[i]) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!found(arr1[i])) {
      uniqueValues[uniqueValues.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!found(arr2[i])) {
      uniqueValues[uniqueValues.length] = arr2[i];
    }
  }

  return uniqueValues;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Array<Product>): number => {
  const total: number = products.reduce(
    (acc: number, product: Product): number => {
      let subTotal: number = product.price * product.quantity;
      if (product.discount) {
        subTotal -= (subTotal * product.discount) / 100;
      }
      return acc + subTotal;
    },
    0
  );
  return total;
};
