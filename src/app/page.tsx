import Latestblog from "@/components/LatestBlog/Latestblog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <>
      <Latestblog blogs={blogs} />
    </>
  );
};

export default HomePage;
