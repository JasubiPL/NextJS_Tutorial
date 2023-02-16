import Link from "next/link";
import YourComponent from "../../components/YourComponent";

export default function FirstPost(){
  return (
    <>
      <h1>First Post</h1>
      <YourComponent />
      <h2><Link href='/'>Back to Home</Link></h2>
    </>
  )
}