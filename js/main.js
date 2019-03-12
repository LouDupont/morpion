//On instancie la variable joueur et les compteurs de victoire de chaque joueur
var joueur = 1;
var nbrWinJ1 = 0;
var nbrWinJ2 = 0;

//On vérifie toutes les conditions de victoires possibles

function winCon()
{
    if
    ( ( (document.getElementById("cell_00").innerHTML == 'X') && (document.getElementById("cell_01").innerHTML == 'X') && (document.getElementById("cell_02").innerHTML == 'X')  
    || (document.getElementById("cell_00").innerHTML == 'O') && (document.getElementById("cell_01").innerHTML == 'O') && (document.getElementById("cell_02").innerHTML == 'O')
    || (document.getElementById("cell_10").innerHTML == 'X') && (document.getElementById("cell_11").innerHTML == 'X') && (document.getElementById("cell_12").innerHTML == 'X')
    || (document.getElementById("cell_10").innerHTML == 'O') && (document.getElementById("cell_11").innerHTML == 'O') && (document.getElementById("cell_12").innerHTML == 'O')
    || (document.getElementById("cell_20").innerHTML == 'X') && (document.getElementById("cell_21").innerHTML == 'X') && (document.getElementById("cell_22").innerHTML == 'X')
    || (document.getElementById("cell_20").innerHTML == 'O') && (document.getElementById("cell_21").innerHTML == 'O') && (document.getElementById("cell_22").innerHTML == 'O')
    || (document.getElementById("cell_00").innerHTML == 'X') && (document.getElementById("cell_10").innerHTML == 'X') && (document.getElementById("cell_20").innerHTML == 'X')
    || (document.getElementById("cell_00").innerHTML == 'O') && (document.getElementById("cell_10").innerHTML == 'O') && (document.getElementById("cell_20").innerHTML == 'O')
    || (document.getElementById("cell_01").innerHTML == 'X') && (document.getElementById("cell_11").innerHTML == 'X') && (document.getElementById("cell_21").innerHTML == 'X')
    || (document.getElementById("cell_01").innerHTML == 'O') && (document.getElementById("cell_11").innerHTML == 'O') && (document.getElementById("cell_21").innerHTML == 'O')
    || (document.getElementById("cell_02").innerHTML == 'X') && (document.getElementById("cell_12").innerHTML == 'X') && (document.getElementById("cell_22").innerHTML == 'X')
    || (document.getElementById("cell_02").innerHTML == 'O') && (document.getElementById("cell_12").innerHTML == 'O') && (document.getElementById("cell_22").innerHTML == 'O')
    || (document.getElementById("cell_00").innerHTML == 'X') && (document.getElementById("cell_11").innerHTML == 'X') && (document.getElementById("cell_22").innerHTML == 'X')
    || (document.getElementById("cell_00").innerHTML == 'O') && (document.getElementById("cell_11").innerHTML == 'O') && (document.getElementById("cell_22").innerHTML == 'O')
    || (document.getElementById("cell_02").innerHTML == 'X') && (document.getElementById("cell_11").innerHTML == 'X') && (document.getElementById("cell_20").innerHTML == 'X')
    || (document.getElementById("cell_02").innerHTML == 'O') && (document.getElementById("cell_11").innerHTML == 'O') && (document.getElementById("cell_20").innerHTML == 'O') ) )
    {

        // SI J1 gagne 
        if(joueur == 1)
        {
            nbrWinJ1+=1;
            document.getElementById('nbrWinJ1').innerHTML = "Nombre de victoires joueur 1 : " + nbrWinJ1;         
        }
        // SI J2 gagne
        else
        {
            nbrWinJ2+=1;
            document.getElementById('nbrWinJ2').innerHTML = "Nombre de victoires joueur 2 : " + nbrWinJ2;
        }
        // Pop-up rejouer : Oui -> reset des cases Non -> on remplit les cases vides avec un espace pour empêcher de continuer/tricher
        if(confirm("Bravo, le joueur " + joueur + " a gagné ! Rejouer ?"))
     {  
         replay();
     }

     else
     {
         
         for(i=0; i<3; i++)
         {
             for(j=0; j<3; j++)
             {
                if(document.getElementById("cell_" + i + j).innerHTML == '')
                {
                    document.getElementById("cell_" + i + j).innerHTML = ' ';
                }
             }
         }
     }  
} 

    // Si toutes les cases sont occupées (et donc qu'aucune condition de victoires n'a été détectée au dessus) = match nul -> rejouer ?
   else if( (document.getElementById("cell_00").innerHTML !== '') && (document.getElementById("cell_01").innerHTML !== '') && (document.getElementById("cell_02").innerHTML !== '')  
   && (document.getElementById("cell_10").innerHTML !== '') && (document.getElementById("cell_11").innerHTML !== '') && (document.getElementById("cell_12").innerHTML !== '') 
   && (document.getElementById("cell_20").innerHTML !== '') && (document.getElementById("cell_21").innerHTML !== '') && (document.getElementById("cell_22").innerHTML !== '') )
   {
     //On propose de rejouer
     if(confirm("Match nul ! Rejouer ?"))
     {
         replay();
     }

     else
     {
         alert("Allez régler ça en 1v1 gare du Nord");
         
     }
   }
}

//on définit le tour et on change le message du "p"
function fill(cell) 
{
    if(joueur == 2)
    {
        document.getElementById("info").innerHTML = "C'est au joueur 1 de jouer !";
    }

    else
    {
        document.getElementById("info").innerHTML = "C'est au joueur 2 de jouer !";
    }
    // Si la case est déjà occupée -> on ne doit pas pouvoir la remplacer
    if (cell.innerHTML.length > 0) 
    {
        alert("Salaud ! Pas de triche autorisée ici !");
    } 
    else 
    {
        if (joueur == 1) 
        {
            // joueur 1 = on met une X on vérifie les conditions de victoires, on passe la main au j2
            cell.innerHTML = 'X';
            winCon();
            joueur = 2;
        } 

        else 
        {
            // joueur 2 = on met un O on vérifie les conditions de victoires, on passe la main au j1
            cell.innerHTML = "O";
            winCon();
            joueur = 1;
        }
    }   
}
//vide les cases
function replay()
{
    for(i=0; i<3; i++)
    {
        for(j=0; j<3; j++)
        {
           document.getElementById("cell_" + i + j).innerHTML = '';
        }
    }
}