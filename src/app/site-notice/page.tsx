import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <div className="prose">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Site Notice (Impressum)
          </h1>
          <p>
            <strong>Company Name:</strong> MYBOOKR OPERATIONS INDONESIA
          </p>
          <p>
            <strong>Address:</strong>
            Jl. Raya Semat No. 17b, Tibubeennag, Kuta Utara, KABUPATEN BADUNG,
            Bali, Indonesia
          </p>
          <h2 id="legal-entity-information-">Legal Entity Information:</h2>
          <ul>
            <li>
              <strong>Establishment Date:</strong> 31 May 2024
            </li>
            <li>
              <strong>Registration Number:</strong> 4024053151108515
            </li>
            <li>
              <strong>Deed of Establishment Number:</strong> 264
            </li>
            <li>
              <strong>Deed Date:</strong> 29 May 2024
            </li>
            <li>
              <strong>Ministry Approval Number:</strong>{" "}
              AHU-0038985.AH.01.01.TAHUN 2024
            </li>
            <li>
              <strong>Approval Date:</strong> 31 May 2024
            </li>
          </ul>
          <h2 id="tax-information-">Tax Information:</h2>
          <ul>
            <li>
              <strong>Tax Registry Number (NPWP):</strong> 20.530.205.2-906.000
            </li>
            <li>
              <strong>Tax Registry Date:</strong> 31 May 2024
            </li>
          </ul>
          <h2 id="contact-information-">Contact Information:</h2>
          <ul>
            <li>
              <strong>Email:</strong> info@mybookr.io
            </li>
            <li>
              <strong>Telephone:</strong> +62 851-9005-3651
            </li>
          </ul>
          <h2 id="disclaimer-">Disclaimer:</h2>
          <p>
            MYBOOKR OPERATIONS INDONESIA (&quot;MyBookr.io&quot;) offers booking
            software services and acts as an agent on behalf of clients in
            various industries including hotel room bookings, villa bookings,
            yacht bookings, diving school bookings, retreat bookings, and other
            activity bookings. MyBookr.io is not the operator of these services
            and is not responsible for the quality or availability of the
            services themselves. Operators are responsible for ensuring that all
            offerings, listings, and activities or rooms are available and meet
            the presented quality standards.
          </p>
          <p>
            For any questions or concerns, please contact us at info@mybookr.io.
          </p>
        </div>
      </div>
    </div>
  );
}
