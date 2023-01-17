import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Post from "../components/Post";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [posts, setPosts] = useState<[]>();
  console.log(posts, "posts");

  const fetchData = async () => {
    const res = await axios.get("https://techcrunch.com//wp-json/wp/v2/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const id = 1;

  return (
    <div>
      <h1 className="text-green-400 text-center font-black p-5 text-4xl">
        News Application
      </h1>
      <div>
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <Link
              href="/users"
              className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            >
              <h6>Users</h6>
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href="/users/about"
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >
              <h6>About Us</h6>
            </Link>
          </li>
          <li className="mr-1">
            <Link
              href={`/users/${id}`}
              className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >
              <h6>User With Id {id}</h6>
            </Link>
          </li>
        </ul>
      </div>
      {posts?.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
