#!/usr/bin/env python3
"""
Generate a redacted Rentman Project Request mockup as PNG
Shows the structure without real customer data
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create image
width, height = 800, 600
img = Image.new('RGB', (width, height), '#ffffff')
draw = ImageDraw.Draw(img)

# Try to use a system font, fallback to default
try:
    font_bold = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 14)
    font_regular = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 12)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 10)
except:
    font_bold = ImageFont.load_default()
    font_regular = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Colors
header_bg = '#f8f9fa'
border_color = '#e9ecef'
text_dark = '#212529'
text_muted = '#6c757d'
accent_teal = '#14b8a6'
label_color = '#868e96'

# Draw header bar
draw.rectangle([0, 0, width, 50], fill=header_bg)
draw.line([0, 50, width, 50], fill=border_color, width=1)

# Header text
draw.text((20, 15), "DETAILS", fill=text_dark, font=font_bold)
draw.text((600, 15), "DECLINE RENTAL REQUEST", fill='#dc3545', font=font_bold)

# Main content area - Left side (Details)
y_pos = 70

# Row 1: Name, Number, Source
draw.text((20, y_pos), "Name", fill=label_color, font=font_small)
draw.text((20, y_pos + 15), "Acme Events RM-20260131-0847", fill=text_dark, font=font_regular)

draw.text((250, y_pos), "Number", fill=label_color, font=font_small)
draw.text((250, y_pos + 15), "2,147,483,XXX", fill=text_dark, font=font_regular)

draw.text((400, y_pos), "Source", fill=label_color, font=font_small)
draw.text((400, y_pos + 15), "Api", fill=text_dark, font=font_regular)

y_pos += 55

# Row 2: Is paid, Status, Delivery
draw.text((20, y_pos), "Is paid", fill=label_color, font=font_small)
draw.text((20, y_pos + 15), "No", fill=text_dark, font=font_regular)

draw.text((250, y_pos), "Status", fill=label_color, font=font_small)
draw.text((250, y_pos + 15), "Accepted", fill=accent_teal, font=font_regular)

draw.text((400, y_pos), "Delivery / Collection", fill=label_color, font=font_small)
draw.text((400, y_pos + 15), "31/01/2026 10:00 - 02/02/2026", fill=text_dark, font=font_regular)

y_pos += 55

# Row 3: Planning period, Usage period
draw.text((20, y_pos), "Planning period", fill=label_color, font=font_small)
draw.text((20, y_pos + 15), "31/01/2026 10:00 - 02/02/2026", fill=text_dark, font=font_regular)

draw.text((250, y_pos), "Usage period", fill=label_color, font=font_small)
draw.text((250, y_pos + 15), "31/01/2026 10:00 - 02/02/2026", fill=text_dark, font=font_regular)

y_pos += 60

# Divider
draw.line([20, y_pos, width - 20, y_pos], fill=border_color, width=1)
y_pos += 20

# EQUIPMENT section
draw.text((20, y_pos), "EQUIPMENT", fill=text_dark, font=font_bold)
y_pos += 30

# Equipment table header
draw.text((30, y_pos), "Equipment", fill=label_color, font=font_small)
draw.text((300, y_pos), "Quantity", fill=label_color, font=font_small)
draw.text((380, y_pos), "Remark", fill=label_color, font=font_small)
draw.text((550, y_pos), "Price", fill=label_color, font=font_small)
y_pos += 25

# Divider
draw.line([20, y_pos, width - 20, y_pos], fill=border_color, width=1)
y_pos += 15

# Equipment items
draw.text((30, y_pos), "═══ HIRE / RENTAL ═══", fill=text_muted, font=font_small)
y_pos += 25

draw.text((30, y_pos), "🏢 Brand: Acme Productions", fill=text_dark, font=font_regular)
y_pos += 22
draw.text((30, y_pos), "👤 Customer: John Smith", fill=text_dark, font=font_regular)
y_pos += 22
draw.text((30, y_pos), "📍 Venue: Melbourne Convention Centre", fill=text_dark, font=font_regular)
y_pos += 30

draw.text((30, y_pos), "═══ EQUIPMENT REQUESTED ═══", fill=text_muted, font=font_small)
y_pos += 25

draw.text((30, y_pos), "🎆 4x CO2 Jets with Hose and Control", fill=text_dark, font=font_regular)
y_pos += 22
draw.text((30, y_pos), "🎆 2x Sparkular Pro with Granules", fill=text_dark, font=font_regular)
y_pos += 30

draw.text((30, y_pos), "═══ SPECIAL REQUIREMENTS ═══", fill=text_muted, font=font_small)
y_pos += 25

draw.text((30, y_pos), "📋 Setup by 2PM on Friday", fill=text_dark, font=font_regular)
y_pos += 30

# Right side panel - APPLICANT
draw.rectangle([550, 70, width - 10, 350], fill=header_bg, outline=border_color)

draw.text((565, 80), "APPLICANT", fill=text_dark, font=font_bold)

draw.text((565, 110), "Applicant", fill=label_color, font=font_small)
draw.text((565, 125), "Acme Productions", fill=text_dark, font=font_regular)

draw.text((565, 155), "Contact person", fill=label_color, font=font_small)
draw.text((565, 170), "John Smith", fill=text_dark, font=font_regular)

draw.text((565, 200), "Email", fill=label_color, font=font_small)
draw.text((565, 215), "john@acme.com.au", fill=text_dark, font=font_regular)

draw.text((565, 245), "Address", fill=label_color, font=font_small)
draw.text((565, 260), "123 Example Street", fill=text_dark, font=font_regular)
draw.text((565, 275), "Melbourne, VIC 3000", fill=text_dark, font=font_regular)

# REMARK section
draw.rectangle([550, 360, width - 10, 500], fill=header_bg, outline=border_color)
draw.text((565, 370), "REMARK", fill=text_dark, font=font_bold)

remark_text = [
    "═══ Acme Productions Order: ═══",
    "RM-20260131-0847",
    "Customer: john@acme.com.au",
    "Total: AUD $0.00",
    "Payment: PENDING",
    "Note: Hire / Rental",
    "4x CO2 Jets, 2x Sparkular Pro",
    "Tags: intake,fx,hire---rental"
]

y_remark = 395
for line in remark_text:
    draw.text((565, y_remark), line, fill=text_muted, font=font_small)
    y_remark += 14

# Add "Rentmanify" watermark
draw.text((width - 100, height - 25), "via Rentmanify", fill=accent_teal, font=font_small)

# Save
output_path = '/home/ubuntu/rentmanify/client/public/images/project-request-mockup.png'
img.save(output_path, 'PNG')
print(f"Saved to {output_path}")
