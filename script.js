class User {
   constructor(name, surname, phone, email, gender) {
       this.name = name
       this.surname = surname
       this.phone = phone
       this.email = email
       this.gender = gender
   }
}

class Card {
    constructor(number, holder, month, yaer, cvv, balance) {
        this.number = number
        this.holder = holder
        this.month = month
        this.yaer = yaer
        this.cvv = cvv
        this.balance = balance
    }
    toHtml(){
        return `<div class='card-small'>
                    <img src='https://i.postimg.cc/Hs9Wm9xP/building-14715574.png'>
                    <p class='number'>${this.number}</p>
                    <p>${this.holder.name} ${this.holder.surname}</p>
                    <p>${this.month}/${this.yaer}</p>
                    <div class='cvv'>${this.cvv}</div>
                </div>`
    }
}

let card_number = document.querySelector('.card-number')
let card_expire_month = document.querySelector('.card-expire-month')
let card_expire_year = document.querySelector('.card-expire-year')
let card_holder_name = document.querySelector('.card-holder-name')
let card_holder_surname = document.querySelector('.card-holder-surname')
let card_holder_phone = document.querySelector('.card-holder-phone')
let card_holder_email = document.querySelector('.card-holder-email')
let card_holder_gender = document.querySelector('.card-holder-gender')
let create_card_btn = document.querySelector('.create-card-btn')
let card_list = document.querySelector('.cards')
let get_card_btn = document.querySelector('.get-card-info-btn')
let num_finde_card = document.querySelector('.get-card-info-group input')




function pushBut() {
    if (card_holder_name.value == '' || card_holder_surname.value == '' || card_holder_phone.value == '' || card_holder_email.value == '' || card_holder_gender.value == '' || card_number.value == '' || card_expire_month.value == '' || card_expire_year.value == ''){
        alert('Не все поля заполнены')
    }else{
        let card_holder = new User(card_holder_name.value, card_holder_surname.value, card_holder_phone.value, card_holder_email.value, card_holder_gender.value)
        let card = new Card(card_number.value, card_holder, card_expire_month.value, card_expire_year.value, cvv, 10000)
        cards.push(card)
        cvv = getRandomArbitrary()

        card_list.innerHTML += card.toHtml()
    }
}
function getCard(number) {
  for (let i = 0; i < cards.length; i++){
    if (cards[i].number == number) {
      return cards[i]

    }
  }
}

function getRandomArbitrary() {
  return Math.floor(Math.random() * (999 - 100) + 100)
  
}

let cvv = getRandomArbitrary()
let cards = []
create_card_btn.addEventListener('click', pushBut)
get_card_btn.addEventListener('click', function() {
    let number = num_finde_card.value
    let info_card = getCard(number)
    alert(`Владелец: ${info_card.holder.surname} ${info_card.holder.name}
    Номер телефона: ${info_card.holder.phone}
    Почта: ${info_card.holder.email}
    Пол: ${info_card.holder.gender}`)
})
