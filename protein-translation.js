// problem URL: https://exercism.org/tracks/javascript/exercises/protein-translation

// object holding the coresponding protein for each codon 
const corsCodonProtein = {
    AUG:"Methionine",
    UUU:"Phenylalanine",
    UUC:"Phenylalanine",
    UUA:"Leucine",
    UUG:"Leucine",
    UCU:"Serine",
    UCC:"Serine",
    UCA:"Serine",
    UCG:"Serine",
    UAU:"Tyrosine",
    UAC:"Tyrosine",
    UGU:"Cysteine",
    UGC:"Cysteine",
    UGG:"Tryptophan",
    UAA:"STOP",
    UAG:"STOP",
    UGA:"STOP",
}

const translate = (RNA) => {
    // return empty array if the RNA is not provided and an argument to the translate function
    if(RNA===undefined){
        return []
    }
    // create two arrays one for Codons and the other for Proteins & the state stop which indicates if the RNA contains a STOP codon
    let arrayOfCodons = [];
    let arrayOfProteins = [];
    let stop = false;

    // turn the RNA string into an array of strings that are 3 charachters long
    for(let i=1; i<=RNA.length/3; i++){
        arrayOfCodons.push(RNA.slice(i*3-3,i*3));
    }

    // loop through the arrayOfCodons and fill the arrayOfProteins and treadt edge cases ("STOP", invalid codon)
    for (let j=0; j<arrayOfCodons.length; j++){
        if(corsCodonProtein[arrayOfCodons[j]] === "STOP"){
            stop = true
            break
        }else if(!Object.keys(corsCodonProtein).includes(arrayOfCodons[j])){
            throw new Error('Invalid codon');
        }else{
            arrayOfProteins.push(corsCodonProtein[arrayOfCodons[j]])
        }
    }

    // if the RNA is incomplete and there is no stop codon throw the error 
    if(stop === false && RNA.length%3!==0){
        throw new Error('Invalid codon');
    }

    return arrayOfProteins;
};

// console.log(translate("UUCUUCUAAUGGU"))
console.log(translate("AUGUUUUCUUAAAUG"))


// 0,3 # 3,6 # 6,9
// 1, 2, 3
