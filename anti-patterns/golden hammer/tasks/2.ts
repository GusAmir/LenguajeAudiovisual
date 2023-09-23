class SimpleGraph {
    drawBarChart(data: number[]) {
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    // Se agregaron con el tiempo
    drawPieChart(data: number[]) {
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    drawRadialChart(data: number[]) {
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }

    // ... otras visualizaciones adaptadas.
}
//--------------CON FORMATO----------------//
class SimpleGraph {
    draw(data: number[], chartType: string) {
        if (chartType === "bar") {
            this.drawBarChart(data);
        } else if (chartType === "pie") {
            this.drawPieChart(data);
        } else if (chartType === "radial") {
            this.drawRadialChart(data);
        } else {
            console.error("Unknown chart type.");
        }
    }

    private drawBarChart(data: number[]) {
        console.log("Performing God hammer operation...");
        console.log("Drawing bar chart:", data);
        // Lógica para dibujar gráficos de barra
    }

    private drawPieChart(data: number[]) {
        console.log("Performing God hammer operation...");
        console.log("Drawing pie chart:", data);
        // Lógica adaptada para dibujar gráficos de pastel
    }

    private drawRadialChart(data: number[]) {
        console.log("Performing God hammer operation...");
        console.log("Drawing radial chart:", data);
        // Lógica adaptada para dibujar gráficos radiales
    }
}
