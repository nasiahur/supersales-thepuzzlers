"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

export const HomeDisplayDemo = () => {

    const users = [
        {"value":"client", "name":"Client"},
        {"value":"sales", "name":"Sales"},
        {"value":"sales-manager", "name":"Sales Manager"},
    ]

    const bannerRefs = useRef([]);
    const labelRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate"); // Add the CSS class to trigger animation
                } else {
                    entry.target.classList.remove("animate"); // Remove the CSS class if not in viewport
                }
            });
        });

        bannerRefs.current.forEach((ref) => {
            observer.observe(ref);
        });
        labelRefs.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleAnimationEnd = (index) => {
        const badgeProfile = bannerRefs.current[index].querySelector('.badge-profile');
        if (badgeProfile) {
            badgeProfile.classList.add("animate");
        }
    };

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
                    onAnimationEnd={() => handleAnimationEnd(index)}
                    className={"profile-card card-"+user.value} 
                    key={index} 
                     style={{ animationDelay: `${index * 1}s` }}>
                        <div className="relative flex flex-col items-center justify-center" >
                            <Image src={"/images/profile/"+user.value+".jpg"} width={127} height={127} alt={user.value} className="profile" />
                            <span  className={"opacity-0 badge-profile "+user.value+" badge-1"}>
                                        {user.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
