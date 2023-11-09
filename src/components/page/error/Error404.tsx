import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Error404: NextPage = () => {
  const router = useRouter();

  return (
    <div className="justify-center" style={{ textAlign: 'center' }}>
      <Image className="m-auto mt-5" src="./images/yieldz.svg" alt="Not Found" width={100} height={100}/>
      <h1>Oh no! That page doesn&apos;t exist...</h1>
      <p>Try going back to the previous page or visit the homepage.</p>
      <button className="mt-5 underline" onClick={()=>router.push('/')}>Go Back</button>
    </div>
  );
};

export default Error404;
