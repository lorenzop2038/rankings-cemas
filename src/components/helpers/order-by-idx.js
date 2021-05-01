export default function orderByIdx(ranking) {

    return ranking.sort(function (a, b) {
        if (a.idx_general < b.idx_general) {
            return 1;
        }
        if (a.idx_general > b.idx_general) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    
    const run = () => {
        const select = document.getElementById
        ("select_test") .value;
    
        switch (select) {
            case "num-lista":
                
                break;
            case "idx-academico":
                
                break;
            case "idx-tecnico":
                
                break;
            case "idx-general":
               
                 break;
    
            default:
                return null;
        }
    };

}