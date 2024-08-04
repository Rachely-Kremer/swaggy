const dom = {
    home_page: document.getElementById('home-page'),
    nuv_up: document.getElementById('nuv-up'),
    nav_down: document.getElementById('nav_down'),
    all_product: document.getElementById('all_products'),
    products_page: document.getElementById('products_page'),
    basket_page: document.getElementById('basket_page'),
    all_basket: document.getElementById('all_basket'),
    pay: document.getElementById('pay'),
}

let nuvUp = () => {
    const logo = document.createElement('img');
    logo.src = './image/logo.png';
    dom.nuv_up.appendChild(logo);
    logo.className = "logo";

    const all_ul = document.createElement('div');
    dom.nuv_up.appendChild(all_ul);
    all_ul.className = 'all_ul';

    const ul = document.createElement('ul');
    ul.className = "ul-nav";
    all_ul.appendChild(ul);

    const li1 = document.createElement('li');
    li1.innerHTML = "דף הבית";
    ul.appendChild(li1);
    li1.className = 'li-nav';
    li1.onclick = () => {
        dom.home_page.style.display = 'block';
        dom.products_page.style.display = 'none';
        dom.basket_page.style.display = 'none'
    }

    const li2 = document.createElement('li');
    li2.innerHTML = "קולקציות";
    ul.appendChild(li2);
    li2.className = 'li-nav';
    li2.onclick = () => {
        dom.home_page.style.display = 'none';
        dom.products_page.style.display = 'block';
        dom.basket_page.style.display = 'none'
    }

    const li3 = document.createElement('li');
    li3.innerHTML = "לסל הקניות";
    ul.appendChild(li3);
    li3.className = 'li-nav';
    li3.onclick = () => {
        dom.products_page.style.display = 'none';
        dom.home_page.style.display = 'none';
        dom.basket_page.style.display = 'block'
        showBasket();
    }

};
let nav_down = () => {

    const title1 = document.createElement("div");
    dom.nav_down.appendChild(title1);
    title1.className = "title1";

    const BlackLogo = document.createElement('img');
    title1.appendChild(BlackLogo)
    BlackLogo.src = './image./BlackLogo.png';
    BlackLogo.className = "BlackLogo"

    const heading = document.createElement("h5");
    heading.innerHTML = 'HEY YOU,' + '<br>' + 'LETS KEEP YOU UP TO DATE';
    title1.appendChild(heading);
    const join = document.createElement('img');
    join.src = './image/join.png';
    dom.nav_down.appendChild(join);
    join.className = "join";
    const hr = document.createElement("hr");
    dom.nav_down.appendChild(hr);

    const all_ul = document.createElement("div");
    dom.nav_down.appendChild(all_ul);
    all_ul.className = "all_ul1";

    const ul1 = document.createElement("ul");
    all_ul.appendChild(ul1);
    ul1.className = "ul1";

    const h1 = document.createElement("h1");
    ul1.appendChild(h1);
    h1.innerHTML = 'קישורים';

    const hr1 = document.createElement("hr");
    ul1.appendChild(hr1);
    hr1.className = "hr1";

    // const hrPink1 = document.createElement("hr");
    // document.getElementById("nav_down").appendChild(hrPink1)
    // hrPink1.className = "hr1";

    const li1 = document.createElement("li");
    ul1.appendChild(li1);
    li1.innerHTML = 'יצירת קשר';
    const li2 = document.createElement("li");
    ul1.appendChild(li2);
    li2.innerHTML = 'גיפט קארד';
    const li3 = document.createElement("li");
    ul1.appendChild(li3);
    li3.innerHTML = 'רשימת חנויות';
    const li4 = document.createElement("li");
    ul1.appendChild(li4);
    li4.innerHTML = 'טבלת מידות';


    const hr4 = document.createElement("hr");
    dom.nav_down.appendChild(hr4);
    hr4.className = "hr4";


    const ul2 = document.createElement("ul");
    // document.getElementById("nav_down").appendChild(ul2)
    all_ul.appendChild(ul2);
    ul2.className = "ul1";

    const h2 = document.createElement("h1");
    ul2.appendChild(h2);
    h2.innerHTML = 'מידע שימושי'

    const hr2 = document.createElement("hr");
    ul2.appendChild(hr2);
    hr2.className = "hr1";

    const li5 = document.createElement("li");
    ul2.appendChild(li5);
    li5.innerHTML = 'אודותינו';
    const li6 = document.createElement("li");
    ul2.appendChild(li6);
    li6.innerHTML = 'שאלות ותשובות';
    const li7 = document.createElement("li");
    ul2.appendChild(li7);
    li7.innerHTML = 'מדיניות משלוחים והחזרות';
    const li8 = document.createElement("li");
    ul2.appendChild(li8);
    li8.innerHTML = 'הצהרת נגישות';
    const li9 = document.createElement("li");
    ul2.appendChild(li9);
    li9.innerHTML = 'תקנון';
    const ul3 = document.createElement("ul");
    // document.getElementById("nav_down").appendChild(ul3)
    all_ul.appendChild(ul3);
    ul3.className = "ul1";

    const h3 = document.createElement("h1");
    ul3.appendChild(h3);
    h3.innerHTML = 'שירות לקוחות';

    const hr3 = document.createElement("hr");
    ul3.appendChild(hr3);
    hr3.className = "hr1";

    const li10 = document.createElement("li");
    ul3.appendChild(li10);
    li10.innerHTML = 'א׳-ה׳ - 09:30-17:30';
    const li11 = document.createElement("li");
    ul3.appendChild(li11);
    li11.innerHTML = 'ו׳ 08:00-12:00';
    const li12 = document.createElement("li");
    ul3.appendChild(li12);
    li12.innerHTML = '0527178197';
    const li13 = document.createElement("li");
    ul3.appendChild(li13);
    li13.innerHTML = 'office@swaggy.co.il';
    const li14 = document.createElement("li");
    ul3.appendChild(li14);

};


