"use client";

import Link from "next/link";
import { useState } from "react";
import { NOTES, NOTE_TOPICS, formatNoteDate, type NoteTopic } from "../../_data/practice";

/* The tag filter on /knowledge. Client side only for the chips: the list is
   in the static export in full, so the page reads without JavaScript and the
   chips narrow it when it loads. Same aria-pressed chips as the scope builder. */
export default function NotesList() {
  const [topic, setTopic] = useState<NoteTopic | "all">("all");
  const shown = topic === "all" ? NOTES : NOTES.filter((n) => n.topic === topic);

  return (
    <div>
      <div className="dft-chips dft-notes-filter" role="group" aria-label="Filter notes by topic">
        {NOTE_TOPICS.map((t) => (
          <button
            type="button"
            key={t.key}
            className="dft-chip"
            aria-pressed={topic === t.key}
            onClick={() => setTopic(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="dft-notes-index">
        {shown.map((n) => (
          <article key={n.href}>
            <div className="dft-notes-index-meta">
              <span className="dft-note-tag">{n.tag}</span>
              <span className="dft-label">{n.kind}</span>
            </div>
            <div>
              <h2>
                <Link href={n.href}>{n.title}</Link>
              </h2>
              <p>{n.summary}</p>
            </div>
            <div className="dft-notes-index-date">
              <time dateTime={n.updated ?? n.date}>{formatNoteDate(n.updated ?? n.date)}</time>
              {n.updated && <span className="dft-label">Updated</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
