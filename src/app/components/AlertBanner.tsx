import Link from "next/link";

const AlertBanner: React.FC = () => {
  return (
    <div className="container mx-auto rounded-xl mt-7 bg-banner py-3 px-4 text-center">
      <span className="font-medium">Eagle AI Labs:</span>{" "}
      {
        "Partnership and Co-Ownership of a U.S. Regulated Crypto Hedgefund. This enables us to launch a new product, TradeDividends.  "
      }{" "}
      <Link href={"/learn-more"} className="font-medium underline">
        Learn More
      </Link>
    </div>
  );
};

export default AlertBanner;
