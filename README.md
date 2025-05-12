# 🔐 React.js Template + (Clerk)

A **modern, production-ready React.js template** with:

* ✨ Clerk authentication
* 🔒 Protected and admin-only routes
* 🧹 Modular component structure
* 🎨 TailwindCSS for styling
* 🔀 Lazy-loaded routes with suspense
* 🧪 API testing setup
* 🚀 Ready for shadcn/ui integration

## 📁 Project Structure

```
src/
🔾 components/        # Reusable UI components
🔾 └── ui/            # Example: Loader
🔾 hooks/             # Custom hooks
🔾 lib/               # Utility modules (e.g., env loader)
🔾 pages/             # Route-level components (Home, Dashboard, etc.)
🔾 router/            # Routing logic (public/private)
🔾 App.tsx            # App wrapper with router
🔾 main.tsx           # Entry point (with ClerkProvider)
🔾 index.css          # Tailwind base styles
```

## 👩‍💻 Technologies Used

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Clerk](https://clerk.com/) for authentication
* [React Router](https://reactrouter.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/) for bundling
* [shadcn/ui](https://ui.shadcn.com/) (planned integration)

## 🔐 Authentication

This template uses **Clerk** for authentication and includes:

* Public routes
* Private routes (only for signed-in users)
* Admin-only routes using `user.unsafeMetadata.role`

## 🧪 API Test Page

An example page `/dashboard` demonstrates calling a protected backend API using JWT from Clerk.

## 🚦Routing

* Routes are defined in modular `routes/public.tsx` and `routes/private.tsx`
* Routes are lazy-loaded with `Suspense`
* Custom 404 fallback page

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Add your Clerk publishable key to .env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key

# Start the development server
npm run dev
```

## ⚙️ Environment Variables

| Variable                     | Description                    |
| ---------------------------- | ------------------------------ |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk frontend publishable key |


## 🤝 Contributing

Feel free to fork and submit pull requests!

## 📄 License

This project is [MIT](./LICENSE) licensed.
