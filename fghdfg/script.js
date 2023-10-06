document.addEventListener("DOMContentLoaded", function () {
    // Reference to the video list container
    const videoList = document.querySelector(".video-list");

    // List of video data files
    const videoDataFiles = [
        "data/video1.json",
        "data/video2.json",
        // Add more video data files here
    ];

    // Function to load video data from a JSON file
    async function loadVideoData(videoDataFile) {
        try {
            const response = await fetch(videoDataFile);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error loading video data:", error);
        }
    }

    // Function to create video thumbnails
    function createVideoThumbnail(videoData) {
        const videoThumbnail = document.createElement("div");
        videoThumbnail.classList.add("video-thumbnail");

        const videoTitle = document.createElement("h2");
        videoTitle.textContent = videoData.title;

        const videoElement = document.createElement("video");
        videoElement.src = videoData.videoFile;
        videoElement.controls = true;

        videoThumbnail.appendChild(videoTitle);
        videoThumbnail.appendChild(videoElement);

        return videoThumbnail;
    }

    // Load and display video data
    videoDataFiles.forEach(async (videoDataFile) => {
        const videoData = await loadVideoData(videoDataFile);
        if (videoData) {
            const videoThumbnail = createVideoThumbnail(videoData);
            videoList.appendChild(videoThumbnail);
        }
    });
});
