const container = document.querySelector(".container");
const nameEl = document.querySelector(".landing .name");
const isMobile = window.matchMedia("screen and (max-width: 800px").matches;
let currentScroll = 0;
let scrolling = false;

function scroll(dir) {
  let vh = window.innerHeight;
  if (dir) {
    currentScroll += vh * dir;
    currentScroll = Math.min(
      vh * (document.querySelectorAll("section").length - 1),
      Math.max(0, currentScroll)
    );
  }
  scrolling = true;
  document.querySelector(".nav .nav-item.active").classList.remove("active");
  document
    .querySelector(
      `.nav .nav-item:nth-child(${Math.round(currentScroll / vh + 1)})`
    )
    .classList.add("active");
  container.style.transform = `translateY(${-currentScroll}px)`;
  setTimeout(() => {
    scrolling = false;
  }, 1000);
}

function scrollToTarget(target) {
  // window.scrollTo(0,0);
  currentScroll = target.offsetTop;
  scroll();
}

function mobile() {
  nameEl.innerHTML = nameEl.innerHTML.replace("&nbsp;", "<br>");
  document
    .querySelector(".landing")
    .appendChild(document.querySelector(".contact"));
}

function scrollEvents() {
  document.documentElement.scrollTop = 0;
  container.addEventListener(
    "wheel",
    (e) => {
      if (!scrolling) scroll(e.deltaY > 0 ? 1 : -1);
      e.stopPropagation();
    },
    { passive: true }
  );
  document.querySelectorAll(".scrollable").forEach((el) =>
    el.addEventListener("wheel", (e) => e.stopPropagation(), {
      passive: true,
    })
  );
  document.querySelectorAll(".nav .nav-item a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToTarget(
        document.getElementById(e.target.getAttribute("href").slice(1))
      );
    });
  });
}

function nameAnim() {
  if (isMobile) {
    nameEl.addEventListener(
      "touchstart",
      () => nameEl.classList.add("animating"),
      {
        passive: true,
      }
    );
  } else {
    nameEl.addEventListener("mouseover", () =>
      nameEl.classList.add("animating")
    );
  }
  nameEl
    .querySelector("span:last-child")
    .addEventListener("animationend", () => {
      nameEl.classList.remove("animating");
    });
}

function resumeEvents() {
  document.querySelectorAll(".skills-list .skill").forEach((skill) => {
    skill.addEventListener("mouseover", (e) => {
      skill.classList.add("active");
      document
        .querySelectorAll(
          `.experience-list .work[data-tags*="${skill.dataset.tag} "]`
        )
        .forEach((el) => el.classList.add("active"));
    });
    skill.addEventListener("mouseleave", (e) => {
      skill.classList.remove("active");
      document
        .querySelectorAll(".experience-list .work.active")
        .forEach((el) => el.classList.remove("active"));
    });
  });
  document.querySelectorAll(".experience-list .work").forEach((work) => {
    work.addEventListener("mouseover", (e) => {
      work.classList.add("active");
      document.querySelectorAll(".skills-list .skill").forEach((skill) => {
        if (work.dataset.tags.includes(skill.dataset.tag+" "))
          skill.classList.add("active");
      });
    });
    work.addEventListener("mouseleave", (e) => {
      work.classList.remove("active");
      document
        .querySelectorAll(".skills-list .skill.active")
        .forEach((el) => el.classList.remove("active"));
    });
  });
}

window.addEventListener("load", () => {
  if (isMobile) {
    mobile();
  } else {
    scrollEvents();
    resumeEvents();
  }
  nameAnim();
});
