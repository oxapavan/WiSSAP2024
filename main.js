$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav-bar').css('background', '#0f1726');
    } else {
        $('.main_nav-bar').css('background', 'transparent');
    }
});
// NAVBAR ACTIVE LINK SWICTHING
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SCH").addEventListener("click", function () {
    document.getElementById("SCH").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPK").addEventListener("click", function () {
    document.getElementById("SPK").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("PRC").addEventListener("click", function () {
    document.getElementById("PRC").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPN").addEventListener("click", function () {
    document.getElementById("SPN").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
$('.custom-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

const scheduleData = {
    day1: {
        date: "DECEMBER 9, 2024 (Monday) | Tutorial",
        events: [
            {
                time: "9:00 a.m - 10:30 a.m",
                title: "Tutorial 1 (Part 1) - Advances in Deep Learning Models",
                speaker: "<strong>C. Chandra Sekhar</strong> <br>SVL Lab and SMV Lab <br>Department of Computer Science and Engineering <br>Indian Institute pf Technology (IIT) Madras, Chennai, India",
                venue: "Peacock Hall",
                description: "Will be updated soon"
            },
            {
                time: "10:30 a.m - 11:00 a.m",
                title: "TEA BREAK",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "11:00 a.m - 12:30 p.m",
                title: "Tutorial 1 (Part 2) - Advances in Deep Learning Models",
                speaker: "<strong>C. Chandra Sekhar</strong> <br>SVL Lab and SMV Lab <br>Department of Computer Science and Engineering <br>Indian Institute pf Technology (IIT) Madras, Chennai, India",
                venue: "Peacock Hall",
                description: "Will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:30 p.m",
                title: "Tutorial 2 (Part 1) - Large Language Models",
                speaker: "<strong>Name </strong> <br> <br> Amrita University<br>",
                venue: "Peacock Hall",
                description: "Will be updated soon"
            },
            {
                time: "03:30 p.m - 04:00 p.m",
                title: "Refreshment Break",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "04:00 p.m - 05:00 p.m",
                title: "Tutorial 2 (Part 2) - Large Language Models",
                speaker: "<strong>Name </strong> <br> <br> Amrita University<br>",
                venue: "Peacock Hall",
                description: "Will be updated soon"
            },
            // Add more events for Day 1 as needed
        ]
    },
    day2: {
        date: "DECEMBER 10, 2024 (Tuesday) | Automatic Speech Recognition",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Inaugural Function and Registration",
                speaker: "",
                venue: "Peacock Hall",
                description: "N/A"
            },
            {
                time: "10:00 a.m - 10:30 a.m",
                title: "Meet-and-Greet",
                speaker: "",
                venue: "Open Air Theater",
                description: "Snacks and beverages will be served"
            },
            {
                time: "10:30 a.m - 11:30 a.m",
                title: "Invited Talk 1",
                speaker: "<strong>S Umesh</strong> <br>SPRING Lab <br> Department of Electrical Engineering <br>Indian Institute of Technology (IIT) Madras, Chennai, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 2",
                speaker: "<strong>Sriram Ganapathy</strong> <br>Department of Electrical Engineering <br>Indian Institute of Science (IISc), Bangalore, Karnataka, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 3",
                speaker: "<strong>Hemant A Patil</strong> <br>Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT),",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "03:00 p.m - 03:30 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "03:30 p.m - 05:00 p.m",
                title: "Industry Perspective Talk 1",
                speaker: "<strong> Debamalya Chajrabarty </strong> <br>Senior Applied Scientirst, Amazon AGI, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "05:00 p.m - 06:30 p.m",
                title: "Knowledge Exchange Gathering",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            // Add more events for Day 2 as needed
        ]
    },

    day3: {
        date: "DECEMBER 11, 2024 (Wednesday) | Speech Synthesis",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk 4",
                speaker: "<strong>Hema A Murty</strong> <br>Speech, Music and Vision Lab <br>Department of Computer Science and Engineering <br>Indian Institute of Technology (IIT) Madras, Chennai, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Invited Talk 5",
                speaker: "<strong>Nagarajan</strong> <br>Computer Science and Engineering <br>Shiv Nadar University, Chennai, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 6",
                speaker: "<strong>Pranaw Kumar</strong> <br>Scientist 'E' at CDAC Mumbai, Maharashtra, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 7",
                speaker: "<strong>P Vijayalakshmi</strong> <br>Department of Electronics and Communication Engineering <br> Sri Sivasubramaniya Nadar (SSN) College of Engineering, Kalavakkam, Tamil Nadu, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "03:00 p.m - 03:30 p.m",
                title: "Snack Interval",
                speaker: "",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "03:30 p.m - 05:00 p.m",
                title: "Industry Perspective Talk 2",
                speaker: "<strong> Vikram C M </strong> <br>Senior Chief Enginner <br> Samsunf R&D Institute, Bangalore, Karnataka, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "05:00 p.m - 06:30 p.m",
                title: "Poster Presentation by Research Scholars",
                speaker: "",
                venue: "SAC Hall",
                description: "Details will be updated soon"
            },
            {
                time: "06:00 p.m onwards",
                title: "Ideas & Appetites",
                speaker: "",
                venue: "Vijayawada Club",
                description: "Enjoy the journey. Chat with other bright minds, share your thoughts, and enjoy a delicious meal. It's the perfect recipe for making new connections!"
            },
            // Add more events for Day 3 as needed
        ]
    },

    day4: {
        date: "DECEMBER 12, 2024 (Thursday) | Healthcare",
        events: [
            {
                time: "9:00 a.m - 10:00 a.m",
                title: "Invited Talk 8",
                speaker: "<strong>Priyankoo Sarmah</strong> <br>Department of Humanities and Social Sciences<br>Centre for Linguistic Science and Technology  <br>Indian Institute of Technology Guwahati, Assam, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "10:00 a.m - 11:00 a.m",
                title: "Invited Talk 9",
                speaker: "<strong>Dileep A D</strong> <br>Department of Computer Science and Engineering<br>Indian Institute of Technology,  Dharwad, Karnataka, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "11:00 a.m - 11:30 a.m",
                title: "Mingling Moment",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "11:30 a.m - 12:30 p.m",
                title: "Invited Talk 10",
                speaker: "<strong>K Sri Rama Murthy</strong> <br>Department of Electrical Engineering <br> Indian Institute of Information Technology, Hyedrabad, Telengana, India ",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "12:30 p.m - 02:00 p.m",
                title: "Lunch Break",
                speaker: "",
                venue: "Dining Hall",
                description: "N/A"
            },
            {
                time: "02:00 p.m - 03:00 p.m",
                title: "Invited Talk 11",
                speaker: "<strong>Rakesh U</strong> <br>Department  of  General Medicine <br> AIIMS Mangalagiri, Andhra Pradesh, India",
                venue: "Peacock Hall",
                description: "Details will be updated soon"
            },
            {
                time: "03:00 p.m - 04:00 p.m",
                title: "Industry Perspective Talk 3",
                speaker: "<strong>Sreeram Ganji</strong>  <br>Senior Data Scientist <br> Relience Jio AICoE, Hyderabad, Telengana, India",
                venue: "Open Air Theater",
                description: "N/A"
            },
            {
                time: "04:00 p.m - 04:30 p.m",
                title: "Informal Exchange",
                speaker: "",
                venue: "Open Air Theater",
                description: "Meet and greet with the speakers and other participants. Snacks and beverages will be served."
            },
            {
                time: "04:30 p.m - 05:30 p.m",
                title: "Veledictory Function",
                speaker: "",
                venue: "Peacock Hall",
                description: "N/A"
            },
            // Add more events for Day 4 as needed
        ]
    },
};

