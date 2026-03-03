import DateBar from "@/src/components/DateBar";
import Footer from "@/src/components/Footer";
import MainNav from "@/src/components/MainNav";
import TrendingNews from "@/src/components/TrendingNews";

export default function AboutSection() {
  return (
    <>
    <DateBar/>
    <MainNav />
    <TrendingNews />

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            About <span className="text-gray-900">Qlork</span>
          </h1>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           A modern digital news platform delivering clear, credible, and timely journalism.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-10">

          {/* Who We Are */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
           Qlork is a trusted digital news platform committed to delivering accurate, timely, and insightful journalism. We cover stories that matter—shaping conversations, informing decisions, and connecting readers to the events that influence the world. At Qlork, we prioritize clarity, integrity, and depth, providing news without sensationalism or bias.
            </p>
          </div>

          {/* What We Cover */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              What We Cover
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our newsroom tracks the stories that matter most to informed readers.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
              <li>• Breaking & National News</li>
              <li>• Business & Financial Markets</li>
              <li>• Politics & Policy</li>
              <li>• Technology & Innovation</li>
              <li>• Entertainment & Culture</li>
              <li>• Global Affairs</li>
            </ul>
          </div>

          {/* Our Standards */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Our Standards
            </h2>
            <p className="text-gray-700 leading-relaxed">
           At Qlork, we uphold the highest standards of journalism. Accuracy, fairness, and integrity guide everything we do. We focus on delivering news that is verified, unbiased, and meaningful, ensuring our readers receive information they can trust.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
            Our mission is to inform, inspire, and empower our audience. We strive to cover stories that shape the world, spark important conversations, and provide insight without sensationalism. Qlork is dedicated to connecting people with the truth, fostering understanding, and promoting responsible journalism.
            </p>
          </div>

        </div>
      </section>
    <Footer/>
    </>
  );
}