//עמוד מוצרים


const background3 = document.createElement('img');
background3.src = './image/background3.png';
dom.all_product.appendChild(background3);
background3.className = "background3";
const products = [{
    id: 0,
    price: 150,
    src: './image/im.png',
    discreption: 'פעוטות בנים חולצות טי כותנה חלק שרוול קטנטן',
}, {
    id: 1,
    price: 140,
    src: './image/yu.png',
    discreption: 'מצויר קזואל שמלות סוודר לפעוטות',
}, {
    id: 2,
    price: 130,
    src: './image/ds.png',
    discreption: ' כיס פשוט קזואל שמלה לפעוט צבע ורוד',
}, {
    id: 3,
    price: 130,
    src: './image/b.png',
    discreption: 'פעוטות בנות שמלות שולי',
    // + '<br>' + 'קפלים שרוול שוליים קורדורוי',
}, {
    id: 4,
    price: 120,
    src: './image/fty.png',
    discreption: 'כיס כפתורים קדמיים אריג משובץ',
    //  + '<br>' + 'קזואל  חליפת שני חלקים לפעוט',
}, {
    id: 5,
    price: 160,
    src: './image/frew.png',
    discreption: 'פריט מספר כיס מכתב תלמיד',
    // + '<br>' + 'מכינה חליפת שני חלקים לפעוט',
}, {
    id: 6,
    price: 130,
    src: './image/fe.png',
    discreption: 'פשוט קזואל סוודרים לפעוטות בוי',
}, {
    id: 7,
    price: 170,
    src: './image/fa.png',
    discreption: 'קזואל זקט ומעיל לפעוט',
    // + '<br>' + 'כפתרה כפולה כיס הדפס זברה',
}, {
    id: 8,
    price: 150,
    src: './image/nice.png',
    discreption: 'קזואל זקט ומעיל לפעוט',
}, {
    id: 9,
    price: 140,
    src: './image/n.png',
    discreption: 'קזואל זקט ומעיל לפעוט',
}, {
    id: 10,
    price: 133,
    src: './image/re.png',
    discreption: 'כיס כפתורים קדמיים אריג משובץ',
}, {
    id: 11,
    price: 130,
    src: './image/aq.png',
    discreption: ' קזואל שמלות סוודר לפעוטות צבע קרם',
}, {
    id: 12,
    price: 122,
    src: './image/ass.png',
    discreption: 'קזואל  חליפת שני חלקים לפעוט',
}, {
    id: 13,
    price: 134,
    src: './image/an.png',
    discreption: 'חגור כפתרה כפולה פשוט ',
}, {
    id: 14,
    price: 130,
    src: './image/qwe.png',
    discreption: 'חגור כפתרה כפולה פשוט ',
}, {
    id: 15,
    price: 130,
    src: './image/zx.png',
    discreption: 'בגד גוף ומכנסיים עם טלאים של תינוק ניובורן',
}, {
    id: 16,
    price: 230,
    src: './image/cv.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 17,
    price: 160,
    src: './image/lk.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 18,
    price: 150,
    src: './image/po.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 19,
    price: 130,
    src: './image/poi.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 20,
    price: 170,
    src: './image/poiu.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 21,
    price: 130,
    src: './image/poiuy.png',
    discreption: 'מכפלת קפל פשוט קזואל שמלה לפעוט',
}, {
    id: 22,
    price: 110,
    src: './image/ni.png',
    discreption: 'כיס כפתורים קדמיים אריג משובץ',
    // + '<br>' + 'קזואל  חליפת שני חלקים לפעוט',
}, {
    id: 23,
    price: 110,
    src: './image/bio.png',
    discreption: 'כיס כפתורים קדמיים אריג משובץ',
    // + '<br>' + 'קזואל  חליפת שני חלקים לפעוט',
}
];
let sum = 0;
const drowProduct = (product) => {
    const div = document.createElement('div');
    div.id = 'item' + product.id;
    div.className = 'item';
    const img = document.createElement('img');
    img.src = product.src;
    div.appendChild(img);
    img.className = 'img-product'

    const span = document.createElement('span');
    span.innerHTML = product.discreption;
    div.appendChild(span);
    span.className = 'discruption'
    const h6 = document.createElement('h6');
    h6.innerHTML = product.price + ' $';
    div.appendChild(h6);
    h6.className = 'price'
    const add = document.createElement('button');
    add.className = 'add-button'
    add.onclick = () => {
        let border1 = document.getElementById('item' + product.id);
        border1.classList.add('add_border');
        sum += product.price;
        console.log(sum);
        addonclick(product.id);
    };
    add.innerHTML = 'הוסף לסל';
    div.appendChild(add);
    dom.all_product.appendChild(div);
    product.className = 'product'
}
products.forEach(drowProduct);

