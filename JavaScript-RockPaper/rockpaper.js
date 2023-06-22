//JS ile değiştirmek için tüm seçenekleri seçme
var pedra = document.getElementById("pedra")
var papel = document.getElementById("papel")
var tesoura = document.getElementById("tesoura")

//Oyuncu puanını ve bilgisayar puanını seçme
var playerScore = document.getElementById("score_a")
var computerScore = document.getElementById("score_b")

//Noktaları değiştirmek için değişkenleri tanımlama ve doğrulama
var player = 0
var computer = 0
var ingame = 0
var choice
var computerChoice

//Bilgisayar seçimi oyuncunun seçiminden farklı olana kadar rastgele bir sayı üretme işlevi - sayı 1'den 3'e kadar gider
function randomChoice() {
    var randomChoice = Math.floor(Math.random() * 3) + 1 // rasgele bir sayı üretmek
    computerChoice = randomChoice // bilgisayar seçiminin değişkenini tanımlıyoruz
}


//Bir seçenek seçtiğinizde çağrılan işlev
function pickOption(o) {
    if (choice == undefined) {
        choice = o
        
        if (o == 1) {
            pedra.classList = "player"
        } else if (o == 2) {
            papel.classList = "player"
        } else {
            tesoura.classList = "player"
        }
        
        if (computerChoice == undefined) {
          
//Bilgisayara rasgele bir sayı üretme işlevini çağırdım, ancak bu oyuncunun seçimine eşitse, bir "while" çalıştırdım, bilgisayar seçimi oyuncunun seçimine eşitken, farklı olana kadar başka bir sayı üretecek            randomChoice()
            while (computerChoice == choice) {
                randomChoice()
            }
            
            if (computerChoice == 1) {
                pedra.classList = "computer"
            } else if (computerChoice == 2) {
                papel.classList = "computer"
            } else {
                tesoura.classList = "computer"
            }
        }
        
        getWin(choice, computerChoice) // Oyuncu seçimini ve bilgisayar seçimini geçerek kazanılıp kazanılmadığını doğrulama işlevi
    } else {
        alert("Zaten oynadın!") // Oyuncu zaten oynadıysa, tekrar oynayamayacağını belirten bir uyarı gelir
    }
    ingame = 0
}

function getWin(p, c) {
  
    //Oyuncu seçimini doğrulayın ve bilgisayar kimin kazandığını görmek için seçimini yapın
    if (ingame == 1) {
        
        if (p == 1 && c == 2) {
            computer ++
        } else if (p == 1 && c == 3) {
            player ++
        } else if (p == 2 && c == 1) {
            player ++
        } else if (p == 2 && c == 3) {
            computer ++
        } else if (p == 3 && c == 1) {
            computer ++
        } else if (p == 3 && c == 2) {
            player ++
        }
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}

function newGame() {
  
    // Oyuncunun tekrar oynamasını sağlamak için oyunun durumunu 1 olarak ayarlayın
    if (ingame == 0) {
        ingame = 1
        choice = undefined
        computerChoice = undefined
        
        pedra.classList = ""
        papel.classList = ""
        tesoura.classList = ""
        
        playerScore.innerHTML = player
        computerScore.innerHTML = computer
    }
}