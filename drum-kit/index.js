(() => {
  const appContainer = document.getElementById("app");
  let keysContainer;
  const data = [
    {
      key: "a",
      title: "boom",
      audioUrl: "sounds/boom.wav",
    },
    {
      key: "s",
      title: "clap",
      audioUrl: "sounds/clap.wav",
    },
    {
      key: "d",
      title: "hihat",
      audioUrl: "sounds/hihat.wav",
    },
    {
      key: "f",
      title: "kick",
      audioUrl: "sounds/kick.wav",
    },
    {
      key: "g",
      title: "openhat",
      audioUrl: "sounds/openhat.wav",
    },
    {
      key: "h",
      title: "ride",
      audioUrl: "sounds/ride.wav",
    },
    {
      key: "j",
      title: "snare",
      audioUrl: "sounds/snare.wav",
    },
    {
      key: "k",
      title: "tink",
      audioUrl: "sounds/tink.wav",
    },
    {
      key: "l",
      title: "tom",
      audioUrl: "sounds/tom.wav",
    },
  ];

  const supportedKeys = new Set(data.map((keyObj) => keyObj.key.toLowerCase()));

  function createKeys() {
    keysContainer = document.createElement("div");
    keysContainer.classList.add("keys");

    data.map((keyObj) => {
      const container = document.createElement("div");
      const keyElement = document.createElement("kbd");
      const titleElement = document.createElement("span");

      container.dataset.key = keyObj.key;
      container.classList.add("key-container");

      keyElement.textContent = keyObj.key;
      titleElement.textContent = keyObj.title;
      titleElement.classList.add("title");

      container.append(keyElement, titleElement);
      keysContainer.append(container);
    });

    appContainer.append(keysContainer);
  }

  document.addEventListener("keyup", (e) => {
    if (!supportedKeys.has(e.key)) return;
    const keyContainer = document.querySelector(`[data-key=${e.key}]`);
    keyContainer.classList.add("playing");

    const audio = new Audio(
      data.find((keyObj) => keyObj.key === e.key).audioUrl
    );
    audio.addEventListener("ended", () =>
      keyContainer.classList.remove("playing")
    );
    audio.play();
  });

  createKeys();
})();
