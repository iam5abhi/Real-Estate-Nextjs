import Link from "next/link";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Realestate</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet"></link>
      </Head>
      <Link href="/about"> About</Link>
      <h1> Hello World</h1>
    </div>
  );
}
