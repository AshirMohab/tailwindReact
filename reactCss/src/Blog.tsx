export type BlogCardProp = {
  blogHeadings: string[];
};

export type BlogHeadProp = {
  heading: string;
  description: string;
};
const Blog = (blogHeading: BlogHeadProp) => {
  const { heading, description } = blogHeading;
  return (
    <div className="flex flex-col shadow rounded-2xl mb-4 bg-white overflow-hidden">
      <div className="relative h-0 top-6 ml-auto mr-2 rounded-full bg-slate-50/60 z-auto">
        Stuff
      </div>
      <div className="overflow-hidden object-cover h-48">
        <img src="./images/idea.jpg" alt="" className="rounded-t-2xl -mt-20" />
      </div>
      <div>
        <h5 className="text-sm font-bold m-2">{heading}</h5>
        <p className="m-3">{description}</p>
        <div className="text-xs font-medium text-right pb-3 text-header cursor-pointer hover:text-blue-400">
          Read more
        </div>
      </div>
    </div>
  );
};

export function BlogCard(headings: BlogCardProp) {
  const { blogHeadings } = headings;
  return (
    <div className="md:grid md:grid-cols-3 gap-16 md:grid-rows-1 m-4 justify-center">
      {blogHeadings.map((blogHeading, index) => (
        <Blog
          heading={blogHeading}
          key={blogHeading + index}
          description="It is a long established fact that the reader will be distracted by new
          readable content"
        />
      ))}
    </div>
  );
}
