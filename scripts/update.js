import { writeFile } from 'fs/promises';
import { scrapeFlashScore } from './scrapers/flashscore.js';
import { scrapeSofaScore } from './scrapers/sofascore.js';
import { analyzeMatches } from './analytics.js';

async function main() {
  try {
    console.log('Iniciando coleta de dados...');
    
    // Coletar dados de múltiplas fontes
    const [flashScoreMatches, sofaScoreMatches] = await Promise.all([
      scrapeFlashScore(),
      scrapeSofaScore()
    ]);
    
    console.log('Processando dados e gerando previsões...');
    const allMatches = [...flashScoreMatches, ...sofaScoreMatches];
    const predictions = analyzeMatches(allMatches);
    
    // Criar arquivo de dados atualizado
    const data = {
      lastUpdated: new Date().toISOString(),
      matches: predictions
    };
    
    await writeFile('./data/matches.json', JSON.stringify(data, null, 2));
    console.log('Previsões atualizadas com sucesso!');
  } catch (error) {
    console.error('Erro durante a atualização:', error);
    process.exit(1);
  }
}

main();
