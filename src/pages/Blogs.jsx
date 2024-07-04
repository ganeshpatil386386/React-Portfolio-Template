import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogImage from "../assets/Images/blog.png";
import ProjectOne from "../assets/Images/projectOne.png";
import ProjectTwo from "../assets/Images/projectTwo.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchedBlogs = [
      {
        title:
          "Tap into Global Markets: 5 Open-Source Tools for Localization in 2024",
        brief:
          "The world of software development is rapidly growing, and reaching a global audience can be a challenge. Whether you're selling products or offering services, ensuring the best experience for users is crucial. Localization becomes a key ally in conne...",
        url: "https://devgancode.hashnode.dev/tap-into-global-markets-5-open-source-tools-for-localization-in-2024",
        imageUrl: BlogImage,
      },
      {
        title: "Getting Started with HTML: The Ultimate Beginner's Tutorial",
        brief:
          "Hypertext Markup Language(HTML). The difference between HTML and HTML5 is the latest version of the language with new features, powers, and more positive results nothing fancy.\nStarting with HTML\nThe below elements that we are going to explore in thi...",
        url: "https://devgancode.hashnode.dev/getting-started-with-html-the-ultimate-beginners-tutorial",
        imageUrl: ProjectOne,
      },
      {
        title:
          "Mastering CSS3: Strategies for Writing Clean Code and Boosting Performance",
        brief:
          "Cascading Style Sheet (CSS3) is changing, and evolving continuously. There are different ways to write CSS. Some developers choose to write separate files for better understanding or to organize structure, other people write single CSS files. It depe...",
        url: "https://devgancode.hashnode.dev/mastering-css3-strategies-for-writing-clean-code-and-boosting-performance",
        imageUrl: ProjectTwo,
      },
    ];

    setBlogs(fetchedBlogs);
  }, []);

  return (
    <div className='flex flex-wrap justify-center gap-4 p-4 mt-5'>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          brief={blog.brief}
          url={blog.url}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
};

export default Blogs;
