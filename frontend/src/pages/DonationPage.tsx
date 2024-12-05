import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../assets/components/btn";

const DonationPage: React.FC = () => {
  return (
    <div className="min-h-screen  bg-indigo-300 text-gray-900">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 mt-[5%] text-gray-50">
            Contribuiți la Cauza Noastră Umanitară
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-200">
            Sprijiniți Spitalul de Copii "Louis Țurcanu" alături de noi, printr-o donație în perioada <span className="font-bold text-gray-50">5 decembrie</span> - <span className="font-bold text-gray-50">7 ianuarie</span>.
          </p>
          <div className="mt-6">
            <Button
              text="Donează Acum"
              onClick={() => navigate("/donație")}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
};


const MainContent: React.FC = () => {
  return (
    <main className="w-full py-12 px-4 flex flex-col items-center space-y-12">
      <DonationSection />
      <EventSection />
      <EventArrival />
    </main>
  );
};

const DonationSection: React.FC = () => {
  return (
    <section className="w-full max-w-[80%] bg-gradient-to-r from-violet-100 to-indigo-100 rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Donează pentru Spitalul de Copii "Louis Țurcanu"
      </h2>
      <p className="text-base text-gray-800 mb-4 leading-relaxed">
        TimMedfest & MedTalents vă invită să contribuiți în pragul sărbătorilor
        de iarnă la cauza noastră umanitară, donând Spitalului de Copii "Louis
        Țurcanu" în așa fel încât să fim alături de viețile celor mai mici
        dintre noi! Orice sumă donată poate contribui în viitor la îmbunătățirea
        calității și chiar salvarea unor vieți.
      </p>
    </section>
  );
};


const EventSection: React.FC = () => {
  return (
    <section className="w-full max-w-[80%] bg-gradient-to-b from-violet-100 to-indigo-100 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Despre Eveniment
      </h2>
      <p className="text-base text-gray-900 mb-6 leading-relaxed text-center">
        Evenimentul Artistic Caritabil care reunește concertul anual TimMedFest
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
};


const EventArrival: React.FC = () => {
  return (
    <section className="w-full max-w-[80%] bg-gradient-to-b from-violet-100 to-indigo-100 rounded-lg shadow-lg p-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Vă așteptăm cu drag!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
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
};

interface EventDetailProps {
  title: string;
  content: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-indigo-200 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-base text-gray-800">{content}</p>
    </div>
  );
};

const SponsorsSection: React.FC = () => {
  const logos = [
    "/images/umft-logos/umft.png",
    "/images/umft-logos/fumft.png",
    "/images/umft-logos/emsa.png",
    "/images/umft-logos/timmedfest.png",
    
  ];

  return (
    <section className="w-full mb-4 bg-transparent text-center">
      <h2 className="text-2xl font-semibold text-gray-100 mb-8">
        Eveniment susținut de:
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Sponsor Logo ${index + 1}`}
              className="h-20 w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-indigo-500 py-6">
      <SponsorsSection />
    </footer>
  );
};

export default DonationPage;
