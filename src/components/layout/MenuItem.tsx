import Link from "next/link";
import Image from "next/image";
interface props {
  href: string;
  icon: string;
  color: number;
  label: string;
}
const MenuItem = ({ href, icon, label, color }: props) => {
  return (
    <li className="w-full m-2 my-4">
      {href!="no" && <Link href={href}>
        <button
          className={
            !color
              ? "flex w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group-hover:to-blue-600 hover:text-white hover:bg-gradient-to-br from-green-400 to-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ease-in duration-300 px-5 py-2.5"
              : "flex w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group-hover:to-blue-600 hover:text-white hover:bg-gradient-to-br from-[#401175] to-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ease-in duration-300 px-5 py-2.5"
          }
        >
          <Image
            src={icon}
            alt="logo"
            className="mr-10 x-2"
            width={24}
            height={24}
          />
          <span className="w-full text-left">{label}</span>
        </button>
      </Link>}
      {href=="no" && <a href="https://privatesale.venompumpy.com/" target="_blank">
        <button
          className={
            !color
              ? "flex w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group-hover:to-blue-600 hover:text-white hover:bg-gradient-to-br from-green-400 to-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ease-in duration-300 px-5 py-2.5"
              : "flex w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white-900 rounded-lg group-hover:to-blue-600 hover:text-white hover:bg-gradient-to-br from-[#401175] to-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ease-in duration-300 px-5 py-2.5"
          }
        >
          <Image
            src={icon}
            alt="logo"
            className="mr-10 x-2"
            width={24}
            height={24}
          />
          <span className="w-full text-left">{label}</span>
        </button>
      </a>}
    </li>
  );
};
export default MenuItem;
