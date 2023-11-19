/* iki slash sadece o satırı yorum satırı yapmak için kullanılır.
yıldızlı slashlar birden fazla satırı yorum satırı yapabilir. */

// alert('dikkat sayfa hata verdi')

console.log('veri kontrolü') //yazdıklarımızı kontrol etmek için live serverda sağ click yapıp console kısmından bakabiliriz.

var isim = "hilal özdemir"

document.write(isim + "</br>") //+ iki anlama geliyor, hem toplama hem de sağına veya soluna eklenen tırnak/lar içindeki yazı gelmişse her iki taraftaki yazıyı birleştirir.
document.write("nasılsın" + "</br>")

isim = "Jonas"
document.write("isim: " + isim + "</br>")

let soyad = "özdemir"
document.write("soyad: " + soyad + "</br>")

const ulke = "deutschland"
document.write("ulke: " + ulke + "</br>")

let yasadigimSehrinMahallesi = "taby" //birden fazla kelime yanyana gelecekse ilk değil, diğerlerinin baş harfi büyük olur. Daha okunabilir oluyor ve buna Camelcase durumu deniyor.

yas =30 //önüne hiçbir şey yazmazsan var yazmışsın gibi kabul ediyor - yani var yas = gibi
document.write("yas: " + yas + "</br>")

var sayi1 = 5
var sayi2 = 4

var topla = sayi1 + sayi2 //eşittirin içindeki işlemi yap, eşittirin solundakinin içine at 
document.write("topla: " + topla + "</br>")

var cikar = sayi1 - sayi2
document.write("cikar: " + cikar + "</br>")

var carp = sayi1 * sayi2
document.write("carp: " + carp + "</br>")

var bol = sayi1 / sayi2
document.write("bol: " + bol + "</br>")

sayi1 = sayi1 + 1
document.write("sayi1: " + sayi1 + "</br>")

sayi1++ //bu şu anlama geliyor sayi1= sayi1 + 1
document.write("sayi1: " + sayi1 + "</br>")

sayi1-- //bu şu anlama geliyor, kendi değerinden bir azalt sayi1= sayi1 - 1
document.write("sayi1: " + sayi1 + "</br>")

sayi1+=2 //sayi1 = sayi1 + 2
document.write("sayi1: " + sayi1 + "</br>")

sayi1 = sayi1 % 3
document.write("sayi1: " + sayi1 + "</br>")

document.write("__ __ _ _ ___ __ __ _ _ _ __ __ _ _ _ _ " + "</br>")

document.write("sayi1: " + sayi1 + "</br>")
document.write("sayi2: " + sayi2 + "</br>")

document.write("__ __ _ _ ___ __ __ _ _ _ __ __ _ _ _ _ " + "</br>")

document.write("sayi1 2ye esit mi?: " + (sayi1==2) + "</br>")
document.write("sayi1 3e esit değil?: " + (sayi1!==3) + "</br>") //ünlem koyunca eşit değil demek oluyor, bu da doğru bir önerme olduğu için true yazıyor.
document.write("sayi1 3ten kucuk mu?: " + (sayi1<3) + "</br>")
document.write("sayi1 3ten kucuk veya esit mi?: " + (sayi1<=1) + "</br>")
document.write("sayi1 2den buyuk veya esit mi?: " + (sayi1>=2) + "</br>")

document.write("sayi1 2 ve sayi2 4: " + (sayi1==2 && sayi2==4) + "</br>")
document.write("sayi1 3 veya sayi2 4: " + (sayi1==3 && sayi2==4) + "</br>")


let yeniSayi1 = 4
let yeniSayi2 = "4"
document.write("sayilar esit mi?: " + (yeniSayi1===yeniSayi2) + "</br>") //3 eşittirle tiplere bakıyor aynı mı diye
document.write("sayilar esit mi?: " + (yeniSayi1==yeniSayi2) + "</br>")

//Functions - bir işi yapan iş parçacığı
/* iki süslü parantezler kod blokları anlamına geliyor. Yani birisi bir fonksiyonu çalıştırdığında
süslü parantezler arasında kalan ne kadar satır varsa bir de olabilir, bir sürü de
bunların hepsi çalışsın demek */


function toplamaYap() {

    let ilkSayi = 2
    let ikinciSayi = 4
    let toplamlari = ilkSayi + ikinciSayi
    document.write("toplamlari: " + toplamlari + "</br>")

}
toplamaYap()

/* İki adet sayı değerinin çarpımını bulup ekrana yazdıran bir fonksiyon yazınız.*/

function carpmaYap() {

    let ilkSayi = 3
    let ikinciSayi = 7
    let carpimlari = ilkSayi * ikinciSayi
    document.write("carpimlari: " + carpimlari + "</br>")

}
carpmaYap()

