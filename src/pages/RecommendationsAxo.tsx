import { FunctionComponent, useCallback } from "react";

const RecommendationsAxo: FunctionComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Model Selection" to the project
  }, []);

  return (
    <div className="w-full relative h-[680px] overflow-hidden bg-[url('/public/recommendations-axo@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-5xl text-background-default-default font-subtitle">
      <div
        className="absolute top-[566px] left-[1180px] w-[161px] h-[49px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 w-[161px] h-[49px]" />
        <div className="absolute top-[8px] left-[5px] tracking-[-0.02em] leading-[120%] font-semibold flex items-center justify-center w-[151px] h-[33px]">
          Virtual Room
        </div>
      </div>
      <div className="absolute top-[536px] left-[439px] w-[688px] h-[109px] text-13xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-black" />
        <div className="absolute h-[34.4%] w-[85.76%] top-[32.29%] left-[7.12%] leading-[120%] flex items-center justify-center">
          Here are some recommendations.....
        </div>
      </div>
      <div className="absolute top-[29px] left-[27px] w-[1374px] h-[537px] overflow-x-auto flex flex-row items-start justify-start py-0 pr-[35px] pl-0 box-border gap-[90px]">
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-81@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-82@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-83@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-84@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-85@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-86@2x.png"
          />
        </div>
        <div className="w-[310px] relative h-[448.9px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-border-default-default" />
          <img
            className="absolute h-[95.57%] w-[93.55%] top-[2.23%] right-[3.23%] bottom-[2.21%] left-[3.23%] rounded-11xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-87@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[195px] left-[-189px] w-[683.3px] h-[683.3px] object-contain"
        alt=""
        src="/axosticker-2@2x.png"
      />
    </div>
  );
};

export default RecommendationsAxo;
