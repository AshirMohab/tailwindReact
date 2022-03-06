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
      <div className="justify-center">
        <img
          src="./images/setting.png"
          alt=""
          width="50px"
          height="50px"
          className="bg-indigo-300 rounded-full p-2"
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
    <div className="md:grid md:grid-cols-3 gap-16 md:grid-rows-2 m-4 justify-center">
      {blogHeadings.map((blogHeading) => (
        <Blog
          heading={blogHeading}
          key={blogHeading}
          description="It is a long established fact that the reader will be distracted by new
          readable content"
        />
      ))}
    </div>
  );
}
