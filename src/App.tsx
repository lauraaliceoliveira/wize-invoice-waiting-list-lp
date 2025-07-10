import React, { useState } from "react";
import {
  User,
  Building2,
  Landmark,
  Users,
  Briefcase,
  CheckCircle,
  Wrench,
  Bell,
  Gift,
  Zap,
  Shield,
  DollarSign,
  ChevronDown,
  Linkedin,
  Twitter,
  Youtube,
  FileText,
  Star,
  ArrowRight,
  Play,
  Check,
} from "lucide-react";

const userTypes = [
  { value: "individual", label: "Individual User / Freelancer", icon: User },
  { value: "smb", label: "Small or Medium Business", icon: Building2 },
  { value: "government", label: "Public Entity / Government", icon: Landmark },
  { value: "consultant", label: "Accounting / Tax Consultant", icon: Users },
  {
    value: "enterprise",
    label: "Enterprise / Multi-branch Company",
    icon: Briefcase,
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "✅ Early Access",
    description: "Get exclusive access before public launch",
  },
  {
    icon: Wrench,
    title: "🛠 Shape the Roadmap",
    description: "Help shape the roadmap with your feedback",
  },
  {
    icon: Bell,
    title: "📬 Product Updates",
    description: "Get product updates and private walkthrough invites",
  },
  {
    icon: Gift,
    title: "🎁 Special Offers",
    description: "Receive discounts or special founder plan",
  },
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Data Extraction",
    description:
      "Automatically extract and categorize invoice data with 99.9% accuracy using advanced machine learning algorithms.",
  },
  {
    icon: Shield,
    title: "Advanced Fraud Detection",
    description:
      "Detect suspicious patterns and prevent fraudulent invoices before they impact your business operations.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Reduce processing costs by up to 80% and eliminate manual errors that lead to financial losses.",
  },
];

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && userType) {
      console.log({ email, name, userType, company, country });
      setIsSubmitted(true);
    }
  };

  const selectedUserType = userTypes.find((type) => type.value === userType);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img
                src="/logo-wize-invoice.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <span className="text-2xl font-bold text-[#0C3951]">
                Invoice <span className="text-[#11A193]">AI</span>
              </span>
            </div>

            <div className="md:flex items-center space-x-4">
              <button
                onClick={scrollToWaitlist}
                className="py-2.5 px-4 sm:py-3 sm:px-6 bg-[#11A193] rounded-lg text-white font-semibold leading-normal hover:bg-[#0d8a7a] transition-colors text-sm sm:text-base"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#11A193]/10 rounded-full text-[#11A193] text-sm font-medium mb-12">
              <Star className="w-4 h-4 mr-2" />
              Join 10,000+ businesses automating their invoices
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0C3951] mb-8 leading-tight">
              Be First to Experience the{" "}
              <span className="text-[#11A193]">
                Smartest Way to Handle Invoices
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the waitlist and get early access to AI-powered invoice
              automation built for freelancers, businesses, and public
              institutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button
                onClick={scrollToWaitlist}
                className="bg-[#11A193] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0d8a7a] transition-colors flex items-center justify-center shadow-lg"
              >
                ✉️ Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#11A193] hover:text-[#11A193] transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Product Preview */}
            <div className="relative max-w-5xl mx-auto mb-20">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-600 font-medium">
                      Invoice AI Dashboard
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">invoice-ai.com</div>
                </div>
                <div className="p-12">
                  <div className="bg-gradient-to-br from-[#11A193]/10 to-[#0C3951]/10 rounded-2xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#11A193] rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <FileText className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-[#0C3951] mb-4">
                        Automate your invoices. Detect fraud. Save money.
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        AI-powered invoice automation in action
                      </p>
                      <div className="inline-flex items-center px-6 py-3 bg-[#11A193] text-white rounded-xl font-semibold">
                        <Zap className="w-5 h-5 mr-2" />
                        Processing 1,247 invoices...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C3951] mb-6">
              Why Join the Waitlist?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get exclusive early access and help shape the future of invoice
              automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#11A193]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#11A193]/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-[#11A193]" />
                </div>
                <h3 className="text-xl font-bold text-[#0C3951] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C3951] mb-6">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600">
              Get early access and exclusive benefits when Invoice AI launches.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-[#0C3951] mb-4">
                  You're on the list!
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  We'll notify you as soon as Invoice AI is ready for early
                  access.
                </p>
                <div className="inline-flex items-center px-8 py-4 bg-green-50 rounded-2xl text-green-700 font-semibold">
                  <Check className="w-5 h-5 mr-2" />
                  Welcome to the Invoice AI community
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-[#0C3951] mb-3">
                    Enter Your Details
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Help us tailor the experience for you
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0C3951] mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11A193] focus:border-[#11A193] transition-all text-lg"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0C3951] mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11A193] focus:border-[#11A193] transition-all text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0C3951] mb-3">
                    User Type *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11A193] focus:border-[#11A193] transition-all text-left flex items-center justify-between text-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {selectedUserType ? (
                          <>
                            <selectedUserType.icon className="w-5 h-5 text-[#11A193]" />
                            <span className="text-[#0C3951]">
                              {selectedUserType.label}
                            </span>
                          </>
                        ) : (
                          <span className="text-gray-500">
                            Select your user type
                          </span>
                        )}
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </button>

                    {showDropdown && (
                      <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                        {userTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => {
                              setUserType(type.value);
                              setShowDropdown(false);
                            }}
                            className="w-full px-6 py-4 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors first:rounded-t-xl last:rounded-b-xl"
                          >
                            <type.icon className="w-5 h-5 text-[#11A193]" />
                            <span className="text-[#0C3951]">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0C3951] mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11A193] focus:border-[#11A193] transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0C3951] mb-3">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Your country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#11A193] focus:border-[#11A193] transition-all text-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#11A193] text-white py-5 px-8 rounded-xl font-semibold text-lg hover:bg-[#0d8a7a] transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  Join the Waitlist
                </button>

                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  By joining, you agree to receive updates about Invoice AI.
                  Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C3951] mb-6">
              Smarter Invoice Processing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the AI-powered features that will transform your invoice
              workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#11A193]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#11A193]/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-[#11A193]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0C3951] mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C3951] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <span className="text-2xl font-bold">Invoice AI</span>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                The smartest way to handle invoices with AI-powered automation.
                Built for modern businesses who value efficiency and accuracy.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-8">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact link
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-8">Social Media</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-16 pt-12 text-center text-gray-300">
            <p>&copy; 2025 Invoice AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
