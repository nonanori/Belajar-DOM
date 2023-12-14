
    //git init untuk inisiasi awal git
    // git add . untuk menambahkan seluruh file pada git
    // git commit -m "initial project" untuk membuat pesan commit
    //git branch namanya master/bebas untuk membuat 
    //git remote add origin link http
    // git push origin nama masternya untuk Mengirimkan commit ke repositori jarak jauh
    //step
    //development mengembangkan app dalam lokal
    //staging code data untuk testing
    //production itu data untuk real untuk user

    document.title ="Novita's Blog"
    const body = document.body

    const h1= document.createElement('h1')
    h1.innerHTML="<marquee>HALO SAYA NOVITA</marquee>"

    const h2= document.createElement('h2')
    h2.innerHTML="<marquee>Senang Bertemu Dengan Kalin</marquee>"

    body.append(h1)
    body.append(h2)