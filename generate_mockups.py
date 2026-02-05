#!/usr/bin/env python3
"""
Generate two placeholder mockups for Rentmanify:
1. Hire Request via Email - shows how email enquiries become Project Requests
2. Shopify Order with Shipping/Merchant Fees - shows custom integration
"""

# Mockup 1: Hire Request via Email
hire_request_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="900" height="500">
  <defs>
    <style>
      .bg { fill: #ffffff; }
      .header { fill: #f8fafc; }
      .border { stroke: #e2e8f0; stroke-width: 1; fill: none; }
      .title { font-family: system-ui, sans-serif; font-size: 12px; fill: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
      .label { font-family: system-ui, sans-serif; font-size: 11px; fill: #94a3b8; }
      .value { font-family: system-ui, sans-serif; font-size: 13px; fill: #1e293b; }
      .section-title { font-family: system-ui, sans-serif; font-size: 11px; fill: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
      .remark { font-family: system-ui, sans-serif; font-size: 11px; fill: #475569; }
      .badge { fill: #14b8a6; }
      .badge-text { font-family: system-ui, sans-serif; font-size: 10px; fill: white; font-weight: 600; }
      .source-badge { fill: #f59e0b; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect class="bg" width="900" height="500" rx="8"/>
  <rect class="border" x="0.5" y="0.5" width="899" height="499" rx="8"/>
  
  <!-- Header -->
  <rect class="header" width="900" height="50" rx="8"/>
  <rect x="0" y="42" width="900" height="8" fill="#f8fafc"/>
  <line x1="0" y1="50" x2="900" y2="50" stroke="#e2e8f0"/>
  
  <!-- Title -->
  <text x="24" y="32" class="title">DETAILS</text>
  
  <!-- Source Badge -->
  <rect class="source-badge" x="800" y="16" width="80" height="22" rx="4"/>
  <text x="840" y="31" class="badge-text" text-anchor="middle">VIA EMAIL</text>
  
  <!-- Main Content Grid -->
  <!-- Left Column - Details -->
  <g transform="translate(24, 70)">
    <text class="label" y="0">Name</text>
    <text class="value" y="18">ACME Events - Hire Request - 20260215-0847</text>
    
    <text class="label" y="50">Status</text>
    <rect class="badge" x="0" y="58" width="70" height="20" rx="4"/>
    <text class="badge-text" x="35" y="72" text-anchor="middle">Accepted</text>
    
    <text class="label" y="100">Planning Period</text>
    <text class="value" y="118">15/02/2026 09:00 - 16/02/2026 23:00</text>
    
    <text class="label" y="150">Source</text>
    <text class="value" y="168">Email Enquiry → Rentmanify</text>
  </g>
  
  <!-- Right Column - Applicant -->
  <g transform="translate(550, 70)">
    <text class="section-title" y="0">APPLICANT</text>
    
    <text class="label" y="30">Company</text>
    <text class="value" y="48">ACME Events Pty Ltd</text>
    
    <text class="label" y="80">Contact</text>
    <text class="value" y="98">John Smith</text>
    
    <text class="label" y="130">Email</text>
    <text class="value" y="148">john@████████.com.au</text>
    
    <text class="label" y="180">Address</text>
    <text class="value" y="198">123 ████ Street</text>
    <text class="value" y="216">Melbourne, VIC 3000</text>
  </g>
  
  <!-- Divider -->
  <line x1="24" y1="260" x2="520" y2="260" stroke="#e2e8f0"/>
  
  <!-- Equipment Section -->
  <g transform="translate(24, 280)">
    <text class="section-title" y="0">EQUIPMENT</text>
    
    <text class="label" y="30">═══ HIRE / RENTAL ═══</text>
    <text class="value" y="55">🏢 Brand: ACME Events</text>
    <text class="value" y="75">👤 Customer: John Smith</text>
    <text class="value" y="95">📍 Venue: Melbourne Convention Centre</text>
    
    <text class="label" y="125">═══ EQUIPMENT REQUESTED ═══</text>
    <text class="value" y="150">📦 4x Cold Spark Machine with Controller</text>
    <text class="value" y="170">📦 2x CO2 Jet with Hose and Fittings</text>
    
    <text class="label" y="200">═══ SPECIAL REQUIREMENTS ═══</text>
    <text class="value" y="225">📋 Setup required by 2PM Saturday</text>
  </g>
  
  <!-- Remark Section -->
  <g transform="translate(550, 280)">
    <text class="section-title" y="0">REMARK</text>
    <rect x="0" y="15" width="320" height="180" fill="#f8fafc" rx="4"/>
    <text class="remark" y="35" x="10">═══ ACME Events Hire Request ═══</text>
    <text class="remark" y="55" x="10">Customer: john@████████.com.au</text>
    <text class="remark" y="75" x="10">Event: Corporate Gala Dinner</text>
    <text class="remark" y="95" x="10">Date: 15-16 Feb 2026</text>
    <text class="remark" y="115" x="10">Venue: Melbourne Convention Centre</text>
    <text class="remark" y="145" x="10">Note: Client requests pyro for</text>
    <text class="remark" y="165" x="10">keynote speaker entrance.</text>
    <text class="remark" y="185" x="10">Tags: hire, fx, corporate</text>
  </g>
</svg>'''

# Mockup 2: Shopify Order with Shipping/Merchant Fees
shopify_order_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 550" width="900" height="550">
  <defs>
    <style>
      .bg { fill: #ffffff; }
      .header { fill: #f8fafc; }
      .border { stroke: #e2e8f0; stroke-width: 1; fill: none; }
      .title { font-family: system-ui, sans-serif; font-size: 12px; fill: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
      .label { font-family: system-ui, sans-serif; font-size: 11px; fill: #94a3b8; }
      .value { font-family: system-ui, sans-serif; font-size: 13px; fill: #1e293b; }
      .section-title { font-family: system-ui, sans-serif; font-size: 11px; fill: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
      .remark { font-family: system-ui, sans-serif; font-size: 11px; fill: #475569; }
      .badge { fill: #14b8a6; }
      .badge-text { font-family: system-ui, sans-serif; font-size: 10px; fill: white; font-weight: 600; }
      .source-badge { fill: #96bf48; }
      .price { font-family: system-ui, sans-serif; font-size: 13px; fill: #1e293b; font-weight: 600; }
      .table-header { font-family: system-ui, sans-serif; font-size: 10px; fill: #64748b; font-weight: 600; }
      .table-row { font-family: system-ui, sans-serif; font-size: 11px; fill: #1e293b; }
      .financial { fill: #fef3c7; }
    </style>
  </defs>
  
  <!-- Background -->
  <rect class="bg" width="900" height="550" rx="8"/>
  <rect class="border" x="0.5" y="0.5" width="899" height="549" rx="8"/>
  
  <!-- Header -->
  <rect class="header" width="900" height="50" rx="8"/>
  <rect x="0" y="42" width="900" height="8" fill="#f8fafc"/>
  <line x1="0" y1="50" x2="900" y2="50" stroke="#e2e8f0"/>
  
  <!-- Title -->
  <text x="24" y="32" class="title">DETAILS</text>
  
  <!-- Source Badge - Shopify Green -->
  <rect class="source-badge" x="780" y="16" width="100" height="22" rx="4"/>
  <text x="830" y="31" class="badge-text" text-anchor="middle">VIA SHOPIFY</text>
  
  <!-- Main Content Grid -->
  <!-- Left Column - Details -->
  <g transform="translate(24, 70)">
    <text class="label" y="0">Name</text>
    <text class="value" y="18">King Confetti Order: KC-4521</text>
    
    <text class="label" y="50">Order Number</text>
    <text class="value" y="68">4,521</text>
    
    <text class="label" y="100">Status</text>
    <rect class="badge" x="0" y="108" width="70" height="20" rx="4"/>
    <text class="badge-text" x="35" y="122" text-anchor="middle">Accepted</text>
    
    <text class="label" y="150">Delivery / Collection</text>
    <text class="value" y="168">22/02/2026 - 23/02/2026</text>
  </g>
  
  <!-- Right Column - Applicant -->
  <g transform="translate(550, 70)">
    <text class="section-title" y="0">APPLICANT</text>
    
    <text class="label" y="30">Customer</text>
    <text class="value" y="48">Sarah Johnson</text>
    
    <text class="label" y="80">Email</text>
    <text class="value" y="98">sarah@████████.com</text>
    
    <text class="label" y="130">Shipping Address</text>
    <text class="value" y="148">456 ████ Avenue</text>
    <text class="value" y="166">Sydney, NSW 2000</text>
  </g>
  
  <!-- Divider -->
  <line x1="24" y1="250" x2="520" y2="250" stroke="#e2e8f0"/>
  
  <!-- Equipment Section with Table -->
  <g transform="translate(24, 270)">
    <text class="section-title" y="0">EQUIPMENT</text>
    
    <!-- Table Header -->
    <text class="table-header" x="0" y="30">Equipment</text>
    <text class="table-header" x="280" y="30">Qty</text>
    <text class="table-header" x="330" y="30">Remark</text>
    <text class="table-header" x="480" y="30">Price</text>
    <line x1="0" y1="40" x2="520" y2="40" stroke="#e2e8f0"/>
    
    <!-- Order Summary -->
    <text class="label" y="60">═══ Order Summary ═══</text>
    <text class="table-row" x="0" y="85">Slowfall Paper Confetti - Rainbow</text>
    <text class="table-row" x="280" y="85">6</text>
    <text class="table-row" x="330" y="85">PRODUCT-KC-CONF-RB</text>
    
    <!-- Shipping -->
    <text class="label" y="115">═══ Shipping / Dispatch ═══</text>
    <text class="table-row" x="0" y="140">📦 Method: Express Post</text>
    <text class="table-row" x="0" y="160">📍 Deliver: 456 ████ Avenue, Sydney</text>
    <text class="table-row" x="0" y="180">💰 Shipping Paid: $18.95</text>
    
    <!-- Financial Summary - Highlighted -->
    <rect class="financial" x="-10" y="195" width="540" height="75" rx="4"/>
    <text class="label" y="215">═══ Financial Summary ═══</text>
    <text class="table-row" x="0" y="240">💵 King Confetti Product Sales (Gross)</text>
    <text class="table-row" x="330" y="240">FX-SALE</text>
    <text class="price" x="480" y="240">$149.70</text>
    <text class="table-row" x="0" y="260">📦 King Confetti Shipping: Express Post</text>
    <text class="table-row" x="330" y="260">FX-SHIPPING</text>
    <text class="price" x="480" y="260">$18.95</text>
  </g>
  
  <!-- Remark Section -->
  <g transform="translate(550, 270)">
    <text class="section-title" y="0">REMARK</text>
    <rect x="0" y="15" width="320" height="200" fill="#f8fafc" rx="4"/>
    <text class="remark" y="35" x="10">═══ King Confetti Order: KC-4521 ═══</text>
    <text class="remark" y="55" x="10">Customer: sarah@████████.com</text>
    <text class="remark" y="75" x="10">Total: AUD $168.65</text>
    <text class="remark" y="95" x="10">Payment: PAID via Stripe</text>
    <text class="remark" y="125" x="10">Note: 6x Rainbow Confetti for</text>
    <text class="remark" y="145" x="10">wedding reception 23rd Feb.</text>
    <text class="remark" y="175" x="10">Tags: shopify, confetti, sale</text>
    <text class="remark" y="205" x="10">💳 Merchant fees reconciled via Xero</text>
  </g>
  
  <!-- Proposed Price -->
  <g transform="translate(550, 495)">
    <text class="section-title" y="0">PROPOSED PRICE</text>
    <text class="price" y="25">$ 168.65</text>
  </g>
</svg>'''

# Write the SVG files
with open('/home/ubuntu/rentmanify/client/public/images/mockup-hire-request.svg', 'w') as f:
    f.write(hire_request_svg)

with open('/home/ubuntu/rentmanify/client/public/images/mockup-shopify-order.svg', 'w') as f:
    f.write(shopify_order_svg)

print("Created mockup-hire-request.svg and mockup-shopify-order.svg")
