function atualizarValor() {
    const produtoSelect = document.getElementById("produto");
    const valorUnitario = document.getElementById("valor-unitario");
    const produtoSelecionado = produtoSelect.value;

    // Produtos com seus respectivos valores unitários, litros e packs
    const produtos = {
        "1,5L": { unitario: 2.631578947, litros: 9, pack: 6 },
        "Água 12": { unitario: 1.789473684, litros: 6.12, pack: 12 },
        "Água Galão": { unitario: 5.847953216, litros: 20, pack: 1 },
        "Bombona": { unitario: 1.461988304, litros: 5, pack: 1 },
        "Caixa 24": { unitario: 2.000000000, litros: 6.84, pack: 24 },
        "Caixa 36": { unitario: 3.000000000, litros: 10.26, pack: 36 },
        "Concentrado": { unitario: 3.508771930, litros: 12, pack: 12 },
        "Energetico 2L": { unitario: 3.508771930, litros: 12, pack: 6 },
        "Energetico Lata": { unitario: 0.471929825, litros: 1.614, pack: 6 },
        "Ginseng": { unitario: 1.754385965, litros: 6, pack: 12 },
        "Pet 250": { unitario: 0.877192982, litros: 3, pack: 12 }
    };

    const produto = produtos[produtoSelect.options[produtoSelect.selectedIndex].text];
    
    if (produto) {
        valorUnitario.innerText = `Caixa Unitária: ${produto.unitario}`;
        calcularCaixasUnitarias(); 
    } else {
        valorUnitario.innerText = "";
    }
}

function calcularCaixasUnitarias() {
    const caixasFisicas = document.getElementById("caixas-fisicas").value;
    const produtoSelect = document.getElementById("produto");
    const produtoSelecionado = produtoSelect.options[produtoSelect.selectedIndex].text;

    // Produtos com valores unitários
    const produtos = {
        "1,5L": { unitario: 2.631578947 },
        "Água 12": { unitario: 1.789473684 },
        "Água Galão": { unitario: 5.847953216 },
        "Bombona": { unitario: 1.461988304 },
        "Caixa 24": { unitario: 2.000000000 },
        "Caixa 36": { unitario: 3.000000000 },
        "Concentrado": { unitario: 3.508771930 },
        "Energetico 2L": { unitario: 3.508771930 },
        "Energetico Lata": { unitario: 0.471929825 },
        "Ginseng": { unitario: 1.754385965 },
        "Pet 250": { unitario: 0.877192982 }
    };

    const produto = produtos[produtoSelecionado];

    if (produto && caixasFisicas > 0) {
        const quantidadeUnitarias = caixasFisicas * produto.unitario;
        document.getElementById("resultado").innerText = `Quantidade de Caixas Unitárias: ${quantidadeUnitarias.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerText = "";
    }
}

// Adiciona o evento ao seletor de produto
document.getElementById("produto").addEventListener("change", atualizarValor);
