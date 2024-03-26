import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Home Page</h1>
        <Link href='/user'>Go To User</Link>
        <br></br>
        <Link href='/addproduct'>Add Product</Link>
        <br/>
        <Link href='/uploadimage'>Upload Image</Link>
    </main>
  );
}
