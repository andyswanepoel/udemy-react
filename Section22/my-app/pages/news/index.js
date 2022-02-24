import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/this-is-next-js">This Is NextJS</Link>
        </li>
        <li>
          <Link href="/news/advanced-next-js">Advanced NextJS</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
