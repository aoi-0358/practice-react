import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { FooterLinks } from "components/FooterLinks";
import { LogoImg } from "components/LogoImg";
import { CenterImg } from "components/CenterImg";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>about.page</code>
          </p>
          <LogoImg />
        </div>
        <CenterImg />
      </main>

      <FooterLinks />
    </>
  );
}
