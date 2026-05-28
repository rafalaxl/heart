const path = document.querySelector("#path");
const length = path.getTotalLength();
const vertices = [];
const aStart = [];
const aRandomDelay = [];
const aRandomOffset = [];

// Passo de 0.35 para gerar mais partículas (~1.700),
// criando um aspecto de nuvem/nebulosa tridimensional mais densa e rica.
const step = 0.35; 
for (let i = 0; i < length; i += step) {
    const point = path.getPointAtLength(i);
    
    // Adiciona espessura tridimensional ao destino final das partículas
    // transformando o contorno fino em uma nuvem volumosa de estrelas
    const targetX = point.x + (Math.random() - 0.5) * 35;
    const targetY = -point.y + (Math.random() - 0.5) * 35;
    const targetZ = (Math.random() - 0.5) * 35;
    
    // Posição final (formato de coração volumoso)
    vertices.push(targetX, targetY, targetZ);
    
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