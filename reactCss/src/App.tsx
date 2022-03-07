import { ServiceCard } from "./ServiceCard";
import { Header } from "./Header";
import { HelpCard } from "./HelpCard";
import { HandlingCard } from "./Handling";
import { BlogCard } from "./Blog";
import ReachYou from "./ReachYou";
function App() {
  return (
    <div
      id="HomePage"
      className="grid grid-rows-1 w-[100%] h-[100%] bg-slate-100 "
    >
      <div
        id="Header"
        className="my-6 flex flex-wrap items-center justify-center xl:justify-end"
      >
        <div className="font-bold text-3xl ml-4 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
          <div className="w-2 h-2 rounded-full bg-slate-50"></div>
          <div id="Logo" className="font-serif -m-1.5">
            IT-tech
          </div>
        </div>
        <Header tags={["Home", "About", "Services", "Team"]}></Header>
      </div>
      <div id="Home" className="h-[100%] m-6 px-4">
        <h1 className="flex h-[20%] lg:h-[30%] pt-10  font-bold leading-relaxed text-[40px] justify-end text-center md:text-left w-[100%] md:w-[50vh]">
          Simplify your company systems with our IT Solutions
        </h1>
        <div className="grid md:grid-cols-2">
          <div
            id="idea-picture"
            className="flex items-center justify-center lg:items-end lg:justify-start"
          >
            <img
              src="./images/idea.jpg"
              className="rounded-xl mb-6"
              width="400px"
              height="400px"
            />
          </div>
          <div className="flex flex-col mb-16 justify-between font-bold">
            <HelpCard
              helpHeadings={[
                "Project Discussion",
                "Case Study",
                "Execute Project",
              ]}
            ></HelpCard>
          </div>
        </div>
      </div>
      <div id="Services" className="bg-slate-50 p-6">
        <div id="ServicesHeader" className="p-6 m-6">
          <h1 className="flex mt-36 font-bold text-[40px] text-header text-center justify-center">
            Here are the services we provide
          </h1>
          <p className="font-medium text-sm text-center pt-2">
            The point of using Lorem Ipsum is that it has.
          </p>
        </div>
        <div className="p-10">
          <ServiceCard
            serviceHeadings={[
              "Software Development",
              "System Applications",
              "Network Solutions",
              "A.I Systems",
              "Web & App Development",
              "I.T Consultations",
            ]}
            colours={[
              "bg-red-500",
              "bg-blue-300",
              "bg-pink-300",
              "bg-indigo-300",
              "bg-orange-200",
              "bg-slate-200",
            ]}
          />
        </div>
      </div>
      <div id="Handling" className="h-[100%] m-6 px-4 bg-slate-100">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col mb-16 justify-between font-bold">
            <HandlingCard />
          </div>
          <div
            id="idea-picture"
            className="flex items-center justify-center lg:items-end lg:justify-start px-4 m-10"
          >
            <img
              src="./images/idea.jpg"
              className="rounded-xl mb-6"
              width="400px"
              height="400px"
            />
          </div>
        </div>
      </div>
      <div id="Blog" className="bg-slate-50 pb-20">
        <div id="BlogHeaders" className=" m-20 pb-10">
          <h3 className="font-medium text-sm text-center pt-2 text-blue-300">
            FROM THE BLOG
          </h3>
          <h1 className="flex mt-1 font-bold text-[40px] text-header text-center justify-center border-y-2">
            Recent news from the blog
          </h1>
          <p className="font-medium text-sm text-center pt-2">
            The point of using Lorem Ipsum is that it has.
          </p>
        </div>
        <div>
          <BlogCard
            blogHeadings={[
              "Lorum Ipsum dolor sit amer iur",
              "Lorum Ipsum dolor sit amer iur",
              "Lorum Ipsum dolor sit amer iur",
            ]}
          />
        </div>
      </div>
      <div>
        <ReachYou />
      </div>
    </div>
  );
}

export default App;