function generateSchedule(day) {
    const dayData = scheduleData[`day${day}`];
    
    // Update date
    document.getElementById("sch_date").innerHTML = dayData.date;
    
    // Clear existing content
    const scheduleBlock = document.getElementById("schedule_block");
    scheduleBlock.innerHTML = `
        <div class="schedule_item_heading mb-5 wow animated flipInX" data-wow-duration="1s" data-wow-delay="0.2s">
            <h3 class="text-center" id="sch_date">${dayData.date}</h3>
        </div>
    `;
    
    // Generate accordion items
    dayData.events.forEach((event, index) => {
        const accordionItem = `
            <div class="row w-75 mx-auto g-0 custom-acc-row wow animated fadeInLeft" data-wow-duration="1s"
                data-wow-delay="${0 + index * 0.05}s">
                <div class="col-md-12 w-100">
                    <div class="accordion" id="accordion_${index + 1}">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index + 1}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index + 1}" aria-expanded="true" aria-controls="collapse${index + 1}"
                                    style="display: inline-block!important;">
                                    <div class="row gx-5">
                                        <div class="col-md-3">
                                            <div class="accordion-item-heading" style="padding:15px 0px;">
                                                <h4>${event.time}</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="accordion-title" style="padding:15px 0px;">
                                                <span id="acc-title-${index * 2 + 1}">${event.title}</span><br> <br>
                                                <span id="acc-title-${index * 2 + 2}">${event.speaker}</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapse${index + 1}" class="accordion-collapse collapse" aria-labelledby="heading${index + 1}"
                                data-bs-parent="#accordion_${index + 1}">
                                <div class="accordion-body">
                                    <div class="row gx-5">
                                        <div class="col-md-3">
                                            <div class="venue-title">
                                                <small class="text-muted">Venue: ${event.venue}</small>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="venue-desc">
                                                <p>${event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        scheduleBlock.innerHTML += accordionItem;
    });
}

// Event listeners for buttons
["btn-1", "btn-2", "btn-3", "btn-4"].forEach((btnId, index) => {
    document.getElementById(btnId).addEventListener("click", function () {
        // Remove active class from all buttons
        ["btn-1", "btn-2", "btn-3", "btn-4"].forEach(id => 
            document.getElementById(id).classList.remove("active_schedule_btn")
        );
        
        // Add active class to clicked button
        this.classList.add("active_schedule_btn");
        
        // Generate schedule for the selected day
        generateSchedule(index + 1);
    });
});

// Initialize with Day 1
generateSchedule(1);

// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 2000,
        bgColor: "rgb(27, 208, 126)",
        spinner: "spinner7"
    });
});
// $(function () {
//     $("html").niceScroll();
// });
// $("html").niceScroll({
//     cursorcolor: "#1bce7c", // change cursor color in hex
//     cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//     cursorborder: "1px solid #1bce7c", // css definition for cursor border
//     cursorborderradius: "6px", // border radius in pixel for cursor
//     scrollspeed: 35, // scrolling speed
//     mousescrollstep: 25, // scrolling speed with mouse wheel (pixel)
// });
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 20000);
});
$("#closebtn").click(function(){
    $('.modal-backdrop').remove();
});
$("#closebutton").click(function(){
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});