// ================ ORIGINAL SONG ARRAY ================
// const epicMix = [
//   "Bridge & Tunnel Authority",
//   "Was it the Acid",
//   "Heart Shaped Guitar",
//   "Olympia WA",
//   "Seeing Double at the Triple Rock",
//   "Double Arrows Down",
//   "Nightlife",
//   "Timebomb",
//   "Victoria",
//   "Electricity",
//   "Dammit",
//   "Dear Beer",
//   "Goodbye in Gasoline"
// ];

// ================ GLOBAL VARIABLES ================
// const mixList = document.querySelector(".mix");
// const button = document.querySelector(".show-list");
// const total = document.querySelector(".total");

// // ================ ORIGINAL FUNCTIONS ================
// button.addEventListener("click", function () {
//   mixList.classList.remove("hide");
//   button.classList.add("hide");
//   mixInfo(epicMix);
// });

// total.innerText = `${epicMix.length} awesome songs!`;

// const mixInfo = function (mix) {
//   mix.forEach(function (song, index) {
//     let li = document.createElement("li");
//     li.classList.add("song");
//     li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
//     mixList.append(li);
//   });
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ================ OBJECT BASED FUNCTIONS ================
// Factory function to create song objects
const createSong = function (name, artist){
  const song = {
    name: name,
    artist: artist,
  }
  // console.log(song);
  return song;
};

