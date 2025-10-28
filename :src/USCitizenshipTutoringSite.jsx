import React, { useState } from "react";

export default function USCitizenshipTutoringSite() {
  const [lang, setLang] = useState("en");

  const lessonSchedule = [
    { time: "0:00 – 0:15", topic: "Pre-Session Warm-Up & Diagnostic Quiz" },
    { time: "0:15 – 0:45", topic: "U.S. Government & Constitution" },
    { time: "0:45 – 1:15", topic: "U.S. History" },
    { time: "1:15 – 1:25", topic: "Break #1" },
    { time: "1:25 – 1:55", topic: "Geography, Symbols & Holidays" },
    { time: "1:55 – 2:25", topic: "English Reading & Writing Practice" },
    { time: "2:25 – 2:35", topic: "Break #2" },
    { time: "2:35 – 2:55", topic: "Rights & Responsibilities" },
    { time: "2:35 – 2:50", topic: "Speaking Practice" },
    { time: "2:50 – 3:00", topic: "Final Quiz & Wrap-Up" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">🇺🇸 U.S. Citizenship Exam Tutoring</h1>
          <div className="flex items-center gap-2">
            <LangButton active={lang === "en"} onClick={() => setLang("en")}>EN</LangButton>
            <LangButton active={lang === "es"} onClick={() => setLang("es")}>ES</LangButton>
            <LangButton active={lang === "ko"} onClick={() => setLang("ko")}>KO</LangButton>
            <LangButton active={lang === "vi"} onClick={() => setLang("vi")}>VI</LangButton>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Hero Section with Image to the Right */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Prepare with Confidence. Pass with Ease.</h2>
            <p className="text-slate-700 leading-relaxed">
              Become a U.S. citizen with personalized guidance from expert tutors who understand what it takes to pass the naturalization test.
              Whether you’re preparing for the civics, reading, or writing sections — or want to build confidence in your interview — our classes make sure you’re ready.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-64 flex items-center justify-center">
            <p className="text-slate-400 italic">Insert your image here (e.g., class photo, flag, or logo)</p>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">🧭 Programs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Group Classes — $30/hr</h4>
              <p className="text-slate-700 mt-2">Join a small group of students learning together. Review the 100 civics questions, practice English reading/writing, and do mock interviews.</p>
              <p className="mt-2 text-slate-500 text-sm">3-hour sessions, perfect for collaboration and motivation.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">Private Tutoring — $50/hr</h4>
              <p className="text-slate-700 mt-2">One-on-one coaching for faster progress and personal attention. Tailored to your English level, schedule, and citizenship goals.</p>
              <p className="mt-2 text-slate-500 text-sm">3-hour sessions recommended for focused preparation and flexibility.</p>
            </div>
          </div>
        </section>

        {/* Comprehensive Lesson Plan */}
        <section id="lesson-plan" className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">📚 Comprehensive Lesson Plan (3-hour session)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lessonSchedule.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <p className="text-sm text-slate-500 font-medium">{item.time}</p>
                <p className="text-slate-800 mt-1">{item.topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Language Note Section */}
        <section id="languages">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">🌍 Language of Instruction</h3>
          <p className="text-slate-700">All lessons will be in English — as your citizenship exam will be.</p>
        </section>

        {/* Location Section */}
        <section id="location">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">📍 Location & Format</h3>
          <ul className="space-y-2 text-slate-700">
            <li>In-person and online options available</li>
            <li>Flexible scheduling (weekday evenings & weekends)</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">📞 Contact</h3>
          <p className="text-slate-700">Instructor: Daniel Shim</p>
          <p className="text-slate-700">📧 Email: <a className="underline" href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p className="text-slate-700">📱 Text/Call: <a className="underline" href="tel:+10000000000">+1 (000) 000-0000</a></p>
        </section>

        {/* About the Instructor Section */}
        <section id="about" className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">👨‍🏫 About the Instructor</h3>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100 h-48 w-48 flex items-center justify-center">
                <p className="text-slate-400 italic text-center px-4">Insert instructor portrait photo here</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-slate-700 leading-relaxed">
                Hi, I’m Dan. I was born overseas but became a naturalized U.S. citizen after going through the process myself — without a tutor or dedicated help — and realized how valuable it would have been to have someone guide me through it. I’m college and graduate school educated in the United States, and I’m passionate about helping others succeed in this journey.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                That’s why I created this in-person tutoring service: to help others who are on the same path. Each session is designed to make the process easier and to give you the confidence you need to pass your naturalization test. My goal is to share practical tips, answer your questions, and provide personal guidance every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Daniel Shim. U.S. Citizenship Exam Tutoring</p>
      </footer>
    </div>
  );
}

function LangButton({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-3 py-1 text-sm border transition ${
        active ? "bg-slate-900 text-white border-slate-900" : "border-slate-300 text-slate-700 hover:bg-slate-100"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
