export default function FAQ() {
  return (
    <div id="faq" className="relative w-full bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 px-10 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            Вопросы-Ответы
          </h2>
          <p className="mt-3 text-lg md:text-xl">это спрашивают чаще всего</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Что такое QR-код?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                QR-код (Quick Response Code) — это двумерный штрихкод, который
                позволяет быстро считывать информацию с помощью камеры смартфона
                или сканера. Внутри QR-кода могут содержаться ссылки, тексты,
                контакты или другая полезная информация.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Какие данные можно закодировать в QR-коде?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                Вы можете закодировать :<br />
                ✔️ Ссылку (URL) <br />
                ✔️ Текст (сообщения, контакты, заметки) <br />
                ✔️ Email-адрес
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Как скачать QR-код?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                После генерации вы можете скачать QR-код в двух форматах:
                <br />
                🔹 PNG — подходит для веб-использования и документов.
                <br />
                🔹 SVG — векторный формат, который можно масштабировать без
                потери качества.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Сколько времени хранится QR-код?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                Вечно. QR-код не хранится на сервере, так как генерируется прямо
                в вашем браузере. Вы можете сохранить его на свой компьютер и
                использовать без ограничений.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Можно ли отсканировать QR-код, если он напечатан?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                Да! Главное, чтобы QR-код был четким, не размытым и с хорошим
                контрастом. Лучше печатать его на белом фоне с темным кодом для
                лучшей читаемости.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Можно ли изменить цвет QR-кода?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                Да, вы можете выбрать цвет самого QR-кода и фон, чтобы настроить
                его под свой стиль. Однако не рекомендуем делать цвет QR-кода
                светлее, чем фон, иначе он может быть нечитаемым.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>Какой максимальный размер QR-кода я могу создать?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3">
                Максимальный размер QR-кода для формата PNG в нашем генераторе —
                2000×2000 пикселей. Вы можете выбрать размер 500px, 1000px или
                2000px при генерации. Для формата SVG размер значения не имеет,
                он масштабируется без потери качества.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
