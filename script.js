const button = document.querySelector(".vintage-button");
const list = document.querySelector(".college-list");
const input = document.querySelector(".vintage-input");
const url = "http://universities.hipolabs.com/search?name=";

button.addEventListener("click", async () => {
  const country = input.value.trim();
  if (!country) {
    alert("Please enter a country name!");
    return;
  }

  list.innerHTML = "<li>🎓 Searching colleges...</li>";

  try {
    const response = await axios.get(url + country);
    showData(response.data);
  } catch (error) {
    list.innerHTML = "<li style='color: red;'>🚫 Error fetching data.</li>";
  }
});

function showData(colleges) {
  list.innerHTML = "";

  if (colleges.length === 0) {
    list.innerHTML = "<li>No colleges found for this country.</li>";
    return;
  }

  colleges.forEach((college) => {
    const li = document.createElement("li");
    li.textContent = "🏫 " + college.name;
    li.classList.add("animated-item");
    list.appendChild(li);
  });
}
