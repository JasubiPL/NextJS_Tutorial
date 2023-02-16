import Image from "next/image";

 const YourComponent = () =>{
  return(
    <Image
    src='/image/profile.png'
    height={145}
    width={145}
    alt='Profile Picture'
    />
  )
}

export default YourComponent;