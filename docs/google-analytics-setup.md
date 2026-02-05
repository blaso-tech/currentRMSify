# Rentmanify Google Analytics Setup Guide

This document outlines the custom events tracked on the Rentmanify website and how to configure Google Analytics 4 (GA4) to monitor conversions effectively.

---

## Property Details

| Field | Value |
|-------|-------|
| **Property Name** | Rentmanify |
| **Stream URL** | https://www.rentmanify.com |
| **Stream ID** | 13403570947 |
| **Measurement ID** | G-97WBHVSDJK |

---

## Events Tracked on the Website

The Rentmanify website automatically tracks the following custom events. These are sent to GA4 via the `gtag()` function.

### 1. Form Submission

**Event Name:** `form_submit`

This event fires when a user successfully submits the "Request Access" form.

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| `form_name` | Identifier for the form | `request_access` |
| `current_system` | The system the user selected | `Shopify + Rentman` |

**How to verify:** Check Realtime > Events in GA4 after submitting a test form.

---

### 2. Mockup Click (Lightbox Open)

**Event Name:** `mockup_click`

This event fires when a user clicks on the "What you'll see in Rentman" mockup to open the lightbox modal.

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| `mockup_type` | Which mockup was clicked | `rentman_project_request` |

**Why this matters:** High engagement with this section indicates users want to see proof of the output. If clicks are high but form submissions are low, the mockup may need to be more compelling.

---

### 3. Pricing Modal Open

**Event Name:** `pricing_view`

This event fires when a user clicks "View Plans" to open the Stripe pricing table modal.

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| `trigger_location` | Where the click originated | `authority_section` |

**Why this matters:** Tracks intent to self-serve. If views are high but subscriptions are low, pricing or plan structure may need adjustment.

---

### 4. CTA Clicks

**Event Name:** `cta_click`

This event fires when a user clicks any primary CTA button (e.g., "Request Access" in header or hero).

| Parameter | Description | Example Value |
|-----------|-------------|---------------|
| `cta_location` | Where the CTA was clicked | `hero`, `header`, `why_section` |
| `cta_text` | The button text | `Request Access` |

---

## GA4 Configuration Steps

### Step 1: Verify Tag Installation

1. Go to **Admin > Data Streams > Rentmanify**
2. Click **View tag instructions**
3. Confirm the tag is installed (the warning "Data collection isn't active" will clear within 48 hours of first traffic)

### Step 2: Mark Conversions

To track form submissions as conversions:

1. Go to **Admin > Events**
2. Find `form_submit` in the event list (after it has fired at least once)
3. Toggle **Mark as conversion** to ON

Repeat for any other events you want to treat as conversions (e.g., `pricing_view`).

### Step 3: Create Custom Audiences (Optional)

Create audiences for remarketing or analysis:

**Engaged Visitors:**
- Include users who triggered `mockup_click` OR `pricing_view`
- Exclude users who triggered `form_submit`

**Form Abandoners:**
- Include users who viewed the page for > 60 seconds
- Exclude users who triggered `form_submit`

### Step 4: Set Up Explorations (Optional)

Create a funnel exploration to visualise the conversion path:

1. **Step 1:** Page view (landing)
2. **Step 2:** `mockup_click` OR `pricing_view`
3. **Step 3:** `form_submit`

This shows where users drop off in the journey.

---

## Google Tag Manager (Optional)

If you prefer to manage tags via GTM instead of hardcoded gtag():

1. Create a new GTM container
2. Add the GA4 Configuration tag with Measurement ID `G-97WBHVSDJK`
3. Create custom event tags for each event above
4. Set up triggers based on CSS selectors or data attributes

**Note:** The current implementation uses direct gtag() calls, which is simpler for a single-page site. GTM is recommended if you plan to add multiple tracking pixels (Meta, LinkedIn, etc.) later.

---

## Testing Checklist

Before going live, verify each event fires correctly:

- [ ] Load the page and confirm `page_view` appears in GA4 Realtime
- [ ] Click the mockup image and confirm `mockup_click` fires
- [ ] Click "View Plans" and confirm `pricing_view` fires
- [ ] Submit the form and confirm `form_submit` fires
- [ ] Click header CTA and confirm `cta_click` fires with correct `cta_location`

Use the **GA4 DebugView** (Admin > DebugView) for detailed event inspection during testing.

---

## Troubleshooting

**Events not appearing:**
- Check browser console for JavaScript errors
- Ensure ad blockers are disabled during testing
- Wait 24-48 hours for data to appear in standard reports (Realtime shows immediately)

**Duplicate events:**
- Check if gtag() is being called multiple times (e.g., in both index.html and a React component)

**Missing parameters:**
- Verify the event payload in browser DevTools > Network > filter by "collect"

---

## Contact

For questions about analytics configuration or custom event implementation, contact the BLASO Technology team.
