import mayorsService from "../assets/mayorsService.svg";
import kiberSecurity from "../assets/kiberSecurity.svg";
import eCherga from "../assets/eCherga.svg";
import eRoad from "../assets/eRoad.svg";
import eRoadFull from "../assets/eRoadFull.png";
import contactCenterKyivFull from "../assets/contactCenterKyivFull.png";

export const projects = [
  {
    urlName: "e-road",
    image: eRoadFull,
    header: "«E-road» - підтримка інфраструктури автомобільних доріг",
    headingSecondary: ` Управління та підтримка складних процесів будівництва та експлуатації
        автомобільних доріг вимагали системи, що спростить планування, контроль
        за процесами будівництва, та надасть можливість аналізувати та
        вдосконалювати робочі процеси.`,
    text: (
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
                Збір і пріоритезація об'єктів для ремонту та будівництва доріг з
                використанням експертної думки та автоматизованих систем.
              </li>
              <li>Формування планів у залежності від фінансування.</li>
            </ul>
          </li>
          <li>
            Систему супроводження ремонтних робіт:{" "}
            <ul className="dashed">
              <li>
                Контроль за етапами ремонту та контроль якості виконання робіт.
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
          виконання основних завдань і процесів у сфері обслуговування дорожньої
          інфраструктури. Це включає прийом та реєстрацію звернень, визначення
          стану доріг, передачу звернень на виконавців, а також аналіз та
          контроль за даними про перевезення вантажу.
        </p>
        <p>
          В рамках воєнного стану Платформа «E-road» має на меті розширити
          функціонал, спростивши користування для укладання договорів на
          будівництво та експлуатацію WIM, а також формування звітів та
          динамічного відображення інформації.
        </p>
      </div>
    ),
    labels: [
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
  {
    urlName: "служба-підримки-мера-києва",
    image: contactCenterKyivFull,
    header: "Служба мера Києва - 1551 CRM-система",
    headingSecondary:
      "Дозволяє взаємодіяти з заявниками (мешканцями та гостями міста) реєструвати звернення, розподіляти доручення на виконання, контролювати їх виконання",
    text: (
      <div>
        <p>
          It was March 2020, and Moreno Valley faced the daunting challenge: how
          do you move at the “Speed of Business” during a once-in-a-lifetime
          pandemic and implementa long-term, innovative digital plan solution?
          City Hall was closed to the public, and employees were understandably
          preoccupied with their families’ health and well-being. Protocols kept
          changing, and uncertainty became the norm.
        </p>
        <p>
          While it seemed like the world was shutting down, the City refused to
          stop doing business and refused to stop innovating. That March, the
          Building & Safety Division experienced a 15 percent increase in plan
          check activity and a 20 percent increase in Certificates of Occupancy.
          The Planning Division also reported a 58 percent increase in
          applications, and the numbers continued to climb.
        </p>
        <p>
          The pandemic exposed an existing issue: the process of paper plan
          submittal and review was archaic and tedious. Each review process
          cycle was expensive and time consuming, costing weeks in time and
          thousands of dollars for all parties involved and the mountains of
          paper plans that had to be printed, stamped, folded, transported, and
          warehoused at City Hall generated a costly eyesore. Moreno Valley
          needed a better solution to allow employees to work more quickly,
          safely, efficiently, and remotely, if necessary.
        </p>
        <p>
          The City prides itself on providing exceptional customer care by
          questioning the status quo and challenging the notion of “But that’s
          how we have always done it.” Moreno Valley approaches process
          improvement methodically and thoroughly, squarely focused on nimble
          solutions, and thus able to quickly evolve and adapt.
        </p>
        <p>
          It was clear Moreno Valley would benefit from a full-featured virtual
          service counter with electronic validation of submitted plans,
          automated notifications, a simplified feedback method, and real-time
          project status availability to allow projects to process more quickly.
          Along with the benefits to the customers and staff, City management
          needed improved reporting capabilities to evaluate and measure
          efficiencies, review times, and project timelines more accurately.
        </p>
        <p>
          The goals were ambitious even without a pandemic. To create a
          pandemic-proof solution and provide all its customers with the benefit
          of round-the-clock access, the City had to quickly develop a solution
          that would be easily accepted and welcomed by all its customers.
        </p>
      </div>
    ),
    labels: [
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
];
