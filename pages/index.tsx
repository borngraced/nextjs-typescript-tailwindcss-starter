import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Head from "next/head";
import Greeting from "../components/greeting";
import axios from "axios";
import PageHEader from "../components/header";
import StatisticSection from "../components/statistics";
import StakeSection from "../components/stake";
import FaqSection from "../components/faqs";
import PageFooter from "../components/footer";

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
        <title>Nextjs, Typescript && Tailwind Starter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div className="block min-h-screen ">
        <div className="flex h-full w-full justify-center items-center align-center">
          <PageHEader />
          <main className="ContainerStyles__ContainerStyle-sc-s3zvez-0 bwaaEj sc-ac9b0f6d-0 hvNPJG">
            <StakeSection />
            <StatisticSection />
            <FaqSection />
          </main>
          <PageFooter />
        </div>
      </div>
    </>
  );
}
