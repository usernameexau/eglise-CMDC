<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="code.css">
    <link rel="icon" href="img logo.png" type="image/png">



</head>

<body>
    <header>
        <h1>BIENVENUE AU SITE officiel DE L'EGLISE CMDC</h1>
        <P>JE SUIS DISCIPLE</P>
        <button onclick="retourAnime()">🏠 Retour</button>


    </header>
    <h2>veuillez choisir une section</h2>

    <div class="choix-container">
        <div class="choix-bouton" onclick="afficher('debut')">
            <img src="img logo.png" alt="debut">
            <h3>biographie</h3>
        </div>
        <div class="choix-bouton" onclick="afficher('ann')">
            <img src="img logo.png" alt="ann">
            <h3>anniversaire de l'eglise</h3>
        </div>

        <div class="choix-bouton" onclick="afficher('service')">
            <img src="img logo.png" alt="service">
            <h3>service en cours</h3>
        </div>
    </div>

    <div id="debut" class="section-cachee">
        <h3>BIOGRAPHIE</h3>
        <img src="img debut.jpg" width="200" height="200">
        <img src="img debut2.jpg" width="200" height="200">
        <img src="img debut3.jpg" width="200" height="200">
        <blockquote>
            L'eglise CMDC vu le jour le 3 mars 2021 par la vision de Dieu donne a notre pere le pasteur GAMALIEL KIYO NGAMBAO a l'epoque qui etait juste un groupe d'interssecion appelle CPC(cours penal celeste) c'est finalement en 2022 que
        </blockquote>
    </div>

    <div id="ann" class="section-cachee">
        <h3>anniversaire de l'eglise</h3>
        <img src="anniv.jpg" width="500" height="400">
        <blockquote>chaque annnee depuis maintenant 4 ans(1 MARS) le temple de Dieu fete son anniversaire denome la fete des disciples au sein de son temple avec bien souvent notre invite le pastreur responsable de l'eglise ACK KOMBO le pasteur CHARLES MPOYI, un
            evenement qui a lieu tous les 4 mars de chque annee
        </blockquote>
    </div>

    <div id="service" class="section-cachee">
        <h3>service en Cours</h3>
        <img src="service" width="400" height="300">
        <blockquote>actuellement l'eglise est dans un sercice de fortes priere accompagnee de veille</blockquote>
    </div>

    </div>

    </div>


    <footer>
        <h3>Reference de l'eglise</h3>
        <p>ADRESSE: 17 Rue komono talangai reference arret libanga ya talo SNDE(LCDE)</p>
        <p>INFOLINE: +242 06 451 1213</p>
        <a href="https://chat.whatsapp.com/KbByNzK24QdFpvCGp29471" target="_blank" style="display:inline-block; background-color:#25D366; color:white; padding:10px 15px; border-radius:5px; text-decoration:none; font-weight:bold;">
  📱 rejoignez nous dans notre groupe de priere WhatsApp
</a>
        <a href="https://web.facebook.com/profile.php?id=100081611751468" target="_blank" style="display: inline-block; background-color: #1877F2; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none; font-weight: bold;">
   👍 Suivez-nous sur Facebook
</a>

        <p>&copy copyright CMDC 2025</p>
    </footer>

    <script>
        function afficher(id) {
            document.querySelectorAll('.section-cachee').forEach(function(section) {
                section.style.display = 'none';
            });

            document.getElementById(id).style.display = "block";
        }

        function retourAnime() {
            setTimeout(() => {
                window.location.href = "code.html";
            }, 1);
        }
    </script>


</body>

</html>
