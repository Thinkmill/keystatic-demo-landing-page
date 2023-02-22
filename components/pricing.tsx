const plans = [
  {
    name: "Starter",
    features: [
      "Multi-layered encryption",
      "Pay later, interest-free",
      "$1,000 credit limit",
    ],
    upgradeFeatures: [],
  },
  {
    name: "Everyday",
    monthlyPrice: 15,
    features: ["Multi-layered encryption", "Pay later, interest-free"],
    upgradeFeatures: ["Approval in minutes", "$5,000 credit limit"],
  },
  {
    name: "Pro",
    monthlyPrice: 30,
    features: ["Multi-layered encryption", "Pay later, interest-free"],
    upgradeFeatures: [
      "Approval in minutes",
      "Flexible repayments",
      "Product protection",
      "Unlimited credit limit",
    ],
  },
];

function cx(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <section id="pricing" className="isolate pb-20 md:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="mt-24 max-w-2xl text-4xl font-bold sm:text-6xl md:mt-40">
          Choose the plan that’s right for you.
        </h2>
        <p className="mt-6 text-xl sm:mt-8">No commitment. Cancel anytime.</p>

        <ul className="-mx-6 mt-14 flex snap-x snap-mandatory scroll-m-6 scroll-p-6 items-start gap-4 overflow-x-auto px-6 sm:gap-6 lg:grid lg:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className="w-[100%] max-w-[540px] shrink-0 snap-start overflow-hidden rounded-3xl align-top lg:w-full"
            >
              <div className="bg-white/75 p-6 backdrop-blur-md sm:p-10">
                <p>{plan.name}</p>
                {/* Plan price */}
                <p className="mt-4 sm:mt-6">
                  {plan?.monthlyPrice ? (
                    <span className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold leading-7">
                        {plan.monthlyPrice}
                      </span>
                      <span>/</span>
                      <span>mth</span>
                    </span>
                  ) : (
                    <span className="text-2xl font-bold leading-7">Free</span>
                  )}
                </p>
                {/* Plan description */}
                <p className="mt-2">
                  You just want to give it a try, with no upfront commitment.
                </p>

                <a
                  href="#"
                  className={cx(
                    "mt-4 inline-block rounded-full border border-black px-5 py-2.5 font-medium sm:mt-6",

                    plan.name === "Pro"
                      ? "hover:bg-blob-3/30"
                      : "hover:bg-blob-2/30"
                  )}
                >
                  {plan?.monthlyPrice ? "Subscribe" : "Get started"}
                </a>
              </div>
              <div
                className={cx(
                  "p-6 sm:p-10",
                  plan.name === "Pro" ? "bg-blob-3/60" : "bg-blob-2/60"
                )}
              >
                <ul className="space-y-3 sm:space-y-5">
                  {/* Base features */}
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 shrink-0"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span>{feature}</span>
                    </li>
                  ))}
                  {/* Upgrade features */}
                  {plan.upgradeFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
