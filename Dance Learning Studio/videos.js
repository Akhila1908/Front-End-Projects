<script>
  const classes = [
    // Beginner
    { title: "Tic Tac Toe Skip", level: "Beginner", duration: "5 min", type: "Moves", tags: ["Hip Hop", "Mr. YouTube", "Free Class"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID1" },
    { title: "Twist and Wop", level: "Beginner", duration: "3 min", type: "Moves", tags: ["Hip Hop", "Free Class"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID2" },
    { title: "Kiss of Death", level: "Beginner", duration: "6 min", type: "Moves", tags: ["Hip Hop", "Moves"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID3" },
    { title: "Swiss Bop", level: "Beginner", duration: "4 min", type: "Moves", tags: ["Hip Hop"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID4" },

    // Intermediate
    { title: "FL Litefeet Anthem", level: "Intermediate", duration: "12 min", type: "Choreography", tags: ["Hip Hop", "Beat Luck"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID5" },
    { title: "Day 10: Performance", level: "Intermediate", duration: "12 min", type: "Choreography", tags: ["Hip Hop", "Saucha Stretch"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID6" },
    { title: "Day 9: Signature", level: "Intermediate", duration: "10 min", type: "Technique", tags: ["Fundamentals"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID7" },
    { title: "Day 8: Vocabulary", level: "Intermediate", duration: "10 min", type: "Technique", tags: ["Fundamentals"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID8" },

    // Advanced
    { title: "Battle Prep", level: "Advanced", duration: "15 min", type: "Moves", tags: ["Advanced", "Challenge"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID9" },
    { title: "Groove Combo Pro", level: "Advanced", duration: "13 min", type: "Choreography", tags: ["Advanced"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID10" },
    { title: "Elite Drill", level: "Advanced", duration: "14 min", type: "Technique", tags: ["Hip Hop", "Footwork"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID11" },
    { title: "Precision Moves", level: "Advanced", duration: "11 min", type: "Moves", tags: ["Hip Hop"], videoUrl: "https://www.youtube.com/embed/VIDEO_ID12" }
  ];

  function renderLevel(levelId, levelName) {
    const container = document.getElementById(levelId);
    const filtered = classes.filter(c => c.level === levelName);
    filtered.forEach((c, i) => {
      const id = ${levelId}-menu-${i};
      container.innerHTML += `
        <div class="card">
          <iframe src="${c.videoUrl}" allowfullscreen></iframe>
          <button class="menu-button" onclick="toggleMenu('${id}')">&#8942;</button>
          <div class="menu" id="${id}">
            <div>▶ Preview Class</div>
            <div>⤴ Share Class</div>
            <div>Go to Style</div>
            <div>Go to Level</div>
            <div>Go to Instructor</div>
          </div>
          <div class="card-content">
            <div class="tags-bar">
              <span class="badge level">${c.level}</span>
              <span class="badge">${c.duration}</span>
              <span class="badge ${c.type.toLowerCase()}">${c.type}</span>
            </div>
            <h3>${c.title}</h3>
            <div class="description">${c.tags.join(" • ")}</div>
          </div>
        </div>
      `;
    });
  }

  function toggleMenu(id) {
    document.querySelectorAll('.menu').forEach(m => {
      if (m.id === id) m.classList.toggle("show");
      else m.classList.remove("show");
    });
  }

  document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("menu-button")) {
      document.querySelectorAll('.menu').forEach(m => m.classList.remove("show"));
    }
  });

  renderLevel("beginner", "Beginner");
  renderLevel("intermediate", "Intermediate");
  renderLevel("advanced", "Advanced");
</script>
