import * as React from "react";
  
function Badge({ iconSrc, text }) {
  return (
    <div className="flex gap-2 px-3 py-1.5 rounded-md bg-white bg-opacity-10">
      <img loading="lazy" src={iconSrc} alt="" className="aspect-[0.75] w-[9px]" />
      <span className="text-xs leading-3 text-neutral-50">{text}</span>
    </div>
  );
}
  
function Rating({ iconSrc, text }) {
  return (
    <div className="flex gap-1 my-auto rounded-xl">
      <img loading="lazy" src={iconSrc} alt="" className="aspect-[1.1] w-[11px]" />
      <span className="text-xs leading-4 text-right text-amber-300">{text}</span>
    </div>
  );
}
  
function InfoItem({ iconSrc, text }) {
  return (
    <div className="flex gap-2 mt-2">
      <img loading="lazy" src={iconSrc} alt="" className="w-3.5 aspect-square" />
      <span className="flex-1 text-sm leading-4 text-neutral-300">{text}</span>
    </div>
  );
}
  
function IconTextItem({ iconSrc, text }) {
  return (
    <div className="flex flex-col">
      <img loading="lazy" src={iconSrc} alt="" className="self-center aspect-[0.97] w-[34px]" />
      <span className="mt-2">{text}</span>
    </div>
  );
}
  
