# BrightSmile Dental Clinic Website

A modern, responsive dental clinic website ready for **GitHub Pages** (free hosting).

## Files

- `index.html` — main page
- `styles.css` — styling
- `script.js` — navigation, animations, form demo

## Host on GitHub Pages

### 1. Create a repository

1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g. `dental-clinic-website`)
3. Set visibility to **Public**
4. Create the repository

### 2. Push this folder

```bash
cd dental-clinic
git init
git add .
git commit -m "Add dental clinic website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable Pages

1. Open your repo → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` → **/ (root)**
4. Save

Your site will be live at:

`https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Customize

Edit `index.html` to update:

- Clinic name (**BrightSmile**)
- Address, phone, email
- Dentist names and photos
- Services and insurance list

## Local preview

Open `index.html` in a browser, or run:

```bash
npx serve .
```
