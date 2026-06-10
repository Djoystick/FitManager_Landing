import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center p-6 mt-20" style={{ background: "var(--background)" }}>
      <div className="w-full max-w-3xl z-10 flex flex-col pt-10 pb-20">
        <Link href="/" className="hover:text-white font-medium text-sm mb-8 flex items-center gap-2 transition-colors w-fit" style={{ color: "var(--color-neon-violet)" }}>
          ← Back
        </Link>
        <h1 className="text-3xl font-black text-white mb-8 tracking-wide">
          Privacy Policy
        </h1>
        <div className="bg-black/40 backdrop-blur-md border border-gray-800 p-6 md:p-8 rounded-2xl flex flex-col gap-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <div className="text-center pb-4 border-b border-gray-800/50">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Effective Date: June 10, 2026</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: "var(--color-neon-violet)" }}>1.</span> Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Telegram Data:</strong> We receive your Telegram ID, username, and language preference via the Telegram WebApp SDK to uniquely identify your franchise.</li>
              <li><strong>Fitness Data (Google Fit):</strong> If you choose to connect Google Fit via OAuth, we collect your step counts and active minutes to convert them into in-game Sweat Points.</li>
              <li><strong>Wallet Data:</strong> If you connect a TON wallet, we store your public address for marketplace transactions and season rewards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: "var(--color-neon-violet)" }}>2.</span> How We Use Your Data
            </h2>
            <p>
              Your physical activity data is used <strong>exclusively</strong> for calculating in-game rewards. We do not sell, rent, or share your fitness data with third-party advertising platforms. Your Telegram ID is used to authenticate you without passwords.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: "var(--color-neon-violet)" }}>3.</span> Google API Services User Data Policy
            </h2>
            <p>
              FitManager's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" className="text-blue-400 hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: "var(--color-neon-violet)" }}>4.</span> Data Retention & Deletion
            </h2>
            <p>
              You can request full deletion of your franchise and associated data via the in-game "Resign as Manager" button. This action is irreversible and immediately wipes your Telegram link, fitness history, and squad from our active database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span style={{ color: "var(--color-neon-violet)" }}>5.</span> Contact Us
            </h2>
            <p>
              For privacy-related inquiries, please contact our support team via our official Telegram channel or email <a href="mailto:privacy@fitmanager.web3" className="text-blue-400 hover:underline">privacy@fitmanager.web3</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
