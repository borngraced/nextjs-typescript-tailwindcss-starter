import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Head from "next/head";
import Greeting from "../components/greeting";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      getGreeting();
    }, 2000);
  }, []);

  async function getGreeting() {
    setLoading(true);
    try {
      await axios.get("/api/hello-world").then((res) => {
        setText(res.data.message);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Progigs - Remote gigs just for you</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div className="flex h-screen w-full justify-center items-center align-center">
        <Greeting text={text ? text : "loading..."} />
      </div>
    </>
  );
}
