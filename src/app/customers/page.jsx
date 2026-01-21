import Link from "next/link";

export default function CustomersPage() {
  return (
  <main style= {{padding: 24}}>
  <h1>Customers</h1>
  
  <Link href = "/customers/companies"> Go to Companies</Link>
  </main>
  );
  }