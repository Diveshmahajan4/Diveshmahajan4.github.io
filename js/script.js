let didScroll = false;
const changeHeaderOn = 100;

const ids = ["#home", "#about", "#skills", "#blogs", "#contact"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let mediumArticles = [];
let projectDetails = [
  {
    link: "https://github.com/Diveshmahajan4/Chatter-A-Blogging-Website",
    title: "CHATTER A BLOGGING WEBSITE ",
    pubDate: "",
    lang: "ReactJS, Axios, MongoDB",
    content:
      "In this project, I designed a blogging website in React.js using Axios for API and MongoDB Atlas for Database.",
    thumbnail: "../images/page3.png",
  },
  {
    link: "https://github.com/Diveshmahajan4/Project-Pilot",
    title: "Project Pilot ",
    pubDate: "",
    lang: "ReactJS GraphQL",
    content:
      "Project Pilot is a project management application fo freelancers where you can manage all your ongoing and add clients to each projects. ",
    thumbnail: "../images/page1.png",
  },
  {
    link: "https://github.com/Diveshmahajan4/CrazyQRs",
    title: "CrazyQRs",
    pubDate: "",
    lang: "ReactJs",
    content:
      "This project helps people to create different designs of QR code.",
    thumbnail: "../images/page5.png",
  },
  {
    link: "https://github.com/Diveshmahajan4/Scribbz-A-Note-Taking-App",
    title: "Scribbz-A-Note-Taking-App",
    pubDate: "",
    lang: "ReactJS",
    content: "This project helps you to take notes.",
    thumbnail: "../images/page2.png",
  },
  {
    link: "https://diveshmahajan.co/SneakerSquad/",
    title: "Sneaker Squad",
    pubDate: "",
    lang: "ReactJS",
    content: "Ecommerce Website for Buying Shoes",
    thumbnail: "../images/page4.png",
  },
];
let scalerArticles = [
  {
    link: "https://blog.diveshmahajan.tech/create-your-first-pull-request",
    title: "Create Your First Pull Request",
    pubDate: "July 30, 2023",
    content: "Make your first Open Source Contribution with opening a PR",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1690738593925/d4ce004f-47cc-4fbd-b5f5-9d04fb175624.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    link: "https://blog.diveshmahajan.tech/exploring-middleware-in-javascript",
    title: "Exploring Middleware in JavaScript",
    pubDate: "July 15, 2023",
    content:
      "A simple explanation of Middleware in JavaScript. Building Modular and Extensible Web Applications",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1689401455329/28494dc7-2bea-4458-b0f7-62bb27221fa8.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    link: "https://blog.diveshmahajan.tech/an-introduction-to-graphql-building-better-apis-with-graphql",
    title: "An Introduction to GraphQL: Building Better APIs with GraphQL",
    pubDate: "January 25, 2023",
    content: "A comprehensive guide on GraphQL and its Implementation",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1688760388159/dbfa9434-7a0f-42d3-825b-ea5bef82fc2f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    link: "https://www.scaler.com/topics/java/deque-in-java/",
    title: "Mastering HTTP Requests: Exploring Fetch API and Axios in Depth",
    pubDate: "June 21, 2023",
    content:
      "Java Deque is an interface of the collection framework that allows retrieval, addition, or removal of elements from either end.",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1687364257603/e0b6bf89-c1c8-4752-9578-c895f66db457.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    link: "https://blog.diveshmahajan.tech/callbacks-promises-and-asyncawait-in-javascript",
    title:
      "Introduction to Callbacks, Promises and Async/Await Functions in JavaScript",
    pubDate: "May 26, 2023",
    content:
      "This article explains callbacks, promises and async/await functions in javascript",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1685114174416/69babf6a-1893-482c-82d5-4caa634b2af4.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    link: "https://blog.diveshmahajan.tech/shell-scripting-made-easy",
    title: "Shell Scripting Made Easy",
    pubDate: "March 27, 2023",
    content: "A Beginner's Guide to Automating Tasks on Linux and Unix Systems",
    thumbnail:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1685018591360/497d5043-1e27-4d4c-89be-434339640c5b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  // // Just for symmetry
  // {
  //   link: "https://blog.diveshmahajan.tech/a-comprehensive-guide-to-string-stringbuilder-and-stringbuffer",
  //   title: "A Comprehensive Guide to String, StringBuilder and StringBuffer",
  //   pubDate: "March 9, 2023",
  //   content:
  //     "This article explains Strings, StringBuilder and StringBuffer in Java",
  //   thumbnail:
  //     "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/szrJ3wjzOMg/upload/4fc45be0e513e6fa37884dfc0bb0b19f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  // },
];

// Sorting Articles
scalerArticles.sort(function (a, b) {
  return new Date(b.date) - new Date(a.date);
});

// projectDetails.sort(function (a, b) {
//   return new Date(b.date) - new Date(a.date);
// });

// scalerArticles.reverse();

// Medium Article Function
const getArticleDOM = function (article) {
  const content = article.content
    .replace(/<\/?[^>]+>/gi, " ")
    .substring(0, 100);
  const articleLink = article.link.split("?")[0];
  const date = new Date(article.pubDate.replace(/-/g, "/"));

  const pubDate =
    article.pubDate.length > 0
      ? `${
          monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`
      : "";

  const imgTag =
    article.thumbnail.length > 0
      ? `<img src="${article.thumbnail}" alt="${article.title}" width="280" height=auto>`
      : "";

  return `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 blog box no-border no-padding">
                <a href="${articleLink}" target="_blank">
                    ${imgTag}
                    <div class="content">
                        <h5>${article.title}</h5>
                        <p class="pub-date">${pubDate}</p>
                        <p>${article.lang}</p>
                        <p class="description">${content}</p>
                    </div>
                </a>
            </div>`;
};

// const getArticles = function () {
//   const data = {
//     rss: "https://medium.com/feed/@ganeshkumarm1",
//   };

//   $.get(
//     "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ganeshkumarm1",
//     data,
//     function (response) {
//       mediumArticles = response.items;
//       mediumArticles = mediumArticles.slice(0, 3);

//       let articlesDOM = "";

//       for (const mediumArticle of mediumArticles) {
//         articlesDOM += getArticleDOM(mediumArticle);
//       }

//       $("#blogs div.blogs").prepend(articlesDOM);
//     }
//   );
// };

const renderScalerArticles = function () {
  let articleDOM = "";

  for (const scalerArticle of scalerArticles) {
    articleDOM += getArticleDOM(scalerArticle);
  }

  $("#blogs div.scaler-blogs").prepend(articleDOM);
};

const renderProjectDetails = function () {
  let projectDOM = "";

  for (const project of projectDetails) {
    projectDOM += getArticleDOM(project);
  }

  $("#projects div.project-details").prepend(projectDOM);
};

$(function () {
  $("body").tooltip({ selector: "[data-bs-toggle=tooltip]" });

  $(".dropdown-menu li a").on("click", function () {
    const text = $(this).text();
    const classname = text.substring(0, 2).toLowerCase();

    $("#dropdown-value").text(text);

    $("." + (classname === "en" ? "ta" : "en")).css("display", "none");
    $("." + classname).css("display", "inline-block");
  });

  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#menu",
  });

  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    $("#wrapper").toggleClass("toggled");
  }

  // getArticles();
  renderScalerArticles();
  renderProjectDetails();

  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut(300);
  });

  $("#menu-toggle").on("click", function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(".sidebar-heading").on("click", function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  $(".navbar-brand").on("click", function (e) {
    const id = this.href.split("#")[1];
    addNavBg("#" + id);
    $("#wrapper").toggleClass("toggled");
  });

  let curr = 0;

  $("body").on("keydown", function (e) {
    if (e.code === "ArrowDown") {
      curr += 1;
      if (curr >= ids.length) curr = ids.length - 1;
    } else if (e.code === "ArrowUp") {
      curr -= 1;
      if (curr < 0) curr = 0;
    } else if (e.code === "Escape") {
      $("#wrapper").toggleClass("toggled");
    }

    if (e.code === "ArrowDown" || e.code === "ArrowUp") {
      addNavBg(ids[curr]);
      $("html, body").animate(
        {
          scrollTop: $(ids[curr]).offset().top,
        },
        100,
        "easeOutBounce"
      );
    }
  });

  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      addNavBg(hash);

      $("body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        "swing",
        function () {
          window.location.hash = hash;
        }
      );

      $("#wrapper").toggleClass("toggled");
      $(hash + "-nav").addClass("active");
    }
  });

  window.addEventListener(
    "scroll",
    function (event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    },
    false
  );
});

const addNavBg = function (id) {
  if (id === "#home") {
    $(".navbar").removeClass("navbar-bg");
  } else {
    $(".navbar").addClass("navbar-bg");
  }
};

function scrollPage() {
  const sy = scrollY();
  if (sy >= changeHeaderOn) {
    $(".navbar").addClass("navbar-bg");
  } else {
    $(".navbar").removeClass("navbar-bg");
  }
  didScroll = false;
}

function scrollY() {
  return window.pageYOffset || document.documentElement.scrollTop;
}
