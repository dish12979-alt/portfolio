const VIDEO_URL = "https://fcngtbi6mzz1.feishu.cn/minutes/obcnfl6q7bd611726y84q73q?from=from_copylink";

document.querySelectorAll(".video-link").forEach((link) => {
  if (!VIDEO_URL) {
    link.setAttribute("href", "#video");
    link.setAttribute("aria-disabled", "true");
    link.classList.add("disabled");
    return;
  }

  link.setAttribute("href", VIDEO_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  link.removeAttribute("aria-disabled");
  link.classList.remove("disabled");
  link.textContent = "观看脱敏演示视频";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".image-frame img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.visibility = "hidden";
  });
});
