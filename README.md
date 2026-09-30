🚀 Dev Stack

Dev Stack is a modern and responsive React-based website that showcases popular web development technologies in an organized and user-friendly interface. Users can explore different technologies, their categories, descriptions, ratings, difficulty levels, and other useful information.

🛠️ Technologies Used
React.js
JavaScript (ES6)
HTML5
CSS3
Vite
JSON
React Hooks (useState, useEffect)
Array Methods (map, filter)
✨ Features
1. 📱 Responsive Design

The website is fully responsive and works smoothly on desktop, tablet, and mobile devices with a mobile-friendly navigation menu.

2. 💻 Technology Cards

Displays technology information through interactive cards including:

Technology name
Category
Description
Rating
Difficulty level
Badge
Technology icon
3. 🔍 Technology Exploration
Users can explore different development technologies and view organized information about frontend, backend, database, programming languages, styling, DevOps, and other tools.


i.JSX is a syntax that lets us write HTML-like code inside JavaScript.

ii.Props are used to pass data from a parent component to a child component. State is data manage inside a component that can change time by time.

iii.useState lets a component store and update data. In this project, it is used to manage the selected technology/category and the mobile menu state.

iv.useEffect runs code when certain things happen in a component. I used it to load the technology data from the local JSON file when the project starts.

v.React uses the key to identify each item in a list. It helps React update the list efficiently when something changes.

vi.Conditional rendering means showing various content related to a condition.

For example, when there are no technologies in the selected stack, the project show an empty stack message:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackPanel stack={stack} />
)}

    
vii.A parent passes data to a child using props but A child can send something back by calling a function passed from the parent as a prop.
