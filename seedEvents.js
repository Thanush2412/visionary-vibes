const mongoose = require('mongoose');
const Event = require('./MongoDB/eventSchema');

// Connect to MongoDB
mongoose.connect('mongodb+srv://visionaryvibes2026:visionaryvibes2026@cluster0.qqvrp6f.mongodb.net/symposium?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("MongoDB Connected");
        seedEvents();
    })
    .catch(err => console.error(err));

const events = [
    {
        eventId: 'finova',
        title: 'FINOVA - Advanced Finance',
        tagline: 'Innovation Ignited',
        description: "FINOVA is a solo event designed to test participants' knowledge of modern finance and financial technology using Excel. The event consists of three levels: a quiz round, a finance-in-Excel practical round, and a formatting and formulas round. It focuses on analytical skills, technical accuracy, and effective use of Excel tools.",
        venue: 'GJ BLOCK - Hall No:129',
        time: '11:00 AM - 12:00 PM',
        rules: [
            "This is a solo event; team participation is not allowed.",
            "The event consists of multiple progressive levels with on-the-spot problem statements at each stage.",
            "Professional conduct and discipline must be maintained throughout the event; use of unfair means is strictly prohibited.",
            "Advancement to the next level depends solely on the participant's understanding and effective presentation.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited.",
            "Decisions made by the judges will be final.",
            "Participants must adhere to the given time limits for each round.",
            "Any form of malpractice or misconduct will lead to immediate disqualification."
        ],
        teamSize: 1,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/finova.png',
        registrationLink: '../Registration/Finovaregistration.html'
    },
    {
        eventId: 'visionvault',
        title: 'Vision Vault - Paper Presentation Event',
        tagline: 'Present your Vision',
        description: "Vision Vault is a paper presentation event that provides a platform for participants to showcase innovative ideas, emerging technologies, and insightful research. Participants are required to submit their abstract before the specified deadline January 31, 2026. Only selected abstracts will be approved for presentation. The paper must be prepared in IEEE format and should not exceed seven pages. Each team will be allotted five minutes for the presentation. This will be followed by a two-minute question-and-answer.",
        venue: 'GJ block - Hall No:147',
        time: '10:30 AM - 11:30 AM',
        rules: [
            "The paper must be prepared in IEEE format or standard format.",
            "Each team should consist of 2 members.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited.",
            "Decisions made by the judges will be final.",
            "Participants must adhere to the given time limits for each round.",
            "Any form of malpractice or misconduct will lead to immediate disqualification."
        ],
        topics: [
            "Internet of things and smart homes.",
            "Data security and privacy.",
            "Technology for environmental protection.",
            "Cloud Computing- Future of data storage",
            "Data analytics in business intelligent"
        ],
        teamSize: 2,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/vision%20vault.png',
        registrationLink: '../Registration/Visionvaultregistration.html'
    },
    {
        eventId: 'adzap',
        title: 'FlyerNova - The Adzap Show',
        tagline: 'idea makes unite',
        description: "FlyerNova is an inter-collegiate advertising event where teams showcase their creativity through original advertisement videos. Participating colleges must submit their ad clip to the official event email ID provided by the organizers. Participating colleges must submit their video clip before the specified deadline February 1, 2026. Submitted entries will be reviewed, and selected teams will be shortlisted for the event.",
        venue: 'Auditorium',
        time: '2:00 PM - 3:00 PM',
        rules: [
            "Each team may consist of a 6 members.",
            "Participants must be students of the college/university, and only one team per college is allowed.",
            "No rude, disrespectful, or inappropriate content is allowed.",
            "Pre-recorded videos or audio are allowed only if informed in advance.",
            "Copying ideas from existing ads is not allowed; all content must be original.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card for a proof.",
            "Decisions made by the event coordinators and judges will be final.",
            "Each team must submit a video clip with a maximum duration of 5–7 minutes.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited."
        ],
        teamSize: 6,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/ADZAPphoto.png',
        registrationLink: '../Registration/adzapregistration.html'
    },
    {
        eventId: 'anchoring',
        title: 'READY SET HOST - Anchoring',
        tagline: 'idea makes unite',
        description: "Ready Set Host is a solo hosting competition designed to assess communication skills, confidence, and stage presence. The event includes a preliminary round, which may be conducted based on participant count, followed by an on-the-spot final round where selected participants receive a topic, get 15 minutes to prepare, and perform for 3–5 minutes in English. Professional conduct is mandatory, and the judges' decision is final.",
        venue: 'Auditorium',
        time: '12:00 PM - 1:00 PM',
        rules: [
            "This is a solo event; a preliminary round may be held depending on the number of participants.",
            "Participants must be students of the college/university, and only one team per college is allowed.",
            "Topics/scenarios will be provided at the venue. You will have 15 minutes to prepare and 3-5 minutes to perform on the stage.",
            "Performance must be in English only. Maintain professional decorum; any vulgarity or offensive remarks will lead to disqualification.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card for proof.",
            "Please report 15 minutes early. Decisions made by the event coordinators and judges will be final.",
            "Use of mobile phones or writing notes during the event is strictly prohibited."
        ],
        teamSize: 1,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/anchoringimg.png',
        registrationLink: '../Registration/anchoringregistration.html'
    },
    {
        eventId: 'brainx',
        title: 'BrainX - Technical Quiz Show',
        tagline: 'Test your Brain',
        description: "The Tech Quiz will consist of three rounds designed to test participants' technical knowledge, logical thinking, and problem-solving skills. Teams will compete in a preliminary round, from which six teams will qualify for the second round. The second round will be conducted in a one-on-one format, and three teams will advance to the final (Mains). The winner and runner-up will be selected from the top three teams, and the decisions of the quiz master and coordinators will be final.",
        venue: 'GJ block - Seminar hall',
        time: '10:30 AM - 11:30 AM',
        rules: [
            "Each team should consist of 2 members.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited.",
            "Decisions made by the event coordinators and judges will be final.",
            "Participants must adhere to the given time limits for each round.",
            "Any form of malpractice or misconduct will lead to immediate disqualification."
        ],
        teamSize: 2,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/Quiz%20logo.png',
        registrationLink: '../Registration/brainXregistration.html'
    },
    {
        eventId: 'bugblitz',
        title: 'BUG BLITZ – Debugging Event',
        tagline: 'Debug your way to glory',
        description: "Bug Blitz is a fast-paced technical competition designed to test participants' problem-solving and debugging skills. The event features three progressive rounds: Round 1 – Prelims, a written screening round; Round 2 – The Glitch Hunt, focused on analyzing and identifying issues in given code; and Round 3 – Runtime Rumble, an intensive final round involving hands-on coding and debugging. The competition emphasizes accuracy, logical thinking, and speed, offering an exciting challenge for participants who thrive under pressure.",
        venue: 'GJ block - Hall no:148',
        time: '10:30 AM - 12:00 PM',
        rules: [
            "Language: C, C++, Python",
            "The event includes a preliminary round, which may be conducted based on participant count, followed by an on-the-spot final round.",
            "Each team may consist of a maximum of 2 members.",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited.",
            "Decisions made by the event coordinators and judges will be final.",
            "Participants must adhere to the given time limits for each round.",
            "Any form of malpractice or misconduct will lead to immediate disqualification.",
            "Rules are subject to change at the discretion of the organizing committee."
        ],
        teamSize: 2,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/debuglogo.png',
        registrationLink: '../Registration/bugblitzregistration.html'
    },
    {
        eventId: 'corpvista',
        title: 'CORP VISTA – Corporate Walk Competition',
        tagline: 'Walk the talk',
        description: "CorpVista is an inter-collegiate event designed to showcase professionalism, teamwork, and performance. Each college is represented by a team of six students, with registration being mandatory for participation. The event culminates in the CorpVista Walk, hosted on campus, where teams engage directly with corporate representatives and demonstrate their ability to perform under professional standards. Participants are expected to follow organizer instructions throughout the event. Winners will be selected based on overall performance, with the judges' decision being final. To reflect the spirit of professionalism, all participants must adhere to a business casual dress code.",
        venue: 'Auditorium',
        time: '10:30 AM - 12:00 PM',
        rules: [
            "Each college must be represented by a team of six students, and online registration is mandatory for participation",
            "All teams are required to attend the CorpVista Walk at the host campus, where they will engage with corporate representatives, follow the instructions of the organizers, and maintain professionalism throughout the event.",
            "Winners will be selected based on performance, and the judges' decision will be final and binding.",
            "To uphold the spirit of the event, all participants must adhere to the business casual dress code",
            "All participants must be present at the venue at least 10 minutes before the scheduled time.",
            "Participants must carry a valid college ID card.",
            "Use of mobile phones or external electronic devices during the event is strictly prohibited.",
            "Decisions made by the event coordinators and judges will be final.",
            "Participants must adhere to the given time limits for each round.",
            "Rules are subject to change at the discretion of the organizing committee."
        ],
        teamSize: 6,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/cropvista.png',
        registrationLink: '../Registration/cropvistaregister.html'
    },
    {
        eventId: 'crucible',
        title: 'The Crucible',
        tagline: 'Managerial Challenge',
        description: "The Crucible is the event to think smart and lead bold unfolds through multiple elimination rounds designed to identify true managerial talent. The journey begins with an Aptitude Test, where logical thinking meets leadership insight. This is followed by mystery rounds that challenge participants to showcase their creativity, communication skills, and innovative thinking. Each stage is crafted to push boundaries and reward original ideas, keeping participants on their toes with unexpected twists. The event concludes with a Stress Interview, where decision-making under pressure reveals the qualities of an exceptional manager.",
        venue: 'GJ Block - Hall No:128 & Auditorium',
        time: '10:30 AM - 1:10 PM & 2:00 PM - 3:00 PM',
        rules: [
            "One should participate in the event individually.",
            "Participants must report on time and follow the schedule.",
            "ID card is mandatory for all participants.",
            "Professional attire is mandatory.",
            "Any form of malpractice or indiscipline will lead to disqualification.",
            "The judges' decisions will be final and binding.",
            "Participants must adhere to the given time limits for each round.",
            "Rules are subject to change at the discretion of the organizing committee."
        ],
        teamSize: 1,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/crucible.png',
        registrationLink: '../Registration/crucibleregistration.html'
    },
    {
        eventId: 'makeitweb',
        title: 'MakeIt Web',
        tagline: 'Web Designing Competition',
        description: "MakeIt Web is an inter-collegiate web designing competition where participants showcase their creativity and technical skills by designing a website based on a given theme. The competition is open to individual participants only (one member per team). The topic will be provided at the start of the event, and designs must be created within the given time using permitted tools and technologies. Entries will be evaluated based on creativity, layout, functionality, and overall presentation.",
        venue: 'GJ BLOCK - Hall no:147',
        time: '12:00 PM - 1:00 PM',
        rules: [
            "This is a solo event, and the topic will be given on the spot.",
            "Only registered participants are eligible to compete.",
            "Participants must report on time and follow the schedule.",
            "ID card is mandatory for all participants.",
            "Participants must use only HTML, CSS, and JavaScript with Notepad.",
            "Internet access, mobile phones, smart devices, and personal laptops are strictly prohibited.",
            "Laptops and required resources will be provided by the organizers.",
            "Only organizer-provided tools and resources may be used.",
            "Any form of malpractice will result in immediate disqualification.",
            "Late submissions will not be accepted.",
            "The judges' decision will be final and binding."
        ],
        teamSize: 1,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/makeitweblogo.png',
        registrationLink: '../Registration/makeitwebregistration.html'
    },
    {
        eventId: 'thinkthrust',
        title: 'Think Thrust',
        tagline: 'Aptitude Event',
        description: "The Aptitude Event is a multi-round competitive challenge designed to test participants' logical reasoning, analytical ability, and teamwork. The event begins with a preliminary round focused on individual aptitude skills through a written assessment. Qualified teams advance to an interactive second round that combines quick thinking with coordination, where team members perform specific roles while answering questions under pressure. The final round is a main evaluation stage conducted in an online format, emphasizing structured problem-solving, concept clarity, and logical approach. Each round is designed to progressively challenge participants and identify teams with strong aptitude skills and effective collaboration.",
        venue: 'GJ BLOCK - Mini Seminar Hall',
        time: '10:30 AM - 1:00 PM',
        rules: [
            "Only 3 members per team allowed.",
            "Participants must report on time and follow the schedule.",
            "ID card is mandatory for all participants.",
            "Internet access, mobile phones, smart devices, and personal laptops are strictly prohibited.",
            "Laptops and required resources will be provided by the organizers.",
            "Only organizer-provided tools and resources may be used.",
            "Participants must collaborate according to assigned roles during team rounds.",
            "Any form of malpractice will result in immediate disqualification.",
            "Late submissions or incomplete participation will not be accepted.",
            "The judges' decision will be final and binding."
        ],
        teamSize: 3,
        image: 'https://rhczyqnsapgdhftedazf.supabase.co/storage/v1/object/public/pictures/thinkthrustlogo.png',
        registrationLink: '../Registration/thinkthrustregistration.html'
    }
];

async function seedEvents() {
    try {
        await Event.deleteMany({}); // Clear existing events
        await Event.insertMany(events);
        console.log("Events Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding events:", error);
        process.exit(1);
    }
}
