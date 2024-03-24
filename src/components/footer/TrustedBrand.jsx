"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const TrustedBrand = () => {
    const brands = [
        { title: "Circle", path: "/images/brand/circle.png" },
        { title: "Foxhub", path: "/images/brand/foxhub.png" },
        { title: "Treva", path: "/images/brand/treva.png" },
        { title: "Muzica", path: "/images/brand/muzica.png" },
        { title: "Goldline", path: "/images/brand/goldline.png" },
    ];


    return (
            <div class='flex items-center justify-between overflow-hidden mt-5 mb-2'>
                {brands.map((brand => (
                    <Image src={brand.path} width={164} height={164} alt={brand.title} key={brand.title} className="img-brand" />
                )))}
            </div>
    )
}
