# Content Editing Guide for Your Portfolio

## 🎨 **Where to Edit Content**

### **Option 1: Sanity CMS (Easiest - No Code Required)**

1. **Access Sanity Studio:**
   - Open browser: `http://localhost:3000/studio`
   - Login with your Sanity account

2. **What You Can Edit:**
   - **Projects**: Add/edit project cards with images, descriptions, links
   - **Skills**: Add/remove skills in different categories
   - **Profile**: Update your bio, name, location, languages
   - **Experience**: Add work experience entries

3. **After Making Changes:**
   - Changes appear automatically on your site
   - No need to rebuild or restart server

---

### **Option 2: Direct Code Editing**

#### **Navigation & Header**
📁 `src/components/layout/Header.tsx`
- Change navigation links
- Update social media links
- Modify resume link

#### **Hero Section (Landing Page)**
📁 `src/components/sections/Hero.tsx`
- **Line 48**: Your name
- **Lines 55-58**: Your tagline/description
- Change call-to-action buttons

#### **About Section**
📁 `src/components/sections/About.tsx`
- **Lines 87-95**: Your bio text
- **Lines 100-115**: Education information
- Personal details (languages, location)

#### **Projects Section**
📁 `src/components/sections/Projects.tsx`
- Projects are loaded from Sanity CMS
- Edit in Sanity Studio for easy updates
- Filter categories defined on **Line 21**

#### **Skills Section**
📁 `src/components/sections/Skills.tsx`
- Skills are loaded from Sanity CMS
- Edit in Sanity Studio to add/remove skills

#### **Contact Section**
📁 `src/components/sections/Contact.tsx`
- **Lines 152-154**: Email address
- **Lines 162-164**: Phone number
- **Lines 170-174**: Location text
- Form functionality on **Lines 25-37**

---

## 🎨 **Styling Changes**

### **Colors**
📁 `tailwind.config.js`
- **Line 8**: Primary color (currently blue-600)
- Dark mode colors automatically adjusted

### **Fonts**
📁 `src/app/layout.tsx`
- **Lines 7-16**: Font configuration (Sora & Lora)
- Change to other Google Fonts if needed

---

## 📝 **Common Edits**

### **Change Your Name:**
1. Edit `Hero.tsx` line 48
2. Update metadata in `layout.tsx` lines 20-24

### **Add a New Project:**
1. Go to `http://localhost:3000/studio`
2. Click "Project" → "Create"
3. Fill in details and publish

### **Update Resume:**
1. Replace `public/Bavesh_Raam_S.pdf` with your resume
2. Update link in `Header.tsx` line 68

### **Change Social Links:**
Edit `Header.tsx` lines 47-68:
```tsx
{ 
  icon: <Github className="h-6 w-6" />,
  href: 'YOUR_GITHUB_URL', 
  label: 'GitHub' 
},
```

---

## 🚀 **After Making Changes**

### **If Editing in Sanity:**
- Changes appear immediately
- Just refresh the browser

### **If Editing Code:**
- Save the file
- Browser auto-refreshes (Hot reload)
- Check for any errors in terminal

---

## 📂 **Project Structure**

```
src/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── about/page.tsx     # About page
│   ├── projects/          # Projects pages
│   ├── skills/page.tsx    # Skills page
│   └── contact/page.tsx   # Contact page
├── components/
│   ├── sections/          # Main sections (Hero, About, etc.)
│   ├── layout/            # Header, Footer
│   └── ui/                # Buttons, Cards, etc.
├── lib/
│   └── sanity.ts          # CMS data fetching
└── types/
    └── index.ts           # TypeScript types
```

---

## 🔧 **Development Commands**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

---

## 💡 **Tips**

1. **Always edit content in Sanity CMS** when possible - it's easier!
2. **Test changes** in development before deploying
3. **Keep backups** of your content in Sanity
4. **Use TypeScript types** when editing code
5. **Check browser console** for errors

---

## 🆘 **Need Help?**

- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
