import Image from "next/image";

export const HomeTitle = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-4 w-full lg:w-2/3 relative">
            <p className="title-1">Field sales software for humans</p>
            <p className="subtitle-1">
                Supersales enables your team to perform at the highest level, yet stay human. With a sleek design and an easy-to-navigate app.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <button className="btn btn-primary button-1">Book a demo</button>
                <button className="btn btn-text button-2 ">
                    <Image src="/images/play.svg" width={24} height={24} alt="play" />
                    See how it works
                </button>
            </div>
            <div className="star-1 stars">
                <Image src="/images/star.svg" width={51} height={51} alt="star" />
            </div>
            <div className="star-2">
                <Image src="/images/star-2.svg" width={34} height={34} alt="star" />
            </div>
            <div className="star-3">
                <Image src="/images/star-1.svg" width={48} height={48} alt="star" />
            </div>
        </div>
    )
}
