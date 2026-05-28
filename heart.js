const path = document.querySelector("#path");
const length = path.getTotalLength();
const vertices = [];
const aStart = [];
const aRandomDelay = [];
const aDuration = [];
const aTarget2 = []; // Atributo secundário: Coordenadas do Símbolo do Infinito

// Passo de 0.1 original (gera cerca de 17.000 pontos para máxima densidade)
const step = 0.1; 
for (let i = 0; i < length; i += step) {
    const point = path.getPointAtLength(i);
    
    // Posição final 1 (Coração volumoso)
    const targetX = point.x + (Math.random() - 0.5) * 30;
    const targetY = -point.y + (Math.random() - 0.5) * 30;
    const targetZ = (Math.random() - 0.5) * 70;
    vertices.push(targetX, targetY, targetZ);
    
    // Posição final 2 (Símbolo do Infinito / Lemniscata de Bernoulli)
    const angle = (i / length) * Math.PI * 2;
    const scale = 250; // Dimensão proporcional ao coração
    const denom = 1 + Math.sin(angle) * Math.sin(angle);
    
    const starX = 300 + (scale * Math.cos(angle)) / denom;
    const starY = -276 + (scale * Math.sin(angle) * Math.cos(angle)) / denom;
    const starZ = (Math.random() - 0.5) * 35; // Espessura 3D para o infinito
    aTarget2.push(starX, starY, starZ);
    
    // Posição de origem espalhada em uma enorme nuvem cósmica ao redor do coração (X: ±400, Y: ±400, Z: ±250)
    aStart.push(
        300 + (Math.random() - 0.5) * 800,
        -276 + (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 500
    );
    
    // Stagger original baseado no índice i: i * 0.002
    aRandomDelay.push(i * 0.002);
    
    // Duração original aleatória de 2 a 5 segundos
    aDuration.push(2.0 + Math.random() * 3.0);
}