export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-6 text-4xl font-bold text-blue-700">
        About Our Instagram Reel Dw
      </h1>
      <p className="text-white700 mb-6">
        Our mission is to make it simple to save your favorite Instagram content
        for personal use. We believe memories should be preserved without
        hassle.
      </p>
      <h2 className="mb-3 text-2xl font-semibold text-blue-600">
        How it works
      </h2>
      <p className="text-white-700 mb-6">
        Copy the Instagram URL, paste it in the box, and click download. Our
        servers fetch the file directly from Instagram and provide you with a
        download link.
        <ul className="mb-4 list-disc pl-6">
          <li>100% Free to use</li>
          <li>No hidden charges</li>
          <li>Privacy-focused</li>
          <li>Optimized for speed & user experience</li>
        </ul>
      </p>
      <h2 className="mb-3 text-2xl font-semibold text-blue-500">Disclaimer</h2>
      <p className="text-white-700">
        This tool is intended for personal use only. Respect Instagram’s terms
        and copyrights when downloading content.
      </p>

      <p>
        As we grow, we’ll continue to add new tools and resources – including
        video converters, tutorials, and more.
      </p>
    </div>
  );
}
