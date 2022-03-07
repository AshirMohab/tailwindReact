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
    <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
      <div className="overflow-hidden object-cover h-48">
        <img
          src="./images/idea.jpg"
          alt=""
          width="110px"
          height="200px"
          className="rounded-t-2xl p-2"
        />
      </div>
      <h5 className="text-sm font-bold m-2">{heading}</h5>
      <p className="m-3">{description}</p>
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
