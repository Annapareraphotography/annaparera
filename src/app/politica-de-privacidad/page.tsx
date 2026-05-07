import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Anna Parera',
  description: 'Política de privacidad y protección de datos de Anna Parera Photography.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950 py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="font-serif font-light text-neutral-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
            Última actualización: Mayo 2026
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="space-y-8 md:space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                1. Información General
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  En Anna Parera Photography respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad describe cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios de fotografía.
                </p>
                <p>
                  De acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD) de España, Anna Parera Photography es el responsable del tratamiento de sus datos personales.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                2. Datos que Recopilamos
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Podemos recopilar los siguientes tipos de información personal:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre completo y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Fecha del evento (para servicios de fotografía)</li>
                  <li>Ubicación del evento</li>
                  <li>Cualquier otra información que nos proporcione voluntariamente al contactarnos</li>
                </ul>
                <p>
                  También recopilamos información técnica automáticamente cuando visita nuestro sitio web, como su dirección IP, tipo de navegador, páginas visitadas y duración de la visita.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                3. Cómo Utilizamos sus Datos
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Utilizamos la información recopilada para los siguientes fines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responder a sus consultas y solicitudes de información</li>
                  <li>Gestionar y coordinar servicios de fotografía contratados</li>
                  <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
                  <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
                  <li>Cumplir con obligaciones legales y fiscales</li>
                  <li>Enviar información promocional (solo con su consentimiento previo)</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                4. Base Legal para el Tratamiento
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Procesamos sus datos personales basándonos en:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consentimiento:</strong> Cuando nos proporciona sus datos voluntariamente a través de formularios de contacto</li>
                  <li><strong>Ejecución del contrato:</strong> Para prestar los servicios de fotografía que ha contratado</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y mantener la seguridad de nuestro sitio web</li>
                  <li><strong>Obligación legal:</strong> Para cumplir con requisitos legales, fiscales y contables</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                5. Compartir Información
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  No vendemos, alquilamos ni compartimos sus datos personales con terceros con fines comerciales. Podemos compartir su información solo en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, procesamiento de pagos, servicios de correo electrónico)</li>
                  <li>Cuando sea requerido por ley o autoridades competentes</li>
                  <li>Para proteger nuestros derechos legales o la seguridad de terceros</li>
                  <li>Con su consentimiento explícito para fines específicos</li>
                </ul>
                <p>
                  Todos los terceros con los que compartimos datos están obligados contractualmente a proteger su información y solo pueden usarla de acuerdo con nuestras instrucciones.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                6. Derechos del Fotógrafo sobre las Imágenes
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Como fotógrafa profesional, retengo los derechos de autor sobre todas las fotografías realizadas. Los clientes reciben una licencia de uso personal para las imágenes contratadas. El uso de las fotografías en nuestro sitio web, redes sociales y materiales promocionales se realiza con el consentimiento previo de los clientes.
                </p>
                <p>
                  Si aparece en alguna fotografía de nuestro portfolio y desea que sea eliminada, por favor contáctenos y procederemos a su eliminación inmediata.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                7. Seguridad de los Datos
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Uso de conexiones seguras (HTTPS/SSL)</li>
                  <li>Almacenamiento seguro de datos</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Copias de seguridad regulares</li>
                  <li>Formación del personal en protección de datos</li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                8. Conservación de Datos
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Conservamos sus datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consultas:</strong> Hasta 2 años después de la última comunicación</li>
                  <li><strong>Clientes:</strong> Durante la relación contractual y hasta 6 años después para obligaciones fiscales y contables</li>
                  <li><strong>Marketing:</strong> Hasta que retire su consentimiento</li>
                  <li><strong>Fotografías del portfolio:</strong> Mientras tengamos su consentimiento o hasta que solicite su eliminación</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                9. Sus Derechos
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  De acuerdo con el RGPD y la LOPDGDD, usted tiene los siguientes derechos:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                  <li><strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos</li>
                  <li><strong>Derecho de limitación:</strong> Restringir el procesamiento de sus datos</li>
                  <li><strong>Derecho de portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                  <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de sus datos</li>
                  <li><strong>Derecho a retirar el consentimiento:</strong> En cualquier momento</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puede contactarnos en annaparera@annaparera.com. Responderemos a su solicitud en un plazo máximo de un mes.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                10. Cookies
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Nuestro sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para mejorar la experiencia del usuario. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio web.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                11. Cambios en la Política de Privacidad
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con una fecha de actualización revisada. Le recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos su información.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-serif font-light text-neutral-900 dark:text-white text-2xl md:text-3xl tracking-tight mb-4">
                12. Contacto
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos personales, puede contactarnos:
                </p>
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-6 mt-4">
                  <p className="font-medium text-neutral-900 dark:text-white mb-2">Anna Parera Photography</p>
                  <p>Email: annaparera@annaparera.com</p>
                  <p>Teléfono: +34 697 63 93 57</p>
                  <p>Barcelona, España</p>
                </div>
                <p className="mt-4">
                  También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente.
                </p>
              </div>
            </section>
          </div>
        </article>

        {/* Back to home link */}
        <div className="mt-12 md:mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
          >
            <span className="block h-[1px] w-8 bg-neutral-400"></span>
            <span>Volver al inicio</span>
            <span className="block h-[1px] w-8 bg-neutral-400"></span>
          </a>
        </div>
      </div>
    </main>
  );
}
