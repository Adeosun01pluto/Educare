import HeroImg from "../assets/hero_img.svg"
function Hero() {
  return (
    <div className="w-full">
        <div className="container w-full flex md:flex-row gap-8 py-2 sm:py-8 flex-col items-center md:w-[85%] mx-auto">
            <div className="left w-[80%] mx-auto md:w-1/2 items-start flex flex-col justify-center gap-3 lg:gap-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:py-2 md:w-[50%] w-[80%]">Start learning with us now</h2>
                <p className="text-md text-[#000000]/40 w-[90%] md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?</p>
                <button className="bg-[#682C0E] rounded-md font-semibold text-white py-1 px-2">Start learning</button>
            </div>
            <div className="right w-[80%] mx-auto md:w-1/2">
                <img src={HeroImg} className="w-full max-h-[350px] object-cover" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero