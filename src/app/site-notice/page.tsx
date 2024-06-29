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
            P.A.M.M.M VENTURES LIMITED
            <br />
            APEC PLAZA
            <br />
            49 HOI YUEN ROAD KWUN TONG
            <br />
            Hong Kong
          </p>

          <p> Business Registration Number: 74948082</p>

          <h2>Contact</h2>
          <ul>
            <li>
              Phone: <a href="tel:+6282147456742">+62 82 147 4567 42</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/6282147456742?text=${encodeURI("Hey mybookr.io team!")}`}
                target="_blank"
              >
                +62 82 147 4567 42
              </a>
            </li>
            <li>
              E-mail: <a href="mailto:info@mybookr.io">info@mybookr.io</a>
            </li>
          </ul>

          <h2>Person responsible for editorial</h2>
          <p>Sebastian Melz</p>

          <h2>
            Dispute resolution proceedings in front of a consumer arbitration
            board
          </h2>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings in front of a consumer arbitration board.
          </p>
        </div>
      </div>
    </div>
  );
}
