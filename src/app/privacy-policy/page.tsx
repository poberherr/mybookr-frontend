import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Our</p>
        <div className="prose">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p>
            Welcome to [Company Name]. We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about our policy, or our practices with
            regards to your personal information, please contact us at [Contact
            Email].
          </p>
          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>
            We collect personal information that you voluntarily provide to us
            when registering at the website, expressing an interest in obtaining
            information about us or our products and services, when
            participating in activities on the website or otherwise contacting
            us.
          </p>
          <h3>Automatically Collected Information</h3>
          <p>
            We automatically collect certain information when you visit, use or
            navigate the website. This information does not reveal your specific
            identity but may include device and usage information, such as your
            IP address, browser and device characteristics, operating system,
            language preferences, referring URLs, device name, country,
            location, information about how and when you use our website and
            other technical information. This information is primarily needed to
            maintain the security and operation of our website, and for our
            internal analytics and reporting purposes.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on
            next to each purpose listed below.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your orders.</li>
            <li>To post testimonials.</li>
            <li>Request feedback.</li>
            <li>To protect our services.</li>
            <li>To enforce our terms, conditions and policies.</li>
            <li>To respond to legal requests and prevent harm.</li>
            <li>For other business purposes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
