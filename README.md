This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install packages:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
|- cypress (this one for end-to-end tests)
|- pages
    |- page
    |- index.js (home page)
|- src
    |- containers
        |- __tests__
        |- your-containers
        |- index.js (import all containers here to make easy indexing)
    |- components
        |- __tests__
        |- your-components
        |- index.js (import all components here to make easy indexing)
    |- hooks
        |- __tests__
        |- custom-hooks
        |- index.js (import all custom hooks here to make easy indexing)
    |- services
        |- __tests__
        |- api
    |- utils
        |- __tests__
        |- your-utilization
        |- index.js (import all utilization here to make easy indexing)
```