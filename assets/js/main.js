const container = document.querySelector(".container");
const nameEl = document.querySelector(".landing .name");
const isMobile = window.matchMedia("screen and (max-width: 800px").matches;
let currentScroll = 0;
let scrolling = false;

function customIcons() {
  FontAwesome.library.add({
    prefix: 'fac',
    iconName: 'fiverr',
    icon: [
      24, 24,
      [],
      null,
      'M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z'
    ]
  });
}

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

  let interval = setInterval(() => {
    if(typeof FontAwesome != 'undefined') {
      clearInterval(interval);
      customIcons();
    }
  }, 1000/24);
});