// עמוד סל

let basket = [];

const drowBasket = (product, index) => {
    const div = document.createElement('div');
    div.className = 'item';
    const img = document.createElement('img');
    img.src = product.src;
    div.appendChild(img);
    img.className = 'img-product';
    const h6 = document.createElement('h6');
    h6.innerHTML = product.price + ' ש"ח';
    div.appendChild(h6);
    h6.className = 'price';
    const span = document.createElement('span');
    span.innerHTML = product.discreption;
    div.appendChild(span);
    span.className = 'discruption';
    const remove = document.createElement('button');
    remove.className = 'remove-button';
    remove.onclick = () => {
        let border2 = document.getElementById('item' + product.id);
        border2.classList.remove('add_border');
        sum -= product.price;
        console.log(sum);
        removeonclick(index);

    };
    remove.innerHTML = ' - ';
    div.appendChild(remove);
    dom.all_basket.appendChild(div);
    product.className = 'product';

}


const removeonclick = (index) => {
    console.log("index" + index);
    console.log(basket);
    basket.splice(index, 1);
    console.log(basket);
    showBasket();

}

const basketEmpty = () => {
    let empty = document.getElementById('empty');
    if (!empty) {
        empty = document.createElement('span');
        dom.basket_page.appendChild(empty);
        empty.id = 'empty';
    }
    empty.innerHTML = 'הסל שלך ריק ';
    let img_empty = document.getElementById('img_empty');
    if (!img_empty) {
        img_empty = document.createElement('img');
        img_empty.src = './image/basket.png';
        img_empty.id = 'img_empty';
        dom.all_basket.appendChild(img_empty);
    }
    let buttonPay = document.getElementById('buttonPay');
    if (buttonPay) {
        dom.pay.removeChild(buttonPay);
    }
    let payElement = document.getElementById('payElement');
    if (payElement) {
        payElement.innerHTML = ' ';
    }
}

