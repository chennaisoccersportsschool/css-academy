# Chennai Soccer School & Sports Academy — Website

## 🚀 GitHub Pages Deployment Guide

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click **"New repository"** (green button)
2. Repository name: `css-academy` (or any name you like)
3. Set to **Public**
4. Click **"Create repository"**

### Step 3 — Upload Your Files
1. Click **"uploading an existing file"** on the repository page
2. Drag and drop these files and folders:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder (with all your photos)
3. Scroll down → click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to repository **Settings**
2. Click **"Pages"** in the left menu
3. Under **"Source"**, select **"Deploy from a branch"**
4. Branch: **main** → Folder: **/ (root)**
5. Click **Save**
6. Wait 2–3 minutes

### Step 5 — Your Website is Live!
Your URL will be:
```
https://YOUR-GITHUB-USERNAME.github.io/css-academy/
```

---

## 🖼️ Image Sizes & Specifications

### Logo
- **File:** `images/logo.png`
- **Size:** 500×500 px (square)
- **Format:** PNG with transparent background
- **Already included:** ✅ `Final_Logo_Seprate.png` → renamed to `logo.png`

### Hero Background (Optional)
- **File:** `images/hero-bg.jpg`
- **Size:** 1920×1080 px
- **Format:** JPG, compressed under 500KB
- **Note:** Without this file the hero still looks great with the CSS gradient

### Gallery Images
- **Files:** `images/gallery1.jpg` through `images/gallery6.jpg`
- **Size:** 800×800 px (square crops work best)
- **Format:** JPG, under 300KB each

### Event Posters (Upcoming)
- **Files:** `images/event-upcoming1.jpg`, `event-upcoming2.jpg`, `event-upcoming3.jpg`
- **Size:** 600×800 px (portrait/poster ratio)
- **Format:** JPG or PNG

### Event Photos (Past)
- **Files:** `images/event-past1.jpg`, `event-past2.jpg`, `event-past3.jpg`
- **Size:** 600×800 px (portrait)
- **Format:** JPG

---

## 📝 How to Add Your Photos to the Website

### Adding Gallery Images
Open `index.html`, find the Gallery section and replace placeholder divs with:
```html
<div class="gallery-item">
  <img src="images/gallery1.jpg" alt="Training session" class="gallery-img" />
  <div class="gallery-overlay">
    <span class="gallery-label">Training</span>
  </div>
</div>
```

### Adding Event Posters
Find the Events section in `index.html` and replace placeholder cards:
```html
<div class="event-card">
  <img src="images/event-upcoming1.jpg" alt="Summer Tournament 2026" style="width:100%;height:100%;object-fit:cover;" />
</div>
```

### Adding a Hero Background Photo
Add a stadium photo named `hero-bg.jpg` to the `images/` folder.
The CSS already references it — it will appear automatically.

---

## 📱 WhatsApp Integration
The enquiry form automatically sends to: **+91 93611 15939**
No setup needed — it opens WhatsApp with the form data pre-filled.

---

## 🗂️ File Structure
```
css-academy/
├── index.html          ← Main website file
├── style.css           ← All styling
├── script.js           ← Interactivity
├── README.md           ← This file
└── images/
    ├── logo.png        ← Academy logo (included)
    ├── hero-bg.jpg     ← Hero background (add yours)
    ├── gallery1.jpg    ← Gallery photos (add yours)
    ├── gallery2.jpg
    ├── gallery3.jpg
    ├── gallery4.jpg
    ├── gallery5.jpg
    ├── event-upcoming1.jpg
    ├── event-upcoming2.jpg
    ├── event-upcoming3.jpg
    ├── event-past1.jpg
    ├── event-past2.jpg
    └── event-past3.jpg
```

---

© 2026 Chennai Soccer School & Sports Academy
