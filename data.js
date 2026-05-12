/**
 * Mock EDI orders for the vendor operations "EDI Central Tracking — Operational Tool" prototype.
 * @see HLR-edi-central-tracking-operational-tool.md
 */
window.EDI_DATA = (function () {
  const VENDORS = [
    { code: 'AMBEV', name: 'Ambev' },
    { code: 'GRUPO_M', name: 'Grupo Modelo' },
    { code: 'AB_BRWY', name: 'AB Brewery' },
    { code: 'AB_INBV', name: 'AB InBev US' },
  ];

  const RETAILER_CHAINS = ['OXXO', 'Soriana', 'Walmart', 'Chedraui', 'Seven Eleven', 'La Comer'];

  const REGIONS = ['Central', 'North', 'Pacific', 'Southeast', 'Bajío'];

  const SALES_REPS = [
    'Ana Ruiz', 'Carlos Méndez', 'Mariana López', 'Diego Herrera', 'Lucía Vargas',
    'Pedro Soto', 'Fernanda Gil', 'Jorge Castillo', 'Valentina Núñez', 'Roberto Paz',
  ];

  const POCS = [
    { id: 'POC-1001', name: 'OXXO Insurgentes', city: 'Mexico City', chain: 'OXXO', region: 'Central' },
    { id: 'POC-1002', name: 'OXXO Reforma 222', city: 'Mexico City', chain: 'OXXO', region: 'Central' },
    { id: 'POC-1003', name: 'OXXO Polanco', city: 'Mexico City', chain: 'OXXO', region: 'Central' },
    { id: 'POC-1004', name: 'OXXO Santa Fe', city: 'Mexico City', chain: 'OXXO', region: 'Central' },
    { id: 'POC-2001', name: 'Soriana Centro', city: 'Monterrey', chain: 'Soriana', region: 'North' },
    { id: 'POC-2002', name: 'Soriana Cumbres', city: 'Monterrey', chain: 'Soriana', region: 'North' },
    { id: 'POC-3001', name: 'Walmart Roma Norte', city: 'Mexico City', chain: 'Walmart', region: 'Central' },
    { id: 'POC-3002', name: 'Walmart Coyoacán', city: 'Mexico City', chain: 'Walmart', region: 'Central' },
    { id: 'POC-3003', name: 'Walmart Satélite', city: 'Mexico City', chain: 'Walmart', region: 'Central' },
    { id: 'POC-4001', name: 'Chedraui Las Águilas', city: 'Guadalajara', chain: 'Chedraui', region: 'Pacific' },
    { id: 'POC-4002', name: 'Chedraui Providencia', city: 'Guadalajara', chain: 'Chedraui', region: 'Pacific' },
    { id: 'POC-4003', name: 'Chedraui Chapalita', city: 'Guadalajara', chain: 'Chedraui', region: 'Pacific' },
  ];

  const STATUSES = [
    { id: 'WAITING', label: 'Waiting process', tone: 'info', weight: 7 },
    { id: 'PROCESSING', label: 'Processing', tone: 'info', weight: 6 },
    { id: 'ACCEPTED', label: 'Accepted', tone: 'success', weight: 38 },
    { id: 'ALERTS', label: 'Accepted with alerts', tone: 'warning', weight: 18 },
    { id: 'BLOCKED', label: 'Blocked', tone: 'blocked', weight: 12 },
    { id: 'REJECTED', label: 'Rejected', tone: 'error', weight: 14 },
  ];

  const ALERT_REASONS = [
    'Item out of stock — substituted',
    'Price mismatch — adjusted to contract',
    'Delivery date adjusted to next available slot',
    'Minimum order quantity rounded up',
    'Discount applied differs from request',
  ];
  const BLOCKED_REASONS = [
    'Credit limit exceeded — awaiting credit team review',
    'Suspicious order volume — fraud check in progress',
    'Vendor catalog under maintenance — retry pending',
    'Delivery window outside vendor calendar — manual override required',
    'Tax configuration mismatch — finance review pending',
    'POC missing required certification — compliance check pending',
  ];
  const REJECT_REASONS = [
    'Invalid POC code in order header',
    'Item not in vendor catalog for this POC',
    'Order placed outside delivery window',
    'Credit limit exceeded',
    'Duplicate PO number — already processed',
    'Invalid GTIN on line item',
    'Invalid UoM for line item',
  ];

  const CATALOG = [
    { sku: '7891000100103', name: 'Corona Extra 355ml — 24-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100110', name: 'Stella Artois 330ml — 24-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100127', name: 'Budweiser 350ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100134', name: 'Bohemia Pilsen 355ml — 6-pack', family: 'Pilsner', uom: 'CASE' },
    { sku: '7891000100141', name: 'Modelo Especial 355ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100158', name: 'Negra Modelo 355ml — 6-pack', family: 'Dark', uom: 'CASE' },
    { sku: '7891000100165', name: 'Pacífico 355ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100172', name: 'Victoria 355ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100189', name: 'Hoegaarden 330ml — 6-pack', family: 'Wheat', uom: 'CASE' },
    { sku: '7891000100196', name: 'Leffe Blonde 330ml — 6-pack', family: 'Abbey', uom: 'CASE' },
    { sku: '7891000100202', name: 'Goose Island IPA 355ml — 6-pack', family: 'IPA', uom: 'CASE' },
    { sku: '7891000100219', name: 'Michelob Ultra 355ml — 12-pack', family: 'Light', uom: 'CASE' },
    { sku: '7891000100226', name: 'Beck\'s 330ml — 6-pack', family: 'Pilsner', uom: 'CASE' },
    { sku: '7891000100233', name: 'Brahma Chopp 350ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100240', name: 'Skol 350ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100257', name: 'Antarctica Original 355ml — 6pk', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100264', name: 'Quilmes Cristal 340ml — 12-pack', family: 'Lager', uom: 'CASE' },
    { sku: '7891000100271', name: 'Patagonia Amber Lager 355ml — 6pk', family: 'Amber', uom: 'CASE' },
  ];

  const ITEM_ISSUES = {
    ALERTS: [
      { code: 'PRICE_ADJUSTED', rule: 'Price issue',
        label: 'Unit price was adjusted from {req} to {del} to match the current contract.' },
      { code: 'PARTIAL_FILL', rule: 'SKU Availability',
        label: 'Only {pct}% of the requested quantity is available — we will deliver {del} of the {req} {uom} requested.' },
      { code: 'PACK_ADJUSTED', rule: 'Pack size',
        label: 'Quantity was adjusted from {req} to {del} {uom} to match the contracted pack size.' },
    ],
    BLOCKED: [
      { code: 'UPC_NOT_MATCHED', rule: 'UPC Matching',
        label: 'We could not match this product to the BEES catalog. The order is on hold until the SKU is registered or the EDI line is corrected.' },
      { code: 'CREDIT_HOLD', rule: 'Credit',
        label: 'This line is on hold until credit for this POC is released by the finance team.' },
      { code: 'DELIVERY_WINDOW', rule: 'Delivery window',
        label: 'The requested delivery date is outside the vendor calendar for this POC.' },
    ],
    REJECTED: [
      { code: 'UPC_NOT_MATCHED', rule: 'UPC Matching',
        label: 'Product could not be matched to the BEES catalog within the retry window. The line was rejected.' },
      { code: 'INVALID_UOM', rule: 'Pack size',
        label: 'The pack size requested is not available for this POC. The line was rejected.' },
      { code: 'NOT_IN_CATALOG', rule: 'SKU Availability',
        label: 'This SKU is out of stock for the delivery window and could not be substituted.' },
      { code: 'PRICE_REJECTED', rule: 'Price issue',
        label: 'The submitted price is below the contract floor. The line was rejected for review.' },
    ],
  };

  function ruleIdFor(code) {
    const map = {
      PRICE_ADJUSTED: 'BRE-PRICE-2104',
      PARTIAL_FILL: 'BRE-AVAIL-8831',
      PACK_ADJUSTED: 'BRE-PACK-4402',
      UPC_NOT_MATCHED: 'BRE-UPC-4412',
      CREDIT_HOLD: 'BRE-CREDIT-1209',
      DELIVERY_WINDOW: 'BRE-DLV-3301',
      INVALID_UOM: 'BRE-PACK-4410',
      NOT_IN_CATALOG: 'BRE-AVAIL-8820',
      PRICE_REJECTED: 'BRE-PRICE-2199',
    };
    return map[code] || 'BRE-GEN-0001';
  }

  function diagnosticForIssue(issue, sku, pocId, pocName) {
    if (!issue) return '';
    if (issue.code === 'UPC_NOT_MATCHED') {
      return `Register SKU ${sku} in the BEES catalog for ${pocId} (${pocName}) to clear this hold, or correct the GTIN on the EDI line.`;
    }
    if (issue.code === 'PRICE_ADJUSTED' || issue.code === 'PRICE_REJECTED') {
      return `Update the price contract for this SKU and POC in commercial master data, then reprocess.`;
    }
    if (issue.code === 'PARTIAL_FILL' || issue.code === 'NOT_IN_CATALOG') {
      return `Confirm inventory and substitution rules for ${sku}; adjust availability or delivery window if needed.`;
    }
    if (issue.code === 'PACK_ADJUSTED' || issue.code === 'INVALID_UOM') {
      return `Align the requested UoM with the contracted pack configuration for this POC.`;
    }
    if (issue.code === 'CREDIT_HOLD') {
      return `Release or increase the credit hold with the credit team for this POC before reprocessing.`;
    }
    if (issue.code === 'DELIVERY_WINDOW') {
      return `Adjust the delivery calendar or ask the retailer to resubmit within an allowed window.`;
    }
    return `Review matching configuration for rule ${issue.code} and reprocess after the upstream fix.`;
  }

  let seed = 42;
  const rand = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const pick = (arr) => arr[Math.floor(rand() * arr.length)];
  const pickWeighted = (arr) => {
    const total = arr.reduce((s, x) => s + x.weight, 0);
    let r = rand() * total;
    for (const x of arr) { r -= x.weight; if (r <= 0) return x; }
    return arr[arr.length - 1];
  };

  const now = Date.now();
  const orders = [];

  for (let i = 0; i < 100; i++) {
    const poc = pick(POCS);
    const vendor = pick(VENDORS);
    const status = pickWeighted(STATUSES);
    const minutesAgo = Math.floor(rand() * 90 * 24 * 60);
    const receivedAt = new Date(now - minutesAgo * 60 * 1000);
    const po = (10000000 + Math.floor(rand() * 89999999)).toString();
    let reason = '';
    if (status.id === 'ALERTS') reason = pick(ALERT_REASONS);
    else if (status.id === 'BLOCKED') reason = pick(BLOCKED_REASONS);
    else if (status.id === 'REJECTED') reason = pick(REJECT_REASONS);
    const itemCount = 3 + Math.floor(rand() * 9);

    const hasBeesNumber = (status.id === 'ACCEPTED' || status.id === 'ALERTS');
    const beesOrderNumber = hasBeesNumber
      ? 'BEES-' + (1000000000 + Math.floor(rand() * 8999999999)).toString()
      : null;

    const salesRep = pick(SALES_REPS);
    const region = poc.region || pick(REGIONS);
    const retailerChain = poc.chain || pick(RETAILER_CHAINS);

    let slaDeadlineAt = null;
    let slaUrgent = false;
    let hoursInBlocked = null;
    if (status.id === 'BLOCKED') {
      hoursInBlocked = Math.floor(rand() * 48);
      const slaH = 24 + Math.floor(rand() * 48);
      const deadline = new Date(receivedAt.getTime() + slaH * 3600000);
      slaDeadlineAt = deadline.toISOString();
      const hoursLeft = (deadline - now) / 3600000;
      slaUrgent = hoursLeft > 0 && hoursLeft < 12;
    }

    const items = [];
    let totalValue = 0;
    let requestedTotalValue = 0;

    for (let li = 0; li < itemCount; li++) {
      const sku = pick(CATALOG);
      const requestedQty = 1 + Math.floor(rand() * 40);
      const requestedUnitPrice = 80 + Math.floor(rand() * 1200);
      const requestedLineValue = requestedQty * requestedUnitPrice;
      requestedTotalValue += requestedLineValue;

      let qty = requestedQty;
      let unitPrice = requestedUnitPrice;
      let lineStatus = 'OK'; let issue = null; let issueLabel = null;

      function fmtMoneyMx(n) {
        return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      function interpolate(template, vars) {
        return template
          .replace('{req}', vars.req != null ? vars.req : '')
          .replace('{del}', vars.del != null ? vars.del : '')
          .replace('{pct}', vars.pct != null ? String(vars.pct) : '')
          .replace('{uom}', vars.uom || '');
      }
      function applyAlert(spec) {
        if (spec.code === 'PRICE_ADJUSTED') {
          unitPrice = Math.max(50, Math.round(requestedUnitPrice * (0.85 + rand() * 0.10)));
          issueLabel = interpolate(spec.label, {
            req: fmtMoneyMx(requestedUnitPrice),
            del: fmtMoneyMx(unitPrice),
          });
        } else if (spec.code === 'PARTIAL_FILL') {
          const pct = 30 + Math.floor(rand() * 60);
          qty = Math.max(1, Math.round(requestedQty * pct / 100));
          issueLabel = interpolate(spec.label, {
            pct, req: requestedQty.toLocaleString(), del: qty.toLocaleString(), uom: sku.uom,
          });
        } else if (spec.code === 'PACK_ADJUSTED') {
          const packMultiple = pick([6, 12, 24]);
          qty = Math.max(packMultiple, Math.round(requestedQty / packMultiple) * packMultiple);
          issueLabel = interpolate(spec.label, {
            req: requestedQty.toLocaleString(), del: qty.toLocaleString(), uom: sku.uom,
          });
        } else {
          issueLabel = spec.label;
        }
        issue = spec;
      }

      if (status.id === 'WAITING' || status.id === 'PROCESSING') {
        lineStatus = 'PENDING';
      } else if (status.id === 'ACCEPTED') {
        lineStatus = 'OK';
      } else if (status.id === 'ALERTS') {
        if (rand() < 0.5) { lineStatus = 'ALERT'; applyAlert(pick(ITEM_ISSUES.ALERTS)); }
      } else if (status.id === 'BLOCKED') {
        const r = rand();
        if (r < 0.4) { lineStatus = 'BLOCKED'; issue = pick(ITEM_ISSUES.BLOCKED); issueLabel = issue.label; }
        else if (r < 0.6) { lineStatus = 'ALERT'; applyAlert(pick(ITEM_ISSUES.ALERTS)); }
      } else if (status.id === 'REJECTED') {
        const r = rand();
        if (r < 0.4) { lineStatus = 'REJECTED'; issue = pick(ITEM_ISSUES.REJECTED); issueLabel = issue.label; }
        else if (r < 0.55) { lineStatus = 'BLOCKED'; issue = pick(ITEM_ISSUES.BLOCKED); issueLabel = issue.label; }
        else if (r < 0.7) { lineStatus = 'ALERT'; applyAlert(pick(ITEM_ISSUES.ALERTS)); }
      }

      const lineValue = qty * unitPrice;
      totalValue += lineValue;

      const ruleId = issue ? ruleIdFor(issue.code) : null;
      const diagnosticMessage = issue
        ? diagnosticForIssue(issue, sku.sku, poc.id, poc.name)
        : '';

      items.push({
        lineNumber: li + 1,
        sku: sku.sku,
        name: sku.name,
        family: sku.family,
        uom: sku.uom,
        qty,
        unitPrice,
        lineValue,
        requestedQty,
        requestedUnitPrice,
        requestedLineValue,
        status: lineStatus,
        issueCode: issue ? issue.code : null,
        issueRule: issue ? issue.rule : null,
        issueLabel,
        ruleId,
        diagnosticMessage,
      });
    }

    function ensureAtLeastOne(targetLineStatus, issueBucket, applyHelper) {
      if (!items.some(it => it.status === targetLineStatus)) {
        const it = pick(items);
        const spec = pick(issueBucket);
        if (applyHelper) {
          let qty = it.requestedQty; let unitPrice = it.requestedUnitPrice;
          let vars = { uom: it.uom };
          if (spec.code === 'PRICE_ADJUSTED') {
            unitPrice = Math.max(50, Math.round(it.requestedUnitPrice * (0.85 + rand() * 0.10)));
            vars.req = '$' + it.requestedUnitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            vars.del = '$' + unitPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          } else if (spec.code === 'PARTIAL_FILL') {
            const pct = 30 + Math.floor(rand() * 60);
            qty = Math.max(1, Math.round(it.requestedQty * pct / 100));
            vars.pct = pct; vars.req = it.requestedQty.toLocaleString(); vars.del = qty.toLocaleString();
          } else if (spec.code === 'PACK_ADJUSTED') {
            const packMultiple = pick([6, 12, 24]);
            qty = Math.max(packMultiple, Math.round(it.requestedQty / packMultiple) * packMultiple);
            vars.req = it.requestedQty.toLocaleString(); vars.del = qty.toLocaleString();
          }
          it.qty = qty;
          it.unitPrice = unitPrice;
          it.lineValue = qty * unitPrice;
          it.issueLabel = spec.label
            .replace('{req}', vars.req || '')
            .replace('{del}', vars.del || '')
            .replace('{pct}', vars.pct != null ? String(vars.pct) : '')
            .replace('{uom}', vars.uom || '');
        } else {
          it.issueLabel = spec.label;
        }
        it.status = targetLineStatus;
        it.issueCode = spec.code;
        it.issueRule = spec.rule;
        it.ruleId = ruleIdFor(spec.code);
        it.diagnosticMessage = diagnosticForIssue(spec, it.sku, poc.id, poc.name);
      }
    }
    if (status.id === 'ALERTS') ensureAtLeastOne('ALERT', ITEM_ISSUES.ALERTS, true);
    if (status.id === 'BLOCKED') ensureAtLeastOne('BLOCKED', ITEM_ISSUES.BLOCKED, false);
    if (status.id === 'REJECTED') ensureAtLeastOne('REJECTED', ITEM_ISSUES.REJECTED, false);

    const problemLines = items.filter(it =>
      it.status === 'REJECTED' || it.status === 'BLOCKED' || it.status === 'ALERT');
    const lead = problemLines.sort((a, b) => {
      const o = { REJECTED: 0, BLOCKED: 1, ALERT: 2 };
      return (o[a.status] ?? 9) - (o[b.status] ?? 9);
    })[0];
    const primaryRuleCategory = lead && lead.issueRule ? lead.issueRule : '';
    const primaryRuleId = lead && lead.ruleId ? lead.ruleId : '';

    const receivedIso = receivedAt.toISOString();
    const timeline = [
      { at: receivedIso, label: 'Received', detail: 'EDI 850 ingested from retailer', actor: 'System' },
    ];
    if (status.id !== 'WAITING') {
      timeline.push({
        at: new Date(receivedAt.getTime() + 3 * 60000).toISOString(),
        label: 'Processing started',
        detail: 'BRE evaluation queued',
        actor: 'System',
      });
    }
    if (status.id === 'BLOCKED' || status.id === 'REJECTED' || status.id === 'ALERTS') {
      timeline.push({
        at: new Date(receivedAt.getTime() + 12 * 60000).toISOString(),
        label: status.id === 'BLOCKED' ? 'Blocked' : status.id === 'REJECTED' ? 'Rejected' : 'Accepted with alerts',
        detail: reason || 'Rule outcome applied',
        actor: 'System',
      });
    }

    const resolutionNotes = [];
    if (rand() < 0.15 && (status.id === 'ALERTS' || status.id === 'ACCEPTED')) {
      resolutionNotes.push({
        at: new Date(receivedAt.getTime() + 36 * 60000).toISOString(),
        author: 'ops.analyst@vendor.com',
        category: 'catalog fix',
        text: 'Confirmed SKU mapping after catalog refresh; no further action.',
      });
    }

    orders.push({
      id: 'EDI-' + String(100000 + i),
      receivedAt: receivedIso,
      vendorCode: vendor.code,
      vendorName: vendor.name,
      pocId: poc.id,
      pocName: poc.name,
      pocCity: poc.city,
      retailerChain,
      region,
      salesRep,
      poNumber: po,
      beesOrderNumber,
      statusId: status.id,
      statusLabel: status.label,
      statusTone: status.tone,
      reason,
      itemCount,
      totalValue,
      requestedTotalValue,
      items,
      primaryRuleCategory,
      primaryRuleId,
      slaDeadlineAt,
      slaUrgent,
      hoursInBlocked,
      timeline,
      resolutionNotes,
    });
  }

  function priority(o) {
    if (o.statusId === 'BLOCKED' && o.slaUrgent) return 0;
    if (o.statusId === 'BLOCKED') return 1;
    if (o.statusId === 'REJECTED') return 2;
    if (o.statusId === 'ALERTS') return 3;
    if (o.statusId === 'WAITING' || o.statusId === 'PROCESSING') return 4;
    return 5;
  }
  orders.sort((a, b) => {
    const pa = priority(a); const pb = priority(b);
    if (pa !== pb) return pa - pb;
    return b.receivedAt.localeCompare(a.receivedAt);
  });

  const RULE_CATEGORIES = ['UPC Matching', 'Price issue', 'SKU Availability', 'Pack size', 'Credit', 'Delivery window'];

  return {
    VENDORS, POCS, STATUSES, CATALOG, ITEM_ISSUES, ALERT_REASONS, BLOCKED_REASONS, REJECT_REASONS,
    RETAILER_CHAINS, REGIONS, SALES_REPS, RULE_CATEGORIES, orders,
  };
})();
