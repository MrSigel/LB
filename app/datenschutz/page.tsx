import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung" intro="Stand: Juli 2026">
      <h2>Verantwortliche Stelle</h2>
      <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:</p>
      <address>
        Limitbreakers EOOD
        <br />
        Dr. Maya Neidenowa
        <br />
        Shipka 36
        <br />
        1504 Sofia, Bulgarien
        <br />
        E-Mail: <a href="mailto:info@limit-breakers.eu">info@limit-breakers.eu</a>
        <br />
        Telefon: <a href="tel:+359895500755">+359 895 500 755</a>
      </address>

      <h2>Rechtsgrundlagen der Verarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten auf Grundlage von Artikel 6 Absatz
        1 Buchstabe f DSGVO (berechtigtes Interesse am sicheren und
        funktionsfähigen Betrieb dieser Website) sowie, bei einer Anfrage über
        unser Kontaktformular, auf Grundlage von Artikel 6 Absatz 1 Buchstabe b
        DSGVO (Durchführung vorvertraglicher Maßnahmen).
      </p>

      <h2>Erfassung allgemeiner Informationen</h2>
      <p>
        Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen
        allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles)
        beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem,
        die aufgerufene Seite, den Zeitpunkt des Zugriffs und die IP-Adresse.
        Diese Daten sind technisch notwendig, um die angeforderten Inhalte
        korrekt auszuliefern, und fallen bei der Nutzung des Internets zwingend
        an. Sie dienen ausschließlich dem sicheren Betrieb und der Abwehr von
        Angriffen. Eine Zusammenführung mit anderen Datenquellen findet nicht
        statt, und wir werten diese Daten nicht aus, um Rückschlüsse auf Ihre
        Person zu ziehen.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei der Vercel Inc., USA, gehostet. Vercel verarbeitet
        die oben genannten Server-Logfiles in unserem Auftrag als
        Auftragsverarbeiter im Sinne von Artikel 28 DSGVO. Dabei kann es zu einer
        Übermittlung von Daten in die USA kommen; diese ist durch die
        vertraglichen Vereinbarungen mit Vercel abgesichert.
      </p>

      <h2>Cookies</h2>
      <p>
        <strong>Diese Website setzt keine Cookies.</strong> Wir verwenden weder
        Analyse- noch Tracking- oder Marketing-Cookies und binden keine Dienste
        ein, die Cookies setzen. Aus diesem Grund benötigen wir auch kein
        Cookie-Banner und holen keine Einwilligung ein.
      </p>

      <h2>Keine Analyse- und Trackingdienste</h2>
      <p>
        Wir setzen auf dieser Website bewusst keine Webanalyse-, Tracking- oder
        Remarketing-Dienste ein. Es findet insbesondere keine Nutzung von Google
        Analytics, Matomo, Adobe Analytics, Google Ads, Google Remarketing,
        Zählpixeln oder vergleichbaren Verfahren statt. Es werden keine
        Nutzungsprofile erstellt.
      </p>

      <h2>Schriftarten</h2>
      <p>
        Die auf dieser Website verwendete Schriftart wird ausschließlich von
        unserem eigenen Server ausgeliefert. Es besteht dabei keine Verbindung zu
        Servern Dritter, insbesondere nicht zu Google Fonts oder Adobe Typekit.
        Ihre IP-Adresse wird also nicht an Anbieter von Schriftbibliotheken
        übermittelt.
      </p>

      <h2>SSL-/TLS-Verschlüsselung</h2>
      <p>
        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden
        wir dem aktuellen Stand der Technik entsprechende
        Verschlüsselungsverfahren über HTTPS.
      </p>

      <h2>Kontaktformular und Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
        verarbeiten wir die von Ihnen gemachten Angaben – Vorname, Nachname,
        E-Mail-Adresse und den Inhalt Ihrer Nachricht – ausschließlich zur
        Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
      </p>
      <p>
        Die Angaben aus dem Formular werden per E-Mail an uns übermittelt und in
        unserem Postfach gespeichert. Eine Weitergabe an Dritte zu anderen
        Zwecken findet nicht statt. Wir speichern die Daten, bis Ihre Anfrage
        abschließend bearbeitet ist, sofern keine gesetzlichen
        Aufbewahrungsfristen entgegenstehen. Sie können der Speicherung jederzeit
        für die Zukunft widersprechen.
      </p>
      <p>
        Zum Schutz vor automatisierten Einsendungen enthält das Formular ein für
        Sie unsichtbares Zusatzfeld. Weitere Daten werden dabei nicht über Sie
        erhoben.
      </p>

      <h2>Links zu sozialen Netzwerken</h2>
      <p>
        In unserem Seitenfuß finden Sie Verweise auf Profile in sozialen
        Netzwerken. Dabei handelt es sich um einfache Links, nicht um
        eingebettete Plugins. Es werden also keine Daten an die Betreiber
        übertragen, solange Sie einen dieser Links nicht selbst anklicken. Erst
        nach dem Klick gelten die Datenschutzbestimmungen des jeweiligen
        Anbieters.
      </p>

      <h2>Löschung von Daten</h2>
      <p>
        Wir halten uns an die Grundsätze der Datenvermeidung und
        Datensparsamkeit. Wir speichern Ihre personenbezogenen Daten daher nur so
        lange, wie dies zur Erreichung der hier genannten Zwecke erforderlich ist
        oder wie es gesetzliche Aufbewahrungsfristen vorsehen. Nach Wegfall des
        jeweiligen Zwecks bzw. Ablauf dieser Fristen werden die entsprechenden
        Daten routinemäßig gelöscht.
      </p>

      <h2>Ihre Rechte</h2>
      <p>Sie haben nach der DSGVO jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Artikel 15)</li>
        <li>Berichtigung unrichtiger Daten (Artikel 16)</li>
        <li>Löschung Ihrer Daten (Artikel 17)</li>
        <li>Einschränkung der Verarbeitung (Artikel 18)</li>
        <li>Datenübertragbarkeit (Artikel 20)</li>
        <li>
          Widerspruch gegen die Verarbeitung, soweit diese auf einem berechtigten
          Interesse beruht (Artikel 21)
        </li>
      </ul>
      <p>
        Haben Sie in eine Verarbeitung eingewilligt, können Sie diese
        Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Für die
        Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
        <a href="mailto:info@limit-breakers.eu">info@limit-breakers.eu</a>.
      </p>

      <h2>Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Unbeschadet anderer Rechtsbehelfe steht Ihnen nach Artikel 77 DSGVO ein
        Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Für uns
        zuständig ist die bulgarische Datenschutzbehörde (Kommission für den
        Schutz personenbezogener Daten, Sofia). Sie können sich auch an die
        Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts wenden.
      </p>

      <h2>Änderung dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt
        dann die neue Datenschutzerklärung.
      </p>

      <h2>Fragen zum Datenschutz</h2>
      <p>Wenn Sie Fragen zum Datenschutz haben, erreichen Sie uns unter:</p>
      <address>
        Telefon: <a href="tel:+359882248211">+359 88 224 8211</a>
        <br />
        E-Mail: <a href="mailto:info@limit-breakers.eu">info@limit-breakers.eu</a>
      </address>
    </LegalLayout>
  );
}
