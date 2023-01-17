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
        <Link href="/users">
          <h6>Users</h6>
        </Link>
        <Link href="/users/about">
          <h6>About Us</h6>
        </Link>
        <Link href={`/users/${id}`}>
          <h6>User With Id {id}</h6>
        </Link>
      </div>
      {posts?.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
