"use client";

import { motion, px } from "framer-motion";
import { Copy, Link as LinkIcon, Download } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

// ✅ Import a clean modern font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function DownloadSteps() {
  const steps = [
    {
      icon: <Copy className="h-10 w-10 animate-bounce text-purple-600" />,
      img: "/images/step1.png",
      title: "Copy Instagram Link",
      desc: "Open Instagram, choose the Reel, Post, or Video you want, and copy its link and Paste here.",
    },
    {
      icon: <LinkIcon className="h-50 w-50 animate-pulse text-purple-600" />,
      img: "/images/step2.png",
      title: "Paste the Link",
      desc: "After Paste the copied link into our input box above they will redirect to video and then download.",
    },
    {
      // ✅ Bold + animated download icon
      icon: (
        <Download className="h-10 w-10 animate-spin font-bold text-purple-600" />
      ),
      img: "/images/demo.gif",
      title: "Click Download",
      desc: "Full Guide Step By Step Download Your Reel in Simple Steps.",
    },
  ];

  return (
    <section className={`bg-white py-16 ${poppins.className}`}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900">
          How to Download Reels?
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-gray-50 p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>

              {/* ✅ Responsive image with fixed height */}
              <div className="relative mb-4 h-64 w-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="rounded-md object-fill shadow-md"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto max-w-4xl px-6 py-10 text-gray-600">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-blue-600">
              Quick Reel Downloader
            </h1>
            <p className="mt-2 text-lg">
              An online free and fast tool to download Instagram Reels videos or
              save them to your device.
            </p>
          </header>

          {/* Intro */}
          <section className="mb-10">
            <p>
              You can save any Instagram Reels videos to your phone or computer
              and view them offline anytime.
            </p>
            <p className="mt-2 font-semibold">
              Here’s a quick and easy way to do it:
            </p>
          </section>

          {/* Steps */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">
              Steps to Download Reels From Instagram
            </h2>
            <ol className="list-inside list-decimal space-y-2">
              <li>Choose the Reels video that you want to download.</li>{" "}
              <br></br>
              <li>
                Copy URL/Link of the video.
                <div className="relative mx-auto h-[300px] w-[400px]">
                  <Image
                    src="/images/copylink.jpg"
                    alt="Download Reels Video"
                    fill
                    className="object-contain"
                  />
                </div>
              </li>
              <br></br>
              <li>
                Open website:{" "}
                <a
                  href="https://Quickreel.app.netlify"
                  className="text-blue-600 underline"
                >
                  Quick Reel Downloader
                </a>
              </li>{" "}
              <br></br>
              <li>
                Paste URL/Link into the input box. <br></br>
                <div className="flex justify-center">
                  <Image
                    className="rounded-xl object-cover shadow-md"
                    src="/images/step1.png"
                    alt="paste Video"
                    width={600} // Set appropriate width
                    height={600}
                  />
                </div>{" "}
                <br></br>
              </li>
              <li>
                {`Click on the "Download Video" button to save the file to your device.`}
                <br></br>
                <div className="flex justify-center">
                  <br></br>
                  <Image
                    className="h-400 w-64 rounded-xl object-cover shadow-md"
                    src="/images/step2.png"
                    alt="dw Video"
                    width={500}
                    height={500}
                  />
                </div>
              </li>
            </ol>
          </section>

          {/* How it works */}
          <main className="mx-auto max-w-3xl px-4">
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">
                How Instagram Downloader Works?
              </h2>
              <p>
                An Instagram Reels downloader is a tool that allows you to
                download Reels, videos, and photos from Instagram without
                watermark by simply entering the URL/Link of the content you
                want to download.
              </p>
            </section>

            {/* Key Features */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
              <ul className="list-inside list-decimal space-y-3">
                <li>
                  <b>Original quality without watermark or logo.</b>
                </li>
                <li className="text-center">
                  Download Reels to gallery on any device (mobile, iPhone, iPad,
                  PC, tablet).
                </li>
                <li>
                  <b>Works online in browser—no app or software needed.</b>
                </li>
                <li>Always free (ads support service maintenance).</li>
                <li><b>No login or personal details required.</b></li>
                <li>Unlimited downloads, lifetime free service.</li>
              </ul>
            </section>

            {/* Why Section */}
            <section className="mb-10">
              <h2 className="mb-4 max-w-3xl text-2xl font-semibold">
                Why Quick Reel downloader?
              </h2>

              <p>
                Our Instagram Reels viewer and downloader allows users to
                <br></br>
                download Instagram Reels video fast and free. It only takes
                <br></br>a few seconds to fetch a video from the link and
                directly<br></br>
                download it into your device’s gallery.<br></br>
              </p>
            </section>

            {/* How to Download Section */}
            <section className="mb-10">
              <h2 className="mb-4 text-2xl font-semibold">
                How to download Reels video online from Instagram?
              </h2>
              <p className="mx-auto text-center">
                Watching Reels is easy, but saving them is challenging since
                Instagram doesn’t allow direct downloads. Fastvideosave.net
                helps you download Reels in high-quality MP4
                formats online.
              </p>
              <p className="mx-auto mt-4 font-medium text-red-600 ">
                Note: Download content only if you have permission from the
                owner. Unauthorized downloading may violate Instagram’s terms of
                service.
              </p>
            </section>
          </main>

          {/* Legal */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">DMCA</h2>
            <p>
              Quickreel.netlify.app complies with 17 U.S.C. § 512 and the
              Digital Millennium Copyright Act (DMCA). We respond to
              infringement notices and take appropriate actions. If your
              copyrighted material has been posted and you want it removed,
              please contact us.
            </p>
          </section>

          {/* Footer */}
          <footer className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
            <nav className="mb-2 space-x-4">
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </nav>
            <p>
              Quickreeldw.netlify.app is not affiliated with Instagram™. All
              media is delivered from the original source and belongs to its
              respective owners.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
