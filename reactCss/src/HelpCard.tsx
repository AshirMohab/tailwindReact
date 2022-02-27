export type HelpProp = {
  helpHeadings: string[];
};

export type HelpCardProp = {
  heading: string;
};

const Help = (helpHeading: HelpCardProp) => {
  const { heading } = helpHeading;
  return (
    <div className="p-11 mt-2">
      <h3 className="text-2xl text-header pb-3">{heading}</h3>
      <p className="font-medium text-secondary text-sm leading-normal">
        It is a long established fact that reader will be distracted by the
        readable content.
      </p>
    </div>
  );
};

export function HelpCard(headings: HelpProp) {
  const { helpHeadings } = headings;
  return (
    <div>
      {helpHeadings.map((helpHeading) => (
        <Help heading={helpHeading} key={helpHeading} />
      ))}
    </div>
  );
}
