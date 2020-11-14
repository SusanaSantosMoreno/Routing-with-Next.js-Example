This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## About

This is a routing example using Next.js. In this example you can see how easy it's to create routes with 0 or several parameters.

In the first section we find the multiplication tables from 1 to 5. The route of these calculations would be:

```bash 
http://localhost:3000/calculo/1 
```

In the second section we find some calculations that take two parameters.This route would be: 

```bash 
http://localhost:3000/calculo/4?por=3 
```

In the third section we find the summation on several numbers. This route would be: 

```bash 
http://localhost:3000/calculo/1/2/4/6/4/7 
```

In the last one we find the fibonacci succession. We have tree examples: the first one is a fibonacci sucession of 50 digits; the second one is fibonacci sucession of 30 digits; and the last one is a 20-digit fibonacci sequence starting with the fifth digit. This routes would be: 

``` bash
http://localhost:3000/fibonaci
http://localhost:3000/fibonaci/30 
http://localhost:3000/fibonaci/5/20 
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
