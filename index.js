let data = [15, 9, 18,7, 0]

console.log(`data = ${data.join('-')}`)


const bubble = () => {
    // looping index
    for(let i = 0; i < data.length-1; i++){
        // looping perbandingan data
        for(let j = 0; j < data.length-1; j++){
            // bubble sort
            if(data[j] > data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
        console.log(`Proses ke-${i+1} = ${data.join(' - ')}`)
    }
}

bubble()

