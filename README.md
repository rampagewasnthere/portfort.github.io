<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio V4</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a8f82dbce3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet"  href="/css/style.css">
    <script src="/js/script.js" defer></script>
    
</head>
<body>
<div class="container">
 <div class="overlay">
    <header id="header">
    <!--Navigation button and header-->
    <nav>
    <!-- Slide in Button -->
    <span class="slide">
        <a href="javascript:;" onclick="openSlideMenu()">
            <i class="fas fa-bars"></i>
        </a>
    </span>
    <!-- Slide out Menu -->
    <div id="menu" class="nav">
        <a href="javascript:;" class="close" onclick="closeSlideMenu()">
            <i class="fas fa-times"></i>
        </a>
        <a href="index.html">Home</a>
        <a href="Mmedia20.html">Multimedia 20</a>
        <a href="#">Multimedia 3</a>
    </div>
    </nav>
        <!--Portfolio Header-->
        <h2 class="logo">My Portfolio V4</h2>
        <p class="contact">
            Vishalsatheyaseelan@gmail.com <br>#1 (403) 412-4584
        </p>
    </header>
        </div>
        <!--Main Content-->
        <div class="main">
         <div class="who_me">
          <span class="about_me">
            <h2>About Me</h2>
             <p>
              I am Vishal Satheyaseelan, a 16 year old high school student enrolled at Winston Churchill, <br>
              I've learned Photoshop, Illustrator, Lua, C#, and HTML/CSS.
             </p>
            </span>
          <span class="goals">
            <h2>Goals</h2>
             <p>
              I plan to pursue Computer Science as my major in university with an 85% average in high school.
             </p>
            </span>
        </div>
            <!--Slideshow-->
        <div class="slideshow">
         <button onclick="backbnt()" class="btn1">&lt;</button>
         <img name="slide" height="762" width="612" alt="Slideshow Image" />
         <button onclick="nextbnt()" class="btn1">&gt;</button>
        </div>
    </div>
        <!--Footer-->
    <footer class="footer">
     <p>&copy; 2024 Vishal Satheyaseelan</p>
    </footer>
</div>
</body>
</html>