export default function MyComponent() {
  return (
    <section className="flex flex-col mx-auto w-full max-w-[480px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d2e57ab9b548553e5a0bfa6d2291901a3d77d02dd3cd975ebf648b3749884a1?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="w-full aspect-[3.03]" />
      <div className="flex flex-col px-6 pt-5 pb-6 w-full bg-neutral-900 ">
        <header className="flex flex-col">
          <h1 className="text-2xl leading-8 text-white">Professional Online Makeup Course</h1>
          <div className="flex gap-2.5 mt-2">
            <Badge iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9bac23c211113fc59c702922c77c81c00414387218a0896c59999d2718077277?apiKey=a3925fd707b046d4a97a51b999791797&" text="Certification Programme" />
            <Rating iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e176830ca7e784bc855a873222e30944e6e75b2d97500cef4e7a87fdacb009?apiKey=a3925fd707b046d4a97a51b999791797&" text="Rated 4.85/5" />
          </div>
          <div className="flex flex-col mt-2">
            <InfoItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/00f1cc427d43dc3cec3f9b79e9bd27742a42e03f9ec73171872384fabf25af1d?apiKey=a3925fd707b046d4a97a51b999791797&" text="India’s No.1 Online Makeup Course" />
            <InfoItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/27ca00f0fbd22940bd64f019fa646f91dfe559e1de4b90d8e8ffac8991536e86?apiKey=a3925fd707b046d4a97a51b999791797&" text="Learn by LIVE Do-it-Together Classes" />
            <InfoItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0508b9c16625ffe7a2eae49bb4c4196caeed1897c5d7a04350d2fdd76c08bfc5?apiKey=a3925fd707b046d4a97a51b999791797&" text="Unlimited Practise Session to master skills" />
          </div>
        </header>
        {/* <div className="max-w-md mx-auto bg-black p-6 rounded-lg shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center p-4 rounded-t-lg">
            Fill the form below to enquire
            </div> */}
         <form className="flex flex-col rounded-lg mt-8 bg-white p-4 shadow-md">
           <button className=" p-3 text-xs font-bold z-10 text-white uppercase bg-pink-500">Fill the form below to enquire</button>
          <fieldset className="flex z-10 flex-col p-2.5 bg-white rounded-none">
            <label htmlFor="name" className="text-sm font-semibold leading-4 text-neutral-600">*Enter your name</label>
            <input id="name" className="px-3 pt-2 pb-2 mt-3 text-sm bg-white rounded border border-solid border-zinc-300 text-stone-300" placeholder="Eg. Aneesha Mehra" />
            <label htmlFor="whatsapp" className="text-sm font-semibold leading-4 text-neutral-600 mt-2.5">*Enter your WhatsApp Number</label>
            <div className="flex gap-3 mt-3 text-sm">
              <span className="flex gap-1 justify-between self-start px-3 pt-2 pb-2.5 whitespace-nowrap bg-white rounded border border-solid border-zinc-300 text-neutral-600">
                +91
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59db1d0032c9f96298e1b693353a92b6096af2fedcb54f445251c5361dfd955b?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="shrink-0 self-start w-2.5 aspect-[1.43] fill-black fill-opacity-30" />
              </span>
              <input id="whatsapp" className="flex flex-col flex-1 items-start px-3 pt-2 pb-2.5 bg-white rounded border border-solid border-zinc-300 text-stone-300" placeholder="Eg. 0000000000" />
            </div>
            <label htmlFor="profession" className="text-sm font-semibold leading-4 text-neutral-600 mt-2.5">*Select your profession</label>
            <select id="profession" className="px-3 pt-2 pb-2 mt-3 text-sm bg-white rounded border border-solid border-zinc-300 text-stone-300">
              <option>Choose the most relevant option</option>
            </select>
            <label htmlFor="goal" className="text-sm font-semibold leading-4 text-neutral-600 mt-2.5">*Select your goal</label>
            <select id="goal" className="px-3 pt-2 pb-2 mt-3 text-sm bg-white rounded border border-solid border-zinc-300 text-stone-300">
              <option>Choose the most relevant option</option>
            </select>
            <label htmlFor="city" className="text-sm font-semibold leading-4 text-neutral-600 mt-2.5">*Select your city</label>
            <select id="city" className="px-3 pt-2 pb-2 mt-3 text-sm bg-white rounded border border-solid border-zinc-300 text-stone-300">
              <option>Choose the most relevant option</option>
            </select>
          </fieldset>
          <button
            type="submit"
            className="flex justify-center items-center px-16 py-2.5 mt-5 text-sm font-bold leading-4 text-center whitespace-nowrap rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] text-neutral-50"
          >
            Submit
          </button>
        </form>
      </div> 
      
    

      


      <section className="flex flex-col justify-center w-full bg-white">
        <div className="flex overflow-hidden relative flex-col justify-center px-4 py-8 w-full aspect-[1.21]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aeba5b12edcfa33036765e20199ec3a24e67b961f8a3b054de9b5dbd9d7ae52?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="object-cover absolute inset-0 size-full" />
          <header className="flex relative gap-5 justify-center items-center text-2xl leading-8 text-neutral-100">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb318ae788f1f20468b3f00e5c5ce93f9ee1cebe9c28affe3620e801b71a8117?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
            <h2>Why Should You
              <br /> Join Airblack?
            </h2>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d4882956e66e7ec3f3bfd2fe2d1a8607e59c86e8b48cc4ef37b809f5b1a89e?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[9.09] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
          </header>
          <div className="flex relative gap-3 mt-8 text-white">
            <IconTextItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/399f41a9bd8b8f47ee9b745006deea4e5123d71ba13c5470391c801bfe94417c?apiKey=a3925fd707b046d4a97a51b999791797&" text="Do-it-together, live on zoom" />
            <IconTextItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/48ffbd3a1a2ece132d336ebb109e5b5f26643dae891129b896fa9cb826c26c26?apiKey=a3925fd707b046d4a97a51b999791797&" text="4.8 /5 Rated Classes" />
            <IconTextItem iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/780dca9bd04b046ece90206cfe155ea147ad014f557890f058dcf9163c084cf2?apiKey=a3925fd707b046d4a97a51b999791797&" text="35000+ Members" />
          </div>
          <button className="flex relative justify-center items-center px-16 py-2.5 mt-8 font-bold rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] leading-[120%] text-neutral-50">
            Apply Now
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-center px-2 py-8 w-full text-2xl leading-8 text-center bg-black text-neutral-100">
        <div className="flex gap-5 justify-center items-center self-center px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e69bcbdadfd5b21200aaa6aaf8c795a3d4e952362ca8b9b8c5738d7f2aa481?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
          <h2>Get Certified From
            <br /> India’s Biggest
            <br /> Beauty Platform
          </h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15ce53c6b302e88938b5d02cc815070876aab54013146e0656a6220fe4da8ca4?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="flex-1 shrink-0 self-stretch my-auto w-full aspect-[6.25] fill-[linear-gradient(90deg,#E74D85_0%,rgba(231,77,133,0.00)_100%)]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a67012876c2a4ec23c29649adee7e0f5f3bc8c1cffa3c25d25f78f08bf471f?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="mt-3.5 w-full aspect-[1.43]" />
      </section>
      <section className="flex flex-col justify-center w-full bg-white">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-10 py-16 w-full aspect-[1.13]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a3b6197adc84097abb4c44501d8611a90e7753dda83de85a916eff3728ead9b?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="object-cover absolute inset-0 size-full" />
          <h2 className="relative justify-center py-px max-w-full text-2xl leading-8 text-center text-white w-[195px]">
            Join our growing
            <br /> community of
            <br /> 35,000<span className="">+</span> alumni
          </h2>
          <button className="flex relative justify-center items-center self-stretch px-16 py-2.5 mt-6 text-sm font-bold leading-4 text-center rounded bg-[linear-gradient(90deg,#F56563_0%,#E54988_100%)] text-neutral-50">
            Apply Now
          </button>
          <div className="flex relative gap-4 justify-between mt-6">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/08bab661adb551dc003d39752d1c098a0f3e85c4bcec1527a8022e526e077362?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="shrink-0 aspect-square w-[34px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f40e967ce493d78780816f3eccafb1acc75d4694a2a49346f2e72b43be74c7c?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="shrink-0 self-start aspect-square w-[33px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a47e70bcf2a2aa4ab6a0442e83fd4ed7236f7f5655fd17da5b589802ad49fc4b?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="shrink-0 aspect-square w-[34px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f4de1f69c07fc407c5a7422c30dde2f21d083bab6085ab5d5d1fd392105620?apiKey=a3925fd707b046d4a97a51b999791797&" alt="" className="shrink-0 self-start aspect-square w-[33px]" />
          </div>
        </div>
      </section>
    </section>
  );
}
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
