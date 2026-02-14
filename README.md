# Resume Generator - Amaury Mulcey
A simple tool to create and generate CVs as PDF files.  
Built with **Vite** and **vanilla TypeScript**, each CV is a `.ts` file that injects HTML into a shared template.

## 🌐 Overview
Each CV lives in the `contents/` folder as a `.ts` file.  
Running `npm run generate` builds all CVs and exports them as `.pdf` files in the `output/` folder.

## ⚡ Technologies Used
- Vite
- TypeScript
- TailwindCSS
- Puppeteer

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

### Development
Start the development server
```bash
npm run dev
```

The project will be available at [http://localhost:5173/](http://localhost:5173/)

### Adding a new CV
Modify the my-cv-tempalte.ts in `contents/`
```bash
contents/my_new_cv.ts
```

It will automatically be picked up by `npm run generate`.

## 🖨 PDF Generation
Generate all CVs as PDF files
```bash
npm run generate
```
Generated files will be in the `output/` folder:

## 📫 Contact
- Portfolio: [www.amaurymulcey.fr](https://www.amaurymulcey.fr)
- Email: contact@amaurymulcey.fr
- GitHub: [AmauRizz](https://github.com/AmauRizz)
- LinkedIn: [Amaury Mulcey](https://www.linkedin.com/in/amaurymulcey/)

## 📝 License
This project is licensed under the `MIT` License. See LICENSE for details.