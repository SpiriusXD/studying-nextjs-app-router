import Link from 'next/link';

export default function HomePage() {
  return (
  <main style={{ padding: 24 }}>
  <h1>Home</h1>

  <Link href="/customers/companies">
  Go to Customers
  </Link>
  </main>
  );
}