const showBasket = () => {
    dom.all_basket.innerHTML = '';
    dom.pay.innerHTML = '';
    if (basket.length == 0) {
        basketEmpty();
    }
    else {
        let img_empty = document.getElementById('img_empty');
        if (img_empty) {
            dom.all_basket.removeChild(img_empty);
        }
        let index = 0;
        basket.forEach(drowBasket, index++);
        let payElement = document.getElementById('payElement');
        if (!payElement) {
            payElement = document.createElement('span');
            payElement.id = 'payElement';
            dom.pay.appendChild(payElement);
        }
        payElement.textContent = 'סה"כ: ' + sum;
        let buttonPay = document.getElementById('buttonPay');
        if (!buttonPay) {
            buttonPay = document.createElement('button');
            dom.pay.appendChild(buttonPay);
            buttonPay.innerHTML = 'לתשלום';
            buttonPay.id = 'buttonPay';
            buttonPay.onclick = () => {

                const div2 = document.createElement('div');
                div2.className = 'div2';
                dom.pay.appendChild(div2);
                const h7 = document.createElement('h7');
                h7.className = 'h7';
                div2.appendChild(h7);
                h7.innerHTML = 'שלום וברכה!!' + '<br>' + 'תודה שבחרתם בנו...';

                const label1 = document.createElement('label');
                label1.innerHTML = 'הכנס שם פרטי';
                div2.appendChild(label1);
                const inp1 = document.createElement('input');
                inp1.type = 'text';
                inp1.className = 'inputt';
                div2.appendChild(inp1);
                inp1.placeholder = 'הכנס שם פרטי';

                const label2 = document.createElement('label');
                label2.innerHTML = 'הכנס שם משפחה';
                div2.appendChild(label2);
                const inp2 = document.createElement('input');
                inp2.type = 'text';
                inp2.className = 'inputt';
                div2.appendChild(inp2);
                inp2.placeholder = 'הכנס שם משפחה';
                const label3 = document.createElement('label');
                label3.innerHTML = 'הכנס מספר טלפון';
                div2.appendChild(label3);
                const inp3 = document.createElement('input');
                inp3.type = 'text';
                inp3.className = 'inputt';
                div2.appendChild(inp3);
                inp3.placeholder = '000-0000000';
                const label4 = document.createElement('label');
                label4.innerHTML = 'הכנס כתובת מייל';
                div2.appendChild(label4);
                const inp4 = document.createElement('input');
                inp4.type = 'email';
                inp4.className = 'inputt';
                div2.appendChild(inp4);
                inp4.placeholder = 'hello@gmail.com';

                const label5 = document.createElement('label');
                label5.innerHTML = 'הכנס גיל';
                div2.appendChild(label5);
                const inp5 = document.createElement('input');
                inp5.type = 'number';
                inp5.className = 'inputt';
                div2.appendChild(inp5);
                inp5.placeholder = '120';

                const label8 = document.createElement('label');
                label8.innerHTML = 'הכנס מספר אשראי';
                div2.appendChild(label8);
                const inp8 = document.createElement('input');
                inp8.type = 'number';
                inp8.className = 'inputt';
                div2.appendChild(inp8);
                inp8.placeholder = '0000-0000-0000-0000';


                const label9 = document.createElement('label');
                label9.innerHTML = 'הכנס תוקף';
                div2.appendChild(label9);
                const inp9 = document.createElement('input');
                inp9.type = 'number';
                inp9.className = 'inputt';
                div2.appendChild(inp9);
                inp9.placeholder = '00/00';


                const label10 = document.createElement('label');
                label10.innerHTML = ' cvv';
                div2.appendChild(label10);
                const inp10 = document.createElement('input');
                inp10.type = 'number';
                inp10.className = 'inputt';
                div2.appendChild(inp10);
                inp10.placeholder = '269';

                const order = document.createElement('button');
                div2.appendChild(order);
                order.innerHTML = 'בצע הזמנה';
                order.className = 'order';
                order.onclick = () => {
                    basket.length = 0;
                    dom.all_basket.innerHTML = '';
                    dom.pay.innerHTML = 'ההזמנה בוצעה' + '<br>' + 'בהצלחה' + '<br>' + 'תודה שקניתם אצלינו:)';
                    sum = 0;
                    products.forEach((product) => {
                        let p = document.getElementById('item' + product.id);
                        p.classList.remove('add_border');
                    });
                    const back = document.createElement('button');
                    dom.pay.appendChild(back);
                    back.onclick = () => {
                        dom.home_page.style.display = 'block';
                        dom.products_page.style.display = 'none';
                        dom.basket_page.style.display = 'none';
                        basketEmpty();
                    }
                    back.innerHTML = 'לעמוד הבית';
                    back.className = 'back';
                }

            }
        }
    }
}

const addonclick = (id) => {

    basket.push(products[id]);
    const empty = document.getElementById('empty');
    if (empty) {
        empty.innerHTML = ' ';
    }
    let pay = document.getElementById('pay');
    if (pay == undefined) {
        let pay = document.createElement('span');
        pay.id = 'pay';
        dom.basket_page.appendChild(pay);
    }

}