## Book Library

Powered by [Next.js](https://nextjs.org/)
Hosted on vercel https://book-library.aqumus.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### API routes:

1. `api/addBook` - adding new book details
2. `api/updateBook` - updating existing book details

#### Implementation details:

- [emotion](https://emotion.sh/docs/introduction) for styling component
- Css media queries for responsive layout (using `rem` size)
- [redux-toolkit](https://redux-toolkit.js.org/) for creating action creator, reducers and store.
- redux for state management.
- next.js API routes functionality to implement backend integration
- [React Portal](https://reactjs.org/docs/portals.html) for showing Book details modal.
- React hooks for maintaining component level state.

#### TODO:

- [ ] Fix next.js static regeneration issue which
- [ ] Form field validations
- [ ] Day/Night theme
- [ ] end to end testing using cypress

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
