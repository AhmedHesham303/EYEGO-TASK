📊 Dashboard App

This is a multi-page admin dashboard with real admin authentication powered by Supabase.

✨ Main Features

Secure admin login

KPI cards and charts displayed on the dashboard

Users table with sorting and exporting options (PDF & Excel)

Responsive design for mobile and desktop

⚙️ 2. Tech Stack

This project was built using the following technologies:

Next.js (React Framework)

Redux Toolkit for state management

Tailwind CSS for styling and responsiveness

Chart.js for data visualization

Supabase for authentication and backend

Docker for containerization and deployment

This is a Next.js
project bootstrapped with create-next-app
.

🚀 Getting Started

Follow these steps to run the project locally:

Clone the repository

git clone <your-repo-url>
cd dashboard-app

Install dependencies

npm install

or

yarn install

Run the development server

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

Open the app
Navigate to http://localhost:3000
in your browser.

🐳 Running with Docker

To build and run the app using Docker:

docker build -t dashboard-app .
docker run -p 3000:3000 dashboard-app

The app will be available at http://localhost:3000
.

🧩 4. Features Overview

✅ Authentication: Real login with Supabase

✅ Dashboard KPIs: Dynamic cards displaying summary metrics

✅ Charts: Interactive visualizations with Chart.js

✅ Data Table: Sorting, filtering, pagination

✅ Export Options: PDF and Excel (XLSX)

✅ Responsive Design: Tailwind CSS for mobile and desktop

✅ Dockerized: Easy deployment and testing

🧠 5. Implementation Approach

I used Redux Toolkit for state management, creating two slices: userSlice and authSlice. The project follows a feature-based architecture to maintain scalability and organization. For version control, I followed a structured Git workflow — setting up the initial configurations on the main branch, then creating a separate branch for each feature. After completing each feature, I merged it into the main branch and deleted the feature branch to keep the repository clean and organized.
