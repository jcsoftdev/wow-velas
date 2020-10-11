import React from 'react'
import CardMini from '../../../Shared/Components/Designs/CardMini';
import Slider from '../../../Shared/Components/Designs/Slider'
import NabvarClient from '../../../Shared/Components/Nabvar/NabvarClient'
import Offers from '../Offers'
import Services from '../Services'
import Products from '../Products'
import Candles from '../Candles'
import Birthday from '../Birthday'
import Footer from '../Footer'


import './Main.scss'

import bg3 from '../../../Shared/Images/bg3.png'
let slides = [
  {
    background: "https://s3-alpha-sig.figma.com/img/e817/2fb1/edfb5ec31bddcedb3d3a52d72ce5a75f?Expires=1602460800&Signature=QTJMaFm3MptJO7AugsuAixsN9i0WNecd0cVPO5L2xj8x44FtruXZsCbirdTKLx~GtGzUpUh7LLsg~P0UFQmSCDSRRf~Ev9P~c06kXyI1MSJXn2RibZslJ~~JugY3L8Kr8Rb24dpKhc3~vqHQzgdqxqnX6WZ~u237jKvmTREEVtzhwO~q5m30qhtiblXd85m~glLEKjMu0U-pxkUjA15-5w30GDxa8nkwfX--MmvZatU2RGwNmgRa37UdQ4FXCKLXxmgQp865QVSNMQt60QopVZWObm51JWMBa29SPF3Vzqw1ECpx5tz8koHRk1MyMjHOfmBPbZF170Lzs91JgPkolg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    text: "Pastel"
  },
  {
    background: "https://image.freepik.com/psd-gratis/pastel-velas-celebrar-dia-cumpleanos_23-2148373899.jpg",
    text: "Velas"
  },
  {
    background: "https://www.w3schools.com/w3images/sound.jpg",
    text: "Sound"
  }
];
const benefits = [
  {
    img: "https://s3-alpha-sig.figma.com/img/f049/39a2/a4792270adbf36b46e1ae91f8aa733ae?Expires=1602460800&Signature=IERgb6ChQZBqrRkmb0157bz-rEqKsNfe74qxk8djKkh9w55Vt1vBL8hNcJMyan8FRGrK9Ef-Efg80wIqFnfj1xf0R1wONiR29JGG7RnC0A0MynODRu6O43Uq3QTHGNhn1Zo6iU6DP6MPULNc7QJY17BidVIg3EwqMrGgpYLnTEWWjqBPKW9dGj6MWJ5N03-TihbsOU3bicCLkFcVZ9rKBGVU40z-JiZzrJQGQXc-IowtBT-EHtdctu-wgeuI5tMjowFAZVh2O6VNkgI8PwU49n5PtXOH-f2XIWmvSmC-du6YPPdqjYENJu1oxC4-Oh3opvcCcrTbWxhMoNzohb72Eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Colombia",
    text: "Estamos más cerca de tí"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/dcb3/6bec/2dadaf218c8a99f1e9c331b5a3c208ad?Expires=1602460800&Signature=bfI9Np~SW0mqXv-kdFEnB3WWjxLqa2di1Gew2u-jlSnna~A5G~iqQvVDMxTo~8-MCkI0Wsllot1HarvtHVz8pI0QnJdu5GjNoSnhG2rQtTuONaQk18ZQiy5XrPGTrsKFq2WJfkuqdwpq1O4~ZIZU33jvtn~ntj20RVec0oICb65jCT9FOeTKyuMPu~3n~MoPj-~1EylPpPa3jvcGjoG82MC-Of4H-nXzOFWUTuR5p~GTmnZ4qUdyC-epKIhzrXeyNMWFr1pkxHrwG5zPVFZZFH~JiU4LpNbXY5mhzb6NDwEsKj5isdMtFT1EjwaeHVeKHBDybvTZ2Hj2Y5W0zZOIuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Distribuidor",
    text: "Convierte en distribuidor de nuestros prodcutos"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/39f6/9b6e/cbb7bc1e5aa9060e1bacf399a31b12ae?Expires=1602460800&Signature=Uk75QBBv1qLbQ3kQB3ZPUYlX1sG3AtGihF3OGZ8X5lffJ4I~ymmLYUetpyz52gjGz5sfHirdmLc2nI3ON5cY9UnrphsF74x4kVedbxAdrm7Y0Oq00qerillr0lus0004ennS4fEVaL9hd95o9Xv2Pn05D8m8fOICsoNS1qFjKAh5tAkStpNmSMUfaoJIsb32UiWRBXdiTVkvKCnK0LcrcheIJJVYCp3m7MMGg873o~0osR712qdpOyahYEbqJmg4W5pvLP0O67XIAFjFZC8c0AIejYdZwvDnr2u0vvFvELA~0AXSfB5M0z5ZdMaom7pog-8dlBkgdNF81H6i-oJFGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Envios",
    text: "Descrubre nuestros mejores descuentos en envios"
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/10ff/5e15/2e81197b60ffc882d75c77824f701cff?Expires=1602460800&Signature=Cq8bHodHPSMhpA6A~W2uwfUs~m4EWn6242yTYB~2nyAJgvG7bi-JgG022nXe109SZOyqioSypfgr7P4AYH~DMfn57fdSX21yMu6d3pXDXcWSdC2blmlpZ4Xco0i6455dWeg2vpFFw6wwXJ-zpdRAf3eeOfVQ2WEKuiiCrlJc4yKkWes7TCagl1hlMqtQfhjUQ6dd1KPKcfsrTZGU5FGBghXnGiChnXhRWj2hZXvoWpYsuH7ZaLvISvAynBl2QI9ro67y17PuUcycXgmZQTfdZrGYhoRK4~zJIoo3MtuYd5T0Ge26xaejSzi~H6zGWMCAIfP~pe78oE-ds3hSMUMNyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    title: "Métodos de pago",
    text: "Los mejores métodos de pagos"
  },
]

