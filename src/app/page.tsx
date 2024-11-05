"use client";

import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-50">
      <Head>
        <title>E-Commerce Website Components</title>
        <meta
          name="description"
          content="Reusable frontend components for e-commerce platforms."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          E-Commerce Frontend Components
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          A collection of reusable frontend components designed for e-commerce
          platforms.
        </p>
      </header>

      <section className="w-full max-w-4xl p-5 mx-auto mb-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Tech Stack</h2>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>
            Next.js: React framework for building server-rendered and statically
            generated websites.
          </li>
          <li>Shadcn UI: A UI Framework</li>
          <li>
            Tailwind CSS: Utility-first CSS framework for fast and flexible
            styling.
          </li>
          <li>
            TypeScript: For type-safe and scalable JavaScript development.
          </li>
          <li>
            Framer Motion: To add smooth animations and transitions to
            components.
          </li>
          <li>
            Radix UI: Unstyled accessible components, easily customizable with
            Tailwind CSS.
          </li>
          <li>
            State Management: Redux Toolkit (RTK) for managing global state.
          </li>
          <li>
            HTTP Requests: Axios for making HTTP requests to interact with
            future backend services.
          </li>
        </ul>
      </section>

      <section className="w-full max-w-4xl p-5 mx-auto mb-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          📦 Components Included
        </h2>
        <ul className="mt-2 text-gray-700 list-decimal list-inside">
          <li>Product Card</li>
          <li>Product Filters</li>
          <li>Shopping Cart</li>
          <li>Wishlist</li>
          <li>Search Bar</li>
          <li>Product Quick View</li>
          <li>Responsive Navbar</li>
          <li>Footer</li>
          <li>Order Summary</li>
          <li>Checkout Form</li>
          <li>Payment Methods</li>
          <li>Category Carousel</li>
          <li>User Account Menu</li>
          <li>Promo Banner</li>
          <li>Pagination</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl p-5 mx-auto mb-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">✨ Features</h2>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          <li>Reusable and customizable components.</li>
          <li>Responsive design for all devices.</li>
          <li>Animated with Framer Motion for enhanced UX.</li>
          <li>Accessibility-focused using Headless UI and Radix UI.</li>
          <li>State management with Redux Toolkit (RTK).</li>
          <li>Integrated HTTP requests with Axios.</li>
          <li>Testing with Jest and Cypress.</li>
        </ul>
      </section>

      <footer className="text-center">
        <p className="text-gray-600">
          Made with ❤️ by{" "}
          <a
            className="text-blue-500"
            href="https://github.com/tinsaye-simeneh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tinsaye S. Dessie
          </a>
        </p>
      </footer>
    </div>
  );
}
