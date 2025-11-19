function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }

    return value;
}


function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    
    return 0;
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}



interface RatingItem {
    title: string;
    rating: number;
}

function filterByRating(items: RatingItem[]): RatingItem[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};


function getUniqueValues(array1: (string | number)[], array2: (string | number)[]): (string | number)[] {
    const uniqueArray: (string | number)[] = [];
    
    function valueExists(arr: (string | number)[], value: string | number): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return true;
            }
        }
        return false;
    }
    
    for (let i = 0; i < array1.length; i++) {
        if (!valueExists(uniqueArray, array1[i])) {
            uniqueArray.push(array1[i]);
        }
    }
    
    for (let i = 0; i < array2.length; i++) {
        if (!valueExists(uniqueArray, array2[i])) {
            uniqueArray.push(array2[i]);
        }
    }
    
    return uniqueArray;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        const productTotal = product.price * product.quantity;
        
        if (product.discount !== undefined && product.discount > 0) {
            const discountAmount = productTotal * (product.discount / 100);
            return total + (productTotal - discountAmount);
        }
        
        return total + productTotal;
    }, 0);
}


const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

