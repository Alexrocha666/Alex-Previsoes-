import puppeteer from 'puppeteer';

export async function scrapeFlashScore() {
  // Configuração simplificada para rodar no GitHub Actions
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  try {
    await page.goto('https://www.flashscore.com/', { 
      waitUntil: 'networkidle2', 
      timeout: 30000 
    });
    
    // Implementação do scraping...
    // (Manter a lógica de scraping que mostrei anteriormente)
    
    return matches;
  } finally {
    await browser.close();
  }
}