function sayilariCikar(sayi1, sayi2){
    let sonuc = sayi1 - sayi2
    document.write("sonuc: " + sonuc + "</br>")

}
sayilariCikar(5,3)

function sayilariCarp(sayi1, sayi2){
    let sonuc = sayi1 * sayi2
    return sonuc
}

let gelenSonuc = sayilariCarp(2,3)
document.write("gelenSonuc: " + gelenSonuc + "</br>")

//Object - Nesne
/* Nesne olması için direkt olarak süslü parantez açılması lazım.
Bir de virgülle birbirinden ayrılıp, rakam olursa tırnak içine alınmıyor.
Bir nesnenin properties (tanımlayıcı özellikleri) veya functional(fonksiyonel
özellikleri olabiliyor. Ve eğer en son tanımlamadan sonra ekleme yapmaya devam
edeceksen, yine en son özelliğin sonuna virgül konur, eğer sonsa virgül konmaz.
Normalde değişkeni şu şekilde tanımlıyorduk, var ad = ama bir objenin içinde tanıtırken : kullanılıyor*/

const bmwArac ={
    ad: "BMW 2",
    serisi: "E20",
    beygirGucu: 2000,
    gazaBas: function(){ /*yukarda önce function deyip sonra fonksiyonu yazdık - function sayilariCikar
    ama burda önce fonksiyonun ne olduğunu yazıp : sonra function(){} yazıyoruz. */
        document.write("araba calisiyor" + "</br>")
    }, //devam edeceğimiz için virgül koyduk
    durdur: function(){
        document.write("araba duruyor" + "</br>")
    } //artık fonksiyon yazmayacağımız için virgül koymadık
}

document.write("bmwArac ad: " + bmwArac.ad + "</br>") //bu bir çağırma yöntemi
document.write("bmwArac ad: " + bmwArac["ad"] + "</br>") //bu da diğer yöntem
bmwArac.gazaBas()
bmwArac.durdur()

/* Elinizde kişi adında bir obje olsun. Bu kişinin ad, soyad ve yaş değişkenleri 
ile kişi beslen ve yürü adında fonksiyonlaru olsun. Dışardan bu objenin özelliklerine
ulaşıp ekrana yazdırın ve fonksiyonlarını ise çalıştırın.*/

const kisi ={
    ad: "Hilal",
    soyad: "Oz",
    yas: "35",
    beslen: function(){
        document.write("yedim" + "</br>")
    },
    yuru: function(){
        document.write("ya kulum" + "</br>")
    }
}

document.write("ad:" + kisi.ad + "</br>")
document.write("soyad:" + kisi["soyad"] + "</br>")
document.write("yas:" + kisi.yas + "</br>")
kisi.beslen()
kisi.yuru()

//DOM - Document Object Model
/* html içinde tanımlanmış olan taglerin html kodlarına javascript ile
erişip onlara belli durumda işlemler yapmamızı sağlar. */

function uyariVer(){
    alert('bana tikladinnn')
}

let alinanDeger1 = prompt('ilk sayi gir') //normalde metinse string "5" oluyor
//Number içinde yazarsan tırnaklar kalkıyor - let alinanDeger1 = Number (prompt('ilk sayi gir')) 
console.log(alinanDeger1)

/* Bir butona tıklanıldığında kullanıcıdan alınan 2 adet sayının toplamını bulup consol'a yazdıran
bir code script proje yapınız*/

document.write("__ __ _ _ ___ __ __ _ _ _ __ __ _ _ _ _ " + "</br>")

function toplamA1(){
    let deger1 = Number (prompt("ilk sayıyı gir"))
    let deger2 = Number (prompt("ikinci sayıyı gir"))
    let sonuc = deger1 + deger2
    console.log(sonuc)
}

let ozelBtnElement = document.getElementById("ozelBtn") //bu şekilde çağırabiliyoruz
ozelBtnElement.addEventListener("click", uyariVer) //bu ikinci yöntem

ozelBtnElement.onclick = uyariVer //bu da üçüncü yöntem

/* Dinleyiciler (Listeners):
onchange - html etiketi değiştiğinde
onclick - tıklanıldığında
onmouseover - fare üzerine geldiğinde
onmouseout - fare üzerinden gittiğinde
onkeydown - klavyedeki bir tuşa bastığında
onload - ekran yüklenildiğinde
*/

//Arka planda STRING çalışıyor. 
let adSoyad = "merhaba ben memo ya senin adın ne memo mu? yoksa memo"
document.write("__ __ _ _ ___ __ __ _ _ _ __ __ _ _ _ _ " + "</br>")
document.write("adSoyad: " + adSoyad + "</br>")
document.write("__ __ _ _ ___ __ __ _ _ _ __ __ _ _ _ _ " + "</br>")
//uzunluk
document.write("adSoyad length: " + adSoyad.length + "</br>")
//belirtilen sıradan itibaren getir
document.write("adSoyad length: " + adSoyad.slice(5) + "</br>") /*bunu merhaba kelimesinin ba'sından itibaren 
yazmasının sebebi sayımın bilgisayarda 0'dan başlaması ve merha kısmı 0,1,2,3,4 olarak ilk 5 karakter olduğu için.. */

