# ARC Electrical & Gas — Project Context for Claude Code

## What this project is
A Next.js 14 website for **Arc Electrical And Gas (Leeds) Ltd**, replacing a single-page Duda site. Built with TypeScript, Tailwind CSS, deployed on Vercel.

**Live preview:** Vercel deployment (check Vercel dashboard for URL)  
**GitHub:** `github.com/Samcarr01/arc-electrical-gas-website`  
**Domain (not yet connected):** arcelectricalandgas.co.uk (hosted at 123 Reg)

---

## Business details
- **Company:** Arc Electrical And Gas (Leeds) Ltd · Reg No: 10263305
- **Owner:** Christopher Algar (Chris)
- **Phone:** 07810 413488 · 0113 286 6140
- **Email:** chris@arcelectricalandgas.co.uk
- **Hours:** Mon–Fri 8am–5pm
- **Accreditations:** NAPIT approved, Part P accredited, Gas Safe registered (584102), Worcester Bosch accredited installer
- **Google rating:** 5.0 stars, 12 reviews
- **Facebook:** facebook.com/arcelectricalandgas

---

## Brand
- **Primary blue:** `#1A3E8B` (used on all dark sections — header, footer, hero, CTA banners)
- **Accent yellow:** `#FFD700` / Tailwind `yellow-400` (all CTA buttons — use dark text `text-gray-900` on yellow)
- **Logo:** Embedded as base64 in `components/logo.ts` (white logo on transparent bg)
- **Font:** System font stack (no Google Fonts dependency)

---

## Tech stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS (custom `navy` colour = `#1A3E8B`)
- Vercel deployment
- No CMS — all content is hardcoded
- Contact form → `/api/contact/route.ts` → Formspree (env var: `FORMSPREE_ENDPOINT`)

---

## Project structure
```
app/
  layout.tsx                     # Root layout, LocalBusiness schema, metadata
  page.tsx                       # Homepage
  globals.css
  sitemap.ts                     # Dynamic sitemap (16 URLs)
  robots.ts
  api/contact/route.ts           # Contact form → Formspree
  electrical-services/page.tsx
  gas-services/page.tsx
  eicr/page.tsx
  boiler-servicing/page.tsx
  landlord-certificates/page.tsx
  areas-we-cover/page.tsx
  contact/page.tsx
  electrician-kippax/page.tsx
  electrician-garforth/page.tsx
  electrician-allerton-bywater/page.tsx
  electrician-micklefield/page.tsx
  gas-engineer-kippax/page.tsx
  gas-engineer-garforth/page.tsx
  gas-engineer-allerton-bywater/page.tsx
  gas-engineer-micklefield/page.tsx

components/
  Header.tsx                     # Sticky nav, logo, yellow phone CTA
  Footer.tsx                     # Logo, Facebook link, nav, hours
  CTABanner.tsx                  # Reusable CTA strip (navy bg default)
  TrustBadges.tsx                # 6 accreditation badges strip
  FAQSection.tsx                 # Accordion (client component)
  ContactForm.tsx                # Form → /api/contact (client component)
  LocationPageTemplate.tsx       # Reusable template for all location pages
  logo.ts                        # Base64 data URL of the white logo PNG

public/
  van.jpg                        # Company van photo
  flames.jpg                     # Blue flames (gas section)
  lightbulbs.jpg                 # Edison bulbs (electrical section)
  logo.png                       # Logo PNG (also embedded in logo.ts)
```

---

## Services offered
**Electrical:** Fault finding, EICR testing, fuse board upgrades, lighting, sockets/switches, cooker installation, extractor fans, electric showers, landlord certificates  
**Gas:** Boiler servicing, boiler repairs (genuine parts), boiler installation, gas safety records (CP12), gas installations, gas fire servicing, gas fault finding, replacement radiators & small plumbing repairs, appliance servicing

---

## Service areas
**Primary:** Kippax, Garforth, Allerton Bywater, Micklefield, Sherburn in Elmet, South Milford, Castleford, Fairburn  
**Secondary:** Great Preston, Swillington, Rothwell, Cross Gates, Selby

---

## Important rules / conventions
- All dark section backgrounds use `bg-navy` (= `#1A3E8B`) — never `bg-gray-900`
- All CTA buttons use `bg-yellow-400 hover:bg-yellow-300 text-gray-900` (dark text on yellow)
- Say "genuine parts" not "quality parts"
- Hours are **8am–5pm Mon–Fri** everywhere including schema
- Hero breadcrumbs use `text-blue-200` on navy backgrounds
- Service pages follow consistent pattern: navy hero → TrustBadges → content → FAQSection → CTABanner
- Location pages all use `LocationPageTemplate` component — just pass data props
- `app/page.tsx` is a **server component** — no event handlers (onError etc.) on img tags
- Logo is used via `import { LOGO_DATA_URL } from '@/components/logo'` then `<img src={LOGO_DATA_URL} />`

---

## Outstanding tasks

### Contact form (not yet active)
Code is fully wired. User needs to:
1. Sign up free at **formspree.io**
2. Create a form → get endpoint URL like `https://formspree.io/f/xabcdefg`
3. In Vercel: Settings → Environment Variables → add `FORMSPREE_ENDPOINT`

### Domain connection (do NOT touch DNS yet)
When approved and ready:
1. Vercel: Project Settings → Domains → add `arcelectricalandgas.co.uk` and `www.arcelectricalandgas.co.uk`
2. 123 Reg: Change A record → `76.76.21.21`, add CNAME `www` → `cname.vercel-dns.com`
3. **Do NOT change MX records** — email is hosted via 123 Reg

### Tier 2 location pages (not yet built)
Still to add: Great Preston, Swillington, Rothwell, Cross Gates, Castleford, Sherburn in Elmet  
Process: copy any existing location page (e.g. `electrician-kippax/page.tsx`), update the data, add to `app/sitemap.ts`

### Google Business Profile
Update service areas to include: Sherburn in Elmet, Castleford, Fairburn, South Milford, Selby
