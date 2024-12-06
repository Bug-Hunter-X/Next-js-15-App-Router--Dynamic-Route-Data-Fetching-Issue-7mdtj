# Next.js 15 App Router: Dynamic Route Data Fetching Issue

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routes and data fetching.  The application works correctly in a local development environment but fails upon deployment to Vercel.

## Bug Description

The issue arises when attempting to fetch data dynamically based on a route parameter.  Locally, the data fetches and renders correctly. However, on Vercel, the data fetching fails, resulting in an error or missing data.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` to start the development server.
4. Navigate to a dynamic route (e.g., `/product/1`). You should see data correctly rendered.
5. Deploy the application to Vercel.
6. Navigate to the same dynamic route on Vercel. The data will fail to render correctly, resulting in an error or missing data. 

## Potential Causes

*   **Data fetching issues**: Problems related to how data is fetched in the app directory using `fetch` or other methods.
*   **Vercel deployment configuration**: There may be incompatibility between the Next.js App Router dynamic routes and Vercel's deployment configuration.
*   **API endpoint issues**: The API endpoint from which the data is fetched may not be configured correctly for the Vercel environment.

## Workaround

This bug is fixed in the solution code.