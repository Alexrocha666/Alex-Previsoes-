export function analyzeMatches(matches) {
  return matches.map(match => {
    // Lógica de análise aprimorada
    const homeStrength = calculateTeamStrength(match.homeTeam);
    const awayStrength = calculateTeamStrength(match.awayTeam);
    
    return {
      ...match,
      predictedScore: predictScore(homeStrength, awayStrength),
      winProbability: calculateProbability(homeStrength, awayStrength),
      predictedCorners: predictCorners(homeStrength, awayStrength),
      predictedYellowCards: predictCards(homeStrength, awayStrength),
      analysis: generateAnalysis(match, homeStrength, awayStrength)
    };
  });
}

// Funções auxiliares de análise...
