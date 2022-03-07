export default function ReachYou() {
  return (
    <div>
      <div id="GetToKownYou" className="relative h-0 top-6 ml-auto mr-2 z-50">
        <div>
          <h1 className="flex mt-1 font-bold text-[40px] text-header text-center justify-center">
            Get to know how we reaches you
          </h1>
          <h3 className="font-medium text-sm text-center pt-2 text-black">
            It is a long establiblished fact that the reader will get distracted
            by the readable.
          </h3>
        </div>
        <div className="text-center pb-10">
          <button className="rounded-full border-2 px-6 py-3 font-medium text-sm text-body hover:text-button hover:bg-slate-200">
            Learn Team
          </button>
        </div>
      </div>
      <div className="md:h-[450px] overflow-hidden">
        <div className="object-cover">
          <img
            className="z-10 lg:-mt-[350px] xl:-mt-[400px] 2xl:-mt-[565px] filter brightness-75"
            src="./images/idea.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
