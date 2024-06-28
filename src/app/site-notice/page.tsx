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
            Site Notice (Impressum)
          </h1>

          <h2>Information according to § 5 TMG</h2>
          <p>
            Company Name
            <br />
            Street Address
            <br />
            Postal Code City
          </p>

          <h2>Represented by:</h2>
          <p>Name of the Authorized Representative</p>

          <h2>Contact:</h2>
          <p>
            Phone: Phone Number
            <br />
            Email: Email Address
          </p>

          <h2>Register Entry:</h2>
          <p>
            Entry in the commercial register.
            <br />
            Register Court: Local Court
            <br />
            Register Number: HRB 12345
          </p>

          <h2>VAT ID:</h2>
          <p>
            Value Added Tax Identification Number according to §27 a VAT Act:
            DE123456789
          </p>

          <h2>Responsible for content according to § 55 Abs. 2 RStV:</h2>
          <p>
            Name of the Person Responsible
            <br />
            Address of the Person Responsible
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>

          <h2>Disclaimer:</h2>
          <h2>Liability for Content</h2>
          <p>
            As service providers, we are liable for own contents of these
            websites according to § 7, paragraph 1 of TMG (German Telemedia
            Act). However, according to §§ 8 to 10 TMG, service providers are
            not obligated to permanently monitor submitted or stored information
            or to search for evidences that indicate illegal activities.
          </p>

          <p>
            Legal obligations to removing information or to blocking the use of
            information remain unchallenged. In this case, liability is only
            possible at the time of knowledge about a specific violation of law.
            Illegal contents will be removed immediately at the time we get
            knowledge of them.
          </p>
        </div>
      </div>
    </div>
  );
}
