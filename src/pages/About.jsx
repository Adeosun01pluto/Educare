import AboutImg from "../assets/AboutImg.svg"
function About() {
  return (
    <div className="w-full">
        <div className="container w-full justify-center min-h-[250px] flex md:flex-row gap-8 md:gap-24 py-2 sm:py-8 flex-col items-center md:w-[85%] mx-auto">
            <div className="w-[80%] mx-auto md:w-1/2">
                <img src={AboutImg} className="w-full max-h-[300px] object-cover" alt="" />
            </div>
            <div className="w-[80%] mx-auto md:w-1/2 items-start flex flex-col h-full justify-center gap-3 lg:gap-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:py-2 md:w-[60%] w-[80%]">Welcome to the online centers</h2>
                <ul className="text-lg px-3 list-disc text-[#000000]/40 w-[90%] md:w-[80%]">
                    <li>Start learning from your experience</li>
                    <li>Enhance your skills with us now</li>
                    <li>Do your favorite course</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About