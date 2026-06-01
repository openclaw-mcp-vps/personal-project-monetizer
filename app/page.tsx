export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Indie Makers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Personal Side Projects<br />
          <span className="text-[#58a6ff]">into Revenue Streams</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Submit your GitHub repo, URL, or description. Get AI-powered monetization strategies with step-by-step implementation guides tailored to your project and skills.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Monetizing — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* How it works */}
      <section className="mb-24 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "01", title: "Submit Your Project", desc: "Paste a GitHub URL, live URL, or plain description of what you built." },
          { step: "02", title: "AI Analyzes Potential", desc: "We evaluate market fit, audience, and monetization angles specific to your project." },
          { step: "03", title: "Get Your Roadmap", desc: "Receive ranked strategies with actionable implementation guides you can start today." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] font-mono text-sm font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <h2 className="text-white text-2xl font-bold mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to monetize</p>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-xs mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited project analyses",
              "10+ monetization strategies per project",
              "Step-by-step implementation guides",
              "Market size & revenue estimates",
              "Competitor landscape overview",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-white text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What kinds of projects can I analyze?",
              a: "Any personal project — open-source tools, SaaS prototypes, browser extensions, mobile apps, scripts, creative tools, or content sites. If you built it, we can analyze it."
            },
            {
              q: "How is this different from generic business advice?",
              a: "Our AI analyzes your specific project's features, tech stack, and target audience to generate monetization strategies that actually fit — not generic advice that applies to everyone and no one."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Personal Project Monetizer. Built for indie makers.
      </footer>
    </main>
  );
}
