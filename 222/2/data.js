const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone <br>  pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro.  <br> Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },
    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    }
]

let container = document.querySelector('.container')

for(let item of data){

    container.innerHTML += `
    <div class="box">
        <span class="text1">${item.preTitle}</span>
        <h1>${item.title}</h1>
        <span class="text2">${item.description}</span>
        <div class="img">
            <img src="../2/img/${item.img}.jpg" alt="">
        </div>
    </div>
    `
}
