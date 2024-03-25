"use client"

import "@/components/styles/scroller.css";

import Image from "next/image";
import { useEffect, useState } from "react";

export const FooterTrustedBrand = () => {
    const brands = [
        { title: "Circle", path: "/images/brand/circle.png" },
        { title: "Foxhub", path: "/images/brand/foxhub.png" },
        { title: "Treva", path: "/images/brand/treva.png" },
        { title: "Muzica", path: "/images/brand/muzica.png" },
        { title: "Goldline", path: "/images/brand/goldline.png" },
    ];

    const [ready, setReady] = useState(true);

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (window.innerWidth < 1024) {
                addAnimation();
            }
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }

    }, [ready]);

    return (
        <div className="scroller image-container" data-speed="fast" >
            <div className="brand-list scroller__inner">
                {brands.map((brand, index) => (
                    <Image className="img-brand" width={200} height={200} key={index} src={brand.path} alt={brand.title} />
                ))}
            </div>
        </div>
    )
};

