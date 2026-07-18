const donationUrl =
  "https://checkout.square.site/merchant/8ZWJ066MCV5W6/checkout/6WE6LGBU3C7O74XS7YGBGSL5";

export default function DonateButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={donationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 font-black text-blue-950 transition hover:bg-yellow-400 ${className}`}
    >
      Get Involved and Donate
    </a>
  );
}
