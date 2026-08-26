import { ArrowLeft } from 'lucide-react';

type Language = 'pl' | 'en';

type Props = {
  language: Language;
  onBack: (event: { preventDefault: () => void }) => void;
};

const content = {
  pl: {
    back: 'Powrót na stronę główną',
    label: 'Dokument',
    title: 'Polityka prywatności',
    intro:
      'Niniejsza polityka prywatności wyjaśnia, w jaki sposób przetwarzane są dane osobowe użytkowników serwisu Ensure-Serwis Mateusz Radzikowski.',
    adminTitle: 'Administrator danych',
    adminLines: [
      'Ensure-Serwis Mateusz Radzikowski',
      'ul. Romanówka 7/5, 08-110 Siedlce',
      'NIP: PL8212668971',
      'REGON: 386889448',
      'E-mail: ensure.serwis@gmail.com',
      'Telefon: 729 979 400, 602 114 688',
    ],
    processingTitle: 'Cel, podstawa i zakres przetwarzania',
    tableHeaders: ['Cel i podstawa', 'Dane i źródło', 'Retencja'],
    tableRow: [
      'Obsługa zapytań i kontaktu — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).',
      'Imię, nazwisko, adres e-mail, numer telefonu i treść wiadomości. Dane podawane bezpośrednio przez użytkownika.',
      'Do zakończenia korespondencji, a następnie przez okres niezbędny do zabezpieczenia roszczeń.',
    ],
    recipientsTitle: 'Odbiorcy danych',
    recipients: [
      'Dostawcy hostingu i poczty elektronicznej',
      'Podmioty świadczące usługi informatyczne i serwisowe',
      'Podmioty księgowe lub prawne, gdy jest to niezbędne',
    ],
    featuresTitle: 'Funkcje serwisu',
    featuresText: 'Formularze kontaktowe służą do obsługi zapytań użytkowników.',
    externalTitle: 'Usługi zewnętrzne',
    external: [
      'Google Ads — pomiar konwersji i remarketing.',
      'Facebook / WhatsApp / poczta elektroniczna — komunikacja.',
      'Google Analytics — analityka ruchu i zachowania użytkowników.',
    ],
    rightsTitle: 'Prawa osoby, której dane dotyczą',
    rightsText:
      'W zależności od podstawy prawnej i okoliczności przetwarzania przysługuje prawo dostępu do danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania. Prawo do przenoszenia danych ma zastosowanie do danych przetwarzanych automatycznie na podstawie zgody lub umowy. Sprzeciw można wnieść wobec przetwarzania opartego na prawnie uzasadnionym interesie, a wobec marketingu bezpośredniego — w każdym czasie. Zgodę można wycofać w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.',
    complaintTitle: 'Skarga do organu nadzorczego',
    complaintText:
      'Osoba, której dane dotyczą, ma prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.',
  },
  en: {
    back: 'Back to homepage',
    label: 'Document',
    title: 'Privacy Policy',
    intro:
      'This privacy policy explains how personal data of users of the Ensure-Serwis Mateusz Radzikowski website is processed.',
    adminTitle: 'Data controller',
    adminLines: [
      'Ensure-Serwis Mateusz Radzikowski',
      'ul. Romanówka 7/5, 08-110 Siedlce, Poland',
      'Tax ID: PL8212668971',
      'REGON: 386889448',
      'E-mail: ensure.serwis@gmail.com',
      'Phone: 729 979 400, 602 114 688',
    ],
    processingTitle: 'Purpose, legal basis and scope of processing',
    tableHeaders: ['Purpose and legal basis', 'Data and source', 'Retention'],
    tableRow: [
      'Handling enquiries and contact — Article 6(1)(f) GDPR (legitimate interest of the controller).',
      'First name, surname, e-mail address, phone number and message content. Data provided directly by the user.',
      'Until the correspondence is completed, and then for the period necessary to secure potential claims.',
    ],
    recipientsTitle: 'Data recipients',
    recipients: [
      'Hosting and e-mail service providers',
      'IT and technical service providers',
      'Accounting or legal entities, where necessary',
    ],
    featuresTitle: 'Website features',
    featuresText: 'Contact forms are used to handle user enquiries.',
    externalTitle: 'External services',
    external: [
      'Google Ads — conversion measurement and remarketing.',
      'Facebook / WhatsApp / e-mail — communication.',
      'Google Analytics — traffic and user behaviour analytics.',
    ],
    rightsTitle: 'Rights of the data subject',
    rightsText:
      'Depending on the legal basis and circumstances of processing, you have the right to access your data, rectify it, erase it or restrict its processing. The right to data portability applies to data processed automatically on the basis of consent or a contract. You may object to processing based on legitimate interest, and to direct marketing at any time. Consent may be withdrawn at any time without affecting the lawfulness of processing carried out before its withdrawal.',
    complaintTitle: 'Complaint to the supervisory authority',
    complaintText:
      'The data subject has the right to lodge a complaint with the President of the Personal Data Protection Office (UODO) in Poland.',
  },
};

