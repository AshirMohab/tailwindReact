import { ServiceCard } from "./ServiceCard";
import { Header } from "./Header";
import { HelpCard } from "./HelpCard";
function App() {
  return (
    <div
      id="HomePage"
      className="grid grid-rows-homePage w-[100%] h-[100%] bg-slate-50"
    >
      <div
        id="Header"
        className="mb-6 flex flex-wrap items-center justify-center xl:justify-end"
      >
        <div className="font-bold text-3xl ml-4 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div id="Logo" className="font-serif -m-1.5">
            IT-tech
          </div>
        </div>
        <Header tags={["Home", "About", "Services", "Team"]}></Header>
      </div>
      <div id="Home" className="h-[100%] m-6">
        <h1 className="flex h-[20%] lg:h-[30%] pt-10  font-bold leading-relaxed text-[40px] text-header justify-end text-center md:text-left w-[100%] md:w-[50vh]">
          Simplify your company systems with our IT Solutions
        </h1>
        <div className="grid md:grid-cols-2">
          <div
            id="idea-picture"
            className="flex items-center justify-center lg:items-end lg:justify-start"
          >
            <img src="./images/idea.jpg" className="rounded-lg" />
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
        <div id="ServicesHeader" className="p-6">
          <h1 className="flex mt-44 font-bold text-[40px] text-header text-center justify-center">
            Here are the services we provide
          </h1>
          <p className="font-medium text-secondary text-sm text-center pt-2">
            The point of using Lorem Ipsum is that it has.
          </p>
        </div>
        <div>
          <ServiceCard
            serviceHeadings={[
              "Software Development",
              "System Applications",
              "Network Solutions",
              "A.I Systems",
              "Web & App Development",
              "I.T Consultations",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
