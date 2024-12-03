import React from "react";
import Button from "../assets/components/btn"; // Ensure the path to the Button component is correct
import DonationForm from "../donationForm";

function DonationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl  text-gray-50 font-bold leading-tight mb-4 mt-[5%]">
            Contribuiți la Cauza Noastră Umanitară
          </h1>
          <p className="text-base md:text-lg font-normal  text-gray-200 leading-relaxed">
            Sprijiniți Spitalul de Copii "Louis Țurcanu" și ajutați viețile
            fragile care au nevoie de noi.
          </p>
          <div className="mt-6">
            <Button
              text="Donează Acum"
              onClick={() => alert("Thank you for your donation!")} // Add your donation logic
              className="" // Custom styling
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <main className="w-full py-10 px-4 flex flex-col items-center">
      <DonationSection />
      <EventSection />
      <EventArrival />
    </main>
  );
}

function DonationSection() {
  return (
    <section className="w-full max-w-[80%] mb-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Donează pentru Spitalul de Copii "Louis Țurcanu"
      </h2>
      <DonationForm/>
      <p className="text-sm text-gray-800 mb-6 leading-relaxed">
        TimMedfest & MedTalents vă invită să contribuiți în pragul sărbătorilor
        de iarnă la cauza noastră umanitară, donând Spitalului de Copii "Louis
        Țurcanu" în așa fel încât să fim alături de viețile celor mai mici
        dintre noi! Orice sumă donată poate contribui în viitor la îmbunătățirea
        calității și chiar salvarea acestor vieți fragile.
      </p>
    </section>
  );
}

function EventSection() {
  return (
    <section className="w-full max-w-[80%] bg-gradient-to-b from-purple-100 to-purple-200 rounded-lg shadow-lg p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Despre Eveniment
      </h2>
      <p className="text-sm text-gray-900 mb-6 leading-relaxed text-center">
        Evenimentul Artistic Caritabil care reunește concertul anual TimmedFest
        și concursul de talente MedTalents, punând sub lumina reflectoarelor
        generațiile de azi și de ieri de tinere spirite talentate din
        Universitatea de Medicină și Farmacie „Victor Babeș” din Timișoara!
        🩺🎤🫀🩰
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
        <EventDetail
          title="🎼 Ce este TimMedFest?"
          content="TimMedFest este un festival de muzică înființat în urmă cu 20 de ani, sub inițiativă studențească, ajuns la ediția 25."
        />
        <EventDetail
          title="🎭 Ce este MedTalents?"
          content="Un concurs al studenților mediciniști pentru promovarea artei și strângerea de fonduri pentru spitalul „Louis Țurcanu” din Timișoara."
        />
        <EventDetail
          title="🎬 Cui îi este adresat?"
          content="Studenților, profesorilor, elevilor, și tuturor celor pasionați de muzică, dans și teatru!"
        />
      </div>
    </section>
  );
}

function EventArrival() {
  return (
    <section className="w-full max-w-[80%] bg-gradient-to-b from-red-100 via-red-200 to-red-50 rounded-lg shadow-lg p-8 py-12 mt-10">
      <h2 className="text-xl font-semibold text-red-800 mb-4 text-center">
        Sperăm să vă vedem la eveniment!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
        <EventDetail
          title="⏰ Când?"
          content="7 decembrie, începând cu ora 19"
        />
        <EventDetail
          title="🌃 Unde?"
          content="Clubul Heaven, Strada Ripensia, Nr. 40, Timișoara"
        />
      </div>
    </section>
  );
}


function EventDetail({ title, content }:{title:string, content:string}) {
  return (
    <div className="bg-gradient-to-r from-white to-blue-100 p-6 rounded-lg shadow-md">
      <h3 className="text-base font-semibold text-purple-700 mb-2">{title}</h3>
      <p className="text-sm text-gray-800">{content}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 py-6">
      <p className="text-center text-white text-sm">
        Vă așteptăm cu drag!
      </p>
    </footer>
  );
}

export default DonationPage;
