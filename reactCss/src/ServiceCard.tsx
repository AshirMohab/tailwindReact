export type ServiceCardProp = {
  serviceHeadings: string[];
  colours: string[];
  images: string[];
};

export type ServiceHeadProp = {
  heading: string;
  description: string;
  colour: string;
  image: string;
};
const Service = (serviceHeading: ServiceHeadProp) => {
  const { heading, description, colour, image } = serviceHeading;
  return (
    <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
      <div className="justify-center">
        <img
          src={image}
          alt=""
          width="50px"
          height="50px"
          className={`${colour} rounded-full p-2`}
        />
      </div>
      <h5 className="text-sm font-bold m-2">{heading}</h5>
      <p className="m-3">{description}</p>
    </div>
  );
};

export function ServiceCard(headings: ServiceCardProp) {
  const { serviceHeadings, colours, images } = headings;
  return (
    <div className="md:grid md:grid-cols-3 gap-16 md:grid-rows-2 m-4 justify-center">
      {serviceHeadings.map((serviceHeading, index) => (
        <Service
          heading={serviceHeading}
          key={serviceHeading}
          description="It is a long established fact that the reader will be distracted by new
        readable content"
          colour={colours[index]}
          image={images[index]}
        />
      ))}
    </div>
  );
}
