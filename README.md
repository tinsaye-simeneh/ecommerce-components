
# E-commerce Frontend Components with Next.js & Tailwind CSS

This project contains a collection of reusable frontend components designed for an e-commerce platform. Built using **Next.js** and **Tailwind CSS**, these components are designed to be flexible, responsive, and easy to integrate into any e-commerce website.

## 🚀 Tech Stack

- **Next.js**: React framework for building server-rendered and statically generated websites.
- **Shadcn UI**: A UI Framework
- **Tailwind CSS**: Utility-first CSS framework for fast and flexible styling.
- **TypeScript**: For type-safe and scalable JavaScript development.
- **Radix UI**: Unstyled accessible components, easily customizable with Tailwind CSS.
- **State Management**: **Redux Toolkit (RTK)** for managing global state.
- **HTTP Requests**: **Axios** for making HTTP requests to interact with future backend services.

## 📦 Components Included

### 1. **Product Card**
   - Displays product image, name, price, rating, and an "Add to Cart" button.
   - Hover effects and animations for better user interaction.

### 2. **Product Filters**
   - Filter products by categories, price range, or other attributes.
   - Uses dropdowns, checkboxes, and sliders.

### 3. **Shopping Cart**
   - Sidebar or modal that updates dynamically as products are added/removed.
   - Shows total price and quantity of items.

### 4. **Wishlist**
   - Heart icon to add products to a wishlist.
   - Changes color when a product is added to the wishlist.

### 5. **Search Bar**
   - A responsive search bar with live suggestions and filtering as the user types.

### 6. **Product Quick View**
   - Modal component that shows a brief overview of the product without navigating away from the current page.

### 7. **Responsive Navbar**
   - A mobile-first navbar that contains categories, search, and account options.
   - Dropdown for category navigation.

### 8. **Footer**
   - Responsive footer with links to pages like FAQs, Contact Us, and Terms & Conditions.
   - Social media icons and newsletter signup.

### 9. **Order Summary**
   - Displays an overview of the user's order with item details, quantities, and total price.

### 10. **Checkout Form**
   - A step-by-step checkout process with fields for shipping address, payment methods, and order review.

### 11. **Payment Methods**
   - Component to display available payment options such as credit card, PayPal, and bank transfer.

### 12. **Category Carousel**
   - A horizontal carousel of product categories with images and links to filtered product listings.

### 13. **User Account Menu**
   - Dropdown or sidebar that allows users to navigate through their account options, such as order history and settings.

### 14. **Promo Banner**
   - A top or middle banner for displaying promotional offers or announcements across the site.

### 15. **Pagination**
   - Pagination component for navigating through pages of product listings, search results, or user reviews.

## 🎨 Customization

- All components are styled using **Tailwind CSS**, making them highly customizable by simply changing classes or extending styles via Tailwind’s configuration.

### Dark Mode Support

- Components are built with **Tailwind’s dark mode** in mind, ensuring a seamless transition between light and dark themes.

## ✨ Features

- **Reusable**: Each component can be used in various parts of the application or integrated into other projects.
- **Responsive**: Designed to work across different devices and screen sizes.
- **Animated**: Includes subtle animations and transitions using **Framer Motion** for better user experience.
- **Accessible**: Components follow accessibility best practices using **Headless UI** and **Radix UI**.
- **State Management**: **Redux Toolkit (RTK)** is used to handle global state, such as managing product data, shopping cart, and user session information.
- **HTTP Requests**: **Axios** is integrated for handling API calls such as fetching product data, managing carts, and handling user authentication.
- **Testing Tools**: Unit testing with **Jest** and **React Testing Library** for component-level testing, and **Cypress** for end-to-end tests.

## 🛠 Installation & Setup

To get the project running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tinsaye-simeneh/ecommerce-components.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd ecommerce-components
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your components in action.
