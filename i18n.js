/**
 * English / Spanish UI strings for EDI Central Tracking ops prototype.
 * Proper nouns (retailers, POCs, vendors, SKUs, order numbers) stay untranslated at call sites.
 */
window.I18n = (function () {
  const STORAGE_KEY = 'edi-ops-lang';
  let lang = localStorage.getItem(STORAGE_KEY) || 'en';
  if (lang !== 'en' && lang !== 'es') lang = 'en';

  const STATUS = {
    en: { ACCEPTED: 'Accepted', BLOCKED: 'Blocked', REJECTED: 'Rejected', IN_QUEUE: 'In queue' },
    es: { ACCEPTED: 'Aceptado', BLOCKED: 'Bloqueado', REJECTED: 'Rechazado', IN_QUEUE: 'En cola' },
  };

  const LINE_STATUS = {
    en: { OK: 'OK', BLOCKED: 'Blocked', REJECTED: 'Rejected', PENDING: 'In queue' },
    es: { OK: 'OK', BLOCKED: 'Bloqueado', REJECTED: 'Rechazado', PENDING: 'En cola' },
  };

  const RULE = {
    POC_NOT_FOUND: {
      en: { label: 'POC not found', actionLabel: 'Reprocess without fixes', orderCopy: 'The POC referenced in this order is not mapped to your vendor.', blurb: 'The POC referenced by this order is not mapped to the vendor. Reprocess to re-include the order in the queue as-is — fix the POC mapping upstream if you want this rule to stop firing for this account.' },
      es: { label: 'POC no encontrado', actionLabel: 'Reprocesar sin correcciones', orderCopy: 'El POC referenciado en este pedido no está mapeado a su proveedor.', blurb: 'El POC referenciado por este pedido no está mapeado al proveedor. Reprocese para volver a incluir el pedido en la cola tal cual — corrija el mapeo del POC aguas arriba si desea que esta regla deje de aplicarse para esta cuenta.' },
    },
    PO_DUPLICATED: {
      en: { label: 'PO duplicated', actionLabel: 'Bypass duplication and reprocess', orderCopy: 'A previous order with the same PO number was already processed.', blurb: 'BEES detected a previous order with the same PO number. Bypass the duplication validation to re-include this order in the queue. Use this when the retailer intentionally resubmitted the same PO.' },
      es: { label: 'PO duplicado', actionLabel: 'Omitir duplicación y reprocesar', orderCopy: 'Ya se procesó un pedido anterior con el mismo número de PO.', blurb: 'BEES detectó un pedido anterior con el mismo número de PO. Omita la validación de duplicación para volver a incluir este pedido en la cola. Úselo cuando el retailer haya reenviado el mismo PO intencionalmente.' },
    },
    UPC_NOT_FOUND: {
      en: { label: 'UPC not found', actionLabel: 'Reprocess with resolved UPCs', orderCopy: 'Some product UPCs in this order were not found in the BEES catalog.', blurb: 'One or more lines reference a UPC that is not in the BEES catalog. Pick the correct UPC for each affected line, then reprocess.' },
      es: { label: 'UPC no encontrado', actionLabel: 'Reprocesar con UPCs resueltos', orderCopy: 'Algunos UPC de producto de este pedido no se encontraron en el catálogo BEES.', blurb: 'Una o más líneas referencian un UPC que no está en el catálogo BEES. Elija el UPC correcto para cada línea afectada y luego reprocese.' },
    },
    PRICE_MISMATCH: {
      en: { label: 'Price mismatch', actionLabel: 'Reprocess with chosen price', orderCopy: 'The unit price requested differs from the BEES contract price on one or more lines.', blurb: 'One or more lines have a unit price that does not match the BEES contract price. Choose which price to apply, then reprocess — the price validation will be skipped for this order.' },
      es: { label: 'Discrepancia de precio', actionLabel: 'Reprocesar con precio elegido', orderCopy: 'El precio unitario solicitado difiere del precio de contrato BEES en una o más líneas.', blurb: 'Una o más líneas tienen un precio unitario que no coincide con el precio de contrato BEES. Elija qué precio aplicar y luego reprocese — la validación de precio se omitirá para este pedido.' },
    },
    INVALID_PACKAGING: {
      en: { label: 'Invalid product packaging', actionLabel: 'Reprocess without fixes', orderCopy: 'Invalid product packaging (UoM) was detected on one or more lines.', blurb: 'One or more lines reference an invalid packaging / unit-of-measure for the product. Reprocess to re-include the order in the queue — fix the product packaging configuration upstream if you want this rule to stop firing.' },
      es: { label: 'Empaque de producto inválido', actionLabel: 'Reprocesar sin correcciones', orderCopy: 'Se detectó empaque de producto (UdM) inválido en una o más líneas.', blurb: 'Una o más líneas referencian un empaque / unidad de medida inválida para el producto. Reprocese para volver a incluir el pedido en la cola — corrija la configuración de empaque aguas arriba si desea que esta regla deje de aplicarse.' },
    },
    INVALID_DELIVERY_RANGE: {
      en: { label: 'Invalid delivery range', actionLabel: 'Reprocess', orderCopy: 'The requested delivery date falls outside the valid range for this account.', blurb: 'The requested delivery date is outside the valid range. Either reprocess as-is (no fix) or bypass the delivery-range rule for this order.' },
      es: { label: 'Rango de entrega inválido', actionLabel: 'Reprocesar', orderCopy: 'La fecha de entrega solicitada está fuera del rango válido para esta cuenta.', blurb: 'La fecha de entrega solicitada está fuera del rango válido. Reprocese tal cual (sin corrección) u omita la regla de rango de entrega para este pedido.' },
    },
    INVALID_DELIVERY_WINDOW: {
      en: { label: 'Invalid delivery window', actionLabel: 'Reprocess', orderCopy: 'The requested delivery slot is outside the valid window for this POC.', blurb: 'The requested delivery slot is outside the valid delivery window for this POC. Either reprocess as-is or bypass the delivery-window rule for this order.' },
      es: { label: 'Ventana de entrega inválida', actionLabel: 'Reprocesar', orderCopy: 'El horario de entrega solicitado está fuera de la ventana válida para este POC.', blurb: 'El horario de entrega solicitado está fuera de la ventana de entrega válida para este POC. Reprocese tal cual u omita la regla de ventana de entrega para este pedido.' },
    },
    MIN_ORDER_QUANTITY: {
      en: { label: 'Minimum order quantity', actionLabel: 'Reprocess', orderCopy: 'The order total falls below the minimum order quantity for this account.', blurb: 'The order total is below the minimum order quantity for this account. Either reprocess as-is or bypass the minimum-order-quantity rule for this order.' },
      es: { label: 'Cantidad mínima de pedido', actionLabel: 'Reprocesar', orderCopy: 'El total del pedido está por debajo de la cantidad mínima de pedido para esta cuenta.', blurb: 'El total del pedido está por debajo de la cantidad mínima para esta cuenta. Reprocese tal cual u omita la regla de cantidad mínima para este pedido.' },
    },
    MAX_ORDER_QUANTITY: {
      en: { label: 'Maximum order quantity', actionLabel: 'Reprocess', orderCopy: 'The order total exceeds the maximum order quantity allowed for this account.', blurb: 'The order total exceeds the maximum order quantity allowed for this account. Either reprocess as-is or bypass the maximum-order-quantity rule for this order.' },
      es: { label: 'Cantidad máxima de pedido', actionLabel: 'Reprocesar', orderCopy: 'El total del pedido supera la cantidad máxima permitida para esta cuenta.', blurb: 'El total del pedido supera la cantidad máxima permitida para esta cuenta. Reprocese tal cual u omita la regla de cantidad máxima para este pedido.' },
    },
  };

  const NOTE_CAT = {
    en: { 'catalog fix': 'catalog fix', 'pricing update': 'pricing update', 'POC configuration': 'POC configuration', 'delivery window': 'delivery window', packaging: 'packaging', 'retailer-side issue': 'retailer-side issue', other: 'other' },
    es: { 'catalog fix': 'corrección de catálogo', 'pricing update': 'actualización de precios', 'POC configuration': 'configuración de POC', 'delivery window': 'ventana de entrega', packaging: 'empaque', 'retailer-side issue': 'incidencia del retailer', other: 'otro' },
  };

  const EN_RULE_LABEL_TO_CODE = Object.fromEntries(
    Object.entries(RULE).map(([code, tr]) => [tr.en.label, code])
  );

  const M = {
    en: {
      'lang.en': 'English',
      'lang.es': 'Español',
      'lang.menu': 'Language',
      'page.ediTitle': 'EDI Central Tracking',
      'page.orderDetails': 'Order details',
      'filter.toggle': 'Filter',
      'filter.status': 'Status',
      'filter.rule': 'Business rule',
      'filter.poc': 'POC',
      'filter.retailer': 'Retailer',
      'filter.poNumber': 'PO number',
      'filter.beesOrder': 'BEES order number',
      'filter.receiveDate': 'Receive date (max 90 days · default last 30 days)',
      'filter.expirationDate': 'Expiration date',
      'filter.apply': 'Apply filters',
      'filter.clearAll': 'Clear all',
      'filter.periodHint': 'Maximum interval: 90 days · default: last 30 days',
      'filter.periodCapped': 'Period capped at 90 days (ops scope).',
      'filter.allStatuses': 'All statuses',
      'filter.allRules': 'All rules',
      'filter.allPocs': 'All POCs',
      'filter.allRetailers': 'All retailers',
      'filter.statusCount': '{count} status',
      'filter.statusesCount': '{count} statuses',
      'filter.ruleCount': '{count} rule',
      'filter.rulesCount': '{count} rules',
      'filter.pocCount': '{count} POC',
      'filter.pocsCount': '{count} POCs',
      'filter.retailerCount': '{count} retailer',
      'filter.retailersCount': '{count} retailers',
      'filter.poPlaceholder': 'e.g. 12345678',
      'filter.beesPlaceholder': 'e.g. BEES-1234567890',
      'filter.pocSearch': 'Search POC name, id, city…',
      'filter.pocNoMatch': 'No POC matches.',
      'filter.groupBlocked': 'Blocked',
      'filter.groupRejected': 'Rejected',
      'summary.acceptanceRate': 'Acceptance rate:',
      'summary.of': '{count} of {total}',
      'summary.filter': 'Filter',
      'summary.clear': 'Clear',
      'table.status': 'Status',
      'table.receiveDate': 'Receive date',
      'table.poc': 'POC',
      'table.rule': 'Business rule',
      'table.po': 'PO number',
      'table.bees': 'BEES order number',
      'table.expiration': 'Expiration date',
      'table.actions': 'Actions',
      'table.notAssigned': 'Not yet assigned',
      'table.selectBulk': 'Select for bulk reprocess',
      'table.cantReprocess': '{status} orders can\'t be reprocessed',
      'table.takeAction': 'Take corrective action',
      'table.viewSummary': 'View order summary',
      'table.ruleFilterTitle': 'Filter the list by this rule',
      'empty.title': 'No orders match your filters',
      'empty.body': 'Try widening the period or clearing some filters.',
      'empty.clear': 'Clear all filters',
      'pagination.range': '{start} - {end} of {total}',
      'pagination.linesPerPage': 'Lines per page:',
      'pagination.page': 'Page {n}',
      'pagination.first': 'First page',
      'pagination.prev': 'Previous page',
      'pagination.next': 'Next page',
      'pagination.last': 'Last page',
      'bulk.selectAll': 'Select all on this page ({count})',
      'bulk.noEligible': 'No eligible orders on this page',
      'bulk.selectedOne': '1 selected',
      'bulk.selectedMany': '{count} selected',
      'bulk.clearSelection': 'Clear selection',
      'bulk.reprocess': 'Reprocess selected',
      'bulk.reprocessCount': 'Reprocess selected ({count})',
      'bulk.hintPinned': 'Bulk pinned to: {rule} — only orders with this rule can be added.',
      'bulk.hintDefault': 'Bulk reprocess: select Blocked orders sharing the same rule.',
      'bulk.sameRule': 'Bulk reprocess works only on Blocked orders sharing the same rule.',
      'bulk.mustShareRule': 'All selected orders must share the same blocking rule.',
      'bulk.confirm': 'You are about to reprocess {count} orders, all blocked by "{rule}". Continue?',
      'drawer.eyebrow': 'Order detail',
      'drawer.close': 'Close',
      'drawer.cancel': 'Cancel',
      'drawer.order': 'Order',
      'drawer.receiveDate': 'Receive date',
      'drawer.retailer': 'Retailer',
      'drawer.poc': 'POC',
      'drawer.vendor': 'Vendor',
      'drawer.po': 'PO number',
      'drawer.bees': 'BEES order #',
      'drawer.items': 'Items',
      'drawer.totalValue': 'Total value',
      'drawer.whyRejected': 'Why was this rejected?',
      'drawer.whyBlocked': 'Why is this on hold?',
      'drawer.noAction': 'No action available',
      'drawer.acceptedMsg': 'This order was accepted and is in the BEES OMS.',
      'drawer.queueMsg': 'This order is in queue and is being processed by BEES. Wait for the next state.',
      'drawer.notes': 'Resolution notes ({count})',
      'drawer.noNotes': 'No resolution notes yet.',
      'drawer.category': 'Category',
      'drawer.note': 'Note',
      'drawer.notePlaceholder': 'Describe what you did or what the retailer should know…',
      'drawer.saveNote': 'Save note',
      'drawer.addNote': 'Add note',
      'drawer.timeline': 'Timeline',
      'drawer.beesHistory': 'Order history (coming soon)',
      'action.corrective': 'Corrective action',
      'action.selectUpcs': 'Select correct UPCs',
      'action.choosePrice': 'Choose price',
      'action.chooseReprocess': 'Choose how to reprocess',
      'action.line': 'Line {n}',
      'action.requestedSku': 'Requested SKU: {sku}',
      'action.chooseUpc': 'Choose correct UPC…',
      'action.fixUpc': 'Fix UPC',
      'action.applyUpc': 'Apply UPC',
      'action.changeUpc': 'Change',
      'action.searchUpcLabel': 'Search catalog',
      'action.searchUpcPlaceholder': 'UPC or product name…',
      'action.upcSearchHint': 'Type at least 2 characters to search the BEES catalog.',
      'action.upcNoResults': 'No products match your search.',
      'action.upcSearchCount': '{count} matches — click to select',
      'action.upcSelected': 'Selected product',
      'action.selectUpcsOnLines': 'Choose the correct UPC on each affected product line below, then confirm reprocessing.',
      'action.retailerRequested': 'Retailer requested {price} · BEES contract {contract}',
      'action.useBeesPrice': 'Use BEES contract price',
      'action.useRetailerPrice': 'Accept retailer\'s requested price',
      'action.reprocessAsIs': 'Reprocess without fixes (re-include as-is)',
      'action.bypassReprocess': 'Skip the rule and reprocess',
      'action.pickUpc': 'Pick a UPC for every affected line before reprocessing.',
      'modal.reprocessOrder': 'Reprocess order',
      'modal.bypassReprocess': 'Bypass and reprocess',
      'modal.chooseUpc': 'Choose correct UPC',
      'details.addNote': 'Add resolution note',
      'details.timeline': 'Order timeline',
      'details.timelineOne': '({count} entry)',
      'details.timelineMany': '({count} entries)',
      'details.notFound': 'Order not found.',
      'details.back': 'Back to all orders',
      'details.beesOrder': 'BEES order number',
      'details.po': 'PO number',
      'details.receiveDate': 'Receive date',
      'details.retailer': 'Retailer',
      'details.vendor': 'Vendor',
      'details.items': 'Items',
      'details.totalValue': 'Total value',
      'details.products': 'Products in this order',
      'details.itemOne': '{count} item',
      'details.itemMany': '{count} items',
      'details.line': 'Line {n}',
      'details.reqQty': 'Requested Qty',
      'details.reqPrice': 'Requested Unit Price',
      'details.reqTotal': 'Requested line total',
      'details.requested': 'Requested {value}',
      'timeline.none': 'No activity recorded yet.',
      'timeline.resolutionNote': 'Resolution note',
      'audit.orderReceived': 'Order received via EDI',
      'audit.orderAccepted': 'Order accepted into BEES OMS',
      'audit.reprocessRequested': 'Reprocess requested — {detail}',
      'audit.outcome': 'Outcome: {status}',
      'audit.noteAdded': 'Resolution note added ({category})',
      'actor.system': 'system',
      'actor.bre': 'BRE',
      'actor.ops': 'Ops user',
      'audit.detail.reprocessNoFix': '{code}: reprocess without fixes',
      'audit.detail.bypass': '{code}: bypassed rule',
      'audit.detail.upc': '{code}: selected new UPCs for {count} line(s)',
      'audit.detail.priceBees': '{code}: applied BEES contract price, price validation bypassed',
      'audit.detail.priceRetailer': '{code}: applied retailer\'s requested price, price validation bypassed',
      'audit.detail.rejectedBypass': '{code}: bypassed rule and reprocessed',
      'audit.detail.rejectedAsIs': '{code}: reprocessed without fixes',
    },
    es: {
      'lang.en': 'English',
      'lang.es': 'Español',
      'lang.menu': 'Idioma',
      'page.ediTitle': 'Seguimiento central EDI',
      'page.orderDetails': 'Detalle del pedido',
      'filter.toggle': 'Filtrar',
      'filter.status': 'Estado',
      'filter.rule': 'Regla de negocio',
      'filter.poc': 'POC',
      'filter.retailer': 'Retailer',
      'filter.poNumber': 'Número de PO',
      'filter.beesOrder': 'Número de pedido BEES',
      'filter.receiveDate': 'Fecha de recepción (máx. 90 días · predeterminado últimos 30 días)',
      'filter.expirationDate': 'Fecha de vencimiento',
      'filter.apply': 'Aplicar filtros',
      'filter.clearAll': 'Borrar todo',
      'filter.periodHint': 'Intervalo máximo: 90 días · predeterminado: últimos 30 días',
      'filter.periodCapped': 'Período limitado a 90 días (alcance operaciones).',
      'filter.allStatuses': 'Todos los estados',
      'filter.allRules': 'Todas las reglas',
      'filter.allPocs': 'Todos los POC',
      'filter.allRetailers': 'Todos los retailers',
      'filter.statusCount': '{count} estado',
      'filter.statusesCount': '{count} estados',
      'filter.ruleCount': '{count} regla',
      'filter.rulesCount': '{count} reglas',
      'filter.pocCount': '{count} POC',
      'filter.pocsCount': '{count} POC',
      'filter.retailerCount': '{count} retailer',
      'filter.retailersCount': '{count} retailers',
      'filter.poPlaceholder': 'ej. 12345678',
      'filter.beesPlaceholder': 'ej. BEES-1234567890',
      'filter.pocSearch': 'Buscar nombre, id o ciudad del POC…',
      'filter.pocNoMatch': 'Ningún POC coincide.',
      'filter.groupBlocked': 'Bloqueado',
      'filter.groupRejected': 'Rechazado',
      'summary.acceptanceRate': 'Tasa de aceptación:',
      'summary.of': '{count} de {total}',
      'summary.filter': 'Filtrar',
      'summary.clear': 'Borrar',
      'table.status': 'Estado',
      'table.receiveDate': 'Fecha de recepción',
      'table.poc': 'POC',
      'table.rule': 'Regla de negocio',
      'table.po': 'Número de PO',
      'table.bees': 'Número de pedido BEES',
      'table.expiration': 'Fecha de vencimiento',
      'table.actions': 'Acciones',
      'table.notAssigned': 'Aún no asignado',
      'table.selectBulk': 'Seleccionar para reproceso masivo',
      'table.cantReprocess': 'Los pedidos {status} no se pueden reprocesar',
      'table.takeAction': 'Tomar acción correctiva',
      'table.viewSummary': 'Ver resumen del pedido',
      'table.ruleFilterTitle': 'Filtrar la lista por esta regla',
      'empty.title': 'Ningún pedido coincide con sus filtros',
      'empty.body': 'Intente ampliar el período o borrar algunos filtros.',
      'empty.clear': 'Borrar todos los filtros',
      'pagination.range': '{start} - {end} de {total}',
      'pagination.linesPerPage': 'Líneas por página:',
      'pagination.page': 'Página {n}',
      'pagination.first': 'Primera página',
      'pagination.prev': 'Página anterior',
      'pagination.next': 'Página siguiente',
      'pagination.last': 'Última página',
      'bulk.selectAll': 'Seleccionar todo en esta página ({count})',
      'bulk.noEligible': 'No hay pedidos elegibles en esta página',
      'bulk.selectedOne': '1 seleccionado',
      'bulk.selectedMany': '{count} seleccionados',
      'bulk.clearSelection': 'Borrar selección',
      'bulk.reprocess': 'Reprocesar seleccionados',
      'bulk.reprocessCount': 'Reprocesar seleccionados ({count})',
      'bulk.hintPinned': 'Masivo fijado a: {rule} — solo se pueden agregar pedidos con esta regla.',
      'bulk.hintDefault': 'Reproceso masivo: seleccione pedidos Bloqueados que compartan la misma regla.',
      'bulk.sameRule': 'El reproceso masivo solo funciona en pedidos Bloqueados que comparten la misma regla.',
      'bulk.mustShareRule': 'Todos los pedidos seleccionados deben compartir la misma regla de bloqueo.',
      'bulk.confirm': 'Está a punto de reprocesar {count} pedidos, todos bloqueados por "{rule}". ¿Continuar?',
      'drawer.eyebrow': 'Detalle del pedido',
      'drawer.close': 'Cerrar',
      'drawer.cancel': 'Cancelar',
      'drawer.order': 'Pedido',
      'drawer.receiveDate': 'Fecha de recepción',
      'drawer.retailer': 'Retailer',
      'drawer.poc': 'POC',
      'drawer.vendor': 'Proveedor',
      'drawer.po': 'Número de PO',
      'drawer.bees': 'Nº pedido BEES',
      'drawer.items': 'Ítems',
      'drawer.totalValue': 'Valor total',
      'drawer.whyRejected': '¿Por qué fue rechazado?',
      'drawer.whyBlocked': '¿Por qué está en espera?',
      'drawer.noAction': 'No hay acción disponible',
      'drawer.acceptedMsg': 'Este pedido fue aceptado y está en BEES OMS.',
      'drawer.queueMsg': 'Este pedido está en cola y BEES lo está procesando. Espere el siguiente estado.',
      'drawer.notes': 'Notas de resolución ({count})',
      'drawer.noNotes': 'Aún no hay notas de resolución.',
      'drawer.category': 'Categoría',
      'drawer.note': 'Nota',
      'drawer.notePlaceholder': 'Describa lo que hizo o lo que el retailer debe saber…',
      'drawer.saveNote': 'Guardar nota',
      'drawer.addNote': 'Agregar nota',
      'drawer.timeline': 'Línea de tiempo',
      'drawer.beesHistory': 'Historial del pedido (próximamente)',
      'action.corrective': 'Acción correctiva',
      'action.selectUpcs': 'Seleccionar UPCs correctos',
      'action.choosePrice': 'Elegir precio',
      'action.chooseReprocess': 'Elegir cómo reprocesar',
      'action.line': 'Línea {n}',
      'action.requestedSku': 'SKU solicitado: {sku}',
      'action.chooseUpc': 'Elegir UPC correcto…',
      'action.fixUpc': 'Corregir UPC',
      'action.applyUpc': 'Aplicar UPC',
      'action.changeUpc': 'Cambiar',
      'action.searchUpcLabel': 'Buscar en catálogo',
      'action.searchUpcPlaceholder': 'UPC o nombre del producto…',
      'action.upcSearchHint': 'Escriba al menos 2 caracteres para buscar en el catálogo BEES.',
      'action.upcNoResults': 'Ningún producto coincide con su búsqueda.',
      'action.upcSearchCount': '{count} coincidencias — haga clic para seleccionar',
      'action.upcSelected': 'Producto seleccionado',
      'action.selectUpcsOnLines': 'Elija el UPC correcto en cada línea de producto afectada abajo y luego confirme el reproceso.',
      'action.retailerRequested': 'Retailer solicitó {price} · contrato BEES {contract}',
      'action.useBeesPrice': 'Usar precio de contrato BEES',
      'action.useRetailerPrice': 'Aceptar precio solicitado por el retailer',
      'action.reprocessAsIs': 'Reprocesar sin correcciones (reincluir tal cual)',
      'action.bypassReprocess': 'Saltar la regla y reprocesar',
      'action.pickUpc': 'Elija un UPC para cada línea afectada antes de reprocesar.',
      'modal.reprocessOrder': 'Reprocesar pedido',
      'modal.bypassReprocess': 'Omitir y reprocesar',
      'modal.chooseUpc': 'Elegir UPC correcto',
      'details.addNote': 'Agregar nota de resolución',
      'details.timeline': 'Línea de tiempo del pedido',
      'details.timelineOne': '({count} registro)',
      'details.timelineMany': '({count} registros)',
      'details.notFound': 'Pedido no encontrado.',
      'details.back': 'Volver a todos los pedidos',
      'details.beesOrder': 'Número de pedido BEES',
      'details.po': 'Número de PO',
      'details.receiveDate': 'Fecha de recepción',
      'details.retailer': 'Retailer',
      'details.vendor': 'Proveedor',
      'details.items': 'Ítems',
      'details.totalValue': 'Valor total',
      'details.products': 'Productos en este pedido',
      'details.itemOne': '{count} ítem',
      'details.itemMany': '{count} ítems',
      'details.line': 'Línea {n}',
      'details.reqQty': 'Cant. solicitada',
      'details.reqPrice': 'Precio unitario solicitado',
      'details.reqTotal': 'Total de línea solicitado',
      'details.requested': 'Solicitado {value}',
      'timeline.none': 'Aún no hay actividad registrada.',
      'timeline.resolutionNote': 'Nota de resolución',
      'audit.orderReceived': 'Pedido recibido vía EDI',
      'audit.orderAccepted': 'Pedido aceptado en BEES OMS',
      'audit.reprocessRequested': 'Reproceso solicitado — {detail}',
      'audit.outcome': 'Resultado: {status}',
      'audit.noteAdded': 'Nota de resolución agregada ({category})',
      'actor.system': 'sistema',
      'actor.bre': 'BRE',
      'actor.ops': 'Usuario de operaciones',
      'audit.detail.reprocessNoFix': '{code}: reprocesar sin correcciones',
      'audit.detail.bypass': '{code}: regla omitida',
      'audit.detail.upc': '{code}: UPC nuevos seleccionados para {count} línea(s)',
      'audit.detail.priceBees': '{code}: precio de contrato BEES aplicado, validación de precio omitida',
      'audit.detail.priceRetailer': '{code}: precio solicitado por el retailer aplicado, validación de precio omitida',
      'audit.detail.rejectedBypass': '{code}: regla omitida y reprocesado',
      'audit.detail.rejectedAsIs': '{code}: reprocesado sin correcciones',
    },
  };

  const MODAL_TITLE = {
    en: { 'reprocess-no-fix': 'modal.reprocessOrder', 'bypass-only': 'modal.bypassReprocess', 'upc-selector': 'action.selectUpcs', 'price-choice': 'action.choosePrice', 'rejected-choice': 'action.chooseReprocess' },
    es: { 'reprocess-no-fix': 'modal.reprocessOrder', 'bypass-only': 'modal.bypassReprocess', 'upc-selector': 'action.selectUpcs', 'price-choice': 'action.choosePrice', 'rejected-choice': 'action.chooseReprocess' },
  };

  function t(key, vars) {
    let str = (M[lang] && M[lang][key]) || (M.en[key]) || key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), String(vars[k]));
      });
    }
    return str;
  }

  function ruleField(code, field) {
    return (RULE[code] && RULE[code][lang] && RULE[code][lang][field])
      || (RULE[code] && RULE[code].en[field])
      || '';
  }

  function statusLabel(id) { return STATUS[lang][id] || STATUS.en[id] || id; }
  function lineStatusLabel(id) { return LINE_STATUS[lang][id] || LINE_STATUS.en[id] || id; }
  function ruleLabel(code) { return ruleField(code, 'label'); }
  function ruleActionLabel(code) { return ruleField(code, 'actionLabel'); }
  function ruleBlurb(code) { return ruleField(code, 'blurb'); }
  function ruleOrderCopy(code) { return ruleField(code, 'orderCopy'); }
  function noteCategoryLabel(slug) { return (NOTE_CAT[lang] && NOTE_CAT[lang][slug]) || slug; }
  function modalTitleForAction(action) { const k = MODAL_TITLE[lang][action]; return k ? t(k) : ''; }
  function locale() { return lang === 'es' ? 'es-AR' : 'en'; }

  function translateActor(actor) {
    if (actor === 'system') return t('actor.system');
    if (actor === 'BRE') return t('actor.bre');
    if (actor === 'Ops user') return t('actor.ops');
    return actor;
  }

  function translateActionDetail(detail) {
    const m1 = detail.match(/^([A-Z_]+): reprocess without fixes$/);
    if (m1) return t('audit.detail.reprocessNoFix', { code: m1[1] });
    const m2 = detail.match(/^([A-Z_]+): bypassed rule$/);
    if (m2) return t('audit.detail.bypass', { code: m2[1] });
    const m3 = detail.match(/^([A-Z_]+): selected new UPCs for (\d+) line\(s\)$/);
    if (m3) return t('audit.detail.upc', { code: m3[1], count: m3[2] });
    const m4 = detail.match(/^([A-Z_]+): applied BEES contract price, price validation bypassed$/);
    if (m4) return t('audit.detail.priceBees', { code: m4[1] });
    const m5 = detail.match(/^([A-Z_]+): applied retailer's requested price, price validation bypassed$/);
    if (m5) return t('audit.detail.priceRetailer', { code: m5[1] });
    const m6 = detail.match(/^([A-Z_]+): bypassed rule and reprocessed$/);
    if (m6) return t('audit.detail.rejectedBypass', { code: m6[1] });
    const m7 = detail.match(/^([A-Z_]+): reprocessed without fixes$/);
    if (m7) return t('audit.detail.rejectedAsIs', { code: m7[1] });
    return detail;
  }

  function translateAuditEvent(event) {
    if (event === 'Order received via EDI') return t('audit.orderReceived');
    if (event === 'Order accepted into BEES OMS') return t('audit.orderAccepted');
    const bre = event.match(/^(Blocked|Rejected|Accepted|In queue): (.+)$/);
    if (bre) {
      const statusMap = { Blocked: 'BLOCKED', Rejected: 'REJECTED', Accepted: 'ACCEPTED', 'In queue': 'IN_QUEUE' };
      const code = EN_RULE_LABEL_TO_CODE[bre[2]];
      if (code) return statusLabel(statusMap[bre[1]]) + ': ' + ruleLabel(code);
      return statusLabel(statusMap[bre[1]] || bre[1]) + ': ' + bre[2];
    }
    if (event.startsWith('Reprocess requested — ')) {
      return t('audit.reprocessRequested', { detail: translateActionDetail(event.slice('Reprocess requested — '.length)) });
    }
    if (event.startsWith('Outcome: ')) {
      const raw = event.slice('Outcome: '.length);
      const statusMap = { Accepted: 'ACCEPTED', Blocked: 'BLOCKED', Rejected: 'REJECTED', 'In queue': 'IN_QUEUE' };
      return t('audit.outcome', { status: statusLabel(statusMap[raw] || raw) });
    }
    const noteMatch = event.match(/^Resolution note added \((.+)\)$/);
    if (noteMatch) return t('audit.noteAdded', { category: noteCategoryLabel(noteMatch[1]) });
    return event;
  }

  function applyStaticLabels() {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('.lang-switcher-option').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
    const hint = document.getElementById('periodHint');
    if (hint && !hint.dataset.flash) hint.textContent = t('filter.periodHint');
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.setAttribute('aria-label', t('lang.menu'));
  }

  function setLang(next) {
    if (next !== 'en' && next !== 'es') return;
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    applyStaticLabels();
    if (typeof window.onLanguageChanged === 'function') window.onLanguageChanged();
  }

  function getLang() { return lang; }

  return {
    t, setLang, getLang, locale, applyStaticLabels,
    statusLabel, lineStatusLabel, ruleLabel, ruleActionLabel, ruleBlurb, ruleOrderCopy,
    noteCategoryLabel, modalTitleForAction, translateAuditEvent, translateActor,
    NOTE_CATEGORY_KEYS: Object.keys(NOTE_CAT.en),
  };
})();
