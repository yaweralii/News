import React from "react";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  console.log(router.query.id);
  return <h1>User with id {router.query.id}</h1>;
}
