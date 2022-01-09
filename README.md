This is a project using an external API [TheCocktailDB](https://www.thecocktaildb.com/api.php) and managing data with javascript function [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), also using the library [SWR](https://swr.vercel.app). The project is build on [Next.JS](https://nextjs.org/)
The main function of the app is list all the cocktails and help people on how they can do it, with descriptions, images, ingredients, etc.

## Getting Started
If you want to improve the application, you need to follow this steps: 

First, install all the dependencies:

```bash
npm install
# or
yarn install
```

Generate the .env and .env.local files: 

```
#env 
DATABASE_URL=

#env.local
MAGIC_SECRET_KEY=
NEXT_PUBLIC_MAGIC_PUB_KEY=
NEXT_PUBLIC_COCKTAIL_SECRET_API=
ENCRYPTION_SECRET=
```

Run the development server: 

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
