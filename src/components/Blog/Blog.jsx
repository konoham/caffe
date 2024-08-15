import { BlogNews } from "../../data/Blog";

const Blog = () => {
  return (
    <>
      <h1 className="mb-6 mt-4 text-center text-3xl font-bold text-black md:text-2xl">
        Latest Blogs
      </h1>
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 text-sm text-black">
        {BlogNews?.map((item, i) => (
          <div key={i} className="h-fit w-[350px] space-y-2 text-wrap">
            <img src={item.img} className="rounded-md object-cover" />
            <h3 className="text-base">{item.title}</h3>
            <h5 className="text-primary">{item.tanggal}</h5>
            <p className="line-clamp-3 overflow-ellipsis hover:line-clamp-5 hover:overflow-visible">
              {item.description}
            </p>
            <button className="rounded-full bg-primary px-4 py-2 text-xs uppercase text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
