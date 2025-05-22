import Image from "next/image";
import Link from "next/link";


export default function Navbar(){

    return(
        <>
        <div className="flex flex-row gap-20 bg-white shadow-lg pl-20 p-5 w-full">
            <div>
                <Image src="/logo.png" height="100" width="100"/>
            </div>
            <div className="flex flex-row text-sm gap-10 pt-2">
                <Link href={"/"}><div>RESERVATION</div></Link>
                <Link  href={"/"}><div>OFFERS</div></Link>
                <Link  href={"/"}><div>LOCATION</div></Link>
                <Link  href={"/"}><div>CAR & SERVICES</div></Link>
                <Link  href={"/"}><div>BUSSINESS RENTALS</div></Link>
                <Link  href={"/"}><div>CAR SALES</div></Link>
                <Link  href={"/"}><div>HELP</div></Link>
                <Link  href={"/"}><div>AVIS PREFERRED</div></Link>
                <Link  href={"/signup"}><div>SIGN UP</div></Link>
                <Link  href={"/login"}><div>LOG IN</div></Link>

            </div>
        </div>
        </>
    )
}