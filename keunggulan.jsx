import { Gift, GlobeSimple, Storefront, Wallet } from "@phosphor-icons/react";
import DataKenggulan from "../data/keunggulan ";

const Keunggulan = () => {
  return (
    <div className="w-full flex justify-center items-center gap-8 text-black overflow-x-hidden my-12 ">
      {DataKenggulan.map((item) => (
        <>
          <div className="second-card flex justify-center box-border p-4 rounded-xl items-center">
            <Gift size={32} className=" w-fit my-auto text-primary" />
            <div className="flex justify-center items-start flex-col flex-grow-0 flex-shrink-0 px-4 text-start w-[90%]">
              <h3 className="title uppercase text-sm tracking-tight">
                {item.title}
              </h3>
              <p className="explanation text-xs text-third font-normal">
                {item.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Keunggulan;
