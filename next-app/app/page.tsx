import Link from "next/link";
import ProductCard from "./components/ProductCard";

const Home: React.FC = () => {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href={'/users'}>Users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}

export default Home;
