import Link from "next/link";

const AlertBanner: React.FC = () => {
  return (
    <div className="w-full bg-banner text-navy-900 py-2 px-4 text-center">
      <div className="container mx-auto">
        <span className="font-medium">Eagle AI Labs:</span>{" "}
        {
          "Partnership and Co-Ownership of a U.S. Regulated Crypto Hedgefund. This enables us to launch a new product, TradeDividends.  "
        }{" "}
        <Link href={"/learn-more"} className="font-medium underline">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AlertBanner;
