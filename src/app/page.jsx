import { TrustedBrand } from "@/components/footer/TrustedBrand";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 mt-16 relative">
      <div className="flex flex-col items-center justify-center gap-6 p-4 w-full lg:w-2/3">
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
        <div className="star-1">
          <Image src="/images/star.svg" width={51} height={51} alt="star" />
        </div>
        <div className="star-2">
          <Image src="/images/star-2.svg" width={34} height={34} alt="star" />
        </div>
        <div className="star-3">
          <Image src="/images/star-1.svg" width={48} height={48} alt="star" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center relative">
        <span className="card-bakcground-secondary-1"></span>
        <span className="card-bakcground-secondary-2"></span>
        <span className="card-bakcground-secondary-3"></span>
        <div className="w-[90%] lg:w-[80%] relative">
          <div className="overflow-hidden z-[2] card-1 ">
          <Image src="/images/POS - Catalog - Tablet screen.jpg" width={1170} height={1170} alt="POS - Catalog" />
          </div>
          
          <div className="card-client">
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/images/profile/client.jpg" width={127} height={127} alt="client" className="profile" />
              <span className="badge-profile client badge-1">Client</span>
            </div>
          </div>
          <div className="card-sales">
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/images/profile/sales.jpg" width={127} height={127} alt="sales" className="profile" />
              <span className="badge-profile sales badge-1">Sales</span>
            </div>
          </div>
          <div className="card-sales-manager">
            <div className="relative flex flex-col items-center justify-center">
              <Image src="/images/profile/sales-manager.jpg" width={127} height={127} alt="sales-manager" className="profile" />
              <span className="badge-profile sales-manager badge-1">Sales Manager</span>
            </div>
          </div>
        </div>



      </div>

      <div className="mt-4 w-full lg:w-[90%]">
        <p className="subtitle-1">Trusted by leading companies</p>
        <TrustedBrand/>
      </div>
    </div>
  );
}
