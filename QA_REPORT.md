# Verification Report

4 November 2026, Asia/Riyadh. Developer checks only; no participant study is claimed.

## Passed locally in browser

- Navigation to all six core screens plus Concepts; empty Favorites and conversation guidance.
- Toyota search returned two seed listings. A nonsense query produced no-results guidance.
- Riyadh filter narrowed Toyota results to one. Electronics with max SAR 3,000 returned six.
- Ascending prices observed: 1,300; 1,750; 1,850; 2,100; 2,200; 2,800.
- Invalid minimum/maximum range produced a helpful error and focused maximum input. Reset restored results.
- Saved a car, opened Favorites, removed it and verified empty state.
- Opened Details, selected gallery image 2, started seller conversation, sent a message and observed automated reply.
- Empty posting form showed errors for category, city, title, description, price and image.
- Completed furniture form with sofa JPEG, observed image preview, reviewed, published and opened the created listing.
- Reload preserved custom listing and conversation; custom listing appeared on Home.
- Inspected accessible page states for all screens and visual screenshots for Home, Browse and Concepts.
- Homepage image checks returned complete/nonzero width. No console errors or warnings captured during checks.
- Node syntax/build validation passed; static output requires no compilation.

## Fixes

Preview cards no longer offer save/detail actions. Skip link focuses main without changing route. Category/city fields associate errors. Corrected listing text to match imagery; apartment image replaced with an interior. Source formatted for readability.

## Limits

Desktop measured 1440px without horizontal overflow. A narrow initial browser view was inspected, but explicit 390px and reset viewport requests continued reporting 1440px, so mobile/tablet breakpoint QA remains incomplete. Responsive CSS is included; real-device testing is recommended. No formal screen-reader audit, participant study or exhaustive upload/quota fault injection was performed. File limits and storage errors have implementation guards.

Deployment status and published-browser verification are reported in the delivery chat. The owner subsequently authorized updating the existing haraj-cs470-prototype repository and its Render site. The previous version remains in Git history. No unrelated repository or service was changed.
