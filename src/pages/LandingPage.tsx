import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProductInfoCardClick = useCallback(() => {
    navigate("/axo-landing-page");
  }, [navigate]);

  const onProductInfoCardClick1 = useCallback(() => {
    // Please sync "Recommendation Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-black h-[680px] text-left text-109xl text-gray-200 font-bakbak-one">
      <div className="absolute top-[106px] left-[1182px] w-[186px] h-[574px] overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[69px] text-center text-16xl text-black font-buenard">
        <div className="self-stretch h-[182px] shrink-0 flex flex-col items-center justify-center py-0 px-16 box-border relative gap-[10px] z-[0]">
          <div className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_186,_110,_0.5),_rgba(244,_28,_178,_0.44))] z-[0]" />
          <div className="w-[194px] relative h-[91px] z-[1]">
            <a
              className="absolute top-[24.18%] left-[32.47%] text-[inherit] [text-decoration:none]"
              href="https://www.myntra.com/shop/men"
              target="_blank"
            >
              Men
            </a>
          </div>
        </div>
        <div className="self-stretch h-[182px] shrink-0 flex flex-col items-center justify-center py-0 px-16 box-border relative gap-[10px] z-[1]">
          <div className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_186,_110,_0.5),_rgba(244,_28,_178,_0.44))] z-[0]" />
          <div className="w-[194px] relative h-[91px] z-[1]">
            <a
              className="absolute top-[24.18%] left-[19.59%] text-[inherit] [text-decoration:none]"
              href="https://www.myntra.com/shop/women"
              target="_blank"
            >
              Women
            </a>
          </div>
        </div>
        <div className="w-[186px] !m-[0] absolute top-[502px] left-[0px] h-[182px] shrink-0 flex flex-col items-center justify-center py-0 px-16 box-border gap-[10px] z-[2]">
          <div className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_186,_110,_0.5),_rgba(244,_28,_178,_0.44))] z-[0]" />
          <div className="w-[194px] relative h-[91px] z-[1]">
            <a
              className="absolute top-[24.18%] left-[32.99%] text-[inherit] [text-decoration:none]"
              href="https://www.myntra.com/shop/kids"
              target="_blank"
            >
              Kids
            </a>
          </div>
        </div>
        <div className="w-[186px] !m-[0] absolute top-[753px] left-[0px] h-[182px] shrink-0 flex flex-col items-center justify-center py-0 px-16 box-border gap-[10px] z-[3]">
          <div className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_186,_110,_0.5),_rgba(244,_28,_178,_0.44))] z-[0]" />
          <div className="w-[194px] relative h-[91px] z-[1]">
            <a
              className="absolute top-[24.18%] left-[24.23%] text-[inherit] [text-decoration:none]"
              href="https://www.myntra.com/personal-care"
              target="_blank"
            >
              Beauty
            </a>
          </div>
        </div>
        <div className="w-[186px] !m-[0] absolute top-[1004px] left-[0px] h-[182px] shrink-0 flex flex-col items-center justify-center py-0 px-16 box-border gap-[10px] z-[4]">
          <div className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(180deg,_rgba(251,_186,_110,_0.5),_rgba(244,_28,_178,_0.44))] z-[0]" />
          <div className="w-[194px] relative h-[91px] z-[1]">
            <a
              className="absolute top-[24.18%] left-[25.26%] text-[inherit] [text-decoration:none]"
              href="https://www.myntra.com/studio/home"
              target="_blank"
            >
              Studio
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-[73px] left-[815px] h-[603px] overflow-y-auto flex flex-col items-start justify-start py-[30px] pr-0 pl-2.5 box-border gap-[29px] text-base text-text-default-default font-subtitle">
        <div
          className="w-[287px] rounded-radius-200 bg-gray-100 flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[240px] cursor-pointer text-black"
          onClick={onProductInfoCardClick}
        >
          <img
            className="self-stretch max-w-full overflow-hidden h-[247px] shrink-0 object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="w-52 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[140%]">Axo</div>
            </div>
            <div className="hidden flex-row items-start justify-start text-text-default-default">
              <div className="relative leading-[140%] font-semibold">$0</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-sm text-text-neutral-default">
              <div className="relative [text-decoration:underline] leading-[140%]">
                <p className="m-0">{`Meet our intelligent bot and let him `}</p>
                <p className="m-0">{`help you navigate through the process `}</p>
                <p className="m-0">of online shopping.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[287px] rounded-radius-200 bg-gray-100 flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[240px]">
          <img
            className="self-stretch max-w-full overflow-hidden h-[247px] shrink-0 object-cover"
            alt=""
            src="/image1@2x.png"
          />
          <div className="w-52 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-start text-black">
              <a
                className="flex-1 relative leading-[140%] text-[inherit] [text-decoration:none]"
                href="https://www.myntra.com/?src=onlineShopping"
                target="_blank"
              >
                Store
              </a>
            </div>
            <div className="hidden flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">$0</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-sm">
              <div className="relative [text-decoration:underline] leading-[140%]">
                Experience online-thrifting the raw way.
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[287px] rounded-radius-200 bg-gray-100 flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[240px] cursor-pointer"
          onClick={onProductInfoCardClick1}
        >
          <img
            className="self-stretch max-w-full overflow-hidden h-[247px] shrink-0 object-cover"
            alt=""
            src="/image2@2x.png"
          />
          <div className="w-52 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-start text-black">
              <div className="flex-1 relative leading-[140%]">{`Catalogue & Trends`}</div>
            </div>
            <div className="hidden flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">$0</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-sm">
              <div className="relative [text-decoration:underline] leading-[140%]">
                <p className="m-0">Have a look at the AI generated</p>
                <p className="m-0">recommendations to stay up-to-date...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[287px] rounded-radius-200 bg-gray-100 flex flex-col items-start justify-start p-4 box-border gap-[16px] min-w-[240px]">
          <img
            className="self-stretch max-w-full overflow-hidden h-[247px] shrink-0 object-cover"
            alt=""
            src="/image3@2x.png"
          />
          <div className="w-52 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex flex-row items-start justify-start text-black">
              <a
                className="flex-1 relative leading-[140%] text-[inherit] [text-decoration:none]"
                href="https://www.myntra.com/my/profile"
                target="_blank"
              >
                Profile
              </a>
            </div>
            <div className="hidden flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">$0</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-sm">
              <div className="relative [text-decoration:underline] leading-[140%]">
                Wishlist/Orders/Settings and more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[33.82%] w-[53.75%] top-[24.71%] left-[10.49%] text-[270px] text-background-default-default inline-block">
        NOW
      </div>
      <div className="absolute h-[12.29%] w-full top-[40.01%] right-[0.28%] bottom-[47.69%] left-[-0.28%]" />
      <div className="absolute h-[12.29%] w-full top-[52.31%] right-[0.28%] bottom-[35.4%] left-[-0.28%]" />
      <div className="absolute h-[16.03%] w-full top-[23.99%] right-[0%] bottom-[59.99%] left-[0%]" />
      <div className="absolute h-[11.79%] w-full top-[65.13%] right-[0%] bottom-[23.07%] left-[0%]" />
      <div className="absolute h-[18.97%] w-[30.9%] top-[7.65%] left-[11.67%] inline-block">
        THEN
      </div>
      <div className="absolute h-[18.38%] w-[40.35%] top-[74.41%] left-[11.46%] inline-block">
        FOREVER
      </div>
      <div className="absolute h-[8.82%] w-full top-[0%] right-[0%] bottom-[91.18%] left-[0%] bg-background-default-default overflow-hidden text-sm text-colour-main-blue-300 font-medium-12">
        <div className="absolute top-[11px] left-[165px] w-[79px] h-[38px] text-7xl text-colour-logo-primary">
          <div className="absolute top-[0%] left-[0%] leading-[38px] font-black hidden">
            Landing
          </div>
        </div>
        <div className="absolute w-[6.39%] top-[calc(50%_-_11px)] left-[54.93%] leading-[24px] inline-block">
          Useful Links
        </div>
        <a
          className="absolute w-[7.85%] top-[calc(50%_-_12px)] left-[41.6%] leading-[24px] text-[inherit] inline-block [text-decoration:none]"
          href="https://www.myntra.com/shop/home-living"
          target="_blank"
        >{`Home & Living`}</a>
        <div className="absolute w-[3.4%] top-[calc(50%_-_12px)] left-[50.49%] leading-[24px] inline-block">
          Offers
        </div>
        <div className="absolute h-[43.33%] w-[7.57%] top-[30%] right-[11.46%] bottom-[26.67%] left-[80.97%] text-center text-xs text-background-default-default">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-colour-main-blue-800" />
          <div className="absolute w-full top-[calc(50%_-_9px)] left-[0px] leading-[18px] font-medium inline-block">
            Sign In/ Sign Up
          </div>
        </div>
        <div className="absolute w-[8.47%] top-[calc(50%_-_11px)] left-[61.88%] leading-[24px] inline-block">
          Customer Policies
        </div>
        <div className="absolute w-[7.43%] top-[calc(50%_-_12px)] left-[71.88%] leading-[24px] inline-block">
          Connect with Us
        </div>
        <img
          className="absolute h-full w-[5.69%] top-[0%] right-[92.01%] bottom-[0%] left-[2.29%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="absolute top-[151px] left-[-12px] text-[700px] leading-[140%] font-subtitle text-transparent !bg-clip-text [background:linear-gradient(180deg,_rgba(243,_41,_144,_0.3),_rgba(242,_85,_17,_0.3)_51%,_rgba(254,_144,_45,_0.3))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[326px] h-[451px]">{`&`}</div>
    </div>
  );
};

export default LandingPage;
