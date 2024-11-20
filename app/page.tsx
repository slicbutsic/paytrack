import Link from 'next/link';

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto'>
      <h1 className='text-5xl font-bold'>
        Paytrack
      </h1>
      <Link href='/dashboard'>
        Sign in
      </Link>
    </main>
  );
}
