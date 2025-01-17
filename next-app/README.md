# NextJS 13 Tutorial - Mosh

- Next version: 13.4

# Annotations:

- One of the changes between the `app router` and the `pages router` is that in the first, if we put other files besides the component that should be rendered, they will be ignored. In the second, all files will be rendered as a page;

- When we nned to move from one page to another, we can use the `a` tag, however it is not recommended because it will reload the page. The best way to do this is using the `Link` component from `next/link`;

- It is a good practice to only turn the very necessary components into client-side components, because the more components we have, the more the page will take to load. We need to keep as much as possible on the server side:

```tsx
'use client';
const AddtoCart: React.FC = () => {
  return (
    <button onClick={() => console.log('Add to cart!')}>
      Add to cart!
    </button>
  );
}

export default AddtoCart;
```

```tsx
import AddtoCart from "./AddToCart";
const ProductCard: React.FC = () => {
  return (
    <div>
      {/* The component below is a client component that can interact with the user and handles all client-side logic */}
      <AddtoCart />
    </div>
  );
}

export default ProductCard;
```

- Differently from what happens in the client side, we don't need `useState` and `useEffect` to handle data fetching in the server side. We can use the simply get the data from the API or whatever and pass it to the component directly, since this data will be rendered on the server side, that is, before the page is loaded.

