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
            <strong>Company Name:</strong> PT NUSA AKSHITA KENCANA
          </p>
          <p>
            <strong>Address:</strong>
            Legalyn Indonesia, Kawasan Rasuna Epicentrum, Epiwalk Office Suite
            Lt. 5 Unit A501, Jl. HR Rasuna Said, Karet Kuningan
            Village/Subdistrict, Setiabudi District, South Jakarta
            Administrative City, DKI Jakarta Province, Postal Code: 12940
          </p>
          <ul>
            <li>
              <strong>Establishment Date:</strong> 28 June 2024
            </li>
            <li>
              <strong>Registration Number (NIB):</strong> 2806240062369
            </li>
            <li>
              <strong>Ministry Approval Number:</strong>{" "}
              AHU-036745.AH.01.30.Tahun 2024
            </li>
            <li>
              <strong>Standard Certificate Number:</strong> 28062400623690001
            </li>
            <li>
              <strong>Approval Date:</strong> 28 June 2024
            </li>
          </ul>
          <h2 id="tax-information-">Tax Information:</h2>
          <ul>
            <li>
              <strong>Tax Registry Number (NPWP):</strong> 19.687.047.1-011.000
            </li>
            <li>
              <strong>Tax Registry Date:</strong> 28 June 2024
            </li>
          </ul>
          <h2 id="contact-information-">Contact Information:</h2>
          <ul>
            <li>
              <strong>Email:</strong> info@mybookr.io
            </li>
            <li>
              <strong>Telephone:</strong> +62 8969 1882 211
            </li>
          </ul>
          <h2 id="disclaimer-">Disclaimer:</h2>
          <p>
            PT NUSA AKSHITA KENCANA (&quot;MyBookr.io&quot;) offers booking
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
