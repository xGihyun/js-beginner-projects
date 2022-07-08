let numberOfElectrons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const sub = ['s', 's', 'p', 's', 'p', 's', 'd', 'p', 's', 'd', 'p', 's', 'f', 'd', 'p', 's', 'f', 'd', 'p', 'f', 'd', 'f']
const nobleGas = ['[He]', '[Ne]', '[Ar]', '[Kr]', '[Xe]', '[Rn]', '[Og]']
const nobleGasAtoms = [2, 10, 18, 36, 54, 86, 118]
const principalQuantum = [1, 2, 2, 3, 3, 4, 3, 4, 5, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 6, 7, 7]
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

const input = document.querySelector(".atomic-num")
const output = document.querySelector(".output")
const elementName = document.querySelector(".output .answer.element-name")
const electronConfig = document.querySelector(".output .answer.electron-config")
const nobleGasConfig = document.querySelector(".output .answer.noble-gas-config")

let toggled = false

input.addEventListener("keyup", e => {
    if(e.key == 'Enter'){
        const atomicNum = input.value
        const elementNameText = "<p>" + elements[atomicNum - 1] + "</p>"
        const electronConfigText = "<p>" + computeElectronConfig(atomicNum) + "</p>"
        const nobleGasConfigText = "<p>" + computeNobleGasConfig(atomicNum) +" </p>"
        
        if(validateInput(atomicNum)){
            if(!toggled){
                input.classList.toggle("move")
                output.classList.toggle("show")
                toggled = true
            }
            
            elementName.innerHTML = elementNameText //Prints element name
            electronConfig.innerHTML = electronConfigText //Prints eletron configuration
            nobleGasConfig.innerHTML = nobleGasConfigText //Prints noble gas configuration

        }
    }
})

function validateInput(input){
    if(input > 0 && input < 119){
        return true
    }

    console.log('Please put a valid input')

    return false
}

//Computes electron configuration
function computeElectronConfig(atomicNum){
    let answer = ''
    let i = 0
    let j = 0
    let electrons = 0
    numberOfElectrons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

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
        else{
            return
        }

        i++
    }

    //Store the computed electron configuration in a variable
    while(numberOfElectrons[j] != 0){
        answer += principalQuantum[j].toString() + sub[j] + numberOfElectrons[j].toString() + ' '
        j++
    }

    return answer
}

//Just a helper function for the electron config function
//Checks if the current electrons calculated exceeded the user's input
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

//comptutes for short configuration || Noble Gas configuration
function computeNobleGasConfig(atomicNum){
    let sum = 0
    let i = 0
    let j = 0
    let answer = ''

    if(atomicNum == 1) return 'Null'

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

    return answer
}





