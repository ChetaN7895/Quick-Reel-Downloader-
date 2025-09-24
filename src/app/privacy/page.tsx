export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-12 shadow-md">
        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-purple-600  ">
          Privacy Policy
        </h1>
        <p className="mb-10 text-gray-600 text-3xl ">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-800 text-2xl ">
            Please read our privacy policy carefully to understand how we
            collect, use, protect, or otherwise handle your Personally
            Identifiable Information in accordance with our website{" "}
            <strong>https://quickreeldw.netlify.app/</strong>.
          </p>
          <br></br>
          {/* What personal info */}
          <h2 className="text-purple-700 text-3xl">
            What personal information do we collect?
          </h2>
          <br></br>
          <p className="text-gray-800 text-2xl">
            We do not require account signup and do not collect sensitive
            personal information like names, emails, or passwords. However, we
            may collect non-identifiable information such as IP address, browser
            type, and cookies for analytics and advertising purposes.
          </p>
          <br></br>
          {/* When info collected */}
          <h2 className="text-purple-600 text-3xl ">When do we collect information?</h2>
          <br></br>
          <p className="text-gray-800 text-2xl">
            We collect information only when you voluntarily fill out a form,
            use our contact page, or interact with our website.
          </p>
          <br></br>
          {/* Log files */}
          <h2 className="text-purple-600 text-3xl ">Log Files</h2>
          <br></br>
          <p className="text-gray-800 text-2xl ">
            Like most websites, we use log files. These files log visitors when
            they visit websites. The information inside the log files includes
            IP addresses, browser type, Internet Service Provider (ISP),
            date/time stamp, referring/exit pages, and possibly the number of
            clicks. This information is not linked to anything personally
            identifiable and is used only for analyzing trends and site
            administration.
          </p>
          <br></br>
          {/* Use of info */}
          <h2 className="text-purple-600 text-3xl ">
            How do we use your information?
          </h2>{" "}
          <br></br>
          <ul className="list-disc pl-6 text-gray-800 text-2xl">
            <li>To improve user experience on our site.</li>
            <li>To show relevant advertisements.</li>
            <li>To respond to customer requests via the contact page.</li>
            <li>To analyze site usage and improve functionality.</li>
          </ul>
          <br></br>
          {/* Cookies */}
          <h2 className="text-purple-600 text-3xl ">Do we use cookies?</h2>
          <br></br>
          <p className="text-gray-800 text-2xl">
            Yes, we use cookies to understand and save preferences for future
            visits. Google, as a third-party vendor, uses cookies to serve ads
            on our site. Google’s use of the DART cookie enables it to serve ads
            to our users based on their visit to our site and other sites on the
            Internet. Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              className="text-blue-600 text-3xl  underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <br></br>
          <h2 className="mt-4  font-semibold text-purple-600 text-3xl ">
            Cookies
          </h2>{" "}
          <br></br>
          <p className="text-gray-600 text-3xl ">
            We may use cookies to enhance your browsing experience. You can
            disable cookies in your browser settings.
          </p>{" "}
          <br></br>
          {/* Third-party ads */}
          <h2 className="text-purple-600 text-3xl ">Third-party Advertisements</h2>
          <br></br>
          <p className="text-gray-800 text-2xl">
            We may allow third-party ad networks to display ads on our website.
            These third parties may use technologies like cookies, JavaScript,
            or Web Beacons to measure the effectiveness of their ads and to
            personalize the advertising content you see. We have no control over
            these cookies used by third-party advertisers.
          </p>{" "}
          <br></br>
          {/* Third-party links */}
          <h2 className="text-purple-600 text-3xl ">Third-party Links</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            Occasionally, we may include or offer third-party products or
            services on our website. These third-party sites have separate and
            independent privacy policies. Therefore, we have no responsibility
            or liability for the content and activities of these linked sites.
          </p>{" "}
          <br></br>
          {/* GDPR & CCPA */}
          <h2 className="text-purple-600 text-3xl ">GDPR & CCPA Rights</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            As a user, you are entitled to the following rights:
          </p>{" "}
          <br></br>
          <ul className="list-disc pl-6 text-gray-800 text-2xl">
            <li>Right to access your personal data.</li>
            <li>Right to request correction of inaccurate data.</li>
            <li>Right to request deletion of your data.</li>
            <li>Right to object to or restrict data processing.</li>
            <li>Right to data portability.</li>
          </ul>{" "}
          <br></br>
          {/* Children's privacy */}
          <h2 className="text-purple-600 text-3xl ">Children’s Privacy</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            We do not knowingly collect personal information from children under
            the age of 13. If you believe your child has provided such
            information, please contact us immediately and we will take steps to
            remove it from our servers.
          </p>{" "}
          <br></br>
          {/* Security */}
          <h2 className="text-purple-600 text-3xl ">Security of Your Data</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            We implement reasonable security measures to protect your data.
            However, no method of transmission over the Internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>{" "}
          <br></br>
          {/* Consent */}
          <h2 className="text-purple-600 text-3xl ">Your Consent</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>{" "}
          <br></br>
          {/* Disclaimer */}
          <h2 className="text-purple-600 text-3xl ">Disclaimer</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            All content provided on this website is for informational purposes
            only. We are not responsible for any misuse of the tools or content
            provided. Downloaded content must comply with Instagram’s copyright
            policies and relevant laws.
          </p>{" "}
          <br></br>
          {/* Changes */}
          <h2 className="text-purple-600 text-3xl ">Changes to This Policy</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with an updated date.
          </p>{" "}
          <br></br>
          {/* Contact */}
          <h2 className="text-purple-600 text-3xl ">Contact Us</h2> <br></br>
          <p className="text-gray-800 text-2xl">
            If you have any questions about this Privacy Policy, you can contact
            us via our{" "}
            <a
              href="/contact"
              className="text-blue-600 text-3xl  underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Page
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:chetansolanki0003@gmail.com"
              className="text-blue-600 text-3xl  underline"
            >
              support@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
