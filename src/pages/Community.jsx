import CommunityImg from "../assets/CommunityImg.svg"
function Community() {
  return (
    <div className="w-full">
        <div className="container w-full justify-center min-h-[250px] flex md:flex-row py-2 sm:py-8 flex-col items-center md:w-[85%] mx-auto">
            <div className="w-[80%] mx-auto md:w-1/2 flex flex-col h-full items-center justify-center gap-3 lg:gap-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:py-2 w-[80%]">Start growing with our community</h2>
                <p className="text-lg px-3 text-[#000000]/40 w-[95%]">Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                <button className='text-white bg-[#FC8621] rounded-md py-2 px-5 font-semibold'>Join Community</button>

            </div>
            <div className="w-[80%] mx-auto md:w-1/2">
                <img src={CommunityImg} className="w-full max-h-[300px] object-cover" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Community