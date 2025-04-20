import { saveData, loadData } from "./modules/storage.js";

class Dashboard {
  constructor() {
    const loaded = loadData() || {};
    this.schedules = loaded.schedules || [];
    this.weatherInfo = loaded.weatherInfo || null;

    this.form = document.getElementById("schedule-form");
    this.list = document.getElementById("schedule-list");
    this.weatherBtn = document.createElement("button");
    this.weatherBtn.textContent = "Cek Info Cuaca Hari Ini!";
    this.weatherBtn.className = "weather-btn";
    this.weatherBtn.addEventListener("click", () => this.fetchWeather());

    this.init();
  }

  createEditModal(originalIndex) {
    const item = this.schedules[originalIndex];
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal">
        <h3>Edit Konten</h3>
        <label>Tanggal:</label>
        <input type="date" id="edit-date" value="${item.date}" />
        <label>Konten:</label>
        <input type="text" id="edit-content" value="${item.content}" />
        <label>Status:</label>
        <select id="edit-status">
          <option value="Planning" ${item.status === "Planning" ? "selected" : ""}>Planning</option>
          <option value="On Progress" ${item.status === "On Progress" ? "selected" : ""}>On Progress</option>
          <option value="Selesai" ${item.status === "Selesai" ? "selected" : ""}>Selesai</option>
        </select>
        <div class="modal-buttons">
          <button id="save-edit">Simpan</button>
          <button id="cancel-edit">Batal</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("cancel-edit").onclick = () => modal.remove();

    document.getElementById("save-edit").onclick = () => {
      const newDate = document.getElementById("edit-date").value;
      const newContent = document.getElementById("edit-content").value;
      const newStatus = document.getElementById("edit-status").value;

      if (newDate && newContent && newStatus) {
        this.schedules[originalIndex] = {
          date: newDate,
          content: newContent,
          status: newStatus,
        };
        this.saveAll();
        this.render();
        modal.remove();
      } else {
        alert("Semua kolom harus diisi!");
      }
    };
  }

  init() {
    this.render();
    this.form.addEventListener("submit", (e) => this.handleAdd(e));

    const statusFilter = document.getElementById("status-filter");
    if (statusFilter) {
      statusFilter.addEventListener("change", () => this.render());
    }

    const sortOrder = document.getElementById("sort-order");
    if (sortOrder) {
      sortOrder.addEventListener("change", () => this.render());
    }
  }

  saveAll() {
    saveData({
      schedules: this.schedules,
      weatherInfo: this.weatherInfo,
    });
  }

  handleAdd(e) {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const content = document.getElementById("content").value;
    const status = document.getElementById("status").value || "Planning";

    if (date && content && status) {
      this.schedules.push({ date, content, status });
      this.saveAll();
      this.form.reset();
      this.render();
    }
  }

  handleEdit(originalIndex) {
    const current = this.schedules[originalIndex];
    const newContent = prompt("Edit konten:", current.content);
    const newStatus = prompt(
      "Update status (Planning, On Progress, Selesai):",
      current.status || "Planning"
    );

    const allowedStatuses = ["Planning", "On Progress", "Selesai"];

    if (newContent !== null && newStatus !== null) {
      if (!allowedStatuses.includes(newStatus)) {
        alert("Status tidak valid. Gunakan: Planning, On Progress, atau Selesai.");
        return;
      }
      this.schedules[originalIndex].content = newContent;
      this.schedules[originalIndex].status = newStatus;
      this.saveAll();
      this.render();
    }
  }

  handleDelete(originalIndex) {
    if (confirm("Yakin ingin menghapus konten ini?")) {
      this.schedules.splice(originalIndex, 1);
      this.saveAll();
      this.render();
    }
  }

  render() {
    const selectedStatus = document.getElementById("status-filter")?.value || "All";
    const sortOrder = document.getElementById("sort-order")?.value || "newest";

    let filteredSchedules = this.schedules
      .map((item, index) => ({ ...item, originalIndex: index }))
      .filter(item => selectedStatus === "All" || item.status === selectedStatus);

    filteredSchedules.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    this.list.innerHTML = "";
    filteredSchedules.forEach(item => {
      const li = document.createElement("li");
      const statusColor = {
        "Planning": "#ffd966",
        "On Progress": "#6fa8dc",
        "Selesai": "#93c47d",
      }[item.status] || "#ccc";

      li.innerHTML = `
        <strong>${item.date}</strong>: ${item.content}
        <span class="status-badge" style="background-color:${statusColor}">
          ${item.status || "Planning"}
        </span>
        <button onclick="dashboard.createEditModal(${item.originalIndex})">Edit</button>
        <button onclick="dashboard.handleDelete(${item.originalIndex})">Hapus</button>
      `;
      this.list.appendChild(li);
    });

    const header = document.querySelector("h1");
    if (header && !document.getElementById("weather-banner")) {
      const weatherBanner = document.createElement("div");
      weatherBanner.id = "weather-banner";
      weatherBanner.style.backgroundColor = "#e6f0fa";
      weatherBanner.style.padding = "10px";
      weatherBanner.style.marginTop = "10px";
      weatherBanner.style.borderRadius = "8px";
      weatherBanner.style.fontSize = "14px";
      weatherBanner.style.display = "flex";
      weatherBanner.style.justifyContent = "space-between";
      weatherBanner.style.alignItems = "center";
      weatherBanner.style.marginBottom = "20px";

      this.weatherContent = document.createElement("div");
      this.weatherContent.id = "weather-content";
      this.weatherContent.textContent = this.weatherInfo
        ? `${this.weatherInfo.date}: ${this.weatherInfo.content}`
        : "Belum ada info cuaca hari ini.";

      weatherBanner.appendChild(this.weatherContent);
      weatherBanner.appendChild(this.weatherBtn);
      header.insertAdjacentElement("afterend", weatherBanner);
    } else if (this.weatherContent) {
      this.weatherContent.textContent = this.weatherInfo
        ? `${this.weatherInfo.date}: ${this.weatherInfo.content}`
        : "Belum ada info cuaca hari ini.";
    }
  }

  async fetchWeather() {
    try {
      const apiKey = "7fff9637999eb0aedff3a06d86095475";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=1642911&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("Gagal ambil cuaca");

      const data = await response.json();
      const today = new Date().toISOString().split("T")[0];
      const content = `Cuaca di ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;

      this.weatherInfo = { date: today, content };
      this.saveAll();
      this.render();
    } catch (err) {
      console.error("Error saat mengambil data cuaca:", err);
    }
  }
}

const dashboard = new Dashboard();
window.dashboard = dashboard;
