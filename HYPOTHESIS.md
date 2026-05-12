# EDI Central Tracking — Operations (vendor ops)

## Requirements source
- **HLR (authoritative for this build):** `C:\Users\99834576\.cursor\HLR-edi-central-tracking-operational-tool.md` (also mirrored under this kit’s retailer prototype folder where applicable).
- **Companion reference UI:** `prototypes/edi-central-tracker/` (retailer-facing patterns: BEES shell, filters, table, drawer, item page).

## Hypothesis
> Vendor operations teams resolve EDI pipeline failures faster when triage, rule diagnostics, bulk reprocess (with safeguards), resolution notes, sales coordination, and operational health signals live in one internal tool aligned with the same six-state taxonomy as the retailer tracker.

## Variant
**A** — Desktop-dense ops queue + extended filters (90-day window) + item-level rule ID/diagnostic copy + `#health` operational summary (mock aggregates).

## Target audience
Vendor operations analysts and managers (internal / vendor portal context — not retailers).

## Success metrics
| Metric | Source event(s) | Target (for tests) |
|---|---|---|
| **Triage depth** | `row-open-items` / sessions with `pageview` on `#orders` | ≥ 40% of sessions open ≥ 1 order item page |
| **Ops filter use** | `filters_applied_explicit` / sessions | ≥ 70% of sessions apply ≥ 1 structured filter |
| **Bulk workflow** | `bulk_select_all_filtered` or `bulk_reprocess_completed` | ≥ 25% of sessions that reprocess use bulk paths |
| **Resolution documentation** | `resolution_note_added` | ≥ 30% of sessions that open drawer add ≥ 1 note (in facilitated tests) |
| **Sales loop** | `sales_notification_sent` | Observed in role-play scenarios (qualitative) |

## Tracked events (non-exhaustive)
- `click` / `pageview` via `data-track` and `hypothesis-tracker.js`
- `filters_applied_explicit`, `filters_cleared`, `filter_chip_removed`, `filter_from_line_rule`
- `bulk_select_all_filtered`, `bulk_reprocess_triggered`, `bulk_reprocess_completed`
- `resolution_note_dialog_opened`, `resolution_note_added`
- `sales_notify_dialog_opened`, `sales_notification_sent`
- `analytics_view_accessed` (operational health)
- Reprocess events mirror the retailer prototype (`reprocess_triggered`, etc.)

## Data
~100 mock EDI orders across 12 POCs, 4 vendors, 90-day rolling timestamps, deterministic seed. Fields include retailer chain, region, sales rep, SLA urgency on some blocked orders, per-line `ruleId` and ops-facing `diagnosticMessage`, resolution notes, and status timeline.

## In scope (this prototype)
- Operations queue with extended filters + filter chips + KPI summary row (subset of FR-4).
- Dense table: chain, POC, vendor, PO, BEES order state (“Not yet assigned” pre-OMS), items, value, primary rule, row actions (summary, reprocess, note).
- Item-level page: timeline, rule/diagnostic block, shortcut to pre-filter queue by rule category (FR-19).
- Drawer: rules fired, timeline, resolution notes list, reprocess, add note, notify sales rep (mock dialogs).
- Bulk: select all matching filters; confirmation dialog when reprocessing **> 50** orders (FR-12 pattern).
- `#health` view: mock SLA / reprocess success / avg resolution + top rules + top POCs (FR-15 subset).

## Out of scope
- Real APIs, persistence, auth, vendor entitlements (NFR-3), email delivery (FR-14 channel is mocked).
- Direct order line editing, external ticketing, streaming refresh, mobile layout, cross-vendor BI.
- PO numbers in analytics payloads (do not log PO values in custom `HT.track` calls).

## Privacy
- Do not log PO numbers or free-text note bodies in `HT.track` payloads; use categories and counts only.

## Dashboard
Open the [live dashboard](_shared/dashboard.html?id=edi-central-tracking-ops-tool) after clicking through the prototype locally.
