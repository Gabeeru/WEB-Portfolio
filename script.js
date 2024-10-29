        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname) {
            for(tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
    
        
        // Function to update the greeting based on the time of day
        function updateGreeting() {
            const now = new Date();
            const hours = now.getHours(); // kuhaon ang karon na oras
            const greetingElement = document.getElementById("greeting");

            let greeting = "";

            if (hours < 12) {
                greeting = "Good Morning!"; // Morning 
            } else if (hours >= 12 && hours < 18) {
                greeting = "Good Afternoon!"; // Afternoon 
            } else {
                greeting = "Good Evening!"; // Evening 
            }

            // Set the greeting text
            greetingElement.textContent = greeting;
        }

        
        updateGreeting();
    

        var sidemen = document.getElementById("sidemenu");

        function openmenu(){
            sidemen.style.right = "0"
        }    
        function closemenu(){
            sidemen.style.right = "-200px"
        }


        const songs = [
            {
                title: "Balang Araw - I Belong to the Zoo",
                src: "balangaraw.mp3",
                albumArt: "m1.png"
            },
            {
                title: "IF AND/OR WHEN - Ruel",
                src: "ifandorwhen.mp3",
                albumArt: "m2.png"
            },
            {
                title: "In The Stars - Benson Boone",
                src: "inthestars.mp3",
                albumArt: "m3.png"
            }
        ];
        
        let currentSongIndex = 0;
        const audioPlayer = document.getElementById('audio-player');
        const audioSource = document.getElementById('audio-source');
        const songTitle = document.getElementById('song-title');
        const albumArt = document.getElementById('album-art');
        
        function loadSong(songIndex) {
            const song = songs[songIndex];
            songTitle.textContent = song.title;
            audioSource.src = song.src;
            albumArt.src = song.albumArt;
            audioPlayer.load(); // Reload the audio element to reflect new source
        }
        
        document.getElementById('next-song').addEventListener('click', () => {
            currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop to first song
            loadSong(currentSongIndex);
            audioPlayer.play(); // Autoplay next song
        });
        
        document.getElementById('prev-song').addEventListener('click', () => {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song
            loadSong(currentSongIndex);
            audioPlayer.play();
        });
        
        // Initial load
        loadSong(currentSongIndex);

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link")

const observerOptions = {
    threshold: 0.75,
}

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
      if (entry.isIntersecting) {
        const data = entry.target.getAttribute("id")
        links.forEach((link)=> {
            if (link.getAttribute("id") == `${data}-link`) {
                link.classList.add("active")       
            }   
            else  {
                link.classList.remove("active")
            }
        })
      }
    })
}, observerOptions)

sections.forEach((section)=> {
    observer.observe(section)
})
        