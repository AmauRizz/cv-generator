import puppeteer from 'puppeteer'
import { glob } from 'glob'
import { resolve } from 'path'
import { mkdirSync } from 'fs'
import { createServer } from 'vite'

mkdirSync(resolve('.output'), { recursive: true })

const server = await createServer({
    root: resolve('dist'),
    server: { port: 5174 }
})
await server.listen()

const browser = await puppeteer.launch()

for (const file of glob.sync('contents/*.ts')) {
    const { basename } = await import('path')
    const name = basename(file, '.ts')

    const page = await browser.newPage()
    await page.goto(`http://localhost:5174/index.html`, {
        waitUntil: 'networkidle0'
    })

    await page.pdf({
        path: resolve(`.output/${name}.pdf`),
        format: 'A4',
        printBackground: false,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    })

    await page.close()
    console.log(`.output/${name}.pdf created`)
}

await browser.close()
await server.close()