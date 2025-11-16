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


setting_btn = document.getElementById("setting-btn");

 setting_btn.addEventListener("click", function(event) {
    event.preventDefault();
    const container = document.querySelector(".setting-container");
    container.style.display = container.style.display ="block"
    container.style.animation ="trans 1s ease-in-out forwards"
    settings.style.backgroundColor = "#a71c1c";
    settings.style.color = "white";
  });

  const closeSettingBtn = document.getElementById("closeSettingBtn");
  closeSettingBtn.addEventListener("click", function() {
 const container = document.querySelector(".setting-container");
 container.style.display="none";
});
  




let consult = 1;
document.getElementById("addBtn-consultation").addEventListener("click", () => {
    
  let table = document.getElementById("table-consultation");

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${consult++}</td>
    <td><input type="text" placeholder="Nom et Prénom" readonly></td>
    <td><input type ="number" placeholder="Age" readonly></td>
    <td><select disabled>
       <option>O+</option>
       <option>O-</option>
       <option>A+</option>
       <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
       </select></td>
   
    <td><select disabled>
    <option>CP</option>
    <option>OCC</option>
    <option>REG</option>
    </select></td>
    <td>
    <input type="number" placeholder="Corp" readonly>
    <input type="number" placeholder="cœur" readonly>
    </td>
    <td><input type="text" placeholder="Nom du médecin" readonly></td>
     <td><input type="date" readonly></td>
    <td>
      <button onclick="editRow(this)">✏️</button>
    </td>
  `;

  table.appendChild(row);
});


function editRow(btn) {
    const row = btn.closest("tr");
    // Track modifications per row using a custom property
    if (!row._modCount) row._modCount = 0;
    const inputs = row.querySelectorAll("input[type='text'], input[type='date'], input[type='number']");
    const selects = row.querySelectorAll("select");
    const isEditing = btn.textContent === "✏️";
    if (isEditing) {
        if (row._modCount >= 2) {
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";
            btn.style.color = "#888";
            return;
        }
        inputs.forEach((input) => {
            input.removeAttribute("readonly");

        });
        selects.forEach((select) => {
            select.removeAttribute("disabled");
        });
        btn.textContent = "💾";
        btn.style.backgroundColor = "lightgreen";
        btn.style.color = "black";
    } else {
        inputs.forEach((input) => {
            input.setAttribute("readonly", true);
        });
        selects.forEach((select) => {
            select.setAttribute("disabled", true);
        });
        btn.textContent = "✏️";
        btn.style.backgroundColor = "white";
        btn.style.color = "#a21218";
        row._modCount++;
        if (row._modCount >= 2) {
            btn.disabled = true;
            btn.style.backgroundColor = "#ccc";
            btn.style.color = "#888";
        }
    }
}
 let annul = 1;
    document.getElementById("addBtn-annules").addEventListener("click", () => {
        const row = document.createElement("tr");
        row.innerHTML = `
           <td>${annul++}</td>
    <td><input type="text" placeholder="Nom et Prénom" readonly></td>
    <td><input type ="number" placeholder="Age" readonly></td>
    <td><select disabled>
       <option>O+</option>
       <option>O-</option>
       <option>A+</option>
       <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
       </select></td>
   
    <td><select disabled>
    <option>CP</option>
    <option>OCC</option>
    <option>REG</option>
    </select></td>
    <td>
    <input type="text" placeholder="Cause de l'annulation" readonly>
    </td>
    <td><input type="text" placeholder="Nom du médecin" readonly></td>
     <td><input type="date" readonly></td>
    <td>
      <button onclick="editRow(this)">✏️</button>
    </td>
        `;
        const table = document.getElementById("table-annules");
        table.appendChild(row);

    });
    let prelev= 1;
       document.getElementById("addBtn-prelevment").addEventListener("click", () => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${prelev++}</td>
        <td><input type="text" placeholder="Nom et Prénom de Donneur" readonly /></td>
        <td><input type="Number" placeholder="Age" readonly/></td>
        <td><input type="text" placeholder="Adresse" readonly/></td>
        <td><select disabled>
        <option>CP</option>
        <option>OCC</option>
        <option>REG</option></select></td>
        <td><input type="text" placeholder="Nom et Prénom de receveur"></td>
        <td><select disabled>
       <option>O+</option>
       <option>O-</option>
       <option>A+</option>
       <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
       </select></td>
       <td><input type="text" placeholder="Telephone" readonly></td>
        <td><input type="text" placeholder="Attestation" readonly></td>
        <td>
        <button onclick="editRow(this)">✏️</button>
        
        </td>
        `;
        const table = document.getElementById("table-prelevment");
        table.appendChild(row);
    }
    );


const consultation = document.getElementById("consultation");
const annules = document.getElementById("don-annles");
const prelevment = document.getElementById("prelevment");
const containerConsultation = document.getElementById("container-consultation");
const containerAnnules = document.getElementById("container-annules");
const containerPrelevment = document.getElementById("container-prelevment");
consultation.addEventListener("click", () => {
    containerConsultation.style.display = "block";
    containerAnnules.style.display = "none";
    containerPrelevment.style.display = "none";
    consultation.style.backgroundColor = "white";
    consultation.style.color = "#a21218";
    annules.style.backgroundColor = "#a71c1c";
    annules.style.color = "white";
    prelevment.style.backgroundColor = "#a71c1c";
    prelevment.style.color = "white";
});
annules.addEventListener("click", () => {
    containerConsultation.style.display = "none";
    containerAnnules.style.display = "block";
    containerPrelevment.style.display = "none";
    annules.style.backgroundColor = "white";
    annules.style.color = "#a21218";  
    consultation.style.backgroundColor = "#a71c1c";
    consultation.style.color = "white";
    prelevment.style.backgroundColor = "#a71c1c";
    prelevment.style.color = "white";
});
prelevment.addEventListener("click", () => {
    containerConsultation.style.display = "none";
    containerAnnules.style.display = "none";
    containerPrelevment.style.display = "block";
    prelevment.style.backgroundColor = "white";
    prelevment.style.color = "#a21218";  
    consultation.style.backgroundColor = "#a71c1c";
    consultation.style.color = "white";
    annules.style.backgroundColor = "#a71c1c";
    annules.style.color = "white";
});






