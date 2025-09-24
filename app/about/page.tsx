export default function AboutPage() {
  return (
    <main className="prose prose-slate mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-6 text-4xl font-bold text-blue-700">
        About QuickReelDW
      </h1>

      {/* Intro */}
      <p className="text-2xl">
        Welcome to <strong>QuickReelDW</strong> — your simple and secure
        solution for downloading Instagram Reels and short-form videos for
        personal use. We built this platform to make it easy for users to save
        the moments they love, while always respecting creators’ rights and
        platform policies.
      </p>

      {/* Mission */}
      <h2 className="bg-gray-400 text-3xl">🎯 Our Mission</h2>
      <p className="text-2xl">
        At QuickReelDW, our mission is clear: to help people preserve memories
        and useful content in the most seamless, privacy-focused way possible.
        We believe in open access to knowledge and entertainment, but always in
        a way that respects intellectual property and promotes safe usage.
      </p>

      {/* How It Works */}
      <h2 className="bg-gray-400 text-3xl">⚙️ How It Works</h2>
      <p className="text-2xl">
        Using QuickReelDW is easy. Simply copy the link of the Instagram Reel
        you’d like to save, paste it into our downloader box, and click
        download. Within seconds, our servers fetch the file and provide you
        with a secure download link.
      </p>
      <ul className="list-disc pl-6 text-2xl">
        <li>100% free to use</li>
        <li>No hidden charges or subscriptions</li>
        <li>Privacy-focused — no login required</li>
        <li>Optimized for speed and user experience</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="bg-gray-400 text-3xl">💡 Why Choose Us?</h2>
      <p className="text-2xl">
        Unlike many other downloaders online, QuickReelDW was designed with
        simplicity, trust, and safety in mind. Our platform is not overloaded
        with ads, and we actively work to provide helpful resources for safe and
        ethical usage of downloaded content.
      </p>
      <ul className="list-disc pl-6 text-2xl">
        <li>User-friendly interface</li>
        <li>Fast and secure downloads</li>
        <li>Supports multiple device types (mobile & desktop)</li>
        <li>Regular updates with new features and improvements</li>
      </ul>

      {/* Our Values */}
      <h2 className="bg-gray-400 text-3xl">🌱 Our Values</h2>
      <p className="text-2xl">
        QuickReelDW is built around three main values: <strong>trust</strong>,{" "}
        <strong>education</strong>, and <strong>innovation</strong>. We believe
        that tools like ours should empower users while also educating them
        about copyright, digital rights, and ethical content use.
      </p>

      {/* Future Vision */}
      <h2 className="bg-gray-400 text-3xl">🚀 Our Future Plans</h2>
      <p className="text-2xl">
        We’re not stopping at Instagram Reels. Our team is working on expanding
        QuickReelDW to support other popular platforms, video formats, and even
        tools like converters and tutorials to help you get the most out of your
        content consumption experience.
      </p>

      {/* Disclaimer */}
      <h2 className="bg-gray-400 text-3xl">⚖️ Disclaimer</h2>
      <p className="text-2xl">
        QuickReelDW is intended for <strong>personal use only</strong>. Please
        respect Instagram’s terms of service and copyright rules when
        downloading content. We do not encourage or support the redistribution
        or re-uploading of copyrighted videos. All rights remain with their
        respective creators.
      </p>

      {/* Get in Touch */}
      <h2 className="text-3xl bg-gray-400">🤝 Get in Touch</h2>
      <p className="text-2xl">
        Have questions, suggestions, or feedback? We’d love to hear from you.
        Please visit our <a href="/contact">Contact Page</a> or email us at{" "}
        <a
          href="mailto:chetansolanki0003@gmail.com.com"
          className="text-blue-600 hover:underline"
        >
          support@quickreeldw.com
        </a>
        .
      </p>
    </main>
  );
}
