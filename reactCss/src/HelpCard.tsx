export type HelpProp = {
  helpHeadings: string[];
};

export type HelpCardProp = {
  heading: string;
  titleNumber: number;
  description: string;
};

const Help = (helpHeading: HelpCardProp) => {
  const { heading, titleNumber, description } = helpHeading;
  return (
    <div className="flex flex-row ">
      <h2 className="italic font-medium text-body text-9xl px-4 pl-10 text-outline text-slate-50">
        {titleNumber}
      </h2>
      <div className="p-11 mt-2">
        <h3 className="text-2xl text-header pb-3">{heading}</h3>
        <p className="font-medium text-secondary text-sm leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export function HelpCard(headings: HelpProp) {
  const { helpHeadings } = headings;
  return (
    <div>
      {helpHeadings.map((helpHeading, index) => (
        <Help
          heading={helpHeading}
          key={helpHeading}
          titleNumber={index + 1}
          description="It is a long established fact that reader will be distracted by the
        readable content."
        />
      ))}
    </div>
  );
}
