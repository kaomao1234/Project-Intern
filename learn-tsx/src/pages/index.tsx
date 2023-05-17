import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
interface Props{
  name:string;
  lastname:string;
}
export default function Home(props:Props) {
  const obj:Props = {
   name:"hello",
   lastname:"hello"
  };
  return (
    <div className='bg-white w-screen h-screen hover:bg-red-200'>
      {obj.name}
    </div>
  )
}
