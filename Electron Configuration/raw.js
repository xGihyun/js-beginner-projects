//Electron Configuration code but JavaScript only

let input1 = 55

let numberOfElectrons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const sub = ['s', 's', 'p', 's', 'p', 's', 'd', 'p', 's', 'd', 'p', 's', 'f', 'd', 'p', 's', 'f', 'd', 'p', 'f', 'd', 'f']
const nobleGas = ['[He]', '[Ne]', '[Ar]', '[Kr]', '[Xe]', '[Rn]', '[Og]']
const nobleGasAtoms = [2, 10, 18, 36, 54, 86, 118]
const principalQuantum = [1, 2, 2, 3, 3, 4, 3, 4, 5, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 6, 7, 7]
const valence = [0, 0, 0, 0, 0, 0, 0]
const valCharge = [1, 2, 3, 4, 5, 6, 7]
const valShell = [1, 2, 3, 4, -3, -2, -1, 0]
const elements = ["Hydrogen - H",      "Helium - He",        "Lithium - Li",
"Beryllium - Be",    "Boron - B",          "Carbon - C",
"Nitrogen - N",      "Oxygen - O",         "Fluorine - F",
"Neon - Ne",         "Sodium - Na",        "Magnesium - Mg",
"Aluminum - Al",     "Silicon - Si",       "Phosphorus - P",
"Sulfur - S",        "Chlorine - Cl",      "Argon - Ar",
"Potassium - K",     "Calcium - Ca",       "Scandium - Sc",
"Titanium - Ti",     "Vanadium - V",       "Chromium - Cr",
"Manganese - Mn",    "Iron - Fe",          "Cobalt - Co",
"Nickel - Ni",       "Copper - Cu",        "Zinc - Zn",
"Gallium - Ga",      "Germanium - Ge",     "Arsenic - As",
"Selenium - Se",     "Bromine - Br",       "Krypton - Kr",
"Rubidium - Rb",     "Strontium - Sr",     "Yttrium - Y",
"Zirconium - Zr",    "Niobium - Nb",       "Molybdenum - Mo",
"Technetium - Tc",   "Ruthenium - Ru",     "Rhodium - Rh",
"Palladium - Pd",    "Silver - Ag",        "Cadmium - Cd",
"Indium - In",       "Tin - Sn",           "Antimony - Sb",
"Tellurium - Te",    "Iodine - I",         "Xenon - Xe",
"Cesium - Cs",       "Barium - Ba",        "Lanthanum - La",
"Cerium - Ce",       "Praseodymium - Pr",  "Neodymium - Nd",
"Promethium - Pm",   "Samarium - Sm",      "Europium - Eu",
"Gadolinium - Gd",   "Terbium - Tb",       "Dysprosium - Dy",
"Holmium - Ho",      "Erbium - Er",        "Thulium - Tm",
"Ytterbium - Yb",    "Lutetium - Lu",      "Hafnium - Hf",
"Tantalum - Ta",     "Tungsten - W",       "Rhenium - Re",
"Osmium - Os",       "Iridium - Ir",       "Platinum - Pt",
"Gold - Au",         "Mercury - Hg",       "Thallium - Tl",
"Lead - Pb",         "Bismuth - Bi",       "Polonium - Po",
"Astatine - At",     "Radon - Rn",         "Francium - Fr",
"Radium - Ra",       "Actinium - Ac",      "Thorium - Th",
"Protactinium - Pa", "Uranium - U",        "Neptunium - Np",
"Plutonium - Pu",    "Americium - Am",     "Curium - Cm",
"Berkelium - Bk",    "Californium - Cf",   "Einsteinium - Es",
"Fermium - Fm",      "Mendelevium - Md",   "Nobelium - No",
"Lawrencium - Lr",   "Rutherfordium - Rf", "Dubnium - Db",
"Seaborgium - Sg",   "Bohrium - Bh",       "Hassium - Hs",
"Meitnerium - Mt",   "Darmstadtium - Ds",  "Roentgenium - Rg",
"Copernicium - Cn",  "Nihonium - Nh",      "Flerovium - Fl",
"Moscovium - Mc",    "Livermorium - Lv",   "Tennessine - Ts",
"Oganesson - Og"]

// Electron configuration
function electronConfig(atomicNum){
    let answer = ''
    let i = 0
    let j = 0
    let electrons

    while(atomicNum > 0){
        if(sub[i] == 's'){
            electrons = 2
            check(i, electrons, atomicNum)
            atomicNum -= 2
        }
        else if(sub[i] == 'p'){
            electrons = 6
            check(i, electrons, atomicNum)
            atomicNum -= 6
        }
        else if(sub[i] == 'd'){
            electrons = 10
            check(i, electrons, atomicNum)
            atomicNum -= 10
        }
        else if(sub[i] == 'f'){
            electrons = 14
            check(i, electrons, atomicNum)
            atomicNum -= 14
        }

        i++
    }

    //Store the computed electron configuration in a variable
    while(numberOfElectrons[j] != 0){
        answer += principalQuantum[j] + sub[j] + numberOfElectrons[j] + ' '
        j++
    }

    console.log(answer)
}

function check(i, electrons, atomicNum){
    let currentElec = 0
    let excess
    
    currentElec += electrons
    numberOfElectrons[i] += electrons

    if(currentElec > atomicNum){
        excess = currentElec - atomicNum
        numberOfElectrons[i] -= excess

        return
    }
}

function nobleGasConfig(atomicNum){
    let sum = 0
    let i = 0
    let j = 0
    let answer = ''

    while(numberOfElectrons[i] != 0){
        sum += numberOfElectrons[i]

        if(sum > nobleGasAtoms[j]) j++

        i++
    }

    sum = 0
    i = 0
    answer += nobleGas[j-1] + ' '

    while(numberOfElectrons[i] != 0){
        sum += numberOfElectrons[i]

        if(sum > nobleGasAtoms[j-1]) answer += principalQuantum[i] + sub[i] + numberOfElectrons[i] + ' '

        i++
    }

    console.log(answer)
}

function printElement(atomicNum){
    console.log(elements[atomicNum - 1])
}

printElement(input1)
electronConfig(input1)
nobleGasConfig(input1)