import type { Metadata } from "next";
import Image from "next/image";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Business Card",
  robots: { index: false, follow: false },
};

export default function BusinessCardPage() {
  return (
    <>
      <style>{`
        body > nav, body > footer { display: none !important; }
        body { background: #d8d4cb !important; }
        main { padding: 0 !important; }
      `}</style>

      <style>{`
        @page { size: 2.25in 3.75in; margin: 0; }

        .bc-stage {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 3rem 1.5rem;
        }

        .bc-toolbar {
          display: flex;
          gap: .75rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          font-family: var(--font-overpass), system-ui, sans-serif;
          color: #222123;
        }
        .bc-toolbar button {
          background: #4c503b;
          color: #fff;
          border: 0;
          padding: .55rem 1.1rem;
          font: 500 .875rem var(--font-overpass), system-ui, sans-serif;
          letter-spacing: .03em;
          border-radius: 2px;
          cursor: pointer;
        }
        .bc-toolbar .meta {
          font-size: .75rem;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #4c503b;
        }

        .bc-cards {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .bc-card {
          width: 2.25in;
          height: 3.75in;
          position: relative;
          background: #efe7dd;
          box-shadow: 0 18px 40px rgba(34,33,35,.18), 0 2px 6px rgba(34,33,35,.08);
          overflow: hidden;
          font-family: var(--font-overpass), system-ui, sans-serif;
          color: #222123;
        }

        /* trim & safe zone guides — only on screen */
        .bc-card::before, .bc-card::after {
          content: "";
          position: absolute;
          inset: 0.125in;          /* trim line */
          border: 1px dashed rgba(34,33,35,.18);
          pointer-events: none;
        }
        .bc-card::after {
          inset: 0.25in;            /* safe zone */
          border-style: dotted;
          border-color: rgba(34,33,35,.10);
        }
        @media print {
          .bc-card::before, .bc-card::after { display: none; }
        }

        .bc-front-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 55%;
          background: #efe7dd;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.3in 0.2in 0.15in;
        }
        .bc-front-top img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .bc-front-bottom {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 45%;
          background: #4c503b;
          color: #efe7dd;
          padding: 0.22in 0.22in 0.28in;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.06in;
        }
        .bc-name {
          font-family: "Open Sauce Sans", var(--font-overpass), system-ui, sans-serif;
          font-weight: 600;
          font-size: 12.5pt;
          line-height: 1.1;
          letter-spacing: -0.005em;
          color: #ffffff;
        }
        .bc-title {
          font-family: var(--font-jost), system-ui, sans-serif;
          font-weight: 400;
          font-size: 6.5pt;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c5a682;
          margin-top: 0.02in;
        }
        .bc-rule {
          width: 0.4in;
          height: 1px;
          background: rgba(239,231,221,.45);
          margin: 0.08in 0;
        }
        .bc-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.04in;
          font-size: 8pt;
          letter-spacing: 0.01em;
        }
        .bc-contacts span {
          display: block;
          line-height: 1.25;
        }

        /* back side */
        .bc-back {
          background: #4c503b;
          color: #efe7dd;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4in;
          text-align: center;
        }
        .bc-back .tagline {
          font-family: var(--font-caveat), cursive;
          font-size: 22pt;
          line-height: 1.05;
          color: #efe7dd;
        }
        .bc-back .tagline em {
          font-style: normal;
          color: #c5a682;
        }
        .bc-back .domain {
          margin-top: 0.18in;
          font-family: var(--font-jost), system-ui, sans-serif;
          font-size: 7pt;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c5a682;
        }

        @media print {
          html, body { background: #fff !important; }
          .bc-stage { min-height: auto; padding: 0; gap: 0; }
          .bc-toolbar { display: none !important; }
          .bc-cards { gap: 0; flex-wrap: nowrap; }
          .bc-card { box-shadow: none; page-break-after: always; }
          .bc-card:last-child { page-break-after: auto; }
        }
      `}</style>

      <div className="bc-stage">
        <div className="bc-toolbar">
          <span className="meta">2&quot; × 3.5&quot; trim · 0.125&quot; bleed</span>
          <PrintButton />
        </div>

        <div className="bc-cards">
          {/* FRONT */}
          <div className="bc-card" aria-label="Front">
            <div className="bc-front-top">
              <Image
                src="/logo-landscape-black.png"
                alt="GPS Nutrition"
                width={1920}
                height={576}
                priority
              />
            </div>
            <div className="bc-front-bottom">
              <div className="bc-name">Gwen Ganske, CHN</div>
              <div className="bc-title">Registered Holistic Nutritionist</div>
              <div className="bc-rule" />
              <div className="bc-contacts">
                <span>gpsnutrition.ca</span>
                <span>gwen@gpsnutrition.ca</span>
                <span>403.505.0403</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="bc-card bc-back" aria-label="Back">
            <div>
              <div className="tagline">
                Simple nutrition <em>guidance</em><br />for real life.
              </div>
              <div className="domain">gpsnutrition.ca</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

