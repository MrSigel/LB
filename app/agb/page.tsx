import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "AGB – Limit Breakers",
  robots: { index: false, follow: true },
};

export default function AgbPage() {
  return (
    <LegalLayout
      title="Allgemeine Geschäftsbedingungen für das Limitbreakers Leadprogramm"
      intro="Stand: Januar 2026"
    >
      <p className="lead">
        Mit der Bestellung von Leads über das Limitbreakers Leadprogramm
        akzeptiert der Partner die nachfolgenden Allgemeinen Geschäftsbedingungen
        („AGB“). Soweit personenbezogene Bezeichnungen nur in männlicher Form
        verwendet werden, sind diese geschlechtsneutral zu verstehen.
      </p>
      <p>
        Diese AGB können jederzeit auf der Website von Limitbreakers eingesehen,
        gespeichert und ausgedruckt werden. Individuelle Vereinbarungen haben
        Vorrang, bedürfen jedoch der Schriftform.
      </p>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        1.1 Diese AGB regeln die Teilnahme am Leadprogramm der Limitbreakers
        EOOD, Shipka 36, BG-1504 Sofia, Bulgarien (nachfolgend „Limitbreakers“),
        für Partnerunternehmen, die qualifizierte Leads für Wärmepumpen und
        Photovoltaik-Anlagen beziehen.
      </p>
      <p>
        1.2 Das Programm richtet sich ausschließlich an Unternehmer im Sinne von
        § 14 BGB. Verbraucher sind ausgeschlossen. Das Programm gilt für das
        Gebiet Deutschland, Schweiz und Österreich.
      </p>
      <p>
        1.3 Eigene AGB des Partners gelten nur, wenn Limitbreakers ihnen
        ausdrücklich und schriftlich zustimmt.
      </p>

      <h2>§ 2 Vertragsgegenstand</h2>
      <p>
        2.1 Limitbreakers EOOD generiert Leads über zwei unterschiedliche Wege:
        telefonische Akquise und Online-Generierung. Bei Leads, die über
        telefonische Akquise (Callcenter) generiert werden, erfolgt eine
        telefonische Vorqualifizierung. Bei Leads, die online generiert werden,
        erfolgt die Vorqualifizierung ausschließlich über das Online-Formular.
        Eine telefonische Vorqualifizierung findet bei online generierten Leads
        nicht statt. Die Leads werden anschließend weiter qualifiziert und
        geprüft. Gegenstand des Vertrages ist ausschließlich die Lieferung
        qualifizierter Leads.
      </p>
      <p>
        2.2 Limitbreakers EOOD schuldet weder das Zustandekommen eines Vertrages
        zwischen Partner und Endkunde noch einen bestimmten Umsatz oder Erfolg.
      </p>
      <p>
        2.3 Jede Bestellung ist eine einmalige Bestellung. Es handelt sich um
        kein Abonnement-Modell. Sobald die bestellten Leads vollständig geliefert
        wurden, endet der jeweilige Vertrag automatisch. Sofern eine erneute
        Belieferung gewünscht wird, muss eine neue Bestellung aufgegeben werden.
        Es gibt keine Dauerverträge oder automatischen Verlängerungen.
      </p>

      <h2>§ 3 Lead-Inhalte und Qualifizierung</h2>
      <p>
        Leads enthalten die im Bestellformular abgefragten Daten. Sie werden
        telefonisch geprüft und mit einem internen KI-Scoringsystem bewertet.
        Leads gelten als geliefert, sobald sie digital übermittelt wurden.
      </p>

      <h2>§ 4 Exklusivität</h2>
      <p>
        Gelieferte Leads sind exklusiv für den Partner. Eine Weitergabe,
        Mehrfachvermarktung oder Nutzung durch Dritte ist untersagt. Die
        Exklusivität gilt für 12 Wochen ab Übergabe.
      </p>

      <h2>§ 5 Bestell- und Lieferprozess</h2>
      <p>
        Bestellungen erfolgen ausschließlich über das folgende Formular:{" "}
        <a
          href="https://limit-breakers.bitrix24.site/crm_form_yzmzn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          limit-breakers.bitrix24.site
        </a>
      </p>
      <p>
        Die Lieferung erfolgt per E-Mail (PDF und CSV) oder auf Wunsch per API.
        Der Partner ist für die Prüfung des korrekten Datenempfangs selbst
        verantwortlich.
      </p>
      <p>
        Hinweis zur Lieferzeit: Die Lieferung der Leads ist regions- und
        gebietsabhängig. Da Limitbreakers keine klassische Lead-Agentur ist, die
        ein festes Budget in eine bestimmte Region einsetzt, kann die
        Bearbeitungs- und Lieferdauer je nach Nachfrage und Gebiet variieren und
        unter Umständen länger dauern.
      </p>

      <h2>§ 6 Preise und Zahlungsbedingungen</h2>
      <p>6.1 Preise werden individuell vereinbart.</p>
      <p>6.2 Limitbreakers EOOD arbeitet ausschließlich auf Guthabenbasis.</p>

      <h2>§ 7 Stornierung und Rückabwicklung</h2>
      <p>7.1 Eine Bestellung kann nicht rückgängig gemacht oder storniert werden.</p>
      <p>
        7.2 Es besteht kein Anspruch auf eine Rückabwicklung der Bestellung oder
        eine Rückforderung des gezahlten Betrags.
      </p>
      <p>
        7.3 Bereits gelieferte Leads sind vom Umtausch und von der Rückerstattung
        ausgeschlossen.
      </p>

      <h2>§ 8 Reklamationen und Gewährleistung</h2>
      <p>
        8.1 Reklamationen sind innerhalb von 7 Werktagen nach Lieferung per
        E-Mail an <a href="mailto:info@limit-breakers.eu">info@limit-breakers.eu</a>{" "}
        möglich.
      </p>
      <p>8.2 Berechtigte Reklamationen werden durch Ersatz-Leads ausgeglichen.</p>
      <p>
        Für beide Lead-Generierungswege (telefonische Akquise und
        Online-Generierung) gelten dieselben Reklamationsbedingungen.
      </p>
      <p>8.3 Der Endkunde (Lead) kann sein Interesse stornieren, sofern:</p>
      <ul>
        <li>
          er trotz mindestens 9 nachweislicher Kontaktversuche nicht erreichbar
          ist (auf Nachfrage von Limitbreakers ist eine Anrufliste mit
          entsprechendem Nachweis zu übermitteln), oder
        </li>
        <li>
          der Endkunde ausdrücklich erklärt, kein Interesse mehr an einem Angebot
          zu haben.
        </li>
      </ul>

      <h2>§ 9 Pflichten des Partners</h2>
      <p>
        Der Partner verpflichtet sich, die Leads zeitnah und professionell zu
        bearbeiten, ausschließlich für die eigene Vertriebsarbeit zu nutzen, alle
        datenschutzrechtlichen Vorgaben einzuhalten und Marken von Limitbreakers
        nur mit schriftlicher Genehmigung zu verwenden.
      </p>

      <h2>§ 10 Datenschutz</h2>
      <p>
        Die übermittelten Daten dürfen vom Partner ausschließlich zum Zweck der
        Bearbeitung der jeweiligen Lead-Anfrage und – falls ein Auftrag zustande
        kommt – zur Vertragserfüllung genutzt werden. Eine Weitergabe an Dritte
        ist nicht gestattet.
      </p>

      <h2>§ 11 Haftung</h2>
      <p>
        11.1 Limitbreakers EOOD haftet nur für berechtigte Reklamationen durch
        Ersatzleads.
      </p>
      <p>
        11.2 Eine Haftung für den tatsächlichen Vertragsabschluss oder den
        wirtschaftlichen Erfolg des Partners ist ausgeschlossen.
      </p>
      <p>
        11.3 Bei Inanspruchnahme wegen Pflichtverletzungen zwischen Partner und
        Endkunde stellt der Partner Limitbreakers EOOD von allen Ansprüchen frei.
      </p>

      <h2>§ 12 Änderungen der AGB und Preisanpassungen</h2>
      <p>
        Änderungen dieser AGB oder der Preise werden dem Partner per E-Mail
        mitgeteilt. Widerspricht der Partner nicht innerhalb von vier Wochen,
        gelten die Änderungen als angenommen.
      </p>

      <h2>§ 13 Vertragslaufzeit und Kündigung</h2>
      <p>
        Jede Bestellung stellt einen separaten Vertrag dar. Die Teilnahme am
        Leadprogramm kann jederzeit ohne Frist per E-Mail beendet werden.
      </p>

      <h2>§ 14 Schlussbestimmungen</h2>
      <p>14.1 Es gilt ausschließlich bulgarisches Recht.</p>
      <p>14.2 Gerichtsstand für alle Streitigkeiten ist Sofia, Bulgarien.</p>
      <p>
        14.3 Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die
        Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen
        Bestimmung tritt eine wirksame Regelung, die dem wirtschaftlichen Zweck
        am nächsten kommt.
      </p>

      <h2>Widerrufsrecht</h2>
      <p>
        Das Leadprogramm richtet sich nach § 1.2 dieser AGB ausschließlich an
        Unternehmer; Verbraucher sind von der Teilnahme ausgeschlossen. Ein
        gesetzliches Widerrufsrecht für Verbraucher besteht daher nicht. Für die
        Stornierung und Rückabwicklung von Bestellungen gilt ausschließlich § 7.
      </p>

      <address>
        Limitbreakers EOOD
        <br />
        Shipka 36, BG-1504 Sofia, Bulgarien
        <br />
        E-Mail: <a href="mailto:info@limit-breakers.eu">info@limit-breakers.eu</a>
      </address>
    </LegalLayout>
  );
}
