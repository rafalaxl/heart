const path = document.querySelector("#path");
const length = path.getTotalLength();
const vertices = [];
const aStart = [];
const aRandomDelay = [];
const aRandomOffset = [];

// Passo de 0.6 garante cerca de 1.000 partículas para o contorno do coração.
// Densidade perfeita para definição visual no celular e altíssimo desempenho.
const step = 0.6; 
for (let i = 0; i < length; i += step) {
    const point = path.getPointAtLength(i);
    
    // Posição final (formato de coração)
    vertices.push(point.x, -point.y, 0);
    
    // Posição de origem (centro do coração: 300, -276, 0)
    aStart.push(600 / 2, -552 / 2, 0);
    
    // Atraso de animação individual para cada partícula (stagger na GPU)
    // Combina a ordem sequencial no caminho com um ruído aleatório
    const progressAlongPath = i / length;
    aRandomDelay.push(progressAlongPath * 0.45 + Math.random() * 0.15);
    
    // Ruído/Offset tridimensional para dispersão no início
    aRandomOffset.push(
        (Math.random() - 0.5) * 450,
        (Math.random() - 0.5) * 450,
        (Math.random() - 0.5) * 350
    );
}