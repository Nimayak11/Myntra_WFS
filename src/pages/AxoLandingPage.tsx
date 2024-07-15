import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AxoLandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative h-[680px] overflow-hidden bg-[url('/public/axo-landing-page@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-background-default-default font-subtitle">
      <img
        className="absolute top-[185px] left-[857px] w-[500px] h-[500px] object-cover"
        alt=""
        src="/axosticker-1@2x.png"
      />
      <div className="absolute top-[40px] left-[112px] w-[812.5px] h-[300px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/chat-bubble.svg"
        />
        <div className="absolute top-[71px] left-[128px] tracking-[-0.02em] leading-[120%] font-semibold inline-block w-[559px] h-[90px]">
          Ayo! Axo this side. What are you here for?
        </div>
      </div>
      <div className="absolute top-[507px] left-[213px] flex flex-col items-start justify-start text-base text-text-default-secondary">
        <div className="w-[644px] flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative text-xl leading-[120%] text-text-default-default">
            Chat-box
          </div>
          <div className="w-60 relative leading-[140%] hidden">Description</div>
          <div className="self-stretch rounded-radius-200 bg-background-default-default box-border overflow-hidden flex flex-row items-start justify-start py-space-300 px-space-400 relative min-w-[240px] min-h-[80px] text-icon-default-tertiary border-[1px] border-solid border-border-default-default">
            <div className="flex-1 relative leading-[140%] z-[0]">
              Click to type....
            </div>
            <img
              className="w-[6.6px] absolute !m-[0] right-[5px] bottom-[6px] h-[6.6px] z-[1]"
              alt=""
              src="/drag.svg"
            />
          </div>
          <div className="w-60 relative leading-[140%] hidden">Hint</div>
        </div>
      </div>
      <div className="absolute top-[434px] left-[213px] w-[161px] h-[49px] text-center">
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 w-[161px] h-[49px] cursor-pointer"
          onClick={onRectangleClick}
        />
        <div className="absolute top-[8px] left-[27px] tracking-[-0.02em] leading-[120%] font-semibold flex items-center justify-center w-[108px] h-[33px]">
          Go Find!
        </div>
      </div>
      <div className="absolute top-[680px] left-[191px] w-[191px] h-[233px] [transform:_rotate(180deg)] [transform-origin:0_0]">
        <div className="absolute h-full w-[21.47%] top-[0%] right-[0%] bottom-[0%] left-[78.53%] bg-deeppink" />
        <div className="absolute h-[79.4%] w-[21.47%] top-[0%] right-[39.27%] bottom-[20.6%] left-[39.27%] bg-darkorange" />
        <div className="absolute h-[60.09%] w-[21.47%] top-[0%] right-[78.53%] bottom-[39.91%] left-[0%] bg-orangered" />
      </div>
      <div className="absolute top-[0px] left-[1249px] w-[191px] h-[233px]">
        <div className="absolute h-full w-[21.47%] top-[0%] right-[0%] bottom-[0%] left-[78.53%] bg-deeppink" />
        <div className="absolute h-[79.4%] w-[21.47%] top-[0%] right-[39.27%] bottom-[20.6%] left-[39.27%] bg-darkorange" />
        <div className="absolute h-[60.09%] w-[21.47%] top-[0%] right-[78.53%] bottom-[39.91%] left-[0%] bg-orangered" />
      </div>
    </div>
  );
};

export default AxoLandingPage;
