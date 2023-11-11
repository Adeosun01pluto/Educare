import RegisterImg from "../assets/RegisterImg.svg"
function Register() {
  return (
    <div className="w-full">
        <div className="container w-full justify-center min-h-[250px] flex md:flex-row py-2 gap-8 sm:py-8 flex-col items-center md:w-[85%] mx-auto">
            <div className="w-[80%] mx-auto md:w-1/2 items-start flex flex-col h-full justify-center gap-3 lg:gap-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold sm:py-2 w-[80%]">Start learning by creating free account and get register</h2>
            </div>
            <div className="w-[80%] mx-auto md:w-1/2">
                <img src={RegisterImg} className="w-full max-h-[300px] object-cover" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Register