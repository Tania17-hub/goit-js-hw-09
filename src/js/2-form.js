import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Ініціалізація об'єкта formData
let formData = {
  email: "",
  message: "",
};

// Завантаження збережених даних з локального сховища
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    if (formData.email) form.elements.email.value = formData.email;
    if (formData.message) form.elements.message.value = formData.message;
  } catch (error) {
    console.error("Помилка при розборі даних з локального сховища:", error);
  }
}

// Обробник події input для збереження даних у локальне сховище
form.addEventListener("input", (evt) => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події submit для перевірки та очищення даних
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
});
