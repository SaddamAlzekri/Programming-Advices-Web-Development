type TraficLightColor = "Red" | "Yellow" | 'Green';

function TraficLight(typeTrafic: TraficLightColor) : void {
    if(typeTrafic === 'Red')
        console.log(`${typeTrafic}`);
    if(typeTrafic === 'Green')
        console.log(`${typeTrafic}`);
    if(typeTrafic === 'Yellow')
        console.log(`${typeTrafic}`);
}

TraficLight("Green");

