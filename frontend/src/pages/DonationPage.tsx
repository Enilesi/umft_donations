
import React from "react";
function DonationPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-800 text-white py-6">
      <h1 className="text-center text-3xl font-bold">
        Contribuiți la Cauza Noastră Umanitară
      </h1>
    </header>
  );
}

function MainContent() {
  return (
    <main className="container mx-auto px-4 py-8">
      <DonationSection />
      <EventSection />
    </main>
  );
}

function DonationSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        Donează pentru Spitalul de Copii "Louis Țurcanu"
      </h2>
      <p className="text-lg mb-6">
        TimMedfest & MedTalents vă invită să contribuiți în pragul sărbătorilor
        de iarnă la cauza noastră umanitară, donând Spitalului de Copii "Louis
        Țurcanu" în așa fel încât să fim alături de viețile celor mai mici
        dintre noi! Orice sumă donată poate contribui în viitor la îmbunătățirea
        calității și chiar salvarea acestor vieți fragile.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">
        Donează Acum
      </button>
    </section>
  );
}

function EventSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Despre Eveniment
      </h2>
      <p className="text-lg mb-4">
        Evenimentul Artistic Caritabil care reunește concertul anual TimmedFest
        și concursul de talente MedTalents, punând sub lumina reflectoarelor
        generațiile de azi și de ieri de tinere spirite talentate din
        Universitatea de Medicină și Farmacie „Victor Babeș” din Timișoara!
        🩺🎤🫀🩰
      </p>
      <div className="text-lg mb-2">
        <strong>⏰ Când?</strong>
        <p>7 decembrie, începând cu ora 19</p>
      </div>
      <div className="text-lg mb-2">
        <strong>🌃 Unde?</strong>
        <p>Clubul Heaven, Strada Ripensia, Nr. 40, Timișoara</p>
      </div>
      <div className="text-lg mb-2">
        <strong>🎼 Ce este TimMedFest?</strong>
        <p>
          TimMedFest este un festival de muzică înființat în urmă cu 20 de ani,
          sub inițiativă studențească, ajuns la ediția 25. De-a lungul timpului,
          s-a dovedit a fi mai mult decât un simplu festival. Reunind mai multe
          generații, a devenit o flacără vie a spiritului, transmisă an de an
          unor noi studenți.
        </p>
      </div>
      <div className="text-lg mb-2">
        <strong>🎭 Ce este MedTalents?</strong>
        <p>
          MedTalents este un concurs al studenților mediciniști cu înclinații
          artistice, inițiat de EMSA, cu scopul de a promova arta, sub orice
          formă a ei, și de a face posibilă strângerea de fonduri pentru copiii
          bolnavi de la spitalul „Louis Țurcanu” din Timișoara.
        </p>
      </div>
      <div className="text-lg mb-2">
        <strong>🎬 Cui îi este adresat?</strong>
        <p>
          Studenților, profesorilor, elevilor, oamenilor mici și mari din
          Timișoara… tuturor celor care sunt pasionați de muzică, dans și
          teatru, curioși de a lua parte la evenimente studențești și dornici de
          a avea parte de distracție!
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-4">
      <p className="text-center">Vă așteptăm cu drag! 🩵</p>
    </footer>
  );
}

export default DonationPage;