//belirtilen 2 aralıktan al getir
document.write("adSoyad length: " + adSoyad.slice(5,15) + "</br>") 

//bir karakter dizisinin içindeki elemana ulaşmak, örneğin merhaba kelimesindeki r'ye ulaşmak için:
document.write("adSoyad 3: " + adSoyad[2] + "</br>") //bunu r olarak yazdırıyor

let adSoyad1 = "merhaba ben 'memo' ya senin adın ne memo mu? yoksa memo"
/* iki tırnak içinde bir kelimeyi tekrar iki tırnak içine alırsan kabul etmez.
ya tek tırnak yapacaksın ya da ilk tırnak tekse içerdekini iki tırnak yapman lazım. */
let adSoyad2 = 'merhaba ben "memo" ya senin adın ne memo mu? yoksa memo'
//böyle oluyor yani..
let adSoyad3 = 'merhaba ben \'memo\' ya senin adın ne memo mu? yoksa memo'
/* Mesela yukarıdakinde ters slash yaptığımız için tek tırnak içinde tek tırnak kabul etti. */

document.write("adSoyad1 " + adSoyad1 + "</br>")
document.write("adSoyad2 " + adSoyad2 + "</br>") 

//Literal Templates
/* sürekli + + koyup uzun uzun yazmak yerine aşağıdaki gibi dolar ve
süslü parantezle yazılışı gibi daha düzenli ve kısa yazılabilir.*/

let sonuclar = 256
let isimler ="ahmet, mehmet"

let yazi = "isimleri: " + isimler + "sonuclari:" + sonuclar
document.write("yazi " + yazi + "</br>") 

let yazi1 = `isimleri: ${isimler} sonuclari ${sonuclar}`
document.write("yazi1 " + yazi + "</br>") // bu bile daha düzenli aşağıdaki gib yazılabilir:
document.write(`yazi1 ${yazi1} + </br>`) //dolar ve süslü parantezler back tick'ler içinde kullanılır.

/* Kisinin ad ve soyad adında 2 değişkeni var. Bunları literal templates
ile tek bir cümle içinde gösteriniz.*/

let ad = "hilal"
let soyAd = "oz"
document.write(`ad: ${ad} </br>`)
document.write(`soyad: ${soyAd} </br>`)

//Bigint (Big Integer) - Number
let buyukSayi = 2487582486398468356897n
document.write(`buyukSayi: ${buyukSayi} </br>`)

let yas1 = "10" + 5 /* tırnak içindeyse metin oluyor yani tipi string ve eğer 
metinle sayıyı yanyana getirirsen metin baskın olur. Yani toplam 15 değil 105 olur.*/
document.write(`yas1: ${yas1} </br>`)

let fiyat = 29.176785 //burda sayısal değer yazıldığı için arka planda Number(29.15) çalıştırıyor.
let fiyatString = "29.176785"

document.write(`fiyat ${fiyat.toFixed(2)} </br>`)
document.write(`fiyat ${fiyat.toPrecision(3)} </br>`)

//stringi number'a çevirmek için örneğin..
let fiyatNumber = Number(fiyatString)
let fiyatNumber1 = parseFloat(fiyatString) //bu da ikinci yöntem
let fiyatNumber2 = parseInt(fiyatString) //tam sayı veriyor, ondalıklı kısım gelmiyor. Bir stringi parse yapıyor yani sayıya dönüştürüyor.

document.write(`fiyatNumber ${fiyatNumber} </br>`)
document.write(`fiyatNumber1 ${fiyatNumber1} </br>`)
document.write(`fiyatNumber2 ${fiyatNumber2} </br>`)

//Bir sayıyı stringe çevirmek için de..
let fiyatYazi = String(fiyat)
let fiyatYazi1 = fiyat.toString()

document.write(`fiyatYazi ${fiyatYazi} </br>`)
document.write(`fiyatYazi1 ${fiyatYazi1} </br>`)

//verilen parametre bir sayı değildir? True veya False yazdırıyor.
//Nan - is not a number demek
document.write(`Nan fiyatString ${isNaN(isim)} </br>`)

//ARRAY - DİZİ
const meyveler =["uzum", "muz", "kivi", "elma", "armut", "kavun"] //köşeli parantez içinde de tanımlayabilirsin, böyle de: const meyveler = new Array('')
meyveler[0] ="karpuz"

document.write(`meyveler: ${meyveler} </br>`)
document.write(`meyveler 0: ${meyveler[0]} </br>`)

document.write(`meyveler length: ${meyveler.length} </br>`)




