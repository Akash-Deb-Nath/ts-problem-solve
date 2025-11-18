1.What are some differences between interfaces and types in TypeScript?

Typescript এ interface এবং type alias উভয়ই object এর স্ট্রাকচার ডিফাইন করতে ব্যবহৃত হয়।প্রায় একই রকম হলেও interface এবং type alias এর মধ্যে কিছু পার্থক্য আছে।

interface ব্যবহার করা হয় মূলত objects, classes-এর structure ডিফাইন করার জন্য।
interface এ extends keyword ব্যবহার করে extend করা যায়।Interface ব্যবহার করলে কোডের readability বাড়ে।

উদাহরণঃ

interface User {
name: string;
age: number;
}

type alias শুধু object নয়, বরং union, intersection, function type, tuple—সবকিছু define করতে পারে।interface এর চেয়ে বেশি flexible।complex type manipulation-এ type alias বেশি ব্যবহৃত হয়।

উদাহরণঃ

type User = {
name: string;
age: number;
};
---

2.What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো TypeScript-এর একটি অপারেটর যা কোনো একটি টাইপের সবগুলো key-এর একটি union তৈরি করে।keyof শুধু object-like টাইপের উপর কাজ করে,যেমন- object,interface,class ইত্যাদি।টাইপ-সেফভাবে property অ্যাক্সেস করতে এবং Generic function-এ dynamic key ব্যবহার করতে keyof ব্যবহার করা হয়।

উদাহরণঃ

type User = {
id: number;
name: string;
email:string;
};

type UserKeys = keyof User;
---

3.Explain the difference between any, unknown, and never types in TypeScript.

any type হচ্ছে সবচেয়ে কম নিরাপদ।any type ব্যবহার করার মানেই হলো,যেকোনো টাইপ হতে পারে।এক্ষেত্রে TypeScript টাইপ চেক করা বন্ধ করে দেয়।সাধারণত any type ব্যবহার না করাই ভালো।

উদাহরণঃ

let x:any="hello";
x=10;
x=true;

unknown type মানে,এটা যেকোনো কিছু হতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতেই হবে।যখন ডেটা dynamic কিন্তু নিরাপত্তা দরকার তখন unknown type ব্যবহার করা হয়।

উদাহরণঃ

const discountCalculator = (input: unknown): void => {
if (typeof input === "number") {
const discountedPrice = input _ 0.1;
console.log(discountedPrice);
} else if (typeof input === "string") {
const [inputSplited] = input.split(" ");
const result = Number(inputSplited) _ 0.1;
console.log(result);
} else {
console.log("Wrong input");
}
};

discountCalculator(100);
discountCalculator("100 Tk");
discountCalculator(null);

never এমন একটি টাইপ যা কোনো value ধারণ করে না।অর্থাৎ এখানে value আসাই সম্ভব না।Error throw করা ফাংশনে never type ব্যবহার করা হয়।

উদাহরণঃ

const throwError = (msg: string): never => {
throw new Error(msg);
};

throwError("Error");
---

4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enum হলো কিছু নির্দিষ্ট মানকে একত্রে গ্রুপ করার একটি structured পদ্ধতি।enum এর ব্যবহার-

(i) কোডে বারবার string বা number টাইপ মান লিখলে ভুল হওয়ার সম্ভাবনা থাকে।Enums সেই সমস্যা দূর করে।
(ii) Enums নির্দিষ্ট মানকে নাম (label) দেয়, যা কোডকে আরও readable ও maintainable করে।
(iii) User role, permission, access level control করার জন্য enum আদর্শ।

অর্থাৎ enum টাইপ-সেফ constant values তৈরি করে কোডকে readable করা,ভুল স্ট্রিং/নাম লেখার সম্ভাবনা কমানো,টিম-ভিত্তিক প্রজেক্টে consistency বজায় রাখার কাজে ব্যবহার করা হয়।

উদাহরণঃ

Numeric Enum-
enum Status {
Pending = 1,
Approved = 2,
Rejected = 3
}
const current: Status = Status.Approved;

String Enum-
enum Roles {
Admin = "ADMIN",
User = "USER",
Guest = "GUEST"
}
const role: Roles = Roles.Admin;
---

5.Provide an example of using union and intersection types in TypeScript.

union type দ্বারা বুঝায় একটি type একাধিক type-এর যেকোনো একটি হতে পারে।এটা অনেকটা or এর মত কাজ করে বলা যায়।

উদাহরণঃ

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
if (role === "admin") {
return "Admin Dashboard";
} else if (role === "user") {
return "User Dashboard";
} else {
return "Guest Dashboard";
}
};

console.log(getDashboard("admin"));

এখানে userRole type টি "admin" অথবা "user" দুইটার যেকোনোটাই হতে পারে।

intersection type মানে দুই বা ততোধিক টাইপকে merge করে একটি নতুন টাইপ তৈরি করা।
অর্থাৎ নতুন টাইপে সব টাইপের property থাকবে।এটা অনেকটা and এর মত কাজ করে বলা যায়।

উদাহরণঃ

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};
এর মধ্যে একজন Employee এর তথ্য আছে— id, name, phoneNo.

type Manager = {
  designation: string;
  teamSize: number;
};
এর মধ্যে একজন Employee এর তথ্য আছে—


type EmployeeManager = Employee & Manager;

const chowdhurySaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Saheb",
  phoneNo: "017",
  designation: "Manager",
  teamSize: 5,
};

console.log(chowdhurySaheb);

এখানে Employee type এর মধ্যে একজন employee এর তথ্য আছে (id, name, phoneNo)।
Manager type এর মধ্যে একজন manager একজন ম্যানেজারের অতিরিক্ত দায়িত্ব (designation, teamSize)।EmployeeManager মানে: Employee এবং Manager .দুই টাইপের সব প্রপার্টি একসঙ্গে লাগবে (id, name, phoneNo, designation, teamSize)।
chowdhurySaheb object টাতে যেহেতু উনি manager এবং একজন manager অবশ্যই একজন employee তাই Employee এবং Manager দুই টাইপ কে intersection করে বানানো EmployeeManager হিসেবে define করা হয়েছে।
