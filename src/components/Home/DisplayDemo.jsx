"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animationCardProfile } from "./animationCardProfile";

export const HomeDisplayDemo = () => {

    const users = [
        { "value": "client", "name": "Client" },
        { "value": "sales", "name": "Sales" },
        { "value": "sales-manager", "name": "Sales Manager" },
    ]

    const [ready, setReady] = useState(true);
    const bannerRefs = useRef([]);
    const labelRefs = useRef([]);

    useEffect(() => {
        animationCardProfile(bannerRefs, labelRefs)
    }, [ready]);

    return (
        <div className="w-full flex items-center justify-center relative">
            <span className="card-bakcground-secondary-1"></span>
            <span className="card-bakcground-secondary-2"></span>
            <span className="card-bakcground-secondary-3"></span>
            <div className="w-[90%] lg:w-[80%] relative">
                <div className="overflow-hidden z-[2] card-1 ">
                    <Image src="/images/POS - Catalog - Tablet screen.jpg" width={1170} height={1170} alt="POS - Catalog" />
                </div>


                {users.map((user, index) => (
                    <div ref={(el) => (bannerRefs.current[index] = el)}

                        className={"profile-card card-" + user.value}
                        key={index}
                        style={{ animationDelay: `${index * 1}s` }}>
                        <div className="relative flex flex-col items-center justify-center" >
                            <Image src={"/images/profile/" + user.value + ".jpg"} width={127} height={127} alt={user.value} className="profile" />
                            <span ref={(el) => (labelRefs.current[index] = el)}
                                style={{ animationDelay: `${(index*1) + 0.8}s` }}
                                className={"opacity-0 badge-profile " + user.value + " badge-1"}>
                                {user.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
