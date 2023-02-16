const plans = [
  { name: "plan 1" },
  { name: "plan 2", monthlyPrice: 15 },
  { name: "plan 3", monthlyPrice: 30 },
];

export default function Pricing() {
  return (
    <section id="pricing" className="isolate py-32">
      <div className="sm-px-6 mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="max-w-2xl text-6xl font-bold">
          Choose the plan that’s right for you.
        </h2>
        <p className="mt-8 text-xl">No commitment. Cancel anytime.</p>

        <ul className="mt-14 grid grid-cols-3 gap-6">
          {plans.map((plan) => (
            <li key={plan.name} className="rounded-3xl bg-white p-10">
              <p>{plan.name}</p>
              {/* Plan price */}
              <p className="mt-8">
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
                className="mt-6 inline-block rounded-full border border-black px-4 py-2.5 font-medium hover:bg-gray-200"
              >
                {plan?.monthlyPrice ? "Subscribe" : "Get started"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
