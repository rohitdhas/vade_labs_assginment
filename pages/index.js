/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../components/navbar";
import CTA from "../components/cta";
import Footer from "../components/footer";
import Image from "next/dist/client/image";
import hero_img from "../public/hero_banner.svg";
import sep_line from "../public/sep_line.svg";
import api_map from "../public/api_map.svg";
import integration_scr from "../public/integration_scr.svg";
import configure_connect_src from "../public/configure_connect_scr.svg";
import test_build_deploy_src from "../public/test_build_deploy_scr.svg";
import { useState } from "react";

export default function Home() {
  const [ctaConfirm, setCtaConfirm] = useState(false);

  function submitEmail(event, email) {
    event.preventDefault();
    if (!email) return;
    setCtaConfirm(true);
  }

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Vade Labs Assignment</title>
        <meta name="description" content="Integrate API's in Minutes!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="pt-20">
        {/* Home Section */}
        <div className="polka-dot flex align items-center h-screen">
          <div className="px-24 lg:flex-1">
            <div>
              <h1 className="text-5xl leading-tight font-bold text-slate-700">
                <div>Integrate APIs</div>
                <div>in Minutes</div>
              </h1>
              <div className="font-bold my-6">
                <p>Get ridiculously creative with your products</p>
                <p>and let us do the hard work for you!</p>
              </div>
              <CTA isConfirm={ctaConfirm} submitEmail={submitEmail} />
            </div>
          </div>
          <div className="ml-auto cursor-pointer">
            <Image src={hero_img} alt="hero image" height={500} />
          </div>
        </div>
      </main>
      <section className="mt-8 shadow-2xl shadow-black p-20 rounded-t-5xl">
        {/* Second Section */}
        <div className="flex flex-col align items-center">
          <p className="text-center font-semibold my-10 w-3/5 leading-relaxed">
            We understand your needs{" "}
            <span className="bg-yellow-400">
              to build integrated applications
            </span>{" "}
            in today’s hyper-connected world.
            <span className="bg-yellow-400">Skip the hassle</span> to repeat a
            cumbersome process{" "}
            <span className="bg-yellow-400">for each unique integration.</span>{" "}
            Join us to build reliable connections with multiple providers and{" "}
            <span className="bg-yellow-400">cruise through backend</span> with
            ease.
          </p>
          <Image width={600} src={sep_line} alt="seprator" />
        </div>
        <div className="flex flex-col align items-center">
          <h2 id="skip_hussle" className="text-3xl my-10 font-bold text-center">
            <span className="text-blue-600">Skip</span> the hassle.
          </h2>
          <Image src={api_map} alt="api map" height={550} />
        </div>
        {/* Third Section */}
        <h2
          id="cruise_through_backend"
          className="text-3xl my-10 font-bold text-center"
        >
          <span className="text-blue-600">Cruise</span> through backend.
        </h2>
        <div>
          <div className="flex justify-evenly align items-center">
            <div className="w-2/6 relative">
              <span className="watermark absolute -left-12 -top-12 text-9xl font-semibold text-gray-200 -z-10">
                #1
              </span>
              <h1 className="font-semibold text-xl">
                <p>Choose from</p>
                <p>100+ integrations.</p>
              </h1>
              <p className="text-sm my-4 text-gray-600">
                Vade Studio is designed to work seamlessly with your favourite
                databases or web services.{" "}
                <span className="font-bold text-black">
                  Tweak a template or start from scratch.
                </span>
              </p>
              <p className="text-sm">
                We&apos;ve baked-in over 100 integrations directly into the
                platform, so you can integrate quickly and easily with other
                services, databases and applications out there.
              </p>
            </div>
            <Image
              src={integration_scr}
              alt="integration screenshot"
              width={500}
            />
          </div>
          <div className="flex justify-evenly align items-center">
            <Image
              src={configure_connect_src}
              alt="configure connect screenshot"
              width={500}
            />
            <div className="w-2/6 relative">
              <span className="watermark absolute -right-12 -top-12 text-9xl font-semibold text-gray-200 -z-10">
                #2
              </span>
              <h1 className="font-semibold text-xl">
                <p>Configure & Connect.</p>
              </h1>
              <p className="text-sm my-4 text-gray-600">
                <span>Get all of your </span>
                <span className="font-bold text-black">
                  data sources connected into a content mesh, in the same place,
                  in real time.
                </span>
              </p>
              <p className="text-sm text-gray-600">
                This provides you a unified API for data navigation across all
                your integrated services.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly align items-center">
            <div className="w-2/6 relative">
              <span className="watermark absolute -left-12 -top-12 text-9xl font-semibold text-gray-200 -z-10">
                #3
              </span>
              <h1 className="font-semibold text-xl">
                <p>Test. Build. Deploy.</p>
              </h1>
              <p className="text-sm my-4 text-gray-600">
                <span className="font-bold text-black">
                  Play around with the generated APIs.
                </span>
                Once configured – test, build and deploy the unified API into
                our secure and reliable infrastructure. Tweak a template or
                start from scratch.
              </p>
              <p className="text-sm text-gray-600">
                Run your queries in the editor and use our intuitive interface
                to{" "}
                <span className="font-bold text-black">
                  navigate through your data - clean, organised & at your
                  fingertips.
                </span>
              </p>
            </div>
            <Image
              src={test_build_deploy_src}
              alt="test build deploy screenshot"
              width={500}
            />
          </div>
        </div>
        <div className="text-center flex flex-col my-10 align items-center">
          <Image width={600} src={sep_line} alt="seprator" />
          <p className="text-center font-semibold w-3/5 my-10 leading-relaxed">
            We &apos;re building an ecosystem where{" "}
            <span className="bg-yellow-400">anyone can get inspired</span> with
            application templates, discover novel ideas from top builders, and
            <span className="bg-yellow-400">
              publish revolutionary applications
            </span>{" "}
            that could <span className="bg-yellow-400"> change the world.</span>
          </p>
          <CTA isConfirm={ctaConfirm} submitEmail={submitEmail} />
        </div>
        <div className="flex justify-end">
          <div className="text-center">
            <a href="#">
              <i className="bi bi-arrow-up-circle-fill p-2 rounded-full text-slate-700 text-3xl cursor-pointer hover:text-slate-600"></i>
            </a>
            <p className="text-slate-700 mt-2">Back to top</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
