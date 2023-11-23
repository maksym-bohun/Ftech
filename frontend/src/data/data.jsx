import eRoadFull from "../assets/eRoadFull.png";
import eRoadPreview from "../assets/eRoadPreview.png";
import eChergaFull from "../assets/eChergaFull.png";
import eChergaPreview from "../assets/eChergaPreview.png";
import cyberTrackerFull from "../assets/cyberTrackerFull.png";
import cyberTrackerPreview from "../assets/cyberTrackerPreview.png";
import contactCenterKyivFull from "../assets/contactCenterKyivFull.png";
import mayorsServicePreview from "../assets/mayorsServicePreview.png";

export const projects = [
  // E-ROAD
  {
    urlName: "e-road",
    image: eRoadFull,
    imagePreview: eRoadPreview,
    headerPreview: { UA: "E-road", ENG: "E-road" },
    header: {
      UA: "«E-road» - підтримка інфраструктури автомобільних доріг",
      ENG: "«E-road» - підтримка інфраструктури автомобільних доріг",
    },
    headingSecondary: {
      UA: ` Управління та підтримка складних процесів будівництва та експлуатації
        автомобільних доріг вимагали системи, що спростить планування, контроль
        за процесами будівництва, та надасть можливість аналізувати та
        вдосконалювати робочі процеси.`,
      ENG: ` Управління та підтримка складних процесів будівництва та експлуатації
        автомобільних доріг вимагали системи, що спростить планування, контроль
        за процесами будівництва, та надасть можливість аналізувати та
        вдосконалювати робочі процеси.`,
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
                <li>CRM-система для обробки позаштатних ситуацій.</li>
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
                <li>CRM-система для обробки позаштатних ситуацій.</li>
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
    },
    labels: {
      UA: [
        "Для держави",
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "WIM-обладнання",
        "1к + користувачів",
      ],
      ENG: [
        "Для держави",
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "WIM-обладнання",
        "1к + користувачів",
      ],
    },
  },
  // Mayor's office
  {
    urlName: "служба-підримки-мера-києва",
    image: contactCenterKyivFull,
    imagePreview: mayorsServicePreview,
    headerPreview: {
      UA: "Служба мера Києва - 1551 CRM-система",
      ENG: "Service of the Mayor of Kyiv - 1551 CRM system",
    },
    header: {
      UA: "CRM-система «Служба мера Києва — 1551»",
      ENG: `The CRM system "Kyiv Mayor's Office - 1551"`,
    },
    headingSecondary: {
      UA: "CRM-система «Служба мера Києва —1551​​» створена для забезпечення ефективної взаємодії мешканців та гостей міста з міською владою. Заснована на моделі збору та обробки даних, вона спрямована на оптимізацію процесів реєстрації звернень, розподілу завдань та контролю їх виконання.",
      ENG: `The CRM system "Kyiv Mayor's Service -1551" is designed to ensure effective interaction between residents and guests of the city with the city administration. Based on the data collection and processing model, it aims to optimise the processes of registration of appeals, distribution of tasks, and control of their implementation.  `,
    },
    text: {
      UA: (
        <div>
          <h3>Особливості:</h3>
          <ul>
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

          <h3>Внесок у розвиток:</h3>
          <ul>
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

          <h3>Технічні деталі:</h3>
          <ul>
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
          <h3>Результати:</h3>
          <ul>
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
            CRM-система «Служба мера Києва — 1551» є важливим кроком у створенні
            надійної комунікації між мешканцями та міською владою. Створона
            система дозволяє реєструвати звернення від мешканців та гостей
            міста, які оператори перевіряють та автоматично направляють для
            виконання в служби міста. Заявки можна подавати через телефон,
            додаток, веб-сайт або чат-ботів. Кожного дня в систему надходить від
            10 до 40 тисяч звернень, які контролює спеціальна група. Крім того,
            система інформує заявників про роботи та зміни у статусі їх звернень
            через різні канали зв'язку.
          </p>
        </div>
      ),
      ENG: (
        <div>
          <h3>Features:</h3>
          <ul>
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

          <h3>Development impact:</h3>
          <ul>
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

          <h3>Tech details:</h3>
          <ul>
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
          <h3>Results:</h3>
          <ul>
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
            The CRM system "Kyiv Mayor's Service 1551" is a significant move
            towards creating reliable communication between residents and city
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
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
      ENG: [
        "Для держави",
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
    },
  },
  // E-CHERGA
  {
    urlName: "є-черга",
    image: eChergaFull,
    imagePreview: eChergaPreview,
    headerPreview: {
      UA: "Агенство відновлення - є-черга",
      ENG: "Recovery agency - e-черга",
    },
    header: {
      UA: `Електронна Черга: швидкий перетин кордону`,
      ENG: `eQueue: fast border crossing`,
    },
    headingSecondary: {
      UA: `CRM-система «Електронна Черга» призначена для оптимізації та поліпшення процесів перетину кордону для водіїв вагового транспорту на державному кордоні України. Система забезпечує ефективну організацію черги, моніторинг руху та прогнозування часу перетину, а також уніфікує правила роботи прикордонних пунктів пропуску.
      `,
      ENG: `The eQueue CRM system is designed to optimize and improve border crossing processes for drivers of heavy vehicles at the state border of Ukraine. The system ensures efficient queue management, traffic monitoring, and forecasting of crossing times, and unifies border checkpoints' operation rules.
      `,
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
              Основні характеристики:
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
                <li>CRM-система для обробки позаштатних ситуацій.</li>
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
          <h3>Core features:</h3>
          <ul>
            <li>
              Efficient queue management: drivers can monitor queue movement and
              predict crossing times.
            </li>
            <li>
              Increased transparency and systematization of rules: ensuring
              uniform standards of operation of border crossing points.
            </li>
          </ul>
          <h3>Amazing result:</h3>
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
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
      ENG: [
        "Для держави",
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
    },
  },
  // CYBER TRACKER
  {
    urlName: "cyber-tracker",
    image: cyberTrackerFull,
    imagePreview: cyberTrackerPreview,
    headerPreview: {
      UA: "нкцк - Національна система кібербезпеки",
      ENG: "нкцк - Національна система кібербезпеки",
    },
    header: {
      UA: `НКЦК - НАЦІОНАЛЬНА СИСТЕМА КІБЕРБЕЗПЕКИ`,
      ENG: `НКЦК - НАЦІОНАЛЬНА СИСТЕМА КІБЕРБЕЗПЕКИ`,
    },
    headingSecondary: {
      UA: `CRM-система «Електронна Черга» призначена для оптимізації та поліпшення процесів перетину кордону для водіїв вагового транспорту на державному кордоні України. Система забезпечує ефективну організацію черги, моніторинг руху та прогнозування часу перетину, а також уніфікує правила роботи прикордонних пунктів пропуску.
      `,
      ENG: `The eQueue CRM system is designed to optimize and improve border crossing processes for drivers of heavy vehicles at the state border of Ukraine. The system ensures efficient queue management, traffic monitoring, and forecasting of crossing times, and unifies border checkpoints' operation rules.
      `,
    },
    text: {
      UA: (
        <div>
          <h3>Основні характеристики:</h3>
          <ul>
            <li>
              Ефективне управління чергою: водії можуть контролювати рух черги
              та прогнозувати час перетину.
            </li>
            <li>
              Підвищена прозорість та систематизація правил: забезпечення
              однакових стандартів роботи прикордонних пунктів пропуску.
            </li>
          </ul>
          <h3>Вражаючий результат:</h3>
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
          <h3>Core features:</h3>
          <ul>
            <li>
              Efficient queue management: drivers can monitor queue movement and
              predict crossing times.
            </li>
            <li>
              Increased transparency and systematization of rules: ensuring
              uniform standards of operation of border crossing points.
            </li>
          </ul>
          <h3>Amazing result:</h3>
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
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
      ENG: [
        "Для держави",
        "CRM cистема",
        "Сайт",
        "Android",
        "iOS",
        "WEB-додаток",
        "Онлайн підтримка",
        "Чат боти",
        "10к + користувачів",
      ],
    },
  },
];
