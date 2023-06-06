# Apple Store - Coderhouse project
This is an e-commerce website built completely from scratch using React JS and a curated and finely selected collection of data managed and stored using firebase Storage and Firestore services. The final design is largely inspired by the current design of the Apple website. All the product information, images, and graphics have been obtained from www.apple.com.

![68shots_so](https://github.com/monterourena/coderhouse-reactjs-project/assets/117543842/b7bdd777-0cb3-4821-bfe1-aa4714aec002)

# Getting Started - Installation
To get started with this e-commerce website, follow these steps:
- Clone the repository onto your local machine.
- Install all dependencies by running the following command: **npm install**.
- Create a Firebase account if you don't have one already and create a new project.
- Add the Firebase config details as environment variables. An example of the environment variables used can be seen in the .env.example file
- Run the following command to start the development server: **npm run dev**.

# Features
This e-commerce website has the following features:

- Browse products by category.
- View product details, including product description, price, and available models.
- Add products to cart and update cart quantities.
- Persistence of cart products using local storage
- Checkout process.
- Order review.

# Technologies Used
This e-commerce website has been built using the following technologies:
- React JS for building the front-end UI.
- Vite for fast development and building of the application
- Firestore database for storing product information
- Vanilla CSS used for styling

# Folder Structure
The folder structure for this project is as follows:
```js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── App.css
│   ├── main.js
│   └── index.css
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```


# Screenshots

![366shots_so](https://user-images.githubusercontent.com/117543842/236820979-6907e856-ae58-4c1e-8d35-058acc7f151c.png)
![1shots_so](https://github.com/monterourena/coderhouse-reactjs-project/assets/117543842/a10bdae3-f0b7-4060-94ab-f5a4786d48a5)
![955shots_so](https://github.com/monterourena/coderhouse-reactjs-project/assets/117543842/11a5ba5f-afe9-44d5-9728-7285f261be44)


We encourage you to take a look at the website at [apple.monterourena.com](http://apple.monterourena.com) and explore its features. 

# External dependencies
- **Firebase (Version: 9.21.0):**
Firebase is a popular platform provided by Google that offers various services and tools for building web and mobile applications. In this project, we utilized the Firebase library, which is used for integrating Firebase services into the React application. This library provides functionalities such as authentication, real-time database, cloud storage, and more.

- **React (Version: 18.2.0):**
React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently manage the application state. React is the foundation of this project. We utilized React for creating the user interface and managing the application's component-based structure. React provides features like virtual DOM, component lifecycle methods, and JSX syntax, which simplify the development process.

- **React DOM (Version: 18.2.0):**
React DOM is a package that serves as the entry point to the DOM and is responsible for rendering React components into the browser. React DOM is used in conjunction with React to render your React components into the browser's DOM (Document Object Model). It facilitates the rendering, updating, and manipulation of the component tree within the browser.

- **React Hook Form (Version: 7.43.9):**
React Hook Form is a library that simplifies the process of working with forms in React by providing hooks and utilities for form validation, state management, and input handling. React Hook Form was used in this project to handle form submission, validation, and managing form state. It offers a straightforward and declarative approach to form handling, allowing us to easily validate user input and handle form submission logic.

- **React Router DOM (Version: 6.10.0):**
React Router DOM is a library that provides declarative routing capabilities for React applications. It enables you to define and manage different routes within our application. React Router DOM is used in your project to handle client-side routing. It allows you to define routes, map them to specific components, and navigate between different views or pages of your application without full page reloads.

- **React Toastify (Version: 9.1.2):**
React Toastify is a library that provides a simple and customizable way to display toast notifications in React applications. React Toastify was utilized in your project to show toast notifications to users. Toast notifications are non-intrusive messages that appear briefly to provide feedback or alerts. This library simplifies the process of creating and displaying such notifications, allowing you to customize their appearance and behavior.

# Deployment
This e-commerce website has been deployed and is available to view at [apple.monterourena.com](http://apple.monterourena.com). The website is hosted on [Vercel](http://www.vercel.com) and can be accessed at any time.

If you have any questions or feedback, please don't hesitate to contact us. Thank you for visiting our e-commerce website!