const ofertas = {
  img1: "https://s3-alpha-sig.figma.com/img/5001/fe74/be2d55e0fa25b9a1ffceaaa0cf41ee4f?Expires=1602460800&Signature=LWLd76f7yM40y~T6diK~Zdc~ephtl4U5d-jQc6CJJWCHTPexF76apovn7Z1goarBDUfwK3YX5FVLLsvb4dz7I5pgbXamnnQJOrwkI14GdTRp021cGY68vZrKQn2gMxgM8ZqcU8T5X8MyDfDlrJTeCrh5zMH~GSv6ohUOV1hGGFJDHVF8ahmRg5c8sLlj0d1bWGi-fSKWyjICnFuNUoJWqomNxrQZ2jfZMKpPInvhHITAQe~alQxuC93E3XUfZwS7xrvjKb9sQpLiEiIZIZ0kaOT-kzBPEnwQgu5pcvEr7y-UmIhb4OOeC9nBQ3XN451COttUzz-ST~H0XT5OKdlCZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  img2: "https://s3-alpha-sig.figma.com/img/b9c2/d215/468fac4f069ab9398650b9ac7b56c753?Expires=1602460800&Signature=XLYRRisRXwNdz00u5aanoQvQTJZSA84epH5sDbGAywp-~GDQzrW5LNxWiMHRTOx6O5dkwmgwPvgiROK57G38FguPMq9i~sY2LBhHnHL0tsEqe2clSxphr7WUHOcoxleM5KW-pHEgzlw10KtSHriHJehDFIaK8fv~wlhzjAICHVuxQyKw0KQV8heP0joqu6BoKGV~jevnDwe5xyaEX7z-vpKx8UEFVDrFWE8trrEdwOFsomPcgt9AX7tmaMWFfzVMQFkjP9J5mej01fpNAqK2~w2TQgcXtCg9n3ZgIxUlckR2jYe1SQZAm63xDXRX2todXBjKwuB4uYf5~n0yPsgq9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  img3: "https://s3-alpha-sig.figma.com/img/c091/1c57/63aef3d77893b2fdb23283ff21ed16c8?Expires=1602460800&Signature=YuKz4Nu9ArVECpGy2lAc54knlaEJtdeudkguxPBZ6U6TfIbZY2ajo10BHsArq688Z5Qo0u1QL~4MsoKuoc1ScdUCWiNK0HjsKerGdKGkxL78mozM2-bpZSqhFEQtTtS9Lu3i0gFIbEq7ZXBwn4617hD2zCCB2eV0YuT17RD8WEqTEAnReP8U~JExgJMl-dW0dAnmgVxqGlpwmJrofsn3AJddBcqsXEU275bWL43Glxt0Wm0o0BCpH7PuFeOQBibwqXXls8leYBDynIk6KiEnnEpZ7lkb-jsBUiWsGk1zNb67kr7Kyp-NzsR7NFxExePMAawFWTd2Hd03aLjWHadO1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
}


const Main = () => {
  return (
    <>
      <NabvarClient/>
      <Slider slides={slides}/>
      {/* <div className="benefits container">
        {benefits.map((item) => <CardMini image={item.img} title={item.title
        } text={item.text}/>)}
      </div> */}
      <div className="bg1">
        <Services/>
        <Offers/>
      </div>
      <div className="bg2">
        <Products/>
      </div>
      <div className="bg3">
        <img src={bg3} />
        <Products/>
      </div>

      <Candles/>
      <Birthday/>

      <Footer/>
    </>
  )
}

export default Main

