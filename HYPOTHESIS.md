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

## Metrics

Reviewed and updated 2026-05-14 against the new metrics framework (≥ 3 confirmed, quantified, observable metrics required before scaffold).

| # | Name | Type | Threshold | Tracks |
|---|---|---|---|---|
| M1 | Triage-to-resolution flow | **Primary** | ≥ 50% of sessions that open ≥ 1 item page also complete ≥ 1 reprocess in the same session | `item_page_rendered` → `reprocess_completed` |
| M2 | Time to first reprocess | **Time-to-action** | Median < 90s from `pageview` on `#orders` to first `reprocess_triggered` | `pageview` → `reprocess_triggered` |
| M3 | Structured filter adoption | **Discovery** | ≥ 70% of sessions apply ≥ 1 filter before opening any order | `filters_applied_explicit` → `row-open-items` |
| M4 | Bulk reprocess workflow | **Task completion** | ≥ 25% of sessions that reprocess anything use the bulk path (≥ 2 orders) | `bulk_select_all_toggled` → `bulk_reprocess_completed` |
| M5 | Multi-feature depth | **Engagement** | ≥ 40% of sessions use ≥ 3 of: filter, drawer, item page, bulk reprocess | `filters_applied_explicit`, `order_drawer_opened`, `item_page_rendered`, `bulk_reprocess_triggered` |

### Changes from previous version
- **Removed** "Resolution documentation" (`resolution_note_added`) — event not instrumented in prototype; out of scope this version.
- **Removed** "Sales loop" (`sales_notification_sent`) — event not instrumented; qualitative observation is not a measurable metric.
- **Replaced** "Triage depth" (discovery-only) with M1 (primary conversion — triage *and* resolution), which directly answers the hypothesis.
- **Added** M2 time-to-action to measure the "faster" claim in the hypothesis.
- **Fixed** track name: `bulk_select_all_filtered` → `bulk_select_all_toggled` (actual event name in code).
- **Removed** `analytics_view_accessed` from M5 — the `#health` view is not implemented in this prototype version.

## Tracked events (confirmed instrumented)
- `click` / `pageview` via `data-track` and `hypothesis-tracker.js`
- `filters_applied_explicit`, `filters_cleared`, `filter_chip_removed`, `filter_from_line_rule`
- `bulk_select_all_toggled`, `bulk_reprocess_triggered`, `bulk_reprocess_completed`
- `order_drawer_opened`, `order_drawer_closed`
- `item_page_rendered`, `reprocess_triggered`, `reprocess_completed`
- `summary_card_clicked`, `pagination_changed`, `page_size_changed`

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
