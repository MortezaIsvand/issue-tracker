# Issue Tracker

Issue Tracker is an app built using Next.js, Prisma, React Hook Form, Zod, Recharts, Tailwind CSS, and NextAuth. It is a RESTful API that allows users to create, edit, delete, and get issues. It features server-side pagination, filtering, and data fetching, as well as a sortable columns table and charts to track different issues.

## Visit website 

👉 [issue-tracker-kohl.vercel.app](https://issue-tracker-kohl.vercel.app)

Dashboard

<img width="949" alt="dashboard" src="https://github.com/MortezaIsvand/issue-tracker/assets/107297151/0f451f4d-9992-4f7a-9804-14ef6c9433d1">

issuesPage

<img width="950" alt="issuesPage" src="https://github.com/MortezaIsvand/issue-tracker/assets/107297151/87299e8f-d4c7-4603-8c2f-2ea8cb7ab7ad">


CreatePage

<img width="952" alt="addIssuePage" src="https://github.com/MortezaIsvand/issue-tracker/assets/107297151/ebacfaeb-1ab6-4023-934d-8bc4fbc2a824">



## Features

- RESTful API for CRUD operations
- Server-side pagination for efficient rendering of large data sets
- Server-side filtering 
- Server-side data fetching for improved performance
- A table with sortable columns. 
- Beautiful layout and design using Tailwind CSS
- Bar charts to display the number of different status issues using recharts library

## Used Libraries

This issue tracker app utilizes several libraries to enhance its functionality. Here are the main libraries used:

- Next.js: A React framework for building server-side rendered and static websites.
- Prisma: A database toolkit and ORM (Object-Relational Mapping) for Node.js that simplifies database access and management.
- React Hook Form: A library for building forms in React with easy form validation and state management.
- Zod: A TypeScript-first schema validation library used for validating form inputs and data.
- Recahrts: A composable charting library built on React components.
- NextAuth: A library for handling authentication and authorization in Next.js applications.
- Tailwind CSS: A highly customizable, low-level CSS framework that provides utility classes for styling elements, enabling rapid custom UI development without predefined component classes.

These libraries have been chosen for their reliability, ease of use, and robust feature sets, and they play a crucial role in making this issue tracker app efficient and user-friendly.

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/mortezaisvand/issue-tracker.git
```

2. Change into the project directory:

```shell
cd issue-tracker
```

3. Install the dependencies:

```shell
npm install
```

4. Set up the environment variables:

Create a `.env` file in the root directory and add the following variables:

```shell
API_URL=http://localhost:3000
DATABASE_URL=your-database-url
NEXT_URL=http://localhost:3000
NEXTAUTH_SECRET=a-random-string
GOOGLE_CLIENT_ID=insert-your-google-client-id-here
GOOGLE_CLIENT_SECRET=insert-your-google-client-secret-here
```
Please replace the placeholders (<insert-...-here>) with your actual values. For instance, replace <insert-your-database-url-here> with the URL of your database. Similarly, replace <insert-your-google-client-id-here> and <insert-your-google-client-secret-here> with your Google Client ID and Secret respectively for session management. The <insert-a-random-string-here> should be replaced with a random string of your choice for NextAuth secret. Remember to keep these values confidential to protect your application’s security.

5. Run the migrations:

```shell
npx prisma db push --name init
```

6. Start the development server:

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

7. Open your browser and navigate to `http://localhost:3000` to access the blog app.

## Usage

1. Create a new issue:

- Log In
- Navigate to issues page.
- Click on the "ADD ISSUE" button.
- Fill in the required fields (title, content and status).
- Click "CREATE" to create the issue.

2. Edit an existing issue:

- Log in
- Click on the edit icon inside of the actions column.
- Update the fields you want to change.
- Click "UPDATE ISSUE" to update the issue.

3. Delete a blog post:
- Click on the delete icon.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Next.js: https://nextjs.org/
- Prisma: https://www.prisma.io/
- React Hook Form: https://react-hook-form.com/
- Zod: https://github.com/colinhacks/zod
- TailWind CSS: https://tailwindcss.com/
- NextAuth: https://next-auth.js.org/
- Recharts: https://recharts.org/
