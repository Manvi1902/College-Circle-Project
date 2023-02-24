const links = [
    {
        syllabus : "https://drive.google.com/file/d/1ew3z26PsCEoaxSjYtyOXcdTV3y5Z3Ok0/view?usp=sharing",
        notes : "sem1notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/1u6sCTsdttFqy-l25z8uOu_6-kiofcnvS/view?usp=sharing",
        notes : "sem2notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/1KfbQ0FIV8nxFTXKJUGx4djPYEGpZMOmN/view?usp=sharing",
        notes : "sem3notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/12LSg7fx3I3ub62qZ98JlzOcAmt9Er8w6/view?usp=sharing",
        notes : "sem4notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/12LSg7fx3I3ub62qZ98JlzOcAmt9Er8w6/view?usp=sharing",
        notes : "sem5notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/1xiXRJBJHQcT_efC019edIyxXwokDK3hW/view?usp=sharing",
        notes : "sem6notes"
    },
    {
        syllabus : "https://drive.google.com/file/d/17ja08_gKHgPKYno_2hX83uWcBIwiSlin/view?usp=sharing",
        notes : "sem7notes"
    },
    {
        syllabus : "sem8syllabus",
        notes : "sem8notes"
    }
];

const goBtn = document.querySelector('#go-btn');
const semSelect = document.querySelector('#sem');
const infoScreen = document.querySelector('.info-screen')
const semScreen = document.querySelector('.sem');
const loadingScreen = document.querySelector('.loading-screen');
const sLink = document.querySelector('.syllabus-link');
const nLink = document.querySelector('.notes-link');
const imgItem = document.querySelector('.img-item');
const displayImg = document.querySelector('.a1');


goBtn.addEventListener('click', function () {
    setResourceLink(semSelect.selectedIndex);
});

function setResourceLink(semIndex) {
    loadingScreen.style.display = "flex";
    infoScreen.style.display = "none";
    displayImg.style.display = "none";
    imgItem.style.display = "none";
    semScreen.style.display = "none";

    const loaderEnd = setTimeout(function () {
        loadingScreen.style.display = "none";
        infoScreen.style.display = "none";
        displayImg.style.display = "none";
        imgItem.style.display = "none";
        semScreen.style.display = "flex";
    }, 1000);


    sLink.href = links[semIndex].syllabus;
    nLink.href = links[semIndex].notes;
}
