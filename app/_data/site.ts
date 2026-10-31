/* Site wide identifiers shared by the JSON-LD graphs in the two root layouts
   and the pages that reference their nodes. Kept out of the layout files
   because a layout should only export what Next expects from it. */

export const SITE = "https://daftaradvisory.com";
export const ORG_ID = `${SITE}/#organization`;
export const PERSON_ID = `${SITE}/about#ahmad-al-hinaiti`;
export const WEBSITE_ID = `${SITE}/#website`;
export const LINKEDIN = "https://linkedin.com/in/ahmad-alhinaiti";

/* Google Fonts, loaded as a <link> in both root layouts rather than the
   @import globals.css used to carry: an @import is only discovered once the
   stylesheet has parsed, which put the webfonts a full round trip later on
   the critical path. Lora and Plus Jakarta Sans are for the Calibre mark on
   the home band only (CLAUDE.md §4). */
export const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,0..100;1,9..144,300..700,0..100&family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Lora:ital,wght@1,500&family=Plus+Jakarta+Sans:wght@600&display=swap";
