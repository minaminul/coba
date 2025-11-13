// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Calculator Functions
function hitungJarak() {
  const x1 = Number.parseFloat(document.getElementById("x1").value)
  const y1 = Number.parseFloat(document.getElementById("y1").value)
  const z1 = Number.parseFloat(document.getElementById("z1").value)
  const x2 = Number.parseFloat(document.getElementById("x2").value)
  const y2 = Number.parseFloat(document.getElementById("y2").value)
  const z2 = Number.parseFloat(document.getElementById("z2").value)

  if (isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)) return

  const horizontal = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  const vertikal = Math.abs(z2 - z1)
  const miring = Math.sqrt(Math.pow(horizontal, 2) + Math.pow(vertikal, 2))

  document.getElementById("jarakResult").innerHTML =
    `H: ${horizontal.toFixed(2)}m | V: ${vertikal.toFixed(2)}m | M: ${miring.toFixed(2)}m`
}

function hitungLuas() {
  const points = document.getElementById("luasPoints").value
  document.getElementById("luasResult").innerHTML = `Luas: 100 m² (untuk perhitungan akurat, hubungi tim kami)`
}

function hitungVolume() {
  const area = Number.parseFloat(document.getElementById("area").value)
  const height = Number.parseFloat(document.getElementById("height").value)

  if (isNaN(area) || isNaN(height)) return

  const vol = ((area * height) / 3).toFixed(2)
  document.getElementById("volumeResult").innerHTML = `${vol} m³`
}

// Calculator Tab Switching
document.querySelectorAll(".calc-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab

    document.querySelectorAll(".calc-tab").forEach((t) => t.classList.remove("active"))
    document.querySelectorAll(".calc-tab-content").forEach((c) => c.classList.remove("active"))

    tab.classList.add("active")
    document.querySelector(`[data-tab="${tabName}"].calc-tab-content`).classList.add("active")
  })
})

// Set active tab on load
document.querySelector(".calc-tab").classList.add("active")
document.querySelector(".calc-tab-content").classList.add("active")

// File Upload
document.getElementById("fileInput").addEventListener("change", (e) => {
  const fileName = e.target.files[0]?.name || "Klik atau drag file di sini"
  document.getElementById("fileName").textContent = fileName

  if (e.target.files[0]) {
    document.getElementById("previewArea").innerHTML =
      '<div class="upload-icon">📁</div><p>File siap untuk visualisasi</p><p class="upload-subtext">Hubungi tim kami untuk proses lanjutan</p>'
  }
})

// Visualization Toggle
function setVisualization(type) {
  document.querySelectorAll(".viz-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-viz="${type}"]`).classList.add("active")
}

// Contact Form Submit
function submitForm(e) {
  e.preventDefault()
  document.getElementById("submitMessage").style.display = "block"
  e.target.reset()
  setTimeout(() => {
    document.getElementById("submitMessage").style.display = "none"
  }, 3000)
}
