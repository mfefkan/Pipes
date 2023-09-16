import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: '{{name | slice :0:8 }} <br>{{"Muhabbet baldan tatlıdır, doyamazsın demedim mi ? " | custom:8:37}}                        <!--                                                                                                     1-  Pipes kullanırken | operatörünü yazdıktan sonra kullanacağımız pipe ı yazıyoruz.                                                                                                                                                                                                  2- "uppercase" Burada name parametresi içindeki string ifade büyük harfler ile template aktarılır. Böylelikle bir metni sadece uppercase pipe ını kullanarak görüntüsünü değiştirebiliriz. Bu pipe name parametresinin asıl değerini değiştirmez sadece frontende görüntü olarak işleyip gönderir.                                                                                                3- "slice" operatörü ile  array indis sayısı belirterek string ifadeyi indis numaralarından ayıklayarak iki indis arasındaki değeri yazdırır.                                                                                                4- "currency"   sayısal değerleri parasal formata dönüştürür.  bunu kullanmak için ya module kısmında provider"a deffault para birimini tanımlayabiliriz ya da şu şekilde -> "| currency : "$" "  her kullanımda belirterek de kullanabiliriz.                                                                                          5- "Date" Tarihsel verileri biçimlendirir.  örneğin : {{"23.05.1996"| date}} yaptığımızda sonucu May 23, 1996 olarak görebiliriz. Farklı kullanım varyasyonlarıda vardır. Onlarıda örneğin date: "fulldate"(medium,shortTime,mm:ss gibi) şeklinde kullanıp daha anlaşılır ve ihtiyaca yönelik olarak sunabiliriz.                                                                                             6-  "Json" Bir nesneyi ya da nesneleri json formatına dönüştürebilir.                                                                                          7-   "UpperCase" ve "LowerCase" metnin harflerini küçük ya da büyük gösterebiliriz.                                                                                          8-   "Percent" Sayısal değerleri %"lik olarak formatlar.                                                                                               9- "TitleCase" Her kelimenin ilk harfini büyük yazdırabiliriz.                                                                                          10- "KeyValue"  Elimizdeki bir key value formatındaki verinin hem keyine hem valuesine ulaşmamızı sağlayan bir pipe çeşitidir.                                                                                               Custom pipe terminalde (angular cli) ng g p ...name... ya da uzun haliyle ng generate pipe ...name... şeklinde tanımlanır.      -->'



})
export class AppComponent {

  constructor(private custom: CustomPipe) {
    console.log(custom.transform("Demedim mi????????", 0, 12))
  }
  name = 'Muhammed';
}
