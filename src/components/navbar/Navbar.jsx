import Image from "next/image";
import Link from "next/link";

import { TryNow } from "./TryNow";
import { NavItems } from "./NavItems";

export const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between p-4">
            <Link href={"/"}>
                <Image src="/images/Logo.svg" width={144} height={144} alt="Logo" />
            </Link>
            <NavItems />
            <div className="hidden lg:block">
                <TryNow />
            </div>
        </div>
    )
}
