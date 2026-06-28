*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    font-family:Arial,Helvetica,sans-serif;
    background:#faf9f6;
    color:#222;
}

.navbar{

    width:100%;
    padding:25px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo img{

    width:160px;
}

nav{

    display:flex;
    gap:40px;
}

nav a{

    text-decoration:none;
    color:#222;
    font-weight:500;
    transition:.3s;
}

nav a:hover{

    color:#8a6a2d;
}

.hero{

    min-height:85vh;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 8%;
}

.hero-text{

    width:48%;
}

.hero-text h1{

    font-size:60px;

    line-height:1.15;

    margin-bottom:25px;
}

.hero-text p{

    font-size:20px;

    line-height:1.8;

    max-width:500px;

    margin-bottom:40px;

    color:#555;
}

.hero-text button{

    padding:16px 34px;

    border:none;

    border-radius:40px;

    background:#8a6a2d;

    color:white;

    cursor:pointer;

    font-size:16px;

    transition:.3s;
}

.hero-text button:hover{

    background:#6e531d;
}

.hero-image{

    width:48%;

    display:flex;

    justify-content:center;
}

.hero-image img{

    width:55%;

    max-width:330px;

    height:auto;
}

@media(max-width:900px){

.hero{

    flex-direction:column;

    text-align:center;

    padding-top:40px;
}

.hero-text{

    width:100%;
}

.hero-image{

    width:100%;

    margin-top:50px;
}

.hero-image img{

    width:65%;
}

nav{

    display:none;
}

}