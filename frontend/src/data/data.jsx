import eRoadFull from "../assets/eRoadFull.png";
import eRoadPreview from "../assets/eRoadPreview.png";
import eChergaFull from "../assets/eChergaFull.png";
import eChergaPreview from "../assets/eChergaPreview.png";
import cyberTrackerFull from "../assets/cyberTrackerFull.png";
import cyberTrackerPreview from "../assets/cyberTrackerPreview.png";
import contactCenterKyivFull from "../assets/contactCenterKyivFull.png";
import mayorsServicePreview from "../assets/mayorsServicePreview.png";
import prykordonnykFull from "../assets/prykordonnyk.svg";
import prykordonnykPreview from "../assets/prykordonnykPreview.svg";

export const projects = [
  // E-ROAD
  {
    urlName: "e-road",
    image: eRoadFull,
    imagePreview: eRoadPreview,
    headerPreview: { UA: "E-road", ENG: "E-road" },
    header: {
      UA: "«E-road» - управління інфраструктурою автомобільних доріг",
      ENG: '"E-road" - management of road infrastructure',
    },
    headingSecondary: {
      UA: ` Управління та підтримка складних процесів будівництва та експлуатації
        автомобільних доріг вимагали системи, що спростить планування, контроль
        за процесами будівництва, та надасть можливість аналізувати та
        вдосконалювати робочі процеси.`,
      ENG: `Managing and maintaining the complex processes of road construction and operation required a system that would simplify planning control of construction processes, and provide the ability to analyze and improve workflows.`,
    },
    text: {
      UA: (
        <div>
          <h5>Управління інфраструктурою автомобільних доріг України</h5>
          <p>
            Система для повної автоматизації життєвого циклу будівництва та
            експлуатації автомобільних доріг країни, яка включає:
          </p>
          <ol>
            <li>
              Систему планування:
              <ul className="dashed">
                <li>
                  Збір і пріоритезація об'єктів для ремонту та будівництва доріг
                  з використанням експертної думки та автоматизованих систем.
                </li>
                <li>Формування планів у залежності від фінансування.</li>
              </ul>
            </li>
            <li>
              Систему супроводження ремонтних робіт:{" "}
              <ul className="dashed">
                <li>
                  Контроль за етапами ремонту та контроль якості виконання
                  робіт.
                </li>
              </ul>
            </li>
            <li>
              Cистему експлуатаційного утримання:{" "}
              <ul className="dashed">
                <li>Планування та контроль витрат на утримання доріг.</li>
              </ul>
            </li>
            <li>
              {" "}
              Систему контролю закупівель та договорів:{" "}
              <ul className="dashed">
                <li>Управління закупівлями та контроль договорів.</li>
              </ul>
            </li>
            <li>
              {" "}
              GIS-модуль:{" "}
              <ul className="dashed">
                <li>Візуалізація об'єктів на мапі для аналізу.</li>
              </ul>
            </li>
            <li>
              {" "}
              Аналіз WIM обладнання:{" "}
              <ul className="dashed">
                <li>
                  Аналіз транспортних даних для покращення якості дорожньої
                  інфраструктури.
                </li>
              </ul>
            </li>
          </ol>
          <h5>Результати:</h5>
          <p>
            «E-road» стала важливою платформою для Управління Дорожнього
            Господарства, полегшуючи процеси планування та управління для
            підтримки й оптимізації дорожньої інфраструктури України. Ця
            інтегрована платформа виконує широкий спектр функцій й забезпечує
            виконання основних завдань і процесів у сфері обслуговування
            дорожньої інфраструктури. Це включає прийом та реєстрацію звернень,
            визначення стану доріг, передачу звернень на виконавців, а також
            аналіз та контроль за даними про перевезення вантажу.
          </p>
          <p>
            В рамках воєнного стану Платформа «E-road» має на меті розширити
            функціонал, спростивши користування для укладання договорів на
            будівництво та експлуатацію WIM, а також формування звітів та
            динамічного відображення інформації.
          </p>
        </div>
      ),
      ENG: (
        <div>
          <h5>Road Infrastructure Management in Ukraine</h5>
          <p>
            A system for complete automation of the life cycle of construction
            and operation of the country's roads, which includes:
          </p>
          <ol>
            <li>
              Planning system:
              <ul className="dashed">
                <li>
                  Collecting and prioritizing objects for road repair and
                  construction using expert opinion and automated systems.
                </li>
                <li>Formation of plans depending on funding.</li>
              </ul>
            </li>
            <li>
              A system of maintenance of repair works:
              <ul className="dashed">
                <li>
                  Control over the stages of repairs and quality control of the
                  work.
                </li>
              </ul>
            </li>
            <li>
              Maintenance system:
              <ul className="dashed">
                <li>Planning and control of road maintenance costs.</li>
              </ul>
            </li>
            <li>
              Procurement and contract control system:
              <ul className="dashed">
                <li>Procurement management and contract control.</li>
              </ul>
            </li>
            <li>
              GIS module:
              <ul className="dashed">
                <li>Visualization of objects on a map for analysis.</li>
              </ul>
            </li>
            <li>
              WIM equipment analysis:
              <ul className="dashed">
                <li>
                  Analysis of transport data to improve the quality of road
                  infrastructure.
                </li>
              </ul>
            </li>
          </ol>
          <h5>Results:</h5>
          <p>
            "E-road" has become an important platform for the Ukrainian Road
            Agency, facilitating planning and management processes to maintain
            and optimize Ukraine's road infrastructure. This integrated platform
            performs a wide range of functions and ensures the fulfillment of
            crucial tasks and processes in road infrastructure maintenance. The
            system includes accepting and registering requests, determining road
            conditions, transferring requests to contractors, and analyzing and
            monitoring cargo transportation data.
          </p>
          <p>
            As part of martial law, the E-road platform aims to expand its
            functionality, simplifying the use for concluding contracts for the
            construction and operation of WIM and generating reports and dynamic
            information displays.
          </p>
        </div>
      ),
    },
    labels: {
      UA: [
        "Для держави",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "WIM-обладнання",
        "1к+ користувачів",
      ],
      ENG: [
        "For the state",
        "Site",
        "Android",
        "iOS",
        "WEB application",
        "Online support",
        "WIM equipment",
        "1k+ users",
      ],
    },
  },
  // Mayor's office
  {
    urlName: "служба-підримки-мера-києва",
    image: contactCenterKyivFull,
    imagePreview: mayorsServicePreview,
    webSiteLink: "https://1551.gov.ua/",
    headerPreview: {
      UA: "Служба мера Києва - 1551 ",
      ENG: "Service of the Mayor of Kyiv - 1551 ",
    },
    header: {
      UA: "Служба мера Києва — 1551",
      ENG: `Kyiv Mayor's Office - 1551`,
    },
    headingSecondary: {
      UA: "«Служба мера Києва —1551​​» створена для забезпечення ефективної взаємодії мешканців та гостей міста з міською владою. Заснована на моделі збору та обробки даних, вона спрямована на оптимізацію процесів реєстрації звернень, розподілу завдань та контролю їх виконання.",
      ENG: `The "Kyiv Mayor's Service -1551" is designed to ensure effective interaction between residents and guests of the city with the city administration. Based on the data collection and processing model, it aims to optimise the processes of registration of appeals, distribution of tasks, and control of their implementation.  `,
    },
    text: {
      UA: (
        <div>
          <h5>Особливості:</h5>
          <ul className="dashed">
            <li>
              Взаємодія з мешканцями: подача звернень через телефон, мобільний
              додаток, веб-сайт, чат-боти тощо.
            </li>
            <li>
              Ефективне вирішення проблем: автоматична маршрутизація звернень до
              відповідних служб міста для оперативного виконання.
            </li>
            <li>
              Контроль та зворотній зв'язок: можливість зв'язку з заявником для
              перевірки виконання через різні канали (телефон, сайт, мобільний
              додаток, чат-боти).
            </li>
          </ul>

          <h5>Внесок у розвиток:</h5>
          <ul className="dashed">
            <li>
              Технологічні інновації: впровадження системи запису розмов з
              аналітикою мови для аналізу та оптимізації обробки звернень.
            </li>
            <li>
              Автоматизація та управління: ПЗ для управління системами,
              контентом та пристроями, спрямоване на підвищення ефективності та
              якості обслуговування громадян.
            </li>
          </ul>

          <h5>Технічні деталі:</h5>
          <ul className="dashed">
            <li>
              Інтеграція: Взаємодія з сайтом, мобільними додатками (Android,
              iOS), чат-ботами (Телеграм, Viber).
            </li>
            <li>Користувачі: Понад 2000 активних користувачів.</li>
            <li>
              Масштабність: Засоби для обробки до 50 одночасних дзвінків та
              прийому до 15 000 вхідних дзвінків за добу.
            </li>
          </ul>
          <h5>Результати:</h5>
          <ul className="dashed">
            <li>
              Обсяг роботи: Обробка до 40 тисяч звернень щоденно в пікові
              періоди.
            </li>
            <li>
              Контроль та інформування: Передача інформації заявникам про роботу
              служби через різні канали зв'язку.
            </li>
            <li>
              Цифрові технології та аналітика: Використання сучасних аналітичних
              інструментів для покращення обслуговування громадян.
            </li>
          </ul>

          <p>
            «Служба мера Києва — 1551» є важливим кроком у створенні надійної
            комунікації між мешканцями та міською владою. Створона система
            дозволяє реєструвати звернення від мешканців та гостей міста, які
            оператори перевіряють та автоматично направляють для виконання в
            служби міста. Заявки можна подавати через телефон, додаток, веб-сайт
            або чат-ботів. Кожного дня в систему надходить від 10 до 40 тисяч
            звернень, які контролює спеціальна група. Крім того, система
            інформує заявників про роботи та зміни у статусі їх звернень через
            різні канали зв'язку.
          </p>
        </div>
      ),
      ENG: (
        <div>
          <h5>Features:</h5>
          <ul className="dashed">
            <li>
              Interaction with residents: submission of appeals via phone,
              mobile application, website, chatbots, etc.
            </li>
            <li>
              Efficient problem solving: automated routing of requests to the
              relevant city services for prompt implementation.
            </li>
            <li>
              Control and feedback: contact the applicant to check the
              implementation through various channels (phone, website, mobile
              application, chatbots).
            </li>
          </ul>

          <h5>Development impact:</h5>
          <ul className="dashed">
            <li>
              Technological innovations: implementing a call recording system
              with speech analytics to analyze and optimize the processing of
              applications.
            </li>
            <li>
              Automation and management: software for managing systems, content,
              and devices to improve the efficiency and quality of citizen
              service.
            </li>
          </ul>

          <h5>Tech details:</h5>
          <ul className="dashed">
            <li>
              Integration: Interaction with the website, mobile applications
              (Android, iOS), and chatbots (Telegram, Viber).
            </li>
            <li>Users: More than 2000 active users.</li>
            <li>
              Scalability: Tools to handle up to 50 simultaneous calls and
              receive up to 15,000 incoming calls daily.
            </li>
          </ul>
          <h5>Results:</h5>
          <ul className="dashed">
            <li>
              Scope of work: Processing up to 40,000 calls daily during peak
              periods.
            </li>
            <li>
              Control and information: Transmission of information to applicants
              about the work of the service through various communication
              channels.
            </li>
            <li>
              Digital technologies and analytics: Use of modern analytical tools
              to improve citizen services.
            </li>
          </ul>

          <p>
            The "Kyiv Mayor's Service 1551" is a significant move towards
            creating reliable communication between residents and city
            authorities. The system allows registering requests from residents
            and visitors of the city, which are checked by operators and
            automatically forwarded to the city services for execution. Requests
            can be submitted via phone, app, website, or chatbots. Every day,
            the system receives between 10,000 and 40,000 requests monitored by
            a special team. Moreover, the system informs applicants about the
            work and changes in the status of their applications through various
            communication channels.
          </p>
        </div>
      ),
    },
    labels: {
      UA: [
        "Для держави",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к+ користувачів",
      ],
      ENG: [
        "Для держави",
        "Site",
        "Android",
        "iOS",
        "WEB application",
        "Online support",
        "Chat bots",
        "10k+ users",
      ],
    },
  },
  // E-CHERGA
  {
    urlName: "є-черга",
    image: eChergaFull,
    imagePreview: eChergaPreview,
    webSiteLink: "https://echerha.gov.ua/",
    headerPreview: {
      UA: "Є-черга",
      ENG: "Є-черга",
    },
    header: {
      UA: `Електронна Черга: швидкий перетин кордону`,
      ENG: `eQueue: fast border crossing`,
    },
    headingSecondary: {
      UA: `«Електронна Черга» призначена для оптимізації та поліпшення процесів перетину кордону для водіїв вагового транспорту на державному кордоні України. Система забезпечує ефективну організацію черги, моніторинг руху та прогнозування часу перетину, а також уніфікує правила роботи прикордонних пунктів пропуску.
      `,
      ENG: `The eQueue is designed to optimize and improve border crossing processes for drivers of heavy vehicles at the state border of Ukraine. The system ensures efficient queue management, traffic monitoring, and forecasting of crossing times, and unifies border checkpoints' operation rules.
      `,
    },
    text: {
      UA: (
        <div>
          <h4>Основні характеристики:</h4>
          <ul className="dashed">
            <li>
              Ефективне управління чергою: водії можуть контролювати рух черги
              та прогнозувати час перетину.
            </li>
            <li>
              Підвищена прозорість та систематизація правил: забезпечення
              однакових стандартів роботи прикордонних пунктів пропуску.
            </li>
          </ul>

          <h4>Вражаючий результат:</h4>
          <ol>
            <li>
              Оптимізація часу: зменшення часу очікування для водіїв та
              перевізників.
            </li>
            <li>
              Підвищення координації: покращення процесів бронювання та виїзду
              автотранспорту через кордон.
            </li>
            <li>
              Інтеграція з іншими системами: підключення до інших пунктів
              пропуску та інформаційних систем для спільного використання даних.
            </li>
          </ol>
          <p>
            Запис до черги може здійснюватися онлайн та безкоштовно, що значно
            спрощує та прискорює процес перетину кордону водіями. Щодня в
            систему надходить від 10 до 40 тисяч звернень, кожне з яких
            контролює спеціальна група. Планується модернізація та розширення
            функціональності системи для підключення інших пунктів пропуску та
            інтеграції з іншими інформаційними системами.
          </p>
        </div>
      ),
      ENG: (
        <div>
          <h4>Core features:</h4>
          <ul className="dashed">
            <li>
              Efficient queue management: drivers can monitor queue movement and
              predict crossing times.
            </li>
            <li>
              Increased transparency and systematization of rules: ensuring
              uniform standards of operation of border crossing points.
            </li>
          </ul>

          <h4>Amazing result:</h4>
          <ol>
            <li>
              Time optimisation: reduced waiting time for drivers and carriers.
            </li>
            <li>
              Increased coordination: improved processes for booking and exiting
              vehicles across the border.
            </li>
            <li>
              Integration with other systems: connectivity to other border
              crossing points and information systems for data sharing.
            </li>
          </ol>
          <p>
            The queue can be booked online and free of charge, greatly
            simplifying and speeding up the border crossing process for drivers.
            The eQueue receives between 10,000 and 40,000 requests daily, each
            monitored by a special team. We plan to upgrade and expand the
            system's functionality to connect other checkpoints and integrate
            with other information systems.
          </p>
        </div>
      ),
    },
    labels: {
      UA: [
        "Для держави",
        "Online government service",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "100к + користувачів",
      ],
      ENG: [
        "For the state",
        "Державний онлайн-сервіс",
        "Site",
        "Android",
        "iOS",
        "WEB application",
        "Online support",
        "100к + users",
      ],
    },
  },
  // CYBER TRACKER
  {
    urlName: "cyber-tracker",
    image: cyberTrackerFull,
    imagePreview: cyberTrackerPreview,
    headerPreview: {
      UA: "CyberTracker: інструмент управління та моніторингу кібербезпеки",
      ENG: "CyberTracker: a cybersecurity management and monitoring tool",
    },
    header: {
      UA: `НАЦІОНАЛЬНА СИСТЕМА КІБЕРБЕЗПЕКИ`,
      ENG: `THE NATIONAL CYBERSECURITY PROTECTION SYSTEM (NCPS)`,
    },
    headingSecondary: {
      UA: `В Україні, сектори критичної інфраструктури потребують посилення заходів у кібербезпеці. З метою забезпечення цієї потреби та зменшення вразливості, було розроблено «CyberTracker»: ця платформа спрямована на ефективний моніторинг та впровадження стратегій кібербезпеки України.`,
      ENG: `In Ukraine, critical infrastructure sectors require enhanced cybersecurity measures. CyberTracker is designed to help meet this need. This platform solves the problem of effectively monitoring and analyzing Ukraine's cybersecurity strategy implementation.
      Reducing cybersecurity vulnerabilities in critical sectors of Ukrainian infrastructure
      `,
    },
    text: {
      UA: (
        <div>
          <h4>
            Зниження вразливості кібербезпеки в критичних секторах української
            інфраструктури
          </h4>
          <p>
            Досягти цього можливо через автоматизоване відстеження прогресу
            здійснення стратегічних завдань та ефективності реалізації цілей
            ініціатив у реальному часі.
          </p>
          <p>Цілі «CyberTracker»:</p>
          <ol>
            <li>Моніторинг прогресу впровадження Стратегії кібербезпеки.</li>
            <li>Відомчий моніторинг виконання Стратегії.</li>
            <li>
              Збір і відображення даних щодо ефективності Стратегії та її впливу
              на міжнародні рейтинги з кібербезпеки.
            </li>
            <li>
              Публічний доступ до інформації для громадськості та зацікавлених
              сторін для сприяння новим проєктам у сфері кібербезпеки.
            </li>
          </ol>
          <p>Функції:</p>
          <ol>
            <li>
              Моніторинг реалізації Стратегії кібербезпеки з підтримкою
              збирання, введення та аналізу даних.
            </li>
            <li>Управління елементами Стратегії та їх характеристиками.</li>
            <li>
              Механізм проєктного управління для ефективної реалізації
              Стратегії.
            </li>
            <li>Моніторинг бюджетів та звітування.</li>
            <li>
              Візуалізація стану виконання Стратегії для аналізу та контролю.
            </li>
          </ol>
          <p>Особливості:</p>
          <ol>
            <li>Журнал подій системи для відстеження всіх дій.</li>
            <li>Механізми аутентифікації та захисту від онлайн загроз.</li>
            <li>Довідники об'єктів системи та документація.</li>
          </ol>
          <p>
            «CyberTracker» - це важливий інструмент, який сприяє контролю та
            поліпшенню кібербезпеки України. Більш того, він дозволяє приймати
            обґрунтовані управлінські рішення та реагувати на кіберзагрози
            вчасно та швидко, що гарантує стабільность та безпеку в цифровому
            просторі країни.
          </p>
        </div>
      ),
      ENG: (
        <div>
          <p>
            This can be achieved through automated real-time tracking of the
            progress of strategic tasks and the effectiveness of initiatives'
            goals.
          </p>
          <p>CyberTracker makes it all good:</p>
          <ol>
            <li>
              Monitoring the progress of the Cybersecurity Strategy
              implementation.
            </li>
            <li>Departmental monitoring of the Strategy implementation.</li>
            <li>
              Сollecting and displaying data on the strategy's effectiveness and
              impact on international cybersecurity rankings.
            </li>
            <li>
              Public access to information for the public and stakeholders to
              facilitate new cybersecurity projects.
            </li>
          </ol>
          <p>Get highlights:</p>
          <ol>
            <li>
              Monitoring the implementation of the Cybersecurity Strategy with
              support for data collection, input, and analysis.
            </li>
            <li>
              Management of the Strategy elements and their characteristics.
            </li>
            <li>
              Project management mechanism for the effective implementation of
              the Strategy.
            </li>
            <li>Budget monitoring and reporting.</li>
            <li>
              Visualization of the Strategy implementation status for analysis
              and control.
            </li>
          </ol>
          <p>Take a deeper look:</p>
          <ol>
            <li>System event log to track all actions.</li>
            <li>
              Authentication and protection mechanisms against online threats.
            </li>
            <li>System object directories and documentation.</li>
          </ol>
          <p>
            "CyberTracker is an essential tool that helps to control and improve
            Ukraine's cybersecurity. Moreover, it allows for making informed
            management decisions and responding to cyber threats promptly and
            quickly, guaranteeing stability and security in the country's
            digital space.
          </p>
        </div>
      ),
    },
    labels: {
      UA: [
        "Для держави",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "WIM-обладнання",
        "1к + користувачів",
      ],
      ENG: [
        "For the state",
        "Site",
        "Android",
        "iOS",
        "WEB application",
        "Online support",
        "WIM Hardware",
        "1k + users",
      ],
    },
  },
  // BORDER GUARD CABINET
  {
    urlName: "dsbt",
    image: prykordonnykFull,
    imagePreview: prykordonnykPreview,
    webSiteLink: "https://18-60.dsbt.gov.ua/",
    headerPreview: {
      UA: "дсбт - КАБІНЕТ ПРИКОРДОННИКА",
      ENG: "State Transport Safety Service - BORDER GUARD CABINET",
    },
    header: {
      UA: `КАБІНЕТ ПРИКОРДОННИКА ЄДИНОГО КОМПЛЕКСУ ІНФОРМАЦІЙНИХ СИСТЕМ УКРТРАНСБЕЗПЕКИ `,
      ENG: `UNITED COMPLEX INFORMATION SYSTEM BORDER GUARD CABINET`,
    },
    headingSecondary: {
      UA: `Нагальна необхідність оформлення заявки на перетин державного кордону водіями призовного віку 18-60 років під час воєнного стану призвела до необхідності впровадження Модуля «Кабінет прикордонника». `,
      ENG: `The urgent need to submit applications for crossing the state border by drivers of conscription age (18-60 years) during a state of war has led to the implementation of the "Border Guard Cabinet" module.`,
    },
    text: {
      UA: (
        <div>
          <h4>Фіксація факту перетину кордону (виїзд та в’їзд) водіями</h4>
          <p>
            Модуль «Кабінет прикордонника» призначено для перевірки інспекторами
            Державної прикордонної служби України (ДПСУ) наявності заявок на
            бронювання та подальшого безперешкодного перетину кордону
            водіями-перевізниками або волонтерами обласних військових
            адміністрацій (ОВА) і отримання стану перетину кордону згідно цим
            заявкам. 
          </p>
          <p>Aвтоматизація процесів, пов’язаних із: </p>
          <ol>
            <li>
              Консолідацією та зберіганням інформації щодо заявок від
              перевізників та ОВА на перетин кордону та факт перетину кордону
              (виїзд та в’їзд) водіями. 
            </li>
            <li>
              Фіксацією факту перетину кордону (виїзд та в’їзд)
              водіїв-перевізників або волонтерів ОВА.  
            </li>
            <li>Формуванням звітності. </li>
          </ol>
          <p>Цілі:</p>
          <ol>
            <li>
              Автоматизація робочих місць інспекторів ДПСУ, керівників ДПСУ та
              фахівців Державної служби України з безпеки на транспорті. 
            </li>
            <li>
              Спрощення процедури контролю щодо оформлення заявки на перетин
              державного кордону водіями.
            </li>
            <li>Фіксація факту перетину кордону водіями. </li>
            <li>
              Фіксація потенційно-підозрілих водіїв та відображення статистики. 
            </li>
            <li>Зменшення часу на перетин кордону водіями.</li>
          </ol>
        </div>
      ),
      ENG: (
        <div>
          <h4>
            Recording the fact of crossing the border (departure and entry) by
            drivers
          </h4>
          <p>
            The "Border Guard Cabinet" module is designed for border guards to
            check the availability of reservation applications and facilitate
            the unimpeded crossing of the border by drivers-transporters or
            volunteers from regional military administrations (RMA), and to
            obtain the border crossing status according to these applications.
          </p>
          <p>Automation of processes related to:  </p>
          <ol>
            <li>
              Consolidation and storage of information regarding applications
              from transporters and RMAs for border crossing and the fact of
              border crossing (departure and entry) by drivers.
            </li>
            <li>
              Recording the fact of border crossing (departure and entry) by
              transporter drivers or RMA volunteers.
            </li>
            <li>Report generation. </li>
          </ol>
          <p>Objectives:</p>
          <ol>
            <li>
              Automation of workplaces for border guard inspectors, DPSU
              leaders, and experts from the State Service of Ukraine for
              Transport Security.
            </li>
            <li>
              Simplification of the control procedure for submitting
              applications for crossing the state border by drivers.
            </li>
            <li>Recording the fact of border crossing by drivers. </li>
            <li>
              Recording potentially suspicious drivers and reflecting
              statistics.
            </li>
            <li>Reducing the time for border crossing by drivers.</li>
          </ol>
        </div>
      ),

      // ENG: (
      //   <div>
      //     <p>
      //       This can be achieved through automated real-time tracking of the
      //       progress of strategic tasks and the effectiveness of initiatives'
      //       goals.
      //     </p>
      //     <p>CyberTracker makes it all good:</p>
      //     <ol>
      //       <li>
      //         Monitoring the progress of the Cybersecurity Strategy
      //         implementation.
      //       </li>
      //       <li>Departmental monitoring of the Strategy implementation.</li>
      //       <li>
      //         Сollecting and displaying data on the strategy's effectiveness and
      //         impact on international cybersecurity rankings.
      //       </li>
      //       <li>
      //         Public access to information for the public and stakeholders to
      //         facilitate new cybersecurity projects.
      //       </li>
      //     </ol>
      //     <p>Get highlights:</p>
      //     <ol>
      //       <li>
      //         Monitoring the implementation of the Cybersecurity Strategy with
      //         support for data collection, input, and analysis.
      //       </li>
      //       <li>
      //         Management of the Strategy elements and their characteristics.
      //       </li>
      //       <li>
      //         Project management mechanism for the effective implementation of
      //         the Strategy.
      //       </li>
      //       <li>Budget monitoring and reporting.</li>
      //       <li>
      //         Visualization of the Strategy implementation status for analysis
      //         and control.
      //       </li>
      //     </ol>
      //     <p>Take a deeper look:</p>
      //     <ol>
      //       <li>System event log to track all actions.</li>
      //       <li>
      //         Authentication and protection mechanisms against online threats.
      //       </li>
      //       <li>System object directories and documentation.</li>
      //     </ol>
      //     <p>
      //       "CyberTracker is an essential tool that helps to control and improve
      //       Ukraine's cybersecurity. Moreover, it allows for making informed
      //       management decisions and responding to cyber threats promptly and
      //       quickly, guaranteeing stability and security in the country's
      //       digital space.
      //     </p>
      //   </div>
      // ),
    },
    labels: {
      UA: [
        "Для держави",
        "CRM система",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "WIM-обладнання",
        "1к + користувачів",
      ],
      ENG: [
        "For the state",
        "CRM system",
        "Site",
        "Android",
        "iOS",
        "WEB application",
        "Online support",
        "WIM Hardware",
        "1k + users",
      ],
    },
  },
];
