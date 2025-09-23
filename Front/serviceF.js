  const uploadBtn = document.getElementById("uploadBtn");
  const profileImg = document.getElementById("profileImg");

  uploadBtn.addEventListener("change", function() {
    const file = this.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profileImg.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }); 
  document.getElementById("setting").addEventListener("click", function(event) {
    event.preventDefault();
    const container = document.querySelector(".setting-container");
    container.style.display = container.style.display ="block"
    container.style.animation ="trans 1s ease-in-out forwards"
  });

  tableau = document.getElementById("tableau");
  tableau_container = document.getElementById("tableau-container");
  stats = document.getElementById("statistiques");
  stats_container = document.getElementById("statistiques-container");
  cree= document.getElementById("cree-compte");
  cree_container= document.getElementById("cree-comptes-container");
  gestion = document.getElementById("gestion-compte");
  gestion_container = document.getElementById("gestion-comptes-container");

  tableau_container.style.display = "block";
  stats_container.style.display = "none";
  cree_container.style.display = "none";
  gestion_container.style.display = "none";
  tableau.style.backgroundColor = "#E73232FF";
  stats.style.backgroundColor = "transparent";
  cree.style.backgroundColor = "transparent";
  gestion.style.backgroundColor = "transparent";
  
  tableau.addEventListener("click", function(event) {
    event.preventDefault();
    tableau_container.style.display = "block";
    tableau.style.backgroundColor = "#E73232FF";
    stats_container.style.display = "none";
    stats.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";

    
  });
  stats.addEventListener("click", function(event) {
    event.preventDefault();
    stats_container.style.display = "block";
    stats.style.backgroundColor = "#E73232FF";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";
  });
  cree.addEventListener("click", function(event) {
    event.preventDefault();
    cree_container.style.display = "block";
    cree.style.backgroundColor = "#E73232FF";
    stats_container.style.display = "none"; 
    stats.style.backgroundColor = "transparent";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";
  });
  gestion.addEventListener("click", function(event) {
    event.preventDefault();
    gestion_container.style.display = "block";  
    gestion.style.backgroundColor = "#E73232FF";
    stats_container.style.display = "none";
    stats.style.backgroundColor = "transparent";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
  });
  const date = new Date();
  const formated = date.toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
  const alert=document.getElementById("Alertes");
alert.innerHTML+=`<div class="alert-box">
         <strong> <span class="nmr"> N° de poche:</span></strong><span class="nmr-poche" id="nmr-poche">234</span>
          <br>
          <strong><span class="type">Type:</span></strong> <span class="type-poche" id="type-poche">wqe</span>
          <br>
                 <small class="format-alert">${formated}</small>
                    </div> `

const table=document.getElementById("compte-biologiste");
let row=document.createElement("tr");
row.innerHTML=`
    <td readonly></td>
    <td readonly></td>
    <td readonly></td>
    <td readonly></td>
    <td readonly></td>
    <td readonly></td>
    <td><select id="Actif" disabled>
    <option>Oui</option>
    <option>Non</option>
    </select></td>
    <td>
      <button onclick="editRow(this)">✏️</button>
    </td>
`
table.appendChild(row);
 const messageBox = document.getElementById("modification");
 const message = document.getElementById("message");
 const closeBtn = document.getElementById("closeBtn");


  
  function editRow(btn) {
      const row = btn.closest("tr");
        const select = row.querySelector("select");
      const isEditing = btn.textContent === "✏️";
      
      if (isEditing) {
          
            select.removeAttribute("disabled");

          btn.textContent = "💾";
      } else {
            select.setAttribute("disabled", true);
          btn.textContent = "✏️";
           message.innerText = "Modifications enregistrées avec succès !";
            messageBox.style.display = "block";
            closeBtn.addEventListener("click", function() {
              messageBox.style.display = "none";
            });
      }
      btn.style.backgroundColor = isEditing ? "lightgreen" : "white";
      btn.style.color = isEditing ? "black" : "#a21218";
    }  

const closeSettingBtn = document.getElementById("closeSettingBtn");
const closeSetting = document.getElementById("closeSetting");
const settingContainer = document.getElementById("setting-container");

closeSettingBtn.addEventListener("click", function() {
  settingContainer.style.animation = "transReverce 1s ease-in-out forwards";
    settingContainer.style.display = "none";
});