function PrivacyPolicy({ language, onBack }: Props) {
  const c = content[language];

  return (
    <div className="min-h-screen bg-[#f5f9fd] font-sans text-[#142129]">
      <header className="border-b border-white/10 bg-[#111c24] py-5 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 lg:px-8">
          <a href="/" onClick={onBack} className="block">
            <span className="block font-display text-2xl font-bold uppercase leading-none tracking-[0.08em]">
              Ensure-Serwis
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.24em] text-[#35c8ff]">
              Mateusz Radzikowski
            </span>
          </a>

          <a
            href="/"
            onClick={onBack}
            className="inline-flex items-center gap-2 border border-[#35c8ff] px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#35c8ff] hover:text-[#111c24]"
          >
            <ArrowLeft className="h-4 w-4" />
            {c.back}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.32em] text-[#1e9dde]">{c.label}</p>
        <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-none tracking-[0.04em] text-[#111c24] sm:text-6xl">
          {c.title}
        </h1>
        <div className="mt-6 h-1 w-40 bg-gradient-to-r from-[#1e9dde] to-[#ffb13b]" />

        <p className="mt-8 text-justify text-lg leading-8 text-[#4b5a64]">{c.intro}</p>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.adminTitle}
          </h2>
          <div className="gold-panel mt-5 bg-[#1b2a3d] p-7 text-white sm:p-8">
            {c.adminLines.map((line) => (
              <p key={line} className="leading-8">
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.processingTitle}
          </h2>
          <div className="mt-5 overflow-x-auto border border-[#cfdce6] bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-[#111c24] text-white">
                  {c.tableHeaders.map((header) => (
                    <th key={header} className="px-5 py-4 text-xs font-black uppercase tracking-[0.14em]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {c.tableRow.map((cell) => (
                    <td key={cell} className="border-t border-[#cfdce6] px-5 py-5 align-top leading-7 text-[#4b5a64]">
                      {cell}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.recipientsTitle}
          </h2>
          <ul className="mt-5 space-y-3">
            {c.recipients.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-8 text-[#4b5a64]">
                <span className="mt-3 block h-2 w-2 shrink-0 bg-[#1e9dde]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.featuresTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4b5a64]">{c.featuresText}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.externalTitle}
          </h2>
          <ul className="mt-5 space-y-3">
            {c.external.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-8 text-[#4b5a64]">
                <span className="mt-3 block h-2 w-2 shrink-0 bg-[#ffb13b]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.rightsTitle}
          </h2>
          <p className="mt-5 text-justify text-lg leading-8 text-[#4b5a64]">{c.rightsText}</p>
        </section>

        <section className="mt-12 border-t-4 border-[#1e9dde] pt-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.complaintTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4b5a64]">{c.complaintText}</p>
        </section>

        <a
          href="/"
          onClick={onBack}
          className="mt-14 inline-flex items-center gap-3 bg-gradient-to-r from-[#1e9dde] to-[#35c8ff] px-7 py-4 font-black uppercase tracking-[0.14em] text-white transition hover:from-[#111c24] hover:to-[#111c24]"
        >
          <ArrowLeft className="h-5 w-5" />
          {c.back}
        </a>
      </main>

      <footer className="bg-[#101820] py-10 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-display text-3xl font-bold uppercase tracking-[0.08em]">Ensure-Serwis</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#35c8ff]">Mateusz Radzikowski</p>
          </div>
          <div className="text-sm leading-7 text-white/60 lg:text-right">
            <p>ul. Romanówka 7/5, 08-110 Siedlce</p>
            <p>729 979 400 | 602 114 688 | ensure.serwis@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
