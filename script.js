//your JS code here. If required.
// Data for the articles (title, image, paragraph-start)
const articles = [
  {
    title: "Brute Force vs. Optimization",
    img: "https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDI2fHxvcHRpbWl6YXRpb258ZW58MHx8fHwxNjcxMDAyOTIz&ixlib=rb-4.0.3&q=80&w=2000",
    paraStart: "We can say that optimization is",
    link: "#brute-force-vs-optimization"
  },
  {
    title: "DSA vs. Competitive Programming",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQxfHxjb21wZXRpdHZlJTIwcHJvZ3JhbW1pbmd8ZW58MHx8fHwxNjcwOTk4ODU0&ixlib=rb-4.0.3&q=80&w=2000",
    paraStart: "DSA or Competitive programming?",
    link: "#dsa-vs-competitive-programming"
  },
  {
    title: "Complete Guide on FlexBox",
    img: "https://acciojob.com/blog/content/images/size/w2000/2023/02/Screenshot-2023-02-06-at-7.28.31-PM.png",
    paraStart: "As a job seeker, you may wonder",
    link: "#complete-guide-flexbox"
  }
];

// Create a container for the page
const app = document.createElement("div");
app.id = "js-generated-page";
app.style.fontFamily = "Arial, Helvetica, sans-serif";
app.style.lineHeight = "1.6";
app.style.maxWidth = "980px";
app.style.margin = "20px auto";
app.style.padding = "0 16px";

// 1) Marquee header with H1
const marquee = document.createElement("marquee"); // simple marquee element (deprecated but requested)
marquee.setAttribute("behavior", "scroll");
marquee.setAttribute("direction", "left");
const marqueeH1 = document.createElement("h1");
marqueeH1.textContent = "Welcome to Accio Jobs!";
marqueeH1.style.margin = "8px 0";
marquee.appendChild(marqueeH1);
app.appendChild(marquee);

// 2) Blog Link with an H1 heading
const blogAnchor = document.createElement("a");
blogAnchor.href = "https://acciojob.com/blog";
blogAnchor.target = "_blank";
blogAnchor.rel = "noopener noreferrer";
const blogH1 = document.createElement("h1");
blogH1.textContent = "Blog";
blogH1.style.cursor = "pointer";
blogH1.style.marginTop = "12px";
blogH1.style.marginBottom = "18px";
blogAnchor.appendChild(blogH1);
app.appendChild(blogAnchor);

// 3) Articles list
const articlesContainer = document.createElement("section");
articlesContainer.id = "articles";
articlesContainer.style.display = "grid";
articlesContainer.style.gap = "24px";

// Build each article using only JS DOM APIs
articles.forEach((a) => {
  const articleEl = document.createElement("article");
  articleEl.style.border = "1px solid #e0e0e0";
  articleEl.style.padding = "12px";
  articleEl.style.borderRadius = "8px";
  articleEl.style.boxShadow = "0 2px 6px rgba(0,0,0,0.03)";
  articleEl.style.background = "#fff";

  // Image
  const img = document.createElement("img");
  img.src = a.img;
  img.alt = a.title + " image";
  img.style.height = "200px";    // requested height
  img.style.width = "100%";
  img.style.objectFit = "cover";
  img.style.borderRadius = "6px";
  articleEl.appendChild(img);

  // Link (title) — using an anchor that wraps an h2 (clickable)
  const titleLink = document.createElement("a");
  titleLink.href = a.link;
  titleLink.style.textDecoration = "none";
  titleLink.style.color = "inherit";
  titleLink.style.display = "inline-block";
  titleLink.style.marginTop = "10px";

  const titleH2 = document.createElement("h2");
  titleH2.textContent = a.title;
  titleH2.style.margin = "8px 0";
  titleH2.style.fontSize = "1.25rem";
  titleH2.style.color = "#0b5fff";
  titleLink.appendChild(titleH2);
  articleEl.appendChild(titleLink);

  // Paragraph that starts with the requested text
  const p = document.createElement("p");
  // include the start exactly and then some example continuation
  if (a.title === "Brute Force vs. Optimization") {
    p.textContent = a.paraStart + " the practice of improving algorithm efficiency by reducing time or space complexity. In contrast, brute force tries every possibility until it finds a solution. Optimization helps make code scalable.";
  } else if (a.title === "DSA vs. Competitive Programming") {
    p.textContent = a.paraStart + " which one should you focus on depends on your goals — interview readiness or contest speed. Both overlap, but each emphasizes different skills and workflows.";
  } else {
    p.textContent = a.paraStart + " here's a concise walkthrough of Flexbox essentials to help you build responsive layouts quickly and effectively.";
  }
  p.style.marginTop = "6px";
  articleEl.appendChild(p);

  articlesContainer.appendChild(articleEl);
});

app.appendChild(articlesContainer);

// Finally append everything to body
document.body.appendChild(app);

