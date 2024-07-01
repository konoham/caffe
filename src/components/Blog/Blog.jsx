import { BlogNews } from "../../data/Blog";

const Blog = () => {
  return (
    <>
      <h1 className="mt-4 mb-6 text-3xl font-bold text-center text-black md:text-2xl">
        Latest Blogs
      </h1>
      <div className="text-black text-sm container mx-auto flex justify-center items-center gap-4 flex-wrap">
        {BlogNews.map((item, i) => (
          <div key={i} className="h-fit w-[350px] text-wrap space-y-2">
            <img src={item.img} className="object-cover rounded-md" />
            <h3 className="text-base">{item.title}</h3>
            <h5 className="text-primary">{item.tanggal}</h5>
            <p className="line-clamp-3 overflow-ellipsis hover:overflow-visible hover:line-clamp-5">
              {item.description}
            </p>
            <button className="py-2 px-4 bg-primary rounded-full text-white uppercase text-xs">
              Read More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
