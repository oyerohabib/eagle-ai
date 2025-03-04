"use client";
import { useState } from "react";
import CryptoWaitlistBanner from "./RegisterCard";
import Key from "@/app/assets/key.svg";
import Badge from "@/app/assets/badge.svg";
import Input from "./Input";
import Button from "./Button";

const RegistrationSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    telegram: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://dummy-api.eagleairesearch.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form. Please try again.");
      }

      setSuccess("Registration successful! Thank you for signing up.");
      setTimeout(() => setSuccess(""), 5000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
      // Clear form fields
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        telegram: "",
      });
    }
  };

  return (
    <section className="lg:py-20 py-16">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="lg:text-5xl text-4xl leading-12 lg:leading-[72px] mb-4 text-white font-poppins">
          Limited Availability - Register now to join wait List
        </h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/5 space-y-6">
            {/* Cards banner */}
            <CryptoWaitlistBanner
              src={Key}
              title="Limited Access Available"
              description="Be among the first to access institutional-grade crypto investment opportunities. Our exclusive waitlist is now open for:"
              waitlistDeadline="January 31, 2025"
              items={["Early Community Members", "Active $EAI Holders"]}
            />

            <CryptoWaitlistBanner
              src={Badge}
              title="Benefits of signing up early"
              items={[
                "Priority access when the fund launches",
                "Early information about TradeDividends",
                "Exclusive insights from our institutional trading team",
                "Special allocation opportunities",
              ]}
            />
          </div>

          <div className="w-full lg:w-2/5">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="telegram"
                  placeholder="Telegram User"
                  type="text"
                  value={formData.telegram}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  text={
                    loading ? "Submitting..." : "Register your interest now"
                  }
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
