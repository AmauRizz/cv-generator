# Resume Generator - Amaury Mulcey
Welcome to my resume generator!  
I am **Amaury Mulcey**, a student and freelance **Web Developer**, passionate about building modern websites.

## 🌐 Overview
Each CV lives in the `contents/` folder as a `.ts` file.  
Running `npm run generate` builds all CVs and exports them as `.pdf` files in the `.output/` folder.  
The generator includes:
- A **shared HTML template** with a `#app` entry point
- **Multiple CV variants** as individual `.ts` files in `contents/`
- **Automatic PDF export** for every CV via Puppeteer
- **Live development** with hot reload on a specific CV

## ⚡ Technologies Used
**Core**
- Vite
- TypeScript
- TailwindCSS

**PDF Generation**
- Puppeteer
- tsx

**Development Tools**
- Git & GitHub
- NPM

## 🛠 Features
**CV templating**
- Each CV is a standalone `.ts` file
- Shared HTML base template
- TailwindCSS for styling

**PDF export**
- Automatic build via Vite
- One PDF generated per `.ts` file in `contents/`

## 🚀 Installation & Development

### Installation
Clone the repository and enter the `app/` folder
```bash
git clone https://github.com/AmauRizz/resume.git
cd resume/app
```

Install dependencies
```bash
npm install
```

Start the development server with the specified cv in `index.html`
```bash
npm run dev
```

The project will be available at [http://localhost:5173/](http://localhost:5173/)

### Adding a new CV
Create a new `.ts` file in `contents/`
```bash
contents/my_new_cv.ts
```

It will automatically be picked up by `npm run generate`.

## 🖨 PDF Generation
Generate all CVs as PDF files
```bash
npm run generate
```

Generated files will be in the `.output/` folder

## 📫 Contact
- Portfolio: [www.amaurymulcey.fr](https://www.amaurymulcey.fr)
- Email: contact@amaurymulcey.fr
- GitHub: [AmauRizz](https://github.com/AmauRizz)
- LinkedIn: [Amaury Mulcey](https://www.linkedin.com/in/amaurymulcey/)

## 📝 License
This project is licensed under the `MIT` License. See LICENSE for details.
