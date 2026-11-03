# UX Design Notes — CS470

## Scope and inspection evidence

Reference inspection on 4 November 2026 (Saudi time):
- Original: https://haraj.com.sa/ — the accessible page exposed a search box, more than twenty top-level category links, additional subcategory links, a large region list, a mixed listing feed, and extensive footer links. This supports a design concern about simultaneous choices, not a claim that users failed tasks. No original-site usability metrics or complete accessibility audit were collected.
- Existing prototype: https://haraj-cs470-prototype.onrender.com/ — browser inspection showed a blue Arabic header, navigation to Home/Categories/Favorites/Messages/Add Listing, a search area with Riyadh selected, six category tiles, sample cards and a study disclaimer. These are useful foundations. Its mobile screenshot was inspected. A Categories click produced no visible change in the captured state; this isolated observation does not establish a general navigation defect.
- This redesign is an independent implementation. The owner later explicitly authorized replacing the existing prototype repository and its Render deployment with this redesign. Previous source remains in Git history.

## Concern → solution → principle → evaluation

| Concern and evidence level | Redesigned solution | UX/HCI principle | Demonstrate or evaluate |
|---|---|---|---|
| Observed: many top-level, subcategory and region choices appear in the original accessible page | Six product groups plus All; city selection in search; additional filters on Browse | Recognition rather than recall; progressive disclosure; reduced cognitive load | Ask a participant to find a Riyadh electronics listing without instructions; observe first action and hesitation |
| Proposed improvement: make price comparisons consistent; no comparative failure rate was measured | Repeated card anatomy: image, category, title, price/unit, city and fictional seller | Consistency; visual hierarchy; efficiency | Ask the participant to compare two listings and explain the annual rental unit |
| Observed strength: existing prototype already offers core navigation and an academic disclaimer | Preserve familiar navigation; add active destination and consistent screen links | Familiarity; conceptual mapping; visibility of system status | Ask participant to explain where they are and return to browsing |
| Proposed improvement: improve recoverability when filtering | Removable active chips, price-range validation, reset, result count and no-results guidance | User control; error recovery; feedback | Combine a category, city and unrealistic price range; ask participant to recover |
| Proposed improvement: reduce uncertainty before publishing | Grouped required fields, image previews, progress steps, explicit review/edit and success confirmation | Error prevention; closure; progressive disclosure | Attempt an empty submission; complete a valid ad; review and edit before publication |
| Proposed improvement: make saving predictable across screens | Shared favorites state, pressed indicators, count and dedicated empty screen | Consistency; immediate feedback; external cognition | Save a product, open Favorites, refresh, remove it and verify empty state |
| Proposed improvement: place seller contact in context | Product/seller information beside the contact action; conversation references its listing | Context preservation; natural mapping; trust through clarity | Open seller conversation from a product and identify which product is being discussed |
| Proposed improvement: support inclusive navigation | Arabic RTL, semantic controls, labels, visible focus, skip link, keyboard support and responsive grids | Accessibility; inclusiveness; flexibility of use | Complete browse/save/contact using keyboard; inspect at 390, 768 and 1440px |

## Usability and experience goals

Usability goals are effectiveness (complete browse/save/post/contact tasks), efficiency (few clear steps), learnability (familiar marketplace concepts), memorability (stable navigation), error prevention/recovery, and safe demonstration use. Experience goals are clarity, calmness, confidence and perceived control. These are design intentions, not measured outcomes.

## Design system

Primary blue #1763A6 retains the familiar marketplace association; neutral background #F6F8FA, dark text #20394A, green safety accent #176747. Noto Sans Arabic with system fallbacks; consistent 8–24px component spacing, 9–16px radii, thin borders and restrained shadows. Four desktop columns on Home, a sidebar plus three result columns on Browse, two-column Details. No testimonial claims or unverified trust badges. Seller profiles are explicitly fictional.

The UI/UX skill search recommended Arabic font pairing and general contrast/focus discipline. Its promotional testimonial pattern and purple palette were rejected because they did not fit this transactional brief.

## Cognitive load and feedback

Homepage prioritizes one search task, a short category row and eight recent cards. Price fields are on Browse rather than on Home. Posting separates data entry from review and confirmation. Filters remain visible as chips. Toasts acknowledge save, removal, filtering, sorting, image upload, publication and messages; errors appear near the relevant field. Photo selection disables review until processing completes. Empty states explain a next action.

## Accessibility

Arabic language and RTL are set at document level. Standard anchors/buttons/selects/inputs preserve browser keyboard interaction. Focus has a visible gold outline; the skip link focuses main content without changing the route. Inputs use labels; errors are associated with fields; status messages use a live region; images have alternative text. Decorative SVGs are hidden from assistive technology. Reduced-motion preference disables transitions. No color-only state indicators are required to understand an action. This is not a claim of formal WCAG certification; screen-reader testing with real assistive technology remains necessary.

## Main flows and screenshot locations

1. `#/` → search/category → `#/browse` → `#/listing/1` → save → `#/favorites`.
2. `#/browse` → city/category/price → apply → sort → remove chip/reset.
3. `#/add` → invalid submit → fill fields/upload → review → edit or publish → confirmation → new listing.
4. `#/listing/1` → contact → `#/messages/1` → send simulated message → automated reply.
5. `#/concepts` shows four conceptual layouts. See CONCEPTUAL_LAYOUTS.md for alternatives and rationale.

High-fidelity screenshot set: Home; filtered Browse; no-results; Details; Add errors; Add review; Add success; Favorites populated/empty; Messages populated/empty; conceptual layouts.

## Suggested real usability study

Recruit participants separately with appropriate consent. Do not use real seller details. Suggested tasks: find a Riyadh electronic item below SAR 3,000; change sorting; save and remove a listing; recover from no results; publish a furniture ad after encountering validation; contact a seller and send a simulated message. Record completion, errors, assistance, paths and think-aloud observations; optionally collect task time and satisfaction after tasks. Define success criteria before testing. Report only actual results and distinguish observed behavior from interpretation. No participants, interviews, survey responses or measured improvements are claimed here.
