import  Head  from "next/head";
import Link from "next/link";
import Script from "next/script";
import YourComponent from "../../components/YourComponent";

export default function FirstPost(){
  return (
    <>
      <Head>
        <title>My First Post with Next</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <YourComponent />
      <h2><Link href='/'>Back to Home</Link></h2>
    </>
  )
}