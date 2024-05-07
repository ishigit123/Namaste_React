# Food Delivery Application

## Overview
This is a feature-rich food delivery application built using React, offering various functionalities to enhance user experience and simplify restaurant selection. 

## Features
- **Multi-Select Cuisines Based Restaurant Filter:** Allows users to filter restaurants based on multiple cuisines for convenient selection.
- **Search-Based Restaurants Filter:** Enables users to search for specific restaurants, providing flexibility and ease of use.
- **Shimmer UI:** Incorporates Shimmer UI for smooth loading transitions, enhancing user experience while browsing restaurant listings.
- **CORS Extension:** Utilizes CORS Extension to fetch real-time data from Swiggy Live API, ensuring accurate and up-to-date information for users.
- **Tailwind CSS:** Implements Tailwind CSS for efficient styling and customization, resulting in visually appealing and responsive user interfaces.
- **Class-Based Components and React Router DOM:** Utilizes class-based components and React Router DOM for structured architecture and efficient routing and navigation.
- **Lazy Loading:** Implements Lazy Loading to optimize performance by loading components only when necessary, enhancing overall application responsiveness.
- **Context API:** Utilizes Context API for state management, ensuring efficient data handling and seamless communication between components.

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Technologies Used
- React
- JavaScript
- Tailwind CSS
- Swiggy Live API
- CORS Extension
- React Router DOM
- Context API















#let's get reactive! 
<!-- 
Header
 Logo
 Nav Items
Body
 Search
 Card Container
  Res Cards
Footer 
-->
#Props
- are use for dynamic data passing.
-These are just arguments to a function.
-They wrap all data in form of an object.

#Config Driven UI
-UI changes with data automatically.

#Type of exports -
-- Named Export(multiple exports)
--default export
#Hooks
--these ae normal js functions
--useEffect(() =>{},[]).It takes a function and dependency array
**WHENEVER ANY STATE VARIABLE CHANGES WHOLE COMPONENT IS RE-RENDERED----> RE-CONCILIATION ALGORITHM RUN
**REACT FIBER AND DEFF ALGORITHM
**HOW REACT EFFICIENTLY UPDATES AND MANIPULATES VIRTUAL DOM
**UseEffect is called after every render cycle of the component if no dependency array
