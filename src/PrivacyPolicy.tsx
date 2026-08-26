import { ArrowLeft } from 'lucide-react';

type Language = 'pl' | 'en';

type Props = {
  language: Language;
  onBack: (event: { preventDefault: () => void }) => void;
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const content = {
  pl: {
    back: 'Powrót na stronę główną',
    label: 'Dokument informacyjny',
    title: 'Polityka prywatności',
    updated: 'Dokument dotyczy serwisu internetowego firmy Ensure-Serwis Mateusz Radzikowski.',
    intro:
      'Poniżej wyjaśniamy prostym językiem, jakie informacje o osobach odwiedzających naszą stronę mogą do nas trafić, w jakim celu z nich korzystamy i jak długo je przechowujemy. Opisujemy również, jakie uprawnienia przysługują osobie, której dane dotyczą, oraz z jakich narzędzi zewnętrznych korzysta ta witryna.',
    adminTitle: 'Kto odpowiada za Twoje dane',
    adminIntro:
      'Podmiotem decydującym o celach i sposobach przetwarzania danych (administratorem) jest:',
    adminLines: [
      'Ensure-Serwis Mateusz Radzikowski',
      'ul. Romanówka 7/5, 08-110 Siedlce',
      'NIP: PL8212668971',
      'REGON: 386889448',
    ],
    adminContactIntro: 'W sprawach dotyczących danych osobowych można kontaktować się z nami:',
    adminContact: [
      'E-mail: ensure.serwis@gmail.com',
      'Telefon: 729 979 400 lub 602 114 688',
      'Listownie: na adres siedziby wskazany powyżej',
    ],
    tableTitle: 'W jakim celu i na jakiej podstawie przetwarzamy dane',
    tableHeaders: ['Cel przetwarzania', 'Zakres danych', 'Podstawa prawna', 'Okres przechowywania'],
    tableRows: [
      [
        'Udzielenie odpowiedzi na zapytanie wysłane formularzem, e-mailem lub komunikatorem',
        'Imię i nazwisko, numer telefonu, adres e-mail, dane pojazdu, miejscowość, rodzaj sprawy oraz treść wiadomości',
        'Art. 6 ust. 1 lit. f RODO — nasz uzasadniony interes polegający na prowadzeniu bieżącej korespondencji z zainteresowanymi',
        'Przez czas wymiany wiadomości, a po jej zakończeniu do momentu przedawnienia ewentualnych roszczeń',
      ],
      [
        'Wstępne ustalenia dotyczące zlecenia obsługi szkody, oględzin, kosztorysu lub naprawy',
        'Dane kontaktowe oraz informacje o pojeździe i okolicznościach zdarzenia przekazane przez osobę zainteresowaną',
        'Art. 6 ust. 1 lit. b RODO — czynności zmierzające do zawarcia i wykonania umowy',
        'Do czasu zakończenia sprawy, a następnie przez okres wynikający z przepisów podatkowych i rachunkowych',
      ],
      [
        'Zapewnienie prawidłowego i bezpiecznego działania strony internetowej',
        'Adres IP, informacje techniczne o urządzeniu i przeglądarce zapisywane przez dostawcę hostingu',
        'Art. 6 ust. 1 lit. f RODO — utrzymanie sprawności serwisu i ochrona przed nadużyciami',
        'Zgodnie z polityką retencji logów stosowaną przez dostawcę infrastruktury',
      ],
    ],
    sections: [
      {
        title: 'Czy podanie danych jest obowiązkowe',
        paragraphs: [
          'Korzystanie ze strony nie wymaga podawania jakichkolwiek danych osobowych. Przekazujesz je dobrowolnie dopiero wtedy, gdy chcesz się z nami skontaktować. Jeśli jednak nie podasz numeru telefonu lub adresu e-mail oraz opisu sprawy, nie będziemy w stanie odpowiedzieć na zapytanie ani wstępnie ocenić zgłoszenia.',
        ],
      },
      {
        title: 'Jak technicznie działa formularz na tej stronie',
        paragraphs: [
          'Formularz zgłoszenia szkody nie zapisuje danych w żadnej bazie po stronie serwisu. Po wypełnieniu pól i kliknięciu przycisku wysyłki przeglądarka przygotowuje gotową treść wiadomości i przekazuje ją do programu pocztowego lub skrzynki e-mail używanej na Twoim urządzeniu. Wysłanie wiadomości następuje dopiero po Twoim potwierdzeniu w tym programie.',
          'Oznacza to, że treść zgłoszenia trafia do nas jako zwykła wiadomość e-mail, a jej przetwarzanie odbywa się w naszej skrzynce pocztowej oraz u dostawcy poczty, z którego korzystasz.',
        ],
      },
      {
        title: 'Komu możemy przekazać dane',
        paragraphs: [
          'Nie sprzedajemy ani nie udostępniamy danych w celach handlowych. Informacje mogą jednak trafić do podmiotów, które wspierają nas organizacyjnie lub technicznie, wyłącznie w zakresie niezbędnym do realizacji sprawy:',
        ],
        bullets: [
          'firma zapewniająca hosting strony oraz obsługę poczty elektronicznej',
          'osoby i firmy świadczące dla nas wsparcie informatyczne',
          'warsztaty i serwisy współpracujące przy naprawie pojazdu, jeżeli sprawa tego wymaga',
          'zakłady ubezpieczeń oraz likwidatorzy szkód, gdy prowadzimy sprawę w Twoim imieniu',
          'biuro rachunkowe oraz doradcy prawni w zakresie rozliczeń i dochodzenia roszczeń',
          'organy publiczne, jeżeli obowiązek przekazania danych wynika z przepisów prawa',
        ],
      },
      {
        title: 'Narzędzia zewnętrzne i treści osadzone',
        paragraphs: [
          'Strona zawiera elementy pochodzące z serwisów zewnętrznych. Ich dostawcy mogą samodzielnie odnotować fakt wyświetlenia treści lub przejścia z naszej witryny:',
        ],
        bullets: [
          'mapa lokalizacji siedziby wyświetlana za pośrednictwem OpenStreetMap',
          'odnośnik do nawigacji uruchamiającej Mapy Google',
          'przyciski prowadzące do rozmowy przez WhatsApp',
          'odnośnik do naszego profilu na Facebooku',
          'odnośniki telefoniczne oraz e-mailowe otwierane w aplikacjach na Twoim urządzeniu',
        ],
        paragraphsAfter: [
          'Jeżeli w przyszłości uruchomimy narzędzia statystyczne lub reklamowe, takie jak Google Analytics czy Google Ads, poinformujemy o tym w niniejszym dokumencie oraz udostępnimy stosowny mechanizm wyrażenia zgody.',
        ],
      },
      {
        title: 'Pliki cookies i pamięć przeglądarki',
        paragraphs: [
          'Sama witryna nie zapisuje plików cookies służących do śledzenia ani do profilowania reklam. W pamięci lokalnej przeglądarki zachowujemy wyłącznie informację o wybranej wersji językowej strony, dzięki czemu przy kolejnej wizycie zobaczysz ją w preferowanym języku.',
          'Ten zapis nie pozwala na identyfikację użytkownika i możesz go w każdej chwili usunąć, czyszcząc dane witryny w ustawieniach przeglądarki.',
        ],
      },
      {
        title: 'Przekazywanie danych poza Europejski Obszar Gospodarczy',
        paragraphs: [
          'Część usług, z których korzystamy, w tym infrastruktura hostingowa, poczta elektroniczna oraz komunikatory, może być obsługiwana przez dostawców działających również poza EOG. W takich sytuacjach transfer odbywa się w oparciu o mechanizmy przewidziane w RODO, takie jak standardowe klauzule umowne zatwierdzone przez Komisję Europejską.',
        ],
      },
      {
        title: 'Bezpieczeństwo informacji',
        paragraphs: [
          'Strona działa w oparciu o szyfrowane połączenie HTTPS. Dostęp do korespondencji oraz dokumentacji spraw mają wyłącznie osoby, którym jest to potrzebne do realizacji zlecenia. Dokumenty i zdjęcia przekazane w toku sprawy przechowujemy w sposób ograniczający ryzyko dostępu osób nieuprawnionych.',
        ],
      },
      {
        title: 'Twoje uprawnienia',
        paragraphs: [
          'W zakresie wynikającym z przepisów możesz w każdej chwili poprosić nas o dostęp do swoich danych, ich poprawienie, usunięcie albo ograniczenie zakresu przetwarzania. Masz również prawo otrzymać dane w formacie nadającym się do przeniesienia, jeżeli przetwarzamy je automatycznie na podstawie zgody lub umowy.',
          'Jeżeli przetwarzanie opiera się na naszym uzasadnionym interesie, przysługuje Ci prawo wniesienia sprzeciwu. W przypadku działań o charakterze marketingu bezpośredniego sprzeciw możesz zgłosić w dowolnym momencie i bez podawania przyczyny.',
          'Udzieloną zgodę można wycofać w każdej chwili. Wycofanie nie wpływa na legalność działań podjętych przed jej cofnięciem. Wystarczy wiadomość na adres ensure.serwis@gmail.com.',
        ],
      },
      {
        title: 'Możliwość złożenia skargi',
        paragraphs: [
          'Jeżeli uznasz, że przetwarzamy dane niezgodnie z prawem, możesz złożyć skargę do organu nadzorczego, którym w Polsce jest Prezes Urzędu Ochrony Danych Osobowych z siedzibą przy ul. Stawki 2 w Warszawie.',
        ],
      },
      {
        title: 'Aktualizacje dokumentu',
        paragraphs: [
          'Treść polityki może zostać zmieniona, jeżeli zmienimy zakres świadczonych usług, wykorzystywane narzędzia albo gdy będzie tego wymagać zmiana przepisów. Aktualna wersja jest zawsze dostępna pod tym adresem.',
        ],
      },
    ] as (Section & { paragraphsAfter?: string[] })[],
  },
  en: {
    back: 'Back to homepage',
    label: 'Information document',
    title: 'Privacy Policy',
    updated: 'This document concerns the website of Ensure-Serwis Mateusz Radzikowski.',
    intro:
      'Below we explain in plain language what information about visitors may reach us, why we use it and how long we keep it. We also describe the rights of data subjects and which external tools are used on this website.',
    adminTitle: 'Who is responsible for your data',
    adminIntro: 'The entity deciding on the purposes and methods of processing (the controller) is:',
    adminLines: [
      'Ensure-Serwis Mateusz Radzikowski',
      'ul. Romanówka 7/5, 08-110 Siedlce, Poland',
      'Tax ID: PL8212668971',
      'REGON: 386889448',
    ],
    adminContactIntro: 'For any matters regarding personal data you can reach us at:',
    adminContact: [
      'E-mail: ensure.serwis@gmail.com',
      'Phone: 729 979 400 or 602 114 688',
      'By post: at the registered address indicated above',
    ],
    tableTitle: 'Why and on what basis we process data',
    tableHeaders: ['Purpose', 'Scope of data', 'Legal basis', 'Retention period'],
    tableRows: [
      [
        'Responding to an enquiry sent through the form, by e-mail or via messenger',
        'Name, phone number, e-mail address, vehicle details, location, case type and message content',
        'Article 6(1)(f) GDPR — our legitimate interest in handling ongoing correspondence',
        'For the duration of the correspondence and afterwards until potential claims become time-barred',
      ],
      [
        'Initial arrangements regarding claim handling, inspection, repair estimate or repair',
        'Contact details and information about the vehicle and circumstances of the incident provided by the person concerned',
        'Article 6(1)(b) GDPR — steps taken to conclude and perform a contract',
        'Until the case is closed and then for the period required by tax and accounting regulations',
      ],
      [
        'Ensuring the correct and secure operation of the website',
        'IP address and technical information about the device and browser recorded by the hosting provider',
        'Article 6(1)(f) GDPR — maintaining the service and protecting it against abuse',
        'In line with the log retention policy applied by the infrastructure provider',
      ],
    ],
    sections: [
      {
        title: 'Is providing data mandatory',
        paragraphs: [
          'Browsing the website does not require providing any personal data. You share it voluntarily only when you decide to contact us. However, without a phone number or e-mail address and a description of the case we will not be able to reply or make an initial assessment.',
        ],
      },
      {
        title: 'How the form on this website works technically',
        paragraphs: [
          'The claim report form does not save data in any database on the website side. After filling in the fields and clicking the send button, the browser prepares a ready message and passes it to the mail application or mailbox used on your device. The message is sent only after you confirm it there.',
          'This means the report reaches us as a regular e-mail and is processed in our mailbox and at the mail provider you use.',
        ],
      },
      {
        title: 'Who we may share data with',
        paragraphs: [
          'We do not sell or share data for commercial purposes. Information may be passed to entities supporting us organisationally or technically, strictly to the extent necessary to handle the case:',
        ],
        bullets: [
          'the company providing website hosting and e-mail services',
          'people and companies providing us with IT support',
          'workshops and service partners involved in the vehicle repair, where required',
          'insurance companies and loss adjusters when we handle a case on your behalf',
          'accounting office and legal advisors in relation to settlements and claims',
          'public authorities where disclosure is required by law',
        ],
      },
      {
        title: 'External tools and embedded content',
        paragraphs: [
          'The website contains elements originating from external services. Their providers may independently record the fact that content was displayed or that you moved from our website:',
        ],
        bullets: [
          'the location map displayed via OpenStreetMap',
          'a navigation link that opens Google Maps',
          'buttons leading to a WhatsApp conversation',
          'a link to our Facebook profile',
          'phone and e-mail links opened in applications on your device',
        ],
        paragraphsAfter: [
          'If we introduce analytics or advertising tools such as Google Analytics or Google Ads in the future, we will update this document and provide an appropriate consent mechanism.',
        ],
      },
      {
        title: 'Cookies and browser storage',
        paragraphs: [
          'The website itself does not set cookies used for tracking or advertising profiling. In the local storage of your browser we keep only the selected language version, so that your next visit opens in your preferred language.',
          'This entry does not allow identifying a user and you can remove it at any time by clearing site data in your browser settings.',
        ],
      },
      {
        title: 'Transfers outside the European Economic Area',
        paragraphs: [
          'Some of the services we use, including hosting infrastructure, e-mail and messaging tools, may also be operated by providers outside the EEA. In such cases transfers take place on the basis of mechanisms provided for in the GDPR, such as standard contractual clauses approved by the European Commission.',
        ],
      },
      {
        title: 'Information security',
        paragraphs: [
          'The website operates over an encrypted HTTPS connection. Access to correspondence and case documentation is limited to people who need it to carry out the assignment. Documents and photos provided during a case are stored in a way that limits the risk of unauthorised access.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'To the extent provided by law, you may at any time ask us to access your data, correct it, delete it or limit the scope of processing. You also have the right to receive data in a portable format if we process it automatically on the basis of consent or a contract.',
          'Where processing is based on our legitimate interest, you have the right to object. In the case of direct marketing activities you may object at any time and without giving a reason.',
          'Consent given may be withdrawn at any moment. Withdrawal does not affect the lawfulness of actions taken before it. A message to ensure.serwis@gmail.com is enough.',
        ],
      },
      {
        title: 'Right to lodge a complaint',
        paragraphs: [
          'If you believe that we process data unlawfully, you may lodge a complaint with the supervisory authority, which in Poland is the President of the Personal Data Protection Office, ul. Stawki 2, Warsaw.',
        ],
      },
      {
        title: 'Updates to this document',
        paragraphs: [
          'The content of this policy may change if we modify the scope of our services, the tools we use, or when required by changes in legislation. The current version is always available at this address.',
        ],
      },
    ] as (Section & { paragraphsAfter?: string[] })[],
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
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#6a7882]">{c.updated}</p>

        <p className="mt-8 text-justify text-lg leading-8 text-[#4b5a64]">{c.intro}</p>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.adminTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4b5a64]">{c.adminIntro}</p>
          <div className="gold-panel mt-5 bg-[#1b2a3d] p-7 text-white sm:p-8">
            {c.adminLines.map((line) => (
              <p key={line} className="font-semibold leading-8">
                {line}
              </p>
            ))}
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#35c8ff]">
              {c.adminContactIntro}
            </p>
            <div className="mt-3 space-y-1">
              {c.adminContact.map((line) => (
                <p key={line} className="leading-8 text-white/85">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
            {c.tableTitle}
          </h2>
          <div className="mt-5 overflow-x-auto border border-[#cfdce6] bg-white">
            <table className="w-full min-w-[820px] border-collapse text-left">
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
                {c.tableRows.map((row, index) => (
                  <tr key={row[0]} className={index % 2 === 1 ? 'bg-[#f7fbff]' : undefined}>
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="border-t border-[#cfdce6] px-5 py-5 align-top text-sm leading-7 text-[#4b5a64]"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {c.sections.map((section) => (
          <section key={section.title} className="mt-14">
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-[#111c24]">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-justify text-lg leading-8 text-[#4b5a64]">
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-8 text-[#4b5a64]">
                    <span className="mt-3 block h-2 w-2 shrink-0 bg-[#1e9dde]" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.paragraphsAfter?.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-justify text-lg leading-8 text-[#4b5a64]">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <a
          href="/"
          onClick={onBack}
          className="mt-16 inline-flex items-center gap-3 bg-gradient-to-r from-[#1e9dde] to-[#35c8ff] px-7 py-4 font-black uppercase tracking-[0.14em] text-white transition hover:from-[#111c24] hover:to-[#111c24]"
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
