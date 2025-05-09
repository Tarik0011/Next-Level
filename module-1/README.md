Question-1:What are some differences between interfaces and types in TypeScript?

Interfaces: are primarily used to define the shape of objects, including properties and methods. They support declaration merging, meaning multiple declarations of the same interface are automatically merged.

Types: are more flexible and can represent not only object shapes but also unions, intersections, and other complex structures. They cannot be merged like interfaces.

Some key Difference:
Extending: Interfaces use extends, types use & for intersections.

Merging: Interfaces support declaration merging, types do not.

Use Case: Use interfaces for object shapes and types for unions and intersections.

Question-2:What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof keyword creates a union type of all keys in an object type. It allows you to extract the keys of an object and use them for type-safe access. Example-

interface Person {
name: string;
age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = "name"; // Valid
const invalidKey: PersonKeys = "address"; // Error:
