let a = document.querySelector('.burger')
let b = document.querySelector('.ww')
let c = document.querySelector('.bo')
let d = document.querySelector('.bi')
let f = 0
function burgerMenu() {
    f++
    if (f%2 == 1) {
        b.style.display='flex'
        d.style.display='flex'
        c.style.display='none'
    }
    else{
        b.style.display='none'
        d.style.display='none'
        c.style.display='flex'
    }
}

let j = document.querySelector('.oo')
let g = document.querySelector('.second_bloc')
let e = 0
function tesla() {
    e++
    if (e%2 == 1) {
        j.style.display='flex'
        k.style.display='none'
        h.style.display='none'
        g.style.display='none'
    }
    else{
    }
}
let h = document.querySelector('.ll')
let i = 0
function audi() {
    e++
    if (e%2 == 1) {
        j.style.display='none'
        k.style.display='none'
        r.style.display='none'
        h.style.display='flex'
    }
}
let k = document.querySelector('.ss')
let r = document.querySelector('.second_bloc')
let l = 0
function porsche(u) {
    l++
    if (l%2 == 1) {
        h.style.display='none'
        j.style.display='none'
        r.style.display='none'
        k.style.display='flex'
    }
}
let n= document.querySelector('.nn')
let ll= document.querySelector('.dirr')
let pp= document.querySelector('.nav')
let m = 0
function shop() {
    m++
    if (m%2 == 1) {
        n.style.display='flex'
        ll.style.display='flex'
    }
}
function w() {
    m++
    if (m%2 == 0) {
        n.style.display='none'
        ll.style.display='none'
    }
}
function p() {
    m++
    if (m%2 == 0) {
        n.style.display='none'
        ll.style.display='none'
    }
}
// let rr = document.querySelector('.ok')
let er = document.querySelector('.timeWork')
let kk = 0
function lol() {
    kk++
    if (kk%2 == 1) {
        er.style.display='none'
    }
}


let re = document.querySelector('.sms_svg')
let rem = document.querySelector('.x_svg')
let rrr = document.querySelector('.site')
let kl = 0
function wer() {
    kl++
    if (kl%2 == 1) {
        rrr.style.display='flex'
        re.style.display='none'
        rem.style.display='flex'
    }
    else{
        rrr.style.display='none'
        rem.style.display='none'
        re.style.display='flex'
    }
}