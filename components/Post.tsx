import React from "react";
import Image from "next/image";

const Post = ({ post }: any) => {
  let content = post.content.rendered.slice(0, 1000);
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-100 p-5">
      <div className="relative block bg-violet-100 text-black p-4 shadow border-b border-grey">
        <span className="font-bold">Date & Time:</span> {post.date}
        <div className="font-bold">Latest News:</div> {post.title.rendered}
      </div>
      <div className="relative block">
        <div
          className="accordion__body p-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <img
          src={post.jetpack_featured_media_url}
          alt="img"
          width="500vw"
          height="500"
        />
      </div>
    </div>
  );
};

export default Post;
