Echo Espresso

Echo Espresso is a modern, responsive, and visually appealing website for a luxury cafe, designed to showcase menus, drinks, desserts, and allow table reservations. Built with React + Vite + Tailwind CSS, it provides an immersive experience for cafe enthusiasts and customers.


Features

Menu Navigation:
Categorized drinks and food (Signature Coffee, Cold Brew, Artisan Tea & Cocoa, Gourmet Sandwiches, Pastries).
Subcategories with images and descriptions for easy browsing.
Responsive Design: Fully optimized for mobile, tablet, and desktop screens.
Reservations Form: Users can reserve tables directly via a form with date and time selection.
Reusable Components: Header, Footer, BreadCrumbs, and Menu cards for consistent UI.
Dynamic Routing: Uses React Router to navigate between categories and subcategories seamlessly.
Image & Asset Management: All menu images and category visuals are preloaded for a smooth experience.


Tech Stack

Frontend: React + Vite
Styling: Tailwind CSS
Routing: React Router DOM
State & Data: Local menuData.js file
Deployment: Vercel



Installation

Clone the repository:
git clone https://github.com/your-username/echo-espresso.git
Navigate into the project folder:
cd echo-espresso
Install dependencies:
npm install
Start the development server:
npm run dev
The app will run at the URL displayed in your terminal (usually http://localhost:5173).



Project Structure

echo-espresso/
├─ public/               # Static files (favicon, robots.txt, etc.)
├─ src/
│  ├─ assets/            # Images for categories, menu items, and other media
│  ├─ components/        # Reusable UI components (Footer, Header, BreadCrumbs)
│  ├─ pages/             # Main pages (Home, MenuTypePage, Contact, Reservation)
│  ├─ menuData.js        # Menu structure with categories, subcategories, images, and labels
│  ├─ App.jsx            # App entry with routing
│  └─ main.jsx           # Vite entry point
├─ index.html
├─ package.json
└─ README.md

Usage

Navigate categories via the homepage menu cards.
Click on a subcategory to see detailed menu items.
Reserve a table by filling out the reservation form.
Footer contains social links, contact info, and appears on all pages except the homepage.
