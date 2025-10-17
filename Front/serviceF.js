
  const uploadBtn = document.getElementById("uploadBtn");
  const profileImg = document.getElementById("profileImg");
  const profileImage = document.getElementById("imgProfile");

  uploadBtn.addEventListener("change", function() {
    const file = this.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profileImg.src = e.target.result;
        profileImage.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }); 

  settings = document.getElementById("setting");

 settings.addEventListener("click", function(event) {
    event.preventDefault();
    const container = document.querySelector(".setting-container");
    container.style.display = container.style.display ="block"
    container.style.animation ="trans 1s ease-in-out forwards"
    settings.style.backgroundColor = "#a71c1c";
    settings.style.color = "white";
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
  tableau.style.backgroundColor = "#b00";
  tableau.style.color = "white";
  stats.style.backgroundColor = "transparent";
  cree.style.backgroundColor = "transparent";
  gestion.style.backgroundColor = "transparent";
  
  tableau.addEventListener("click", function(event) {
    event.preventDefault();
    tableau_container.style.display = "block";
    tableau.style.backgroundColor = "#b00";
    stats_container.style.display = "none";
    stats.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";
    settings.style.backgroundColor = "transparent";
    settings.style.color = "black";
    gestion.style.color = "black";
    cree.style.color = "black";
    stats.style.color = "black";
    tableau.style.color = "white";

    
  });
  stats.addEventListener("click", function(event) {
    event.preventDefault();
    stats_container.style.display = "block";
    stats.style.backgroundColor = "#b00";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";
      settings.style.backgroundColor = "transparent";
      settings.style.color = "black";
      gestion.style.color = "black";
      cree.style.color = "black";
      stats.style.color = "white";
      tableau.style.color = "black";
  });
  cree.addEventListener("click", function(event) {
    event.preventDefault();
    cree_container.style.display = "block";
    cree.style.backgroundColor = "#b00";
    stats_container.style.display = "none"; 
    stats.style.backgroundColor = "transparent";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    gestion_container.style.display = "none";
    gestion.style.backgroundColor = "transparent";
      settings.style.backgroundColor = "transparent";
      settings.style.color = "black";
      gestion.style.color = "black";
      cree.style.color = "white";
      stats.style.color = "black";
      tableau.style.color = "black";
  });
  gestion.addEventListener("click", function(event) {
    event.preventDefault();
    gestion_container.style.display = "block";  
    gestion.style.backgroundColor = "#b00";
    stats_container.style.display = "none";
    stats.style.backgroundColor = "transparent";
    tableau_container.style.display = "none";
    tableau.style.backgroundColor = "transparent";
    cree_container.style.display = "none";
    cree.style.backgroundColor = "transparent";
      settings.style.backgroundColor = "transparent";
      settings.style.color = "black";
      gestion.style.color = "white";
      cree.style.color = "black";
      stats.style.color = "black";
      tableau.style.color = "black";
  });
  profileImage.addEventListener("click", function() {
     const container = document.querySelector(".setting-container");
    container.style.display = container.style.display ="block"
    container.style.animation ="trans 1s ease-in-out forwards"
    settings.style.backgroundColor = "#a71c1c";
    settings.style.color = "white";
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
      <button onclick="editRow(this)" id="table-mod">✏️</button>
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
      const context = select.value;
      
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
    settingContainer.style.display = "none";
    document.getElementById("setting").style.backgroundColor = "transparent";
    settings.style.color = "black";
});

   // Bar Chart (Blood bags per type)
    const ctx1 = document.getElementById('barChart').getContext('2d');
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        datasets: [{
          label: 'Blood Bags',
          data: [7000, 47, 80, 30, 60, 20, 150, 50],
          backgroundColor: '#c8102e'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

         const numNots=document.getElementById("numNots");    
         notification = document.getElementById("notification");   
        svg1= document.querySelector("svg");
       function toggleNotification() {
      document.getElementById("nots").classList.toggle("active");
      const box = document.getElementById("nots");
      box.style.display = box.style.display === "block" ? "none" : "block";
      notification.style.fill="white";
 box.style.animation = "fadeIn 0.5s ease-in-out forwards";
      let numNotsValue = parseInt(numNots.textContent);
      numNotsValue = isNaN(numNotsValue) ? 0 : numNotsValue;
      numNotsValue = 0;
      numNots.textContent = numNotsValue;
    svg1.style.fill="white";
    }



     const ctx = document.getElementById('miniChart1').getContext('2d');

    const data = {
      labels: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
      datasets: [{
        data: [20, 25, 23, 30, 28, 32, 35,30, 28, 32, 35, 40,10,16],
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        elements: {
          line: { borderJoinStyle: 'round' }
        }
      }
    };

    new Chart(ctx, config);


  const ctx2 = document.getElementById('miniChart2').getContext('2d');

    const data2 = {
      labels: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
      datasets: [{
        data: [20, 25, 23, 30, 28, 32, 35,30, 28, 32, 35, 40,10,16],
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4
      }]
    };

    const config2 = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        elements: {
          line: { borderJoinStyle: 'round' }
        }
      }
    };

    new Chart(ctx2, config2);

      const ctx3 = document.getElementById('miniChart3').getContext('2d');
    const data3 = {
      labels: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12],
      datasets: [{
        data: [20, 25, 23, 30, 28, 32, 35,30, 28, 32, 35, 40,10,16],
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4
      }]
    };
    const config3 = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,   
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },    
          y: { display: false }
        },
        elements: { 
          line: { borderJoinStyle: 'round' }
        }
      }
    };
    new Chart(ctx3, config3);
  // 🔹 تحديث قائمة السنوات تلقائيًا
    function updateYearsList() {
      const yearsList = document.getElementById("annees-list");
      const currentYear = new Date().getFullYear();

      const existingYears = Array.from(yearsList.children).map(li => parseInt(li.textContent));

      // ✅ إذا لم تكن السنة الحالية موجودة → أضفها تلقائيًا
      if (!existingYears.includes(currentYear)) {
        const newYearItem = document.createElement("li");
        newYearItem.textContent = currentYear;
        yearsList.appendChild(newYearItem);
        attachYearClick(newYearItem);
      }

      // تحديث الحالة النشطة
      Array.from(yearsList.children).forEach(li => li.classList.remove("active"));
      const last = yearsList.querySelector(`li:last-child`);
      last.classList.add("active");
    }

    updateYearsList();
    setInterval(updateYearsList, 1000 * 60 * 60 * 24);

    // 🔹 Exemple de données simulées
    const historiqueData = {
      "2024": [
        { Total_poches: 1333, Total_CPS: 1234, Total_CG: 5333, Total_PFC: 2134, Total_poches_expiré: 455, Total_distribution: 1012},
      ],
      "2023": [
        { Total_poches: 1890, Total_CPS: 3455, Total_CG: 2123, Total_PFC: 2134, Total_poches_expiré: 5331, Total_distribution:1234 },
      ],
      "2022": [
        { Total_poches: 12333, Total_CPS: 1221, Total_CG: 2123, Total_PFC: 2134, Total_poches_expiré: 353, Total_distribution: 1344 },
      ],
      "2021": [
        { Total_poches: 1234, Total_CPS: 5645, Total_CG: 2123, Total_PFC: 564, Total_poches_expiré: 345, Total_distribution: 344 },
      ],
      "2025": [
        { Total_poches: 1234, Total_CPS: 5645, Total_CG: 2123, Total_PFC: 564, Total_poches_expiré: 345, Total_distribution: 344 },
      ],
      "2018": [
        { Total_poches: 1234, Total_CPS: 5645, Total_CG: 2123, Total_PFC: 564, Total_poches_expiré: 345, Total_distribution: 344 },
      ]
    };


    const chartHist = document.getElementById("historique-chart").getContext('2d');
    let chart;

    function afficherHistorique(annee) {
      const container = document.getElementById("table-container");
      const dons = historiqueData[annee] || [];

      if (dons.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:#aaa;">Aucune donnée pour ${annee}</p>`;
        if (chart) chart.destroy();
        return;
      }

      let tableHTML = `
        <table>
          <thead>
            <tr>
              <th>Total poches</th>
              <th>Total CPS</th>
              <th>Total CG</th>
              <th>Total PFC</th>
              <th>Total poches expiré</th>
              <th>Total distribution</th>
            </tr>
          </thead>
          <tbody>
      `;

      dons.forEach(don => {
        tableHTML += `
          <tr>
            <td>${don.Total_poches}</td>
            <td>${don.Total_CPS}</td>
            <td>${don.Total_CG}</td>
            <td>${don.Total_PFC}</td>
            <td>${don.Total_poches_expiré}</td>
            <td>${don.Total_distribution}</td>
          </tr>
        `;
      });

      tableHTML += `</tbody></table>`;
      container.innerHTML = tableHTML;

      const labels = ["Poches", "CPS", "CG", "PFC", "Poches expiré", "Distribution"];
      const values = [
        dons[0].Total_poches,
        dons[0].Total_CPS,
        dons[0].Total_CG,
        dons[0].Total_PFC,
        dons[0].Total_poches_expiré,
        dons[0].Total_distribution
      ];

      if (chart) chart.destroy();

      chart = new Chart(chartHist, {
        type: "bar",
        data: {
          labels,
          datasets: [{
            label: `Statistiques ${annee}`,
            data: values,
            backgroundColor: "#b00"
          }]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true } }
        }
      });
    }

    function attachYearClick(li) {
      li.addEventListener('click', () => {
        document.querySelectorAll('#annees-list li').forEach(a => a.classList.remove('active'));
        li.classList.add('active');
        afficherHistorique(li.textContent);
      });
    }

    document.querySelectorAll('#annees-list li').forEach(attachYearClick);
    afficherHistorique(document.querySelector('#annees-list .active').textContent);

    const histHeader = document.getElementById("Hist-header")
    const historique = document.getElementById("historique")
    const hisClose = document.getElementById("closeHistBtn")

    histHeader.addEventListener('click',()=>{
      historique.style.display="block"

    });

    hisClose.addEventListener('click',()=>{
      historique.style.display="none"
    });
  


    document.addEventListener("DOMContentLoaded", () => {
    const notsDetails = document.querySelectorAll(".nots-details");
    const showMoreButton = document.getElementById("showMoreNots");
    let visibleAlerts = 5; 
    let isShowingMore = true; 


    const updateNotsVisibility = () => {
        notsDetails.forEach((notsDetails, index) => {
            notsDetails.style.display = index < visibleAlerts ? "block" : "none"; 
        });

        
        if (isShowingMore) {
            showMoreButton.textContent = "Afficher plus";
        } else {
            showMoreButton.textContent = "Afficher moins";
        }

        
        if (visibleAlerts >= notsDetails.length && isShowingMore) {
            showMoreButton.style.display = "none";
        } else {
            showMoreButton.style.display = "block";
        }
    };


    showMoreButton.addEventListener("click", () => {
        if (isShowingMore) {
            visibleAlerts = notsDetails.length;
            isShowingMore = false; 
        } else {
           
            visibleAlerts = 5;
            isShowingMore = true;
        }
        updateNotsVisibility();
    });

    updateNotsVisibility();
});